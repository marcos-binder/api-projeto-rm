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
exports.CampanhasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const campanha_schema_1 = require("./schemas/campanha.schema");
let CampanhasService = class CampanhasService {
    constructor(campanhaModel) {
        this.campanhaModel = campanhaModel;
    }
    async create(createCampanhaDto) {
        try {
            const createdCampanha = new this.campanhaModel(createCampanhaDto);
            return await createdCampanha.save();
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException("Já existe uma campanha com este ID");
            }
            throw error;
        }
    }
    async findAll() {
        return this.campanhaModel.find().exec();
    }
    async findOne(id) {
        const campanha = await this.campanhaModel.findOne({ _id: id }).exec();
        if (!campanha) {
            throw new common_1.NotFoundException(`Campanha com ID ${id} não encontrada`);
        }
        return campanha;
    }
    async update(id, updateCampanhaDto) {
        const updatedCampanha = await this.campanhaModel
            .findOneAndUpdate({ _id: id }, updateCampanhaDto, { new: true })
            .exec();
        if (!updatedCampanha) {
            throw new common_1.NotFoundException(`Campanha com ID ${id} não encontrada`);
        }
        return updatedCampanha;
    }
    async remove(id) {
        const result = await this.campanhaModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Campanha com ID ${id} não encontrada`);
        }
    }
    async findByTipo(tipo) {
        return this.campanhaModel.find({ tipoCampanha: tipo }).exec();
    }
    async findByProjeto(numeroProjeto) {
        return this.campanhaModel.find({ numeroProjeto }).exec();
    }
    async getTotalDesembolso() {
        const result = await this.campanhaModel.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: "$totalDesembolso" },
                },
            },
        ]);
        return result.length > 0 ? result[0].total : 0;
    }
};
exports.CampanhasService = CampanhasService;
exports.CampanhasService = CampanhasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(campanha_schema_1.Campanha.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CampanhasService);
//# sourceMappingURL=campanhas.service.js.map