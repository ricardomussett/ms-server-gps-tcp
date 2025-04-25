import { Module } from '@nestjs/common'
import { BullModule } from '@nestjs/bull'
import { ProccessorService } from './application/service/proccessor.service'
import { QueueModule } from '../queue/queue.module'
import { GpsDataProcessor } from './presentation/proccessor/gps.processor'
import { PrismaModule } from 'src/core/prisma/prisma.module'
import { VehiclelistService } from './application/service/vehicle.service'

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
  providers: [ProccessorService, VehiclelistService, GpsDataProcessor],
  exports: [ProccessorService],
})
export class ProccessorModule {}
