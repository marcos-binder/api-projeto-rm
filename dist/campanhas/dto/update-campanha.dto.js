"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCampanhaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_campanha_dto_1 = require("./create-campanha.dto");
const class_validator_1 = require("class-validator");
class UpdateCampanhaDto extends (0, swagger_1.PartialType)(create_campanha_dto_1.CreateCampanhaDto) {
}
exports.UpdateCampanhaDto = UpdateCampanhaDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Nome da campanha",
        example: "Campanha de Marketing Digital 2024 - Atualizada",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCampanhaDto.prototype, "nomeCampanha", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Tipo da campanha",
        example: "Marketing Digital",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCampanhaDto.prototype, "tipoCampanha", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Número da ação",
        example: "AC002",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCampanhaDto.prototype, "numeroAcao", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Número do projeto",
        example: "PROJ002",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCampanhaDto.prototype, "numeroProjeto", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Total de desembolso em reais",
        example: 75000.0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCampanhaDto.prototype, "totalDesembolso", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Data de início da campanha",
        example: "2024-02-01T00:00:00.000Z",
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateCampanhaDto.prototype, "dataInicio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Data de finalização da campanha",
        example: "2024-11-30T23:59:59.000Z",
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateCampanhaDto.prototype, "dataFinalizacao", void 0);
//# sourceMappingURL=update-campanha.dto.js.map