import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg, EventInput } from '@fullcalendar/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


import { INITIAL_EVENTS, createEventId } from './event-utils';
import { AddEventComponent } from './add-event/add-event.component';
import { EventService } from '../services/event.service';
import { Subscription } from 'rxjs';
import { IEvent } from 'models/event';
import events from '../services/mocks/event.mock';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {
  calendarVisible = true;

  currentEvents: EventApi[] = [];

  events: IEvent[] = [];
  eventSubscription: Subscription;

  initialEvent: EventInput[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    public dialog: MatDialog,
    private eventService: EventService
  ) {
    this.eventSubscription = this.eventService.eventsSubject.subscribe(
      (events: IEvent[]) => {
        this.events = events;
      }
    );
    this.eventService.emitEvents();
  }

  ngOnInit() {

    this.eventService.getEvents$().subscribe(
      (values) => {
        this.events = values;
        console.log('izy : ', this.events)

      }
    )
  }


  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: this.initialEvent, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
  };

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }

  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddEventComponent, {
      width: '100%',
      height: '20rem',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  formatData(events: IEvent[]) {
    for (let index = 0; index < events.length; index++) {
      const element = events[index];
      this.initialEvent.push(
        {
          id: element.id.toString(),
          title: element.title,
          start: new Date(element.start),
          end: new Date(element.end),
        }
      )
    }
  }
}
