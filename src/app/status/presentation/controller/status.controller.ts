import { Controller, Get, Post } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { TcpService } from 'src/app/tcp/application/service/tcp.service'
import { StatusService } from '../../application/service/status.service'

@ApiTags('gps')
@Controller('status')
export class StatusController {
  constructor(
    private readonly statusService: StatusService,
    private readonly tcpService: TcpService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Obtener estado del sistema',
    description: 'Retorna el estado actual del servidor y servicios asociados.',
  })
  @ApiResponse({ status: 200, description: 'Estado obtenido correctamente' })
  async status() {
    return await this.statusService.status()
  }

  @ApiOperation({ summary: 'Reiniciar servidor TCP', description: 'Reinicia el servidor TCP del servicio GPS.' })
  @ApiResponse({ status: 200, description: 'Servidor TCP reiniciado exitosamente' })
  @ApiResponse({ status: 500, description: 'Error al reiniciar el servidor TCP' })
  @Post('tcp/restart')
  async restartTcpServer() {
    await this.tcpService.restartServer()
    return { message: 'Servidor TCP reiniciado exitosamente' }
  }

  @ApiOperation({ summary: 'Detener servidor TCP', description: 'Detiene el servidor TCP del servicio GPS.' })
  @ApiResponse({ status: 200, description: 'Servidor TCP detenido exitosamente' })
  @ApiResponse({ status: 500, description: 'Error al detener el servidor TCP' })
  @Post('tcp/stop')
  async stopTcpServer() {
    await this.tcpService.stopServer()
    return { message: 'Servidor TCP detenido exitosamente' }
  }
}
