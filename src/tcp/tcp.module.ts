import { Module } from '@nestjs/common'
import { TcpService } from './service/tcp.service'
import { ParseService } from './service/parse.service'
import { TcpController } from './controller/tcp.controller'
import { QueueModule } from '../queue/queue.module'
import { WhitelistService } from './service/whiteList.service'

@Module({
  controllers: [TcpController],
  providers: [TcpService, ParseService, WhitelistService],
  imports: [QueueModule],
  exports: [TcpService],
})
export class TcpModule {}
