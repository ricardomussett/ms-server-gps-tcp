import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class StatusService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redisService: RedisService,
  ) {}

  async status() {
    try {
      // Verificamos la conexión a PostgreSQL usando una consulta simple
      await this.prisma.$queryRaw`SELECT 1`;
      
      // Verificamos la conexión a Redis
      await this.redisService.getClient().ping();
      
      // Creamos un nuevo registro de status
      const statusRecord = await this.prisma.status.create({
        data: {
          status: 'active',
          database: 'connected',
        }
      });

      return {
        status: statusRecord.status,
        database: statusRecord.database,
        redis: 'connected',
        timestamp: statusRecord.timestamp,
      };
    } catch (error) {
      console.error('Error de conexión:', error);
      
      // Determinamos qué servicio falló
      const databaseStatus = error.message.includes('Prisma') ? 'disconnected' : 'connected';
      const redisStatus = error.message.includes('Redis') ? 'disconnected' : 'connected';
      
      // Creamos un registro de error
      const statusRecord = await this.prisma.status.create({
        data: {
          status: 'error',
          database: databaseStatus,
          redis: redisStatus,
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
}
