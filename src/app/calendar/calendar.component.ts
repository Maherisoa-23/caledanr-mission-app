import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import { INITIAL_EVENTS, createEventId } from './event-utils';
import { AddEventComponent } from './add-event/add-event.component';
import { EventService } from '../services/event.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IEvent } from 'models/event';
import { Router } from '@angular/router';
import { CommonCrudService } from '../services/common.service';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
	calendarVisible = true;

	currentEvents: EventApi[] = [];

	_calendarOptions$ : BehaviorSubject<CalendarOptions>;

	calendarDefaultOption : CalendarOptions;
	events: IEvent[] = [];


	constructor(
		public dialog        : MatDialog,
		@Inject(EventService) private eventService : CommonCrudService<IEvent>,
		private readonly router : Router,
	) {
		

		this.calendarDefaultOption = {
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
			initialEvents: [
				// { title: 'Meeting', start: new Date() }
			],
			weekends: true,
			editable: true,
			selectable: true,
			selectMirror: true,
			dayMaxEvents: true,
			eventMouseEnter : this.onHoverEnter.bind(this),
			eventMouseLeave : this.onHoverLeave.bind(this),
			// select: this.handleDateSelect.bind(this),
			eventClick: this.onClick.bind(this),
			// eventsSet: this.handleEvents.bind(this)
		};
		this._calendarOptions$ = new BehaviorSubject<CalendarOptions>(this.calendarDefaultOption);
	}

	ngOnInit(): void {
		this.eventService.all$().subscribe(events => {
			this.events = events;
			console.log(events);
		})
	}

	onHoverEnter(...args: any[])
	{
		console.log(args)
	}

	onHoverLeave(...args: any[])
	{

	}
	onClick(...args: any[])
	{
		console.log('click, ', args);
		// this.router.navigate(['details'])
	}

	addEvent()
	{
		
	}

	get calendarOptions$()
	{
		return this._calendarOptions$.asObservable();
	}

}


