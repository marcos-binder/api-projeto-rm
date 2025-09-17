import { PartialType, ApiPropertyOptional } from "@nestjs/swagger"
import { CreateCampanhaDto } from "./create-campanha.dto"
import { IsString, IsOptional, IsNumber, IsDateString, Min } from "class-validator"

export class UpdateCampanhaDto extends PartialType(CreateCampanhaDto) {
  @ApiPropertyOptional({
    description: "Nome da campanha",
    example: "Campanha de Marketing Digital 2024 - Atualizada",
  })
  @IsString()
  @IsOptional()
  nomeCampanha?: string

  @ApiPropertyOptional({
    description: "Tipo da campanha",
    example: "Marketing Digital",
  })
  @IsString()
  @IsOptional()
  tipoCampanha?: string

  @ApiPropertyOptional({
    description: "Número da ação",
    example: "AC002",
  })
  @IsString()
  @IsOptional()
  numeroAcao?: string

  @ApiPropertyOptional({
    description: "Número do projeto",
    example: "PROJ002",
  })
  @IsString()
  @IsOptional()
  numeroProjeto?: string

  @ApiPropertyOptional({
    description: "Total de desembolso em reais",
    example: 75000.0,
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  totalDesembolso?: number

  @ApiPropertyOptional({
    description: "Data de início da campanha",
    example: "2024-02-01T00:00:00.000Z",
  })
  @IsDateString()
  @IsOptional()
  dataInicio?: Date

  @ApiPropertyOptional({
    description: "Data de finalização da campanha",
    example: "2024-11-30T23:59:59.000Z",
  })
  @IsDateString()
  @IsOptional()
  dataFinalizacao?: Date
}
