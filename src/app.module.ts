import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusModule } from './status/status.module';
import { PrismaModule } from './prisma/prisma.module';
import { TcpModule } from './tcp/tcp.module';

@Module({
  imports: [StatusModule, PrismaModule, TcpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
