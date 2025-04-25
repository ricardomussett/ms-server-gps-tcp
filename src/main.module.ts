import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CoreModule } from './core/core.module'
import { AppModule } from './app/app.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CoreModule,
    AppModule,
  ],
  controllers: [],
  providers: [],
})
export class MainModule {}
