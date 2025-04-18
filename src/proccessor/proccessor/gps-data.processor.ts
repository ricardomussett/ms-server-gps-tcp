import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';
import { ProccessorService } from '../service/proccessor.service';

@Processor('gps-data')
export class GpsDataProcessor {
  private readonly logger = new Logger(GpsDataProcessor.name);

  constructor(private readonly processorService: ProccessorService) {}

  @Process('gps')
  async handleGpsData(job: Job) {
    try {
      await this.processorService.processGpsDataFromQueue(job);
    } catch (error) {
      this.logger.error(`Error al procesar datos GPS desde la cola: ${error.message}`);
      throw error;
    }
  }
} 