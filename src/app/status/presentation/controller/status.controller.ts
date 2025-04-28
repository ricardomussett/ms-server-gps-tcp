import { Controller, Get } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { CommonService } from 'src/core/common/service/common.service'

@ApiTags('gps')
@Controller('status')
export class StatusController {
  constructor(private readonly commonService: CommonService) {}

  @Get()
  @ApiOperation({
    summary: 'Obtener estado del sistema',
    description: 'Retorna el estado actual del servidor y servicios asociados.',
  })
  @ApiResponse({ status: 200, description: 'Estado obtenido correctamente' })
  async status() {
    return await this.commonService.status()
  }
}
