import { Module } from '@nestjs/common'
import { QueueModule } from '../queue/queue.module'
import { TcpService } from './application/service/tcp.service'
import { WhitelistService } from './application/service/whiteList.service'
import { TcpSocket } from './domain/socket/tcp.socket'
import { TcpController } from './presentation/tcp.controller'
import { WhitelistRepository } from './domain/repository/whitelist.repository'
import { VehicleRepository } from '../proccessor/domain/repository/vehicle.repository'

@Module({
  controllers: [TcpController],
  providers: [TcpService, TcpSocket, WhitelistService, WhitelistRepository, VehicleRepository],
  imports: [QueueModule],
  exports: [TcpService, TcpSocket, WhitelistService],
})
export class TcpModule {}
