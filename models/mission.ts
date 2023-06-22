import { ITeam } from "./team";

export interface IMission {
    name        : string,
    description : string,
    team        : ITeam
}