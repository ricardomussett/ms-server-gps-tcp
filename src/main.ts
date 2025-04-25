import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { MainModule } from './main.module'

async function bootstrap() {
  const app = await NestFactory.create(MainModule)

  const config = new DocumentBuilder()
    .setTitle('GPS TCP Server API')
    .setDescription('API para servidor TCP de GPS')
    .setVersion('1.0')
    .addTag('gps')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
