import type { Document } from "mongoose";
export type CampanhaDocument = Campanha & Document;
export declare class Campanha {
    id: string;
    nomeCampanha: string;
    tipoCampanha: string;
    numeroAcao: string;
    numeroProjeto: string;
    totalDesembolso: number;
    dataInicio: Date;
    dataFinalizacao: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const CampanhaSchema: import("mongoose").Schema<Campanha, import("mongoose").Model<Campanha, any, any, any, Document<unknown, any, Campanha, any, {}> & Campanha & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Campanha, Document<unknown, {}, import("mongoose").FlatRecord<Campanha>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Campanha> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
