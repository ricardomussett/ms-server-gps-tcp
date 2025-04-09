import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { PrismaService } from '../prisma/prisma.service';
import { Logger } from '@nestjs/common';

@Processor('gps-data')
export class GpsDataProcessor {
  private readonly logger = new Logger(GpsDataProcessor.name);

  constructor(private readonly prisma: PrismaService) {}

  @Process()
  async handleGpsData(job: Job) {
    try {
      this.logger.log(`Procesando trabajo ${job.id} con datos: ${JSON.stringify(job.data)}`);
      
      const { deviceId, rawData } = job.data;
      
      const result = await this.prisma.gpsData.create({
        data: {
          deviceId,
          rawData,
        },
      });

      this.logger.log(`Datos guardados exitosamente para dispositivo ${deviceId}`);
      return { success: true, result };
    } catch (error) {
      this.logger.error(`Error procesando GPS data: ${error.message}`, error.stack);
      throw error;
    }
  }
} 