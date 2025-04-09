import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Server, Socket } from 'net';
import { QueueService } from '../queue/queue.service';

@Injectable()
export class TcpService implements OnModuleInit, OnModuleDestroy {
  private server: Server;
  private clients: Map<string, Socket> = new Map();
  private readonly logger = new Logger(TcpService.name);

  constructor(private readonly queueService: QueueService) {
    this.server = new Server();
  }

  async onModuleInit() {
    this.setupServer();
  }

  async onModuleDestroy() {
    await this.closeServer();
  }

  private setupServer() {
    this.server.on('connection', (socket: Socket) => {
      const clientId = `${socket.remoteAddress}:${socket.remotePort}`;
      this.logger.log(`Cliente conectado: ${clientId}`);
      this.clients.set(clientId, socket);

      socket.on('data', async (data: Buffer) => {
        try {
          const rawData = data.toString();
          this.logger.log(`Datos recibidos de ${clientId}: ${rawData}`);

          const deviceId = this.extractDeviceId(rawData);
          this.logger.log(`DeviceId extraído: ${deviceId}`);

          const job = await this.queueService.addGpsData({
            deviceId,
            rawData,
          });

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

    this.server.listen(process.env.TCP_PORT ?? 3001, () => {
      this.logger.log(`Servidor TCP escuchando en puerto ${process.env.TCP_PORT ?? 3001}`);
    });
  }

  private extractDeviceId(rawData: string): string {
    const match = rawData.match(/IMEI:([^,]+)/);
    return match ? match[1] : 'unknown';
  }

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

  public getConnectedClients(): number {
    return this.clients.size;
  }
}