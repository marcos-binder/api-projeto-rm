import type { CampanhasService } from "./campanhas.service";
import type { CreateCampanhaDto } from "./dto/create-campanha.dto";
import type { UpdateCampanhaDto } from "./dto/update-campanha.dto";
export declare class CampanhasController {
    private readonly campanhasService;
    constructor(campanhasService: CampanhasService);
    create(createCampanhaDto: CreateCampanhaDto): Promise<import("./schemas/campanha.schema").CampanhaDocument>;
    findAll(): Promise<import("./schemas/campanha.schema").CampanhaDocument[]>;
    getTotalDesembolso(): Promise<{
        totalDesembolso: number;
    }>;
    findByTipo(tipo: string): Promise<import("./schemas/campanha.schema").CampanhaDocument[]>;
    findByProjeto(numeroProjeto: string): Promise<import("./schemas/campanha.schema").CampanhaDocument[]>;
    findOne(id: string): Promise<import("./schemas/campanha.schema").CampanhaDocument>;
    update(id: string, updateCampanhaDto: UpdateCampanhaDto): Promise<import("./schemas/campanha.schema").CampanhaDocument>;
    remove(id: string): Promise<void>;
}
