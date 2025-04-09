import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class QueueService {
  private readonly logger = new Logger(QueueService.name);

  constructor(
    @InjectQueue('gps-data') private readonly gpsDataQueue: Queue,
  ) {}

  async addGpsData(data: { deviceId: string; rawData: string }) {
    try {
      this.logger.log(`Agregando datos a la cola para dispositivo ${data.deviceId}`);
      
      const job = await this.gpsDataQueue.add(data, {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
      });

      this.logger.log(`Trabajo agregado exitosamente con ID: ${job.id}`);
      return job;
    } catch (error) {
      this.logger.error(`Error agregando datos a la cola: ${error.message}`, error.stack);
      throw error;
    }
  }
} 