import { Module } from '@nestjs/common'
import { StatusController } from './presentation/controller/status.controller'
import { CommonService } from 'src/core/common/service/common.service'
import { CommonModule } from 'src/core/common/common.module'

@Module({
  imports: [CommonModule],
  controllers: [StatusController],
  providers: [CommonService],
})
export class StatusModule {}
