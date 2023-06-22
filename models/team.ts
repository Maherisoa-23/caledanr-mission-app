import { IMember } from "./member";

export interface ITeam {
	id?     : number;
    name    : string;
    members : IMember[];
}