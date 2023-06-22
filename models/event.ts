import { IMission } from "./mission";
import { ITeam } from "./team";

export interface IEvent {
	id         : number;
    title       : string,
    start       : Date, 
    end         : Date,
}