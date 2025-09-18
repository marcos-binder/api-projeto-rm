import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import type { Document } from "mongoose"

export type CampanhaDocument = Campanha & Document

@Schema({ timestamps: true })
export class Campanha {
  @Prop({ required: true })
  nomeCampanha: string

  @Prop({ required: true })
  tipoCampanha: string

  @Prop({ required: true })
  numeroAcao: string

  @Prop({ required: true })
  numeroProjeto: string

  @Prop({ required: true, type: Number })
  totalDesembolso: number

  @Prop({ required: true })
  dataInicio: Date

  @Prop({ required: true })
  dataFinalizacao: Date

  @Prop({ default: Date.now })
  createdAt: Date

  @Prop({ default: Date.now })
  updatedAt: Date
}

export const CampanhaSchema = SchemaFactory.createForClass(Campanha)

// Middleware para atualizar o campo updatedAt automaticamente
CampanhaSchema.pre("save", function (next) {
  this.updatedAt = new Date()
  next()
})

CampanhaSchema.pre("findOneAndUpdate", function (next) {
  this.set({ updatedAt: new Date() })
  next()
})
