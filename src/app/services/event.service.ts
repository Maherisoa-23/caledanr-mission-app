import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';
import { IEvent } from 'models/event';

@Injectable()
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

  getEvents() {
    this.httpClient.get<any[]>('https://calendar-app-c2037-default-rtdb.firebaseio.com/events.json')
    .subscribe(
      (values) => {
        this.events = values;
        this.emitEvents();
      },
      (error) => {
        console.log('Erreur de get ',  error)
      }
    )
  }

  saveEvents( event : IEvent) {

  this.httpClient.put('https://calendar-app-c2037-default-rtdb.firebaseio.com/events.json', event)
  .subscribe(
    () => {
      console.log('enregistrement termine');
    },
    (error) => {
      console.log('erreur de sauvegarde', error);
    }
  )
  }

  

}
