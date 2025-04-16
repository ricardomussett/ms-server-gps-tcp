import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { createClient } from 'redis';
import { redisConfig } from '../../config/redis.config';

@Injectable()
export class StatusService {
  private redisClient;
  private redisConnected = false;

  constructor(private readonly prisma: PrismaService) {
    // Inicializar el cliente Redis
    this.redisClient = createClient({
      url: `redis://${redisConfig.host}:${redisConfig.port}`,
      socket: {
        reconnectStrategy: (retries) => {
          // Limitar el número de intentos de reconexión
          if (retries > 3) {
            this.redisConnected = false;
            return new Error('Max retries reached');
          }
          return Math.min(retries * 100, 1000);
        }
      }
    });

    // Manejar eventos de error y reconexión
    this.redisClient.on('error', (err) => {
      console.error('Error de Redis:', err);
      this.redisConnected = false;
    });

    this.redisClient.on('connect', () => {
      console.log('Conectado a Redis');
      this.redisConnected = true;
    });

    this.redisClient.on('end', () => {
      console.log('Conexión a Redis finalizada');
      this.redisConnected = false;
    });

    // Intentar conectar al inicio
    this.connectRedis();
  }

  private async connectRedis() {
    try {
      if (!this.redisClient.isOpen) {
        await this.redisClient.connect();
        this.redisConnected = true;
      }
    } catch (error) {
      console.error('Error al conectar a Redis:', error);
      this.redisConnected = false;
    }
  }

  async status() {
    try {
      // Verificamos la conexión a la base de datos
      await this.prisma.$queryRaw`SELECT 1`;
      
      // Verificamos la conexión a Redis
      const redisStatus = await this.checkRedisConnection();
      
      // Creamos un nuevo registro de status
      const statusRecord = await this.prisma.status.create({
        data: {
          status: 'active',
          database: 'connected',
          redis: redisStatus,
        }
      });

      return {
        status: statusRecord.status,
        database: statusRecord.database,
        redis: statusRecord.redis,
        timestamp: statusRecord.timestamp,
      };
    } catch (error) {
      console.error('Error de conexión:', error);
      
      // Creamos un registro de error
      const statusRecord = await this.prisma.status.create({
        data: {
          status: 'error',
          database: 'disconnected',
          redis: 'disconnected',
          error: error.message,
        }
      });

      return {
        status: statusRecord.status,
        database: statusRecord.database,
        redis: statusRecord.redis,
        error: statusRecord.error,
        timestamp: statusRecord.timestamp,
      };
    }
  }

  private async checkRedisConnection(): Promise<string> {
    try {
      // Si el cliente está abierto, intentamos hacer ping
      if (this.redisClient.isOpen) {
        const pingPromise = this.redisClient.ping();
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), 1000)
        );
        
        await Promise.race([pingPromise, timeoutPromise]);
        this.redisConnected = true;
        return 'connected';
      }

      // Si no está abierto, intentamos reconectar
      await this.connectRedis();
      return this.redisConnected ? 'connected' : 'disconnected';
    } catch (error) {
      console.error('Error de conexión a Redis:', error);
      this.redisConnected = false;
      return 'disconnected';
    }
  }
}
