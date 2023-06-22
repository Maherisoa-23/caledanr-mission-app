import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';
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

  saveEvents() {
    const events: IEvent[] = [
      {
        id: 1,
        title: 'Réunion équipe A',
        start: '2023-06-23T10:00:00',
        end: '2023-06-23T12:00:00',
        mission: {
          name: 'Mission 1',
          description: 'Description de la mission 1',
          team: {
            name: 'Équipe A',
            members: [
              { id: 1, name: 'John Doe' },
              { id: 2, name: 'Jane Smith' }
            ]
          },
          color: '#ff0000'
        },
        color: '#ffffff'
      },
      {
        id: 2,
        title: 'Réunion équipe B',
        start: '2023-06-25T14:00:00',
        end: '2023-06-25T16:00:00',
        mission: {
          name: 'Mission 2',
          description: 'Description de la mission 2',
          team: {
            name: 'Équipe B',
            members: [
              { id: 3, name: 'Mike Johnson' },
              { id: 4, name: 'Sarah Lee' }
            ]
          },
          color: '#00ff00'
        },
        color: '#ffffff'
      },
      {
        id: 3,
        title: 'Formation',
        start: '2023-06-27T09:00:00',
        end: '2023-06-27T17:00:00',
        mission: {
          name: 'Mission 3',
          description: 'Description de la mission 3',
          team: {
            name: 'Équipe C',
            members: [
              { id: 5, name: 'Robert Williams' },
              { id: 6, name: 'Emily Brown' }
            ]
          },
          color: '#0000ff'
        },
        color: '#ffffff'
      },
      {
        id: 4,
        title: 'Présentation',
        start: '2023-06-28T13:00:00',
        end: '2023-06-28T15:00:00',
        mission: {
          name: 'Mission 4',
          description: 'Description de la mission 4',
          team: {
            name: 'Équipe D',
            members: [
              { id: 7, name: 'Michael Davis' },
              { id: 8, name: 'Olivia Miller' }
            ]
          },
          color: '#ff00ff'
        },
        color: '#ffffff'
      },
      {
        id: 5,
        title: 'Réunion équipe E',
        start: '2023-06-29T11:00:00',
        end: '2023-06-29T12:30:00',
        mission: {
          name: 'Mission 5',
          description: 'Description de la mission 5',
          team: {
            name: 'Équipe E',
            members: [
              { id: 9, name: 'James Wilson' },
              { id: 10, name: 'Sophia Taylor' }
            ]
          },
          color: '#ffff00'
        },
        color: '#ffffff'
      }
    ];

  this.httpClient.put('https://calendar-app-c2037-default-rtdb.firebaseio.com/events.json', events)
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
