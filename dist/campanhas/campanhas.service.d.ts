import type { Model } from "mongoose";
import type { CampanhaDocument } from "./schemas/campanha.schema";
import type { CreateCampanhaDto } from "./dto/create-campanha.dto";
import type { UpdateCampanhaDto } from "./dto/update-campanha.dto";
export declare class CampanhasService {
    private campanhaModel;
    constructor(campanhaModel: Model<CampanhaDocument>);
    create(createCampanhaDto: CreateCampanhaDto): Promise<CampanhaDocument>;
    findAll(): Promise<CampanhaDocument[]>;
    findOne(id: string): Promise<CampanhaDocument>;
    update(id: string, updateCampanhaDto: UpdateCampanhaDto): Promise<CampanhaDocument>;
    remove(id: string): Promise<void>;
    findByTipo(tipo: string): Promise<CampanhaDocument[]>;
    findByProjeto(numeroProjeto: string): Promise<CampanhaDocument[]>;
    getTotalDesembolso(): Promise<number>;
}
