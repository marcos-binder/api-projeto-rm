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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampanhasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const response_campanha_dto_1 = require("./dto/response-campanha.dto");
let CampanhasController = class CampanhasController {
    constructor(campanhasService) {
        this.campanhasService = campanhasService;
    }
    create(createCampanhaDto) {
        return this.campanhasService.create(createCampanhaDto);
    }
    findAll() {
        return this.campanhasService.findAll();
    }
    async getTotalDesembolso() {
        const total = await this.campanhasService.getTotalDesembolso();
        return { totalDesembolso: total };
    }
    findByTipo(tipo) {
        return this.campanhasService.findByTipo(tipo);
    }
    findByProjeto(numeroProjeto) {
        return this.campanhasService.findByProjeto(numeroProjeto);
    }
    findOne(id) {
        return this.campanhasService.findOne(id);
    }
    update(id, updateCampanhaDto) {
        return this.campanhasService.update(id, updateCampanhaDto);
    }
    remove(id) {
        return this.campanhasService.remove(id);
    }
};
exports.CampanhasController = CampanhasController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Criar uma nova campanha" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Campanha criada com sucesso",
        type: response_campanha_dto_1.ResponseCampanhaDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: "Conflito - ID da campanha já existe",
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: "Dados inválidos",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], CampanhasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Listar todas as campanhas" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de campanhas retornada com sucesso",
        type: [response_campanha_dto_1.ResponseCampanhaDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CampanhasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("total-desembolso"),
    (0, swagger_1.ApiOperation)({ summary: "Obter o total de desembolso de todas as campanhas" }),
    (0, swagger_1.ApiResponse)({
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
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampanhasController.prototype, "getTotalDesembolso", null);
__decorate([
    (0, common_1.Get)('por-tipo'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar campanhas por tipo' }),
    (0, swagger_1.ApiQuery)({
        name: 'tipo',
        description: 'Tipo da campanha para filtrar',
        example: 'Marketing Digital'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Campanhas filtradas por tipo',
        type: [response_campanha_dto_1.ResponseCampanhaDto],
    }),
    __param(0, (0, common_1.Query)('tipo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CampanhasController.prototype, "findByTipo", null);
__decorate([
    (0, common_1.Get)('por-projeto'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar campanhas por número do projeto' }),
    (0, swagger_1.ApiQuery)({
        name: 'numeroProjeto',
        description: 'Número do projeto para filtrar',
        example: 'PROJ001'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Campanhas filtradas por projeto',
        type: [response_campanha_dto_1.ResponseCampanhaDto],
    }),
    __param(0, (0, common_1.Query)('numeroProjeto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CampanhasController.prototype, "findByProjeto", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar uma campanha por ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID único da campanha',
        example: 'CAMP001'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Campanha encontrada',
        type: response_campanha_dto_1.ResponseCampanhaDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Campanha não encontrada',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CampanhasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Atualizar uma campanha" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        description: "ID único da campanha",
        example: "CAMP001",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Campanha atualizada com sucesso",
        type: response_campanha_dto_1.ResponseCampanhaDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: "Campanha não encontrada",
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: "Dados inválidos",
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Function]),
    __metadata("design:returntype", void 0)
], CampanhasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Deletar uma campanha' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID único da campanha',
        example: 'CAMP001'
    }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: 'Campanha deletada com sucesso',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Campanha não encontrada',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CampanhasController.prototype, "remove", null);
exports.CampanhasController = CampanhasController = __decorate([
    (0, swagger_1.ApiTags)("campanhas"),
    (0, common_1.Controller)("campanhas"),
    __metadata("design:paramtypes", [Function])
], CampanhasController);
//# sourceMappingURL=campanhas.controller.js.map