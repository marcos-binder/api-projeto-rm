import { ApiProperty } from "@nestjs/swagger"

export class ResponseCampanhaDto {
  @ApiProperty({
    description: "ID único da campanha",
    example: "CAMP001",
  })
  id: string

  @ApiProperty({
    description: "Nome da campanha",
    example: "Campanha de Marketing Digital 2024",
  })
  nomeCampanha: string

  @ApiProperty({
    description: "Tipo da campanha",
    example: "Marketing Digital",
  })
  tipoCampanha: string

  @ApiProperty({
    description: "Número da ação",
    example: "AC001",
  })
  numeroAcao: string

  @ApiProperty({
    description: "Número do projeto",
    example: "PROJ001",
  })
  numeroProjeto: string

  @ApiProperty({
    description: "Total de desembolso em reais",
    example: 50000.0,
  })
  totalDesembolso: number

  @ApiProperty({
    description: "Data de início da campanha",
    example: "2024-01-01T00:00:00.000Z",
  })
  dataInicio: Date

  @ApiProperty({
    description: "Data de finalização da campanha",
    example: "2024-12-31T23:59:59.000Z",
  })
  dataFinalizacao: Date

  @ApiProperty({
    description: "Data de criação do registro",
    example: "2024-01-01T10:00:00.000Z",
  })
  createdAt: Date

  @ApiProperty({
    description: "Data de atualização do registro",
    example: "2024-01-01T10:00:00.000Z",
  })
  updatedAt: Date
}
