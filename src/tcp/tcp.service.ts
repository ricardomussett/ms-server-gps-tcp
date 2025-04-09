import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Server, Socket } from 'net';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TcpService implements OnModuleInit, OnModuleDestroy {
  private server: Server;
  private clients: Map<string, Socket> = new Map();
  private cleanupInterval: NodeJS.Timeout;
  private readonly SOCKET_TIMEOUT = 60000; // 1 minuto de timeout

  constructor(private readonly prisma: PrismaService) {
    this.server = new Server();
  }

  async onModuleInit() {
    this.setupServer();
    await this.startServer();
    this.startCleanup();
  }

  async onModuleDestroy() {
    this.stopCleanup();
    // Cerramos todas las conexiones activas antes de detener el servidor
    for (const [clientId, socket] of this.clients) {
      this.closeClientConnection(clientId, socket);
    }
    await this.stopServer();
  }

  private startCleanup() {
    // Limpiar cada 5 minutos
    this.cleanupInterval = setInterval(() => {
      this.cleanupInactiveClients();
    }, 5 * 60 * 1000);
  }

  private stopCleanup() {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
  }

  private cleanupInactiveClients() {
    for (const [clientId, socket] of this.clients) {
      // Verificar si el socket está cerrado o inactivo
      if (socket.destroyed || !socket.writable) {
        console.log(`Eliminando cliente inactivo: ${clientId}`);
        this.clients.delete(clientId);
      }
    }
  }

  private setupServer() {
    this.server.on('connection', (socket: Socket) => {
      const clientId = `${socket.remoteAddress}:${socket.remotePort}`;
      console.log(`Nueva conexión desde: ${clientId}`);
      
      // Configuración de socket para reutilización
      socket.setKeepAlive(true, 30000); // Keep-alive cada 30 segundos
      socket.setTimeout(this.SOCKET_TIMEOUT);
      
      this.clients.set(clientId, socket);

      socket.on('data', async (data: Buffer) => {
        try {
          const message = data.toString();
          console.log(`Datos recibidos de ${clientId}:`, message);
          
          // Reiniciamos el temporizador de timeout cuando recibimos datos
          socket.setTimeout(this.SOCKET_TIMEOUT);
          
          await this.processGpsData(clientId, message);
        } catch (error) {
          console.error(`Error procesando datos de ${clientId}:`, error);
        }
      });

      socket.on('error', (error) => {
        console.error(`Error en conexión ${clientId}:`, error);
        this.closeClientConnection(clientId, socket);
      });

      socket.on('timeout', () => {
        console.log(`Timeout de conexión: ${clientId}`);
        this.closeClientConnection(clientId, socket);
      });

      socket.on('close', () => {
        console.log(`Conexión cerrada: ${clientId}`);
        this.clients.delete(clientId);
      });

      socket.on('end', () => {
        console.log(`Cliente finalizó conexión: ${clientId}`);
        this.closeClientConnection(clientId, socket);
      });
    });

    this.server.on('error', (error) => {
      console.error('Error en el servidor TCP:', error);
    });
  }

  private closeClientConnection(clientId: string, socket: Socket) {
    try {
      socket.end(); // Cierra la conexión de manera ordenada
      socket.destroy(); // Fuerza el cierre si es necesario
      this.clients.delete(clientId);
    } catch (error) {
      console.error(`Error cerrando conexión ${clientId}:`, error);
    }
  }

  private async startServer() {
    const port = process.env.TCP_PORT || 3001;
    this.server.listen(port, () => {
      console.log(`Servidor TCP escuchando en puerto ${port}`);
    });
  }

  private async stopServer() {
    return new Promise((resolve) => {
      if (this.server.listening) {
        this.server.close(() => {
          console.log('Servidor TCP cerrado');
          resolve(true);
        });
      } else {
        resolve(true);
      }
    });
  }

  private async processGpsData(clientId: string, data: string) {
    await this.prisma.gpsData.create({
      data: {
        deviceId: clientId,
        rawData: data,
        timestamp: new Date(),
      },
    });
  }

  public getConnectedClients(): string[] {
    return Array.from(this.clients.keys());
  }
}