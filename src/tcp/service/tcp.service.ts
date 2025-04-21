import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Server, Socket } from 'net';
import { QueueService } from '../../queue/service/queue.service';
import { ParseService } from './parse.service';
import { PacketInfo } from '../interface/tcp.interface';
import { WhitelistService } from './whiteList.service';

@Injectable()
export class TcpService implements OnModuleInit, OnModuleDestroy {
  
  /** Servidor TCP que maneja las conexiones entrantes */
  private server: Server;
  /** Mapa que almacena las conexiones activas de los clientes, usando su ID como clave */
  private clients: Map<string, Socket> = new Map();
  /** Logger para registrar eventos del servicio TCP */
  private readonly logger = new Logger(TcpService.name);

  /**
   * Constructor del servicio TCP
   * @param queueService Servicio para manejar colas de mensajes
   * @param parseService Servicio para parsear datos GPS
   */
  constructor(private readonly queueService: QueueService, private readonly parseService: ParseService, private readonly whitelistService: WhitelistService) {
    this.server = new Server();
    this.parseService = new ParseService();
  }

  /**
   * Método del ciclo de vida que se ejecuta cuando el módulo se inicializa
   * Configura el servidor TCP llamando a setupServer()
   * @returns Promise que se resuelve cuando el servidor ha sido configurado correctamente
   */
  async onModuleInit() {
    this.setupServer();
  }

  /**
   * Método del ciclo de vida que se ejecuta cuando el módulo se está destruyendo
   * Cierra el servidor TCP y todas las conexiones activas de forma limpia
   * @returns Promise que se resuelve cuando el servidor ha sido cerrado correctamente
   */
  async onModuleDestroy() {
    await this.closeServer();
  }
  
  /**
   * Configura y establece el servidor TCP con sus manejadores de eventos
   * 
   * Establece los siguientes manejadores:
   * - connection: Maneja nuevas conexiones de clientes
   * - data: Procesa los datos recibidos de cada cliente
   *   - Valida el formato del paquete (longitud, header, footer, checksum)
   *   - Decodifica la pseudo IP y la información del paquete
   *   - Parsea los datos GPS y los envía a una cola de procesamiento
   * - error: Maneja errores de conexión y elimina el cliente
   * - close: Maneja el cierre de conexiones y elimina el cliente
   * 
   * El servidor escucha en el puerto especificado en la variable de entorno TCP_PORT
   * o en el puerto 81 por defecto
   */
  private setupServer() {
    this.server.on('connection', (socket: Socket) => {
      
      const clientId = `${socket.remoteAddress}:${socket.remotePort}`;
      this.logger.log(`Cliente conectado: ${clientId}`);
      this.clients.set(clientId, socket);

      socket.on('data', async (data: Buffer) => {
        try {
          
          // Imprimir datos de entrada en formato hexadecimal
          this.logger.log(`Datos recibidos (hex): ${data.toString('hex')}`);

          // validar longitud del paquete
          if (data.length < 6) {
            this.logger.warn(`Paquete inválido por longitud`);
            return;
          }

          // Verificar el header del paquete
          if (data[0] !== 0x24 || data[1] !== 0x24) {
            this.logger.warn(`Paquete inválido recibido de ${clientId}: Header incorrecto`);
            return;
          }

          // Verificar footer
          if (data[data.length - 1] !== 0x0D) {
            this.logger.warn(`Paquete inválido recibido de ${clientId}: Footer incorrecto`);
            return;
          }

          // Verificar checksum
          const calculatedChecksum = this.calculateXor(data.subarray(2, data.length - 2));
          if (calculatedChecksum !== data[data.length - 2]) {
            this.logger.warn(`Paquete inválido recibido de ${clientId}: Checksum incorrecto`);
            return;
          }

          // Decodificar la pseudoIP
          const pseudoIp = data.subarray(5, 9);
          const decodedPseudoIp = this.decodePseudoIp(pseudoIp);
          this.logger.log(`PseudoIP decodificada: ${decodedPseudoIp}`);
          // aca va la validacion de la pseudoIP por whitelist
          if (!this.whitelistService.isClientAllowed(decodedPseudoIp)) {
            this.logger.warn(`Cliente ${clientId} no permitido. PseudoIP: ${decodedPseudoIp}`);
            return;
          }

          // Decodificar el numero de SIM
          const sim = this.pseudoIpToSim(decodedPseudoIp);
          this.logger.log(`Sim decodificada: ${sim}`);

          // Decodificar la informacion del paquete
          const packetInfo = this.decodePacketInfo(data, clientId);

          // Log de depuración
          this.logger.log(`Paquete recibido de ${clientId}: ${JSON.stringify(packetInfo)}`);

          // Procesar los datos GPS
          const parsedData = this.parseService.parseGpsData(data, packetInfo, clientId, decodedPseudoIp, sim);
         
          // Agrega los datos a la cola
          const job = await this.queueService.addGpsData({
            parsedData
          }, 'gps');

          // Crear y enviar respuesta al dispositivo
          const response = this.createResponse(data);
          socket.write(response);
          this.logger.log(`Respuesta enviada al cliente ${clientId}: ${response.toString('hex')}`);

          this.logger.log(`Sim: ${this.pseudoIpToSim(decodedPseudoIp)}`);
          
          // Cerrar la conexión después de enviar la respuesta
          // socket.end();
          // this.logger.log(`Conexión cerrada con el cliente ${clientId}`);

        } catch (error) {
          this.logger.error(`Error procesando datos de ${clientId}: ${error.message}`, error.stack);
        }
      });

      socket.on('error', (error) => {
        this.logger.error(`Error en socket ${clientId}: ${error.message}`, error.stack);
        this.clients.delete(clientId);
      });

      socket.on('close', () => {
        this.logger.log(`Cliente desconectado: ${clientId}`);
        this.clients.delete(clientId);
      });
    });

    this.server.listen(process.env.TCP_PORT ?? 81, () => {
      this.logger.log(`Servidor TCP escuchando en puerto ${process.env.TCP_PORT ?? 81}`);
    });
  }

