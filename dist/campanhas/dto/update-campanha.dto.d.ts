import { CreateCampanhaDto } from "./create-campanha.dto";
declare const UpdateCampanhaDto_base: import("@nestjs/common").Type<Partial<CreateCampanhaDto>>;
export declare class UpdateCampanhaDto extends UpdateCampanhaDto_base {
    nomeCampanha?: string;
    tipoCampanha?: string;
    numeroAcao?: string;
    numeroProjeto?: string;
    totalDesembolso?: number;
    dataInicio?: Date;
    dataFinalizacao?: Date;
}
export {};
