import { Controller, Get, Post } from '@nestjs/common'
import { StatusService } from '../service/status.service'
import { TcpService } from '../../tcp/service/tcp.service'

@Controller('status')
export class StatusController {
  constructor(
    private readonly statusService: StatusService,
    private readonly tcpService: TcpService,
  ) {}

  @Get()
  async status() {
    return await this.statusService.status()
  }

  @Post('tcp/restart')
  async restartTcpServer() {
    await this.tcpService.restartServer()
    return { message: 'Servidor TCP reiniciado exitosamente' }
  }

  @Post('tcp/stop')
  async stopTcpServer() {
    await this.tcpService.stopServer()
    return { message: 'Servidor TCP detenido exitosamente' }
  }
}
