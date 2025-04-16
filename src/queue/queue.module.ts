import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { redisConfig } from '../config/redis.config';
import { GpsDataProcessor } from './gps-data.processor';
import { QueueService } from './service/queue.service';
import { PrismaModule } from '../prisma/prisma.module';


@Module({
  imports: [
    BullModule.forRoot({
      redis: redisConfig,
    }),
    BullModule.registerQueue({
      name: 'gps-data',
      defaultJobOptions: {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
        removeOnComplete: true,
        removeOnFail: false,
      },
    }),
    PrismaModule,
  ],
  providers: [
    GpsDataProcessor, 
    QueueService,
  ],
  exports: [QueueService],
})
export class QueueModule {} 