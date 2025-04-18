import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusModule } from './status/status.module';
import { PrismaModule } from './prisma/prisma.module';
import { TcpModule } from './tcp/tcp.module';
import { ProccessorModule } from './proccessor/proccessor.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    StatusModule, 
    PrismaModule, 
    TcpModule, 
    ProccessorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
