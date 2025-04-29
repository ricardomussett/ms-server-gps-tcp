import { Module } from '@nestjs/common'
import { TcpService } from 'src/app/tcp/application/service/tcp.service'
import { RedisService } from '../redis/service/redis.service'
import { TcpModule } from 'src/app/tcp/tcp.module'
import { CommonRepository } from './repository/common.repository'
import { CommonService } from './service/common.service'
import { PrismaModule } from '../prisma/prisma.module'
import { RedisModule } from '../redis/redis.module'
import { PrismaService } from '../prisma/service/prisma.service'
import { QueueModule } from 'src/app/queue/queue.module'

@Module({
  imports: [PrismaModule, RedisModule, TcpModule, QueueModule],
  controllers: [],
  providers: [PrismaService, CommonRepository, CommonService, TcpService, RedisService],
  exports: [CommonService, CommonRepository, RedisModule, TcpModule, QueueModule],
})
export class CommonModule {}
