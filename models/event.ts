import { ITeam } from "./team";

export interface IEvent {
    title       : string,
    start       : string, //TODO should be date
    end         : string,
    team        : ITeam,
    color       : string,
    description : string
}