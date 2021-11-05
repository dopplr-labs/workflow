import { resolve } from 'path'
import { writeFileSync } from 'fs'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

const yaml = require('js-yaml')

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder().setTitle('Workflow API').build()
  const document = SwaggerModule.createDocument(app, config)
  const outputPath = resolve(process.cwd(), 'spec.yaml')
  writeFileSync(outputPath, yaml.dump(document), 'utf8')
  SwaggerModule.setup('api', app, document)

  await app.listen(3001)
}
bootstrap()
