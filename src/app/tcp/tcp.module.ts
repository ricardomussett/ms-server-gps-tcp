import { Module } from '@nestjs/common'
import { QueueModule } from '../queue/queue.module'
import { TcpService } from './application/service/tcp.service'
import { WhitelistService } from './application/service/whiteList.service'
import { TcpSocket } from './domain/socket/tcp.socket'

@Module({
  providers: [TcpService, TcpSocket, WhitelistService],
  imports: [QueueModule],
  exports: [TcpService],
})
export class TcpModule {}
