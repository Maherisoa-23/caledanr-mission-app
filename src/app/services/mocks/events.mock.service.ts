import { IEvent } from "models/event";
import { MockServiceMixin } from "./common-mock.service"


export class EventsMockService extends MockServiceMixin<IEvent>
{
	constructor()
	{
		super();
		// feed the service
		// this._mockValues$.next(DISH_CATEGORIES);
	}
}






