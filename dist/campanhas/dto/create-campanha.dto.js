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
exports.CreateCampanhaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCampanhaDto {
}
exports.CreateCampanhaDto = CreateCampanhaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Nome da campanha",
        example: "Campanha de Marketing Digital 2024",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCampanhaDto.prototype, "nomeCampanha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Tipo da campanha",
        example: "Marketing Digital",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCampanhaDto.prototype, "tipoCampanha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Número da ação",
        example: "AC001",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCampanhaDto.prototype, "numeroAcao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Número do projeto",
        example: "PROJ001",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCampanhaDto.prototype, "numeroProjeto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Total de desembolso em reais",
        example: 50000.0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateCampanhaDto.prototype, "totalDesembolso", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Data de início da campanha",
        example: "2024-01-01T00:00:00.000Z",
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateCampanhaDto.prototype, "dataInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Data de finalização da campanha",
        example: "2024-12-31T23:59:59.000Z",
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateCampanhaDto.prototype, "dataFinalizacao", void 0);
//# sourceMappingURL=create-campanha.dto.js.map