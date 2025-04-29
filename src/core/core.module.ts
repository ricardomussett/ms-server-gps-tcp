import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { RedisModule } from './redis/redis.module'

@Module({
  imports: [PrismaModule, RedisModule],
  controllers: [],
  providers: [],
  exports: [PrismaModule, RedisModule],
})
export class CoreModule {}
