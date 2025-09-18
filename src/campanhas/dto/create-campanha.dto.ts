import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsNumber, IsDateString, Min } from "class-validator"

export class CreateCampanhaDto {
  @ApiProperty({
    description: "Nome da campanha",
    example: "Campanha de Marketing Digital 2024",
  })
  @IsString()
  @IsNotEmpty()
  nomeCampanha: string

  @ApiProperty({
    description: "Tipo da campanha",
    example: "Marketing Digital",
  })
  @IsString()
  @IsNotEmpty()
  tipoCampanha: string

  @ApiProperty({
    description: "Número da ação",
    example: "AC001",
  })
  @IsString()
  @IsNotEmpty()
  numeroAcao: string

  @ApiProperty({
    description: "Número do projeto",
    example: "PROJ001",
  })
  @IsString()
  @IsNotEmpty()
  numeroProjeto: string

  @ApiProperty({
    description: "Total de desembolso em reais",
    example: 50000.0,
  })
  @IsNumber()
  @Min(0)
  totalDesembolso: number

  @ApiProperty({
    description: "Data de início da campanha",
    example: "2024-01-01T00:00:00.000Z",
  })
  @IsDateString()
  dataInicio: Date

  @ApiProperty({
    description: "Data de finalização da campanha",
    example: "2024-12-31T23:59:59.000Z",
  })
  @IsDateString()
  dataFinalizacao: Date
}
