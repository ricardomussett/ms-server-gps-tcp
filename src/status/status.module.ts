import { Module } from '@nestjs/common'
import { StatusService } from './service/status.service'
import { StatusController } from './controller/status.controller'
import { PrismaModule } from '../prisma/prisma.module'
import { TcpModule } from '../tcp/tcp.module'

@Module({
  imports: [PrismaModule, TcpModule],
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}
