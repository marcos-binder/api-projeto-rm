import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { CampanhasService } from "./campanhas.service"
import { CampanhasController } from "./campanhas.controller"
import { Campanha, CampanhaSchema } from "./schemas/campanha.schema"

@Module({
  imports: [MongooseModule.forFeature([{ name: Campanha.name, schema: CampanhaSchema }])],
  controllers: [CampanhasController],
  providers: [CampanhasService],
})
export class CampanhasModule {}
