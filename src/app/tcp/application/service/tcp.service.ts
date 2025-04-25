import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common'
import { Socket } from 'net'
import { WhitelistService } from './whiteList.service'
import { QueueService } from 'src/app/queue/service/queue.service'
import { PacketInfo } from '../../domain/interface/packet-info.interface'
import { parseGpsData } from 'src/core/util/parse-gps.util'
import { TcpSocket } from '../../domain/socket/tcp.socket'

@Injectable()
export class TcpService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(TcpSocket.name)

  /**
   * Constructor del servicio TCP
   * @param queueService Servicio para manejar colas de mensajes
   * @param parseService Servicio para parsear datos GPS
   */
  constructor(
    private readonly queueService: QueueService,
    private readonly whitelistService: WhitelistService,
    private readonly tcpSocket: TcpSocket,
  ) {}

  /**
   * Método del ciclo de vida que se ejecuta cuando el módulo se inicializa
   * Configura el servidor TCP llamando a setupServer()
   * @returns Promise que se resuelve cuando el servidor ha sido configurado correctamente
   */
  onModuleInit() {
    this.setupServer()
  }

  /**
   * Método del ciclo de vida que se ejecuta cuando el módulo se está destruyendo
   * Cierra el servidor TCP y todas las conexiones activas de forma limpia
   * @returns Promise que se resuelve cuando el servidor ha sido cerrado correctamente
   */
  async onModuleDestroy() {
    await this.tcpSocket.closeServer()
  }

  public getStatus() {
    return this.tcpSocket.getServerStatus()
  }

  public stopServer() {
    return this.tcpSocket.stopServer()
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
    this.tcpSocket.getServer.on('connection', (socket: Socket) => {
      const clientId = `${socket.remoteAddress}:${socket.remotePort}`
      this.logger.log(`Cliente conectado: ${clientId}`)
      this.tcpSocket.setNewClient(clientId, socket)

      socket.on('data', (data: Buffer) => {
        try {
          const isValid = this.validateBufferData(data, clientId)

          if (!isValid) return

          // Decodificar la pseudoIP
          const decodedPseudoIp = this.decodeIp(data)

          // aca va la validacion de la pseudoIP por whitelist
          if (!this.whitelistService.isClientAllowed(decodedPseudoIp)) {
            this.logger.warn(`Cliente ${clientId} no permitido. PseudoIP: ${decodedPseudoIp}`)
            return
          }

          // Decodificar la informacion del paquete
          const packetInfo = this.decodePacketInfo(data, clientId)

          // Log de depuración
          this.logger.log(`Paquete recibido de ${clientId}: ${JSON.stringify(packetInfo)}`)

          // Procesar los datos GPS
          const parsedData = parseGpsData(data, packetInfo, clientId, decodedPseudoIp)

          // Agrega los datos a la cola
          this.queueService
            .addGpsData(
              {
                parsedData,
              },
              'gps',
            )
            .then(() => {
              // Crear y enviar respuesta al dispositivo
              const response = this.createResponse(data)
              socket.write(response)
              this.logger.log(`Respuesta enviada al cliente ${clientId}: ${response.toString('hex')}`)
            })
            .catch((error) => {
              this.logger.error(`Error al agregar datos a la cola: ${error.message}`, error.stack)
            })

          // Cerrar la conexión después de enviar la respuesta
          // socket.end();
          // this.logger.log(`Conexión cerrada con el cliente ${clientId}`);
        } catch (error) {
          this.logger.error(`Error procesando datos de ${clientId}: ${error.message}`, error.stack)
        }
      })

      socket.on('error', (error) => {
        this.logger.error(`Error en socket ${clientId}: ${error.message}`, error.stack)
        this.tcpSocket.deleteClient(clientId)
      })

      socket.on('close', () => {
        this.logger.log(`Cliente desconectado: ${clientId}`)
        this.tcpSocket.deleteClient(clientId)
      })
    })

    this.tcpSocket.listen()
  }

  /**
   * Crea una respuesta para el dispositivo GPS
   * @param receivedData Buffer con los datos recibidos del dispositivo
   * @returns Buffer con la respuesta formateada
   */
  private createResponse(receivedData: Buffer): Buffer {
    // Header (2 bytes)
    const header = Buffer.from([0x24, 0x24])

    // Packet Type (mismo que el recibido)
    const packetType = receivedData[2]

    // Length (2 bytes) - longitud 0 para respuesta simple
    const length = Buffer.from([0x00, 0x00])

    // PseudoIP (copiada del paquete recibido)
    const pseudoIp = receivedData.subarray(5, 9)

    // Payload vacío ya que es una confirmación
    const payload = Buffer.from([])

    // Crear el paquete sin checksum
    const packetWithoutChecksum = Buffer.concat([header, Buffer.from([packetType]), length, pseudoIp, payload])
    // Calcular checksum
    const checksum = this.calculateXor(packetWithoutChecksum.subarray(2))

    // Footer
    const footer = Buffer.from([0x0d])

    // Retornar el paquete completo
    return Buffer.concat([packetWithoutChecksum, Buffer.from([checksum]), footer])
  }

  /**
   * Valida los datos recibidos del cliente
   * @param data Buffer con los datos recibidos
   * @param clientId Identificador único del cliente conectado
   * @returns Booleano que indica si los datos son válidos o no
   */
  private validateBufferData(data: Buffer, clientId: string): boolean {
    // Imprimir datos de entrada en formato hexadecimal
    this.logger.log(`Datos recibidos (hex): ${data.toString('hex')}`)

    // validar longitud del paquete
    if (data.length < 6) {
      this.logger.warn(`Paquete inválido por longitud`)
      return false
    }

    // Verificar el header del paquete
    if (data[0] !== 0x24 || data[1] !== 0x24) {
      this.logger.warn(`Paquete inválido recibido de ${clientId}: Header incorrecto`)
      return false
    }

    // Verificar footer
    if (data[data.length - 1] !== 0x0d) {
      this.logger.warn(`Paquete inválido recibido de ${clientId}: Footer incorrecto`)
      return false
    }

    // Verificar checksum
    const calculatedChecksum = this.calculateXor(data.subarray(2, data.length - 2))
    if (calculatedChecksum !== data[data.length - 2]) {
      this.logger.warn(`Paquete inválido recibido de ${clientId}: Checksum incorrecto`)
      return false
    }

    return true
  }

  /**
   * Decodifica la pseudo IP desde el paquete recibido
   * @param data Buffer que contiene los datos del paquete
   * @returns String con la pseudo IP decodificada
   */
  private decodeIp(data: Buffer): string {
    // Decodificar la pseudoIP
    const pseudoIp = data.subarray(5, 9)
    const decodedPseudoIp = this.decodePseudoIp(pseudoIp)
    this.logger.log(`PseudoIP decodificada: ${decodedPseudoIp}`)

    return decodedPseudoIp
  }

  /**
   * Decodifica una dirección IP pseudo-aleatoria desde un buffer de 4 bytes
   * @param pseudoIp Buffer de 4 bytes que contiene la pseudo IP
   * @returns String con formato de dirección IP (ej: "192.168.1.1")
   */
  private decodePseudoIp(pseudoIp: Buffer): string {
    return Array.from(pseudoIp).join('.')
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
    const packetType = data[2]
    const length = data.readUInt16BE(3)
    const payload = data.subarray(9, 9 + length)
    const checksum = data[data.length - 2]
    const footer = data[data.length - 1]

    return {
      clientId,
      packetType,
      length,
      payload,
      checksum,
      footer,
    }
  }

  /**
   * Calcula el checksum XOR de un buffer de bytes
   * @param buffer Buffer de bytes del cual calcular el checksum
   * @returns Número que representa el checksum XOR calculado
   */
  private calculateXor(buffer: Buffer): number {
    let checksum = 0
    for (let i = 0; i < buffer.length; i++) {
      checksum ^= buffer[i]
    }

    return checksum
  }

  /**
   * Reinicia el servidor TCP
   * @returns Promise que se resuelve cuando el servidor ha sido reiniciado
   */
  public async restartServer(): Promise<void> {
    this.logger.log('Reiniciando servidor TCP...')
    await this.tcpSocket.closeServer()
    this.setupServer()
  }
}
