"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Campanhas API")
        .setDescription("API para gerenciamento de campanhas")
        .setVersion("1.0")
        .addTag("campanhas")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api/docs", app, document);
    app.enableCors();
    await app.listen(5000);
    console.log("🚀 Servidor rodando na porta 5000");
    console.log("📚 Documentação Swagger disponível em: http://localhost:5000/api/docs");
}
bootstrap();
//# sourceMappingURL=main.js.map