import { Module } from '@nestjs/common';
import { TcpService } from './service/tcp.service';
import { ParseService } from './service/parse.service';
import { TcpController } from './tcp.controller';
import { QueueModule } from '../queue/queue.module';

@Module({
  controllers: [TcpController],
  providers: [TcpService, ParseService],
  imports: [QueueModule],
  exports: [TcpService],
})
export class TcpModule {} 