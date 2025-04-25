import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common'
import { Server, Socket } from 'net'

@Injectable()
export class TcpSocket implements OnModuleDestroy {
  private server: Server

  /** Mapa que almacena las conexiones activas de los clientes, usando su ID como clave */
  private clients: Map<string, Socket> = new Map()

  /** Logger para registrar eventos del servicio TCP */
  private readonly logger = new Logger(TcpSocket.name)

  public socket: Socket

  constructor() {
    this.server = new Server()
  }

  get getServer() {
    return this.server
  }

  get getClients() {
    return this.clients
  }

  /**
   * Método del ciclo de vida que se ejecuta cuando el módulo se está destruyendo
   * Cierra el servidor TCP y todas las conexiones activas de forma limpia
   * @returns Promise que se resuelve cuando el servidor ha sido cerrado correctamente
   */
  async onModuleDestroy() {
    await this.closeServer()
  }

  /**
   * Cierra el servidor TCP y todas las conexiones de clientes activas
   * @returns Promise que se resuelve cuando el servidor y todas las conexiones han sido cerradas
   */
  public async closeServer() {
    return new Promise<void>((resolve) => {
      this.server.close(() => {
        this.logger.log('Servidor TCP cerrado')
        resolve()
      })

      this.clients.forEach((socket) => {
        socket.destroy()
      })
      this.clients.clear()
    })
  }

  /**
   * Obtiene el número total de clientes conectados actualmente al servidor TCP
   * @returns Número entero que representa la cantidad de clientes conectados
   */
  public getConnectedClients(): number {
    return this.clients.size
  }

  /**
   * Detiene el servidor TCP y cierra todas las conexiones activas
   * @returns Promise que se resuelve cuando el servidor ha sido detenido
   */
  public async stopServer(): Promise<void> {
    this.logger.log('Deteniendo servidor TCP...')
    await this.closeServer()
  }

  /**
   * Verifica si el servidor TCP está en ejecución
   * @returns Objeto con el estado del servidor
   */
  public getServerStatus() {
    return {
      isRunning: this.server.listening,
      port: this.server.listening ? (process.env.TCP_PORT ?? 81) : null,
      connectedClients: this.clients.size,
    }
  }

  public listen() {
    const tcpPort = process.env.TCP_PORT ? parseInt(process.env.TCP_PORT, 10) : 81

    this.server.listen(
      {
        port: tcpPort,
        host: '0.0.0.0',
      },
      () => {
        this.logger.log(`Servidor TCP escuchando en puerto ${tcpPort}`)
      },
    )
  }

  public setNewClient(clientId: string, socket: Socket) {
    this.clients.set(clientId, socket)
  }

  public deleteClient(clientId: string) {
    this.clients.delete(clientId)
  }

  public listenToConnection() {
    return this.server.on('connection', (socket: Socket) => {
      this.socket = socket
    })
  }
}
