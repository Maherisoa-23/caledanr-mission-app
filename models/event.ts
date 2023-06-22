import { IMission } from "./mission";
import { ITeam } from "./team";

export interface IEvent {
    title       : string,
    start       : string, //TODO should be date
    end         : string,
    mission?     : IMission
}