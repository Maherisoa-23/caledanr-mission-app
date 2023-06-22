import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvent } from 'models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getEvents(): Observable<any> {
    console.log('donnee', this.httpClient.get<any>('../mocks/mock.json'));
    return this.httpClient.get<any>('../mocks/mock.json');
  }

  saveEvents( event : IEvent) {

  this.httpClient.post('https://calendar-app-c2037-default-rtdb.firebaseio.com/events.json', event)
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
