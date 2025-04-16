import { Module } from '@nestjs/common';
import { StatusService } from './service/status.service';
import { StatusController } from './status.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}
