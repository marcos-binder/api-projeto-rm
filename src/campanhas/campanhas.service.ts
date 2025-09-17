import { Injectable, NotFoundException, ConflictException } from "@nestjs/common"
import type { Model } from "mongoose"
import type { CampanhaDocument } from "./schemas/campanha.schema"
import type { CreateCampanhaDto } from "./dto/create-campanha.dto"
import type { UpdateCampanhaDto } from "./dto/update-campanha.dto"

@Injectable()
export class CampanhasService {
  private campanhaModel: Model<CampanhaDocument>

  constructor(campanhaModel: Model<CampanhaDocument>) {
    this.campanhaModel = campanhaModel
  }

  async create(createCampanhaDto: CreateCampanhaDto): Promise<CampanhaDocument> {
    try {
      const createdCampanha = new this.campanhaModel(createCampanhaDto)
      return await createdCampanha.save()
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException("Já existe uma campanha com este ID")
      }
      throw error
    }
  }

  async findAll(): Promise<CampanhaDocument[]> {
    return this.campanhaModel.find().exec()
  }

  async findOne(id: string): Promise<CampanhaDocument> {
    const campanha = await this.campanhaModel.findOne({ _id: id }).exec()
    if (!campanha) {
      throw new NotFoundException(`Campanha com ID ${id} não encontrada`)
    }
    return campanha
  }

  async update(id: string, updateCampanhaDto: UpdateCampanhaDto): Promise<CampanhaDocument> {
    const updatedCampanha = await this.campanhaModel
      .findOneAndUpdate({ _id: id }, updateCampanhaDto, { new: true })
      .exec()

    if (!updatedCampanha) {
      throw new NotFoundException(`Campanha com ID ${id} não encontrada`)
    }

    return updatedCampanha
  }

  async remove(id: string): Promise<void> {
    const result = await this.campanhaModel.deleteOne({ _id: id }).exec()
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Campanha com ID ${id} não encontrada`)
    }
  }

  async findByTipo(tipo: string): Promise<CampanhaDocument[]> {
    return this.campanhaModel.find({ tipoCampanha: tipo }).exec()
  }

  async findByProjeto(numeroProjeto: string): Promise<CampanhaDocument[]> {
    return this.campanhaModel.find({ numeroProjeto }).exec()
  }

  async getTotalDesembolso(): Promise<number> {
    const result = await this.campanhaModel.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$totalDesembolso" },
        },
      },
    ])

    return result.length > 0 ? result[0].total : 0
  }
}
