import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CoreModule } from './core/core.module'
import { AppModule } from './app/app.module'
import { CommonModule } from './core/common/common.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CommonModule,
    CoreModule,
    AppModule,
  ],
  controllers: [],
  providers: [],
})
export class MainModule {}
