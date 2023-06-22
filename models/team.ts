import { IPersonnel } from "./personnel.model";

export interface ITeam {
	id?     : number;
    name    : string;
    personnal : IPersonnel[];
}