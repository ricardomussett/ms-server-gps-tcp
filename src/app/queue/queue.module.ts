import { Module } from '@nestjs/common'
import { BullModule } from '@nestjs/bull'
import { QueueService } from './service/queue.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { redisConfig } from 'src/core/constant/redis-config'
import { PrismaModule } from 'src/core/prisma/prisma.module'

@Module({
  imports: [
    BullModule.forRoot({
      redis: redisConfig,
    }),
    BullModule.registerQueueAsync({
      name: process.env.REDIS_QUEUE_NAME || 'gps-data',
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        name: configService.get<string>('REDIS_QUEUE_NAME') || 'gps-data',
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
      inject: [ConfigService],
    }),
    PrismaModule,
  ],
  providers: [QueueService],
  exports: [QueueService],
})
export class QueueModule {}
