import { NestFactory } from "@nestjs/core"
import { ValidationPipe } from "@nestjs/common"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
import { AppModule } from "./app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Configuração global de validação
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle("Campanhas API")
    .setDescription("API para gerenciamento de campanhas")
    .setVersion("1.0")
    .addTag("campanhas")
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api/docs", app, document)

  // Configuração de CORS
  app.enableCors()

  await app.listen(5000)
  console.log("🚀 Servidor rodando na porta 5000")
  console.log("📚 Documentação Swagger disponível em: http://localhost:5000/api/docs")
}

bootstrap()
