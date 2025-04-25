import { Module } from '@nestjs/common'
import { StatusService } from './application/service/status.service'
import { StatusController } from './presentation/controller/status.controller'
import { TcpModule } from '../tcp/tcp.module'
import { PrismaModule } from 'src/core/prisma/prisma.module'

@Module({
  imports: [PrismaModule, TcpModule],
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}
