import { Controller, Get } from '@nestjs/common';
import { StatusService } from './service/status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  async status() {
    return await this.statusService.status();
  }
}
