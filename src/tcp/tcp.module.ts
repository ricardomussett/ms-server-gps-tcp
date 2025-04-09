import { Module } from '@nestjs/common';
import { TcpService } from './tcp.service';
import { TcpController } from './tcp.controller';

@Module({
  controllers: [TcpController],
  providers: [TcpService],
})
export class TcpModule {} 