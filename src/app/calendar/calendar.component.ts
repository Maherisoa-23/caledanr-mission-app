import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core';
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

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {
	calendarVisible = true;

	currentEvents: EventApi[] = [];

	calendarOptions: CalendarOptions;

	events: IEvent[] = [];
	eventSubscription: Subscription;

	constructor(
		public dialog: MatDialog,
		private eventService: EventService
	) {
		this.eventSubscription = this.eventService.eventsSubject.subscribe(
			(events: IEvent[]) => {
				this.events = events;
			}
		);

		this.eventService.emitEvents();


		this.calendarOptions = {
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
			// initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
			initialEvents: [{ title: 'Meeting', start: new Date() }],
			weekends: true,
			editable: true,
			selectable: true,
			selectMirror: true,
			dayMaxEvents: true,
			eventMouseEnter : this.onHoverEnter.bind(this),
			eventMouseLeave : this.onHoverLeave.bind(this)
			// select: this.handleDateSelect.bind(this),
			// eventClick: this.handleEventClick.bind(this),
			// eventsSet: this.handleEvents.bind(this)
		};
	}
	ngOnDestroy(): void {
		this.eventSubscription.unsubscribe();
	}

	ngOnInit(): void {
		this.eventService.getEvents();
	}

	onHoverEnter(...args: any[])
	{
		console.log(args)
	}

	onHoverLeave(...args: any[])
	{

	}
}
