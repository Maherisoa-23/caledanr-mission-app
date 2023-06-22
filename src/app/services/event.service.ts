import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription, catchError, map, tap, throwError } from 'rxjs';
import { IEvent } from 'models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events : any[] = [];
  eventsSubject = new Subject<any[]>();

  emitEvents() {
    this.eventsSubject.next(this.events.slice());
  }

  addEvents(event : IEvent) {
    this.events.push(event);
    this.emitEvents();
  }


  constructor(
    private httpClient: HttpClient
  ) { }

  getEvents$(): Observable<IEvent[]> {
    return this.httpClient.get<IEvent[]>('https://calendar-app-c2037-default-rtdb.firebaseio.com/events.json')
		.pipe(
			catchError((error: Error) => {
				console.error('[ErrorGettingEvents]',  error);
				return throwError (()=> error)
			}),
			tap((events) => {
				this.events = events;
				this.emitEvents();
			})
		);
  }

  saveEvents$(event: IEvent[]) : Observable<void>
  {
	return this.httpClient
				.put('https://calendar-app-c2037-default-rtdb.firebaseio.com/events.json', event)
				.pipe(
					map(_ => {})
				)
  }



}
