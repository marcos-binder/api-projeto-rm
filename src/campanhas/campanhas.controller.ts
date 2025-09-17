import { Controller, Get, Post, Patch, Param, Delete, Query, HttpCode, HttpStatus } from "@nestjs/common"
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from "@nestjs/swagger"
import type { CampanhasService } from "./campanhas.service"
import type { CreateCampanhaDto } from "./dto/create-campanha.dto"
import type { UpdateCampanhaDto } from "./dto/update-campanha.dto"
import { ResponseCampanhaDto } from "./dto/response-campanha.dto"

@ApiTags("campanhas")
@Controller("campanhas")
export class CampanhasController {
  constructor(private readonly campanhasService: CampanhasService) {}

  @Post()
  @ApiOperation({ summary: "Criar uma nova campanha" })
  @ApiResponse({
    status: 201,
    description: "Campanha criada com sucesso",
    type: ResponseCampanhaDto,
  })
  @ApiResponse({
    status: 409,
    description: "Conflito - ID da campanha já existe",
  })
  @ApiResponse({
    status: 400,
    description: "Dados inválidos",
  })
  create(createCampanhaDto: CreateCampanhaDto) {
    return this.campanhasService.create(createCampanhaDto)
  }

  @Get()
  @ApiOperation({ summary: "Listar todas as campanhas" })
  @ApiResponse({
    status: 200,
    description: "Lista de campanhas retornada com sucesso",
    type: [ResponseCampanhaDto],
  })
  findAll() {
    return this.campanhasService.findAll()
  }

  @Get("total-desembolso")
  @ApiOperation({ summary: "Obter o total de desembolso de todas as campanhas" })
  @ApiResponse({
    status: 200,
    description: "Total de desembolso calculado com sucesso",
    schema: {
      type: "object",
      properties: {
        totalDesembolso: {
          type: "number",
          example: 150000.0,
        },
      },
    },
  })
  async getTotalDesembolso() {
    const total = await this.campanhasService.getTotalDesembolso()
    return { totalDesembolso: total }
  }

  @Get('por-tipo')
  @ApiOperation({ summary: 'Buscar campanhas por tipo' })
  @ApiQuery({
    name: 'tipo',
    description: 'Tipo da campanha para filtrar',
    example: 'Marketing Digital'
  })
  @ApiResponse({
    status: 200,
    description: 'Campanhas filtradas por tipo',
    type: [ResponseCampanhaDto],
  })
  findByTipo(@Query('tipo') tipo: string) {
    return this.campanhasService.findByTipo(tipo);
  }

  @Get('por-projeto')
  @ApiOperation({ summary: 'Buscar campanhas por número do projeto' })
  @ApiQuery({
    name: 'numeroProjeto',
    description: 'Número do projeto para filtrar',
    example: 'PROJ001'
  })
  @ApiResponse({
    status: 200,
    description: 'Campanhas filtradas por projeto',
    type: [ResponseCampanhaDto],
  })
  findByProjeto(@Query('numeroProjeto') numeroProjeto: string) {
    return this.campanhasService.findByProjeto(numeroProjeto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma campanha por ID' })
  @ApiParam({
    name: 'id',
    description: 'ID único da campanha',
    example: 'CAMP001'
  })
  @ApiResponse({
    status: 200,
    description: 'Campanha encontrada',
    type: ResponseCampanhaDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Campanha não encontrada',
  })
  findOne(@Param('id') id: string) {
    return this.campanhasService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Atualizar uma campanha" })
  @ApiParam({
    name: "id",
    description: "ID único da campanha",
    example: "CAMP001",
  })
  @ApiResponse({
    status: 200,
    description: "Campanha atualizada com sucesso",
    type: ResponseCampanhaDto,
  })
  @ApiResponse({
    status: 404,
    description: "Campanha não encontrada",
  })
  @ApiResponse({
    status: 400,
    description: "Dados inválidos",
  })
  update(@Param('id') id: string, updateCampanhaDto: UpdateCampanhaDto) {
    return this.campanhasService.update(id, updateCampanhaDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar uma campanha' })
  @ApiParam({
    name: 'id',
    description: 'ID único da campanha',
    example: 'CAMP001'
  })
  @ApiResponse({
    status: 204,
    description: 'Campanha deletada com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Campanha não encontrada',
  })
  remove(@Param('id') id: string) {
    return this.campanhasService.remove(id);
  }
}