  /**
   * Crea una respuesta para el dispositivo GPS
   * @param receivedData Buffer con los datos recibidos del dispositivo
   * @returns Buffer con la respuesta formateada
   */
  private createResponse(receivedData: Buffer): Buffer {
    // Header (2 bytes)
    const header = Buffer.from([0x24, 0x24]);
    
    // Packet Type (mismo que el recibido)
    const packetType = receivedData[2];
    
    // Length (2 bytes) - longitud 0 para respuesta simple
    const length = Buffer.from([0x00, 0x00]);
    
    // PseudoIP (copiada del paquete recibido)
    const pseudoIp = receivedData.subarray(5, 9);
    
    // Payload vacío ya que es una confirmación
    const payload = Buffer.from([]);
    
    // Crear el paquete sin checksum
    const packetWithoutChecksum = Buffer.concat([
      header,
      Buffer.from([packetType]),
      length,
      pseudoIp,
      payload
    ]); 
    // Calcular checksum
    const checksum = this.calculateXor(packetWithoutChecksum.subarray(2));
    
    // Footer
    const footer = Buffer.from([0x0D]);
    
    // Retornar el paquete completo
    return Buffer.concat([
      packetWithoutChecksum,
      Buffer.from([checksum]),
      footer
    ]);
  }

  /**
   * Decodifica una dirección IP pseudo-aleatoria desde un buffer de 4 bytes
   * @param pseudoIp Buffer de 4 bytes que contiene la pseudo IP
   * @returns String con formato de dirección IP (ej: "192.168.1.1")
   */
  private decodePseudoIp(pseudoIp: Buffer): string {
    return Array.from(pseudoIp).join('.');
  }

  /**
   * Convierte una dirección IP pseudo-aleatoria a un número de SIM
   * @param pseudoIp String con formato de dirección IP (ej: "98.4.199.36")
   * @returns String con el número de SIM calculado
   * 
   * @example
   * Input: "98.4.199.36"
   * Output: "13298047136"
   */
  private pseudoIpToSim(pseudoIp: string) {

        // Dividir la pseudoIp en sus 4 componentes
        const ipParts = pseudoIp.split('.').map(part => parseInt(part, 10));
    
        // Verificar formato válido
        if (ipParts.length !== 4 || ipParts.some(isNaN)) {
            throw new Error("Formato de IP pseudo inválido");
        }
    
        // Extraer bits superiores (D7) de cada byte
        // Ejemplo: 98 -> 1, 4 -> 0, 201 -> 1, 36 -> 0
        const bits = ipParts.map(part => (part & 0x80) !== 0 ? 1 : 0);
        
        // Calcular iHigt (valor base) combinando los bits
        // Ejemplo: [1,0,1,0] -> 1010 binario -> 10 decimal
        const iHigt = 
            (bits[0] << 3) | 
            (bits[1] << 2) | 
            (bits[2] << 1) | 
            bits[3];
    
        // Eliminar bit D7 de cada byte
        // Ejemplo: [98,4,201,36] -> [34,4,73,36]
        const cleanParts = ipParts.map(part => part & 0x7F);
        
        // Reconstruir grupos del SIM
        // Base: 30 + 10 = 40
        const grupoBase = 30 + iHigt;
        const grupos = [
            grupoBase.toString().padStart(2, '0'),
            cleanParts[0].toString().padStart(2, '0'),
            cleanParts[1].toString().padStart(2, '0'),
            cleanParts[2].toString().padStart(2, '0'),
            cleanParts[3].toString().padStart(2, '0')
        ];
    
        // Formar número de SIM
        // Ejemplo: 1 + "40043673036" = "140043673036"
        return `1${grupos.join('')}`;
  }

  /**
   * Decodifica la información del paquete recibido del dispositivo GPS
   * @param data Buffer que contiene los datos crudos del paquete
   * @param clientId Identificador único del cliente conectado
   * @returns Objeto con la información decodificada del paquete que incluye:
   *  - clientId: Identificador del cliente
   *  - packetType: Tipo de paquete (comando)
   *  - length: Longitud del payload
   *  - payload: Datos útiles del paquete
   *  - checksum: Valor de verificación
   *  - footer: Byte final del paquete
   */
  private decodePacketInfo(data: Buffer, clientId: string): PacketInfo {

    const packetType = data[2];
    const length = data.readUInt16BE(3);
    const payload = data.subarray(9, 9 + length);
    const checksum = data[data.length - 2];
    const footer = data[data.length - 1];

    return {
      clientId,
      packetType, 
      length,
      payload,
      checksum,
      footer
    };
  }

  /**
   * Calcula el checksum XOR de un buffer de bytes
   * @param buffer Buffer de bytes del cual calcular el checksum
   * @returns Número que representa el checksum XOR calculado
   */
  private calculateXor(buffer: Buffer): number {
    let checksum = 0;
    for (let i = 0; i < buffer.length; i++) {
      checksum ^= buffer[i];
    }

    return checksum;
  }

  /**
   * Cierra el servidor TCP y todas las conexiones de clientes activas
   * @returns Promise que se resuelve cuando el servidor y todas las conexiones han sido cerradas
   */
  private async closeServer() {
    return new Promise<void>((resolve) => {
      this.server.close(() => {
        this.logger.log('Servidor TCP cerrado');
        resolve();
      });

      this.clients.forEach((socket) => {
        socket.destroy();
      });
      this.clients.clear();
    });
  }

  /**
   * Obtiene el número total de clientes conectados actualmente al servidor TCP
   * @returns Número entero que representa la cantidad de clientes conectados
   */
  public getConnectedClients(): number {
    return this.clients.size;
  }

  /**
   * Detiene el servidor TCP y cierra todas las conexiones activas
   * @returns Promise que se resuelve cuando el servidor ha sido detenido
   */
  public async stopServer(): Promise<void> {
    this.logger.log('Deteniendo servidor TCP...');
    await this.closeServer();
  }

  /**
   * Reinicia el servidor TCP
   * @returns Promise que se resuelve cuando el servidor ha sido reiniciado
   */
  public async restartServer(): Promise<void> {
    this.logger.log('Reiniciando servidor TCP...');
    await this.closeServer();
    this.setupServer();
  }

    /**
   * Verifica si el servidor TCP está en ejecución
   * @returns Objeto con el estado del servidor
   */
    public getServerStatus() {
      return {
        isRunning: this.server.listening,
        port: this.server.listening ? process.env.TCP_PORT ?? 81 : null,
        connectedClients: this.clients.size
      };
    }
}

