import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { CampanhasModule } from "./campanhas/campanhas.module"
import { ConfigModule, ConfigService } from "@nestjs/config"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna o ConfigModule disponível globalmente
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>("MONGODB_URI"),
      }),
      inject: [ConfigService],
    }),
    CampanhasModule,
  ],
})
export class AppModule {}