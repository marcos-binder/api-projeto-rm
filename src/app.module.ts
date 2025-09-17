import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { CampanhasModule } from "./campanhas/campanhas.module"

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/campanhas-db"), CampanhasModule],
})
export class AppModule {}
