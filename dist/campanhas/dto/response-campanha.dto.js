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
exports.ResponseCampanhaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResponseCampanhaDto {
}
exports.ResponseCampanhaDto = ResponseCampanhaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID único da campanha (MongoDB _id)",
        example: "507f1f77bcf86cd799439011",
    }),
    __metadata("design:type", String)
], ResponseCampanhaDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Nome da campanha",
        example: "Campanha de Marketing Digital 2024",
    }),
    __metadata("design:type", String)
], ResponseCampanhaDto.prototype, "nomeCampanha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Tipo da campanha",
        example: "Marketing Digital",
    }),
    __metadata("design:type", String)
], ResponseCampanhaDto.prototype, "tipoCampanha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Número da ação",
        example: "AC001",
    }),
    __metadata("design:type", String)
], ResponseCampanhaDto.prototype, "numeroAcao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Número do projeto",
        example: "PROJ001",
    }),
    __metadata("design:type", String)
], ResponseCampanhaDto.prototype, "numeroProjeto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Total de desembolso em reais",
        example: 50000.0,
    }),
    __metadata("design:type", Number)
], ResponseCampanhaDto.prototype, "totalDesembolso", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Data de início da campanha",
        example: "2024-01-01T00:00:00.000Z",
    }),
    __metadata("design:type", Date)
], ResponseCampanhaDto.prototype, "dataInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Data de finalização da campanha",
        example: "2024-12-31T23:59:59.000Z",
    }),
    __metadata("design:type", Date)
], ResponseCampanhaDto.prototype, "dataFinalizacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Data de criação do registro",
        example: "2024-01-01T10:00:00.000Z",
    }),
    __metadata("design:type", Date)
], ResponseCampanhaDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Data de atualização do registro",
        example: "2024-01-01T10:00:00.000Z",
    }),
    __metadata("design:type", Date)
], ResponseCampanhaDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=response-campanha.dto.js.map