import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Server, Socket } from 'net';
import { QueueService } from '../../queue/service/queue.service';
import { ParseService } from './parse.service';
import { PacketInfo } from '../interface/tcp.interface';


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
  constructor(private readonly queueService: QueueService, private readonly parseService: ParseService) {
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
          this.logger.log(`Datos recibidos (raw): ${data.toString()}`);

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
          // aca va la validacion de la pseudoIP por whitelist

          // Decodificar la informacion del paquete
          const packetInfo = this.decodePacketInfo(data, clientId);
          this.logger.log(`Packet info - Type: ${packetInfo.packetType}, Length: ${packetInfo.length}, Footer position: ${data.length - 1}, Footer value: ${packetInfo.footer.toString(16)}`);
          
          // Log de depuración
          this.logger.log(`Paquete recibido de ${clientId}: ${JSON.stringify(packetInfo)}`);

          // Procesar los datos GPS
          const parsedData = this.parseService.parseGpsData(data, packetInfo, clientId);
          
          // Agrega los datos a la cola
          const job = await this.queueService.addGpsData({
            parsedData
          }, 'gps');

          this.logger.log(`Datos enviados a la cola con jobId: ${job.id}`);

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
   * Decodifica una dirección IP pseudo-aleatoria desde un buffer de 4 bytes
   * @param pseudoIp Buffer de 4 bytes que contiene la pseudo IP
   * @returns String con formato de dirección IP (ej: "192.168.1.1")
   */
  private decodePseudoIp(pseudoIp: Buffer): string {
    return Array.from(pseudoIp).join('.');
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
}

