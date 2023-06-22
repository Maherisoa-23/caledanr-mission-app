import { IEvent } from "models/event";
import { MockServiceMixin } from "./common-mock.service"


export class EventsMockService extends MockServiceMixin<IEvent>
{
	constructor()
	{
		super();
		// feed the service
		this._mockValues$.next(EVENT_FEED.map(
			(v: any) => {
				v.start = new Date(v.start),
				v.end = new Date(v.end);
				return v as IEvent
			}
		));
	}
}


const EVENT_FEED: any = [
	{
		"id": 1,
		"title": "Meeting",
		"start": "2023-06-23T09:00:00Z",
		"end": "2023-06-23T10:00:00Z",
		"team": "Marketing"
	  },
	  {
		"id": 2,
		"title": "Lunch Break",
		"start": "2023-06-23T12:00:00Z",
		"end": "2023-06-23T13:00:00Z",
		"team": "All"
	  },
	  {
		"id": 3,
		"title": "Conference",
		"start": "2023-06-24T10:00:00Z",
		"end": "2023-06-24T17:00:00Z",
		"team": "Sales"
	  },
	  {
		"id": 4,
		"title": "Birthday Party",
		"start": "2023-06-25T19:00:00Z",
		"end": "2023-06-25T22:00:00Z",
		"team": "All"
	  },
]



