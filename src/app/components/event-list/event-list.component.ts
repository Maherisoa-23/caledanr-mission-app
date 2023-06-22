import { Component, OnInit } from '@angular/core';
import { IEvent } from 'models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events : IEvent[] = [];

  constructor(
    private eventService : EventService
  ) { }

  ngOnInit(): void {
    this.eventService.getEvents$().subscribe(
      (values) => {
        this.events = values;
      }
    )
  }

}
