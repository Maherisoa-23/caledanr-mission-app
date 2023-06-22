import { IMission } from "./mission";
import { ITeam } from "./team";

export interface IEvent {
	id?         : number;
    title       : string,
    start       : string, //TODO should be date
    end         : string,
    mission?    : IMission
}