import { Module } from '@nestjs/common'
import { StatusModule } from './status/status.module'
import { TcpModule } from './tcp/tcp.module'
import { ProccessorModule } from './proccessor/proccessor.module'
import { PrismaModule } from 'src/core/prisma/prisma.module'

@Module({
  imports: [StatusModule, PrismaModule, TcpModule, ProccessorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
