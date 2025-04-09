import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StatusService {
  constructor(private readonly prisma: PrismaService) {}

  async status() {
    try {
      // Verificamos la conexión usando una consulta simple
      await this.prisma.$queryRaw`SELECT 1`;
      
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
        timestamp: statusRecord.timestamp,
      };
    } catch (error) {
      console.error('Error de conexión a la base de datos:', error);
      
      // Creamos un registro de error
      const statusRecord = await this.prisma.status.create({
        data: {
          status: 'error',
          database: 'disconnected',
          error: error.message,
        }
      });

      return {
        status: statusRecord.status,
        database: statusRecord.database,
        error: statusRecord.error,
        timestamp: statusRecord.timestamp,
      };
    }
  }
}
