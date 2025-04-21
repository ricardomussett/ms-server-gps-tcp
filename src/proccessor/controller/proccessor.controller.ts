import { Controller } from '@nestjs/common';
import { ProccessorService } from '../service/proccessor.service';

@Controller()
export class ProccessorController {
  constructor(private readonly proccessorService: ProccessorService) {}
}
