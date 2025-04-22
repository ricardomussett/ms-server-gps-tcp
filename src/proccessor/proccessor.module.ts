import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ProccessorService } from './service/proccessor.service';
import { ProccessorController } from './controller/proccessor.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { QueueModule } from '../queue/queue.module';
import { redisConfig } from '../config/redis.config';
import { GpsDataProcessor } from './proccessor/gps-data.processor';

@Module({
  imports: [
    PrismaModule,
    QueueModule,
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
  ],
  controllers: [ProccessorController],
  providers: [ProccessorService, GpsDataProcessor],
  exports: [ProccessorService]
})
export class ProccessorModule {}
