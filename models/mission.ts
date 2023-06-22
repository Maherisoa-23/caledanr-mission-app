import { ITeam } from "./team";

export interface IMission {
	id?         : number;
    name        : string,
    description : string,
    team        : ITeam,
    color       : string
}