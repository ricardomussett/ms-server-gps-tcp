import { Module } from '@nestjs/common';
import { TcpService } from './tcp.service';
import { TcpController } from './tcp.controller';
import { QueueModule } from '../queue/queue.module';

@Module({
  controllers: [TcpController],
  providers: [TcpService],
  imports: [QueueModule],
  exports: [TcpService],
})
export class TcpModule {} 