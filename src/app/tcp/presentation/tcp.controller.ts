import { Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { TcpService } from '../application/service/tcp.service'

@ApiTags('gps')
@Controller('tcp')
export class TcpController {
  constructor(private readonly tcpService: TcpService) {}

  @ApiOperation({ summary: 'Reiniciar servidor TCP', description: 'Reinicia el servidor TCP del servicio GPS.' })
  @ApiResponse({ status: 200, description: 'Servidor TCP reiniciado exitosamente' })
  @ApiResponse({ status: 500, description: 'Error al reiniciar el servidor TCP' })
  @Post('restart')
  async restartTcpServer() {
    await this.tcpService.restartServer()
    return { message: 'Servidor TCP reiniciado exitosamente' }
  }

  @ApiOperation({ summary: 'Detener servidor TCP', description: 'Detiene el servidor TCP del servicio GPS.' })
  @ApiResponse({ status: 200, description: 'Servidor TCP detenido exitosamente' })
  @ApiResponse({ status: 500, description: 'Error al detener el servidor TCP' })
  @Post('stop')
  async stopTcpServer() {
    await this.tcpService.stopServer()
    return { message: 'Servidor TCP detenido exitosamente' }
  }
}
