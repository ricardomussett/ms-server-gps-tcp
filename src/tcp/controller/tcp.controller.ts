import { Controller } from '@nestjs/common';
import { TcpService } from '../service/tcp.service';

@Controller('tcp')
export class TcpController {
  constructor(private readonly tcpService: TcpService) {}
} 