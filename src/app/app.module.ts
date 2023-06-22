import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './calendar/calendar.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AddEventComponent } from './calendar/add-event/add-event.component';
import { MatDialogModule } from '@angular/material/dialog';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TeamsService } from './services/teams.service';
import { TeamsMockService } from './services/mocks/teams.mock.service';
import { PersonnelMockService } from './services/mocks/personnel.mock.service';
import { PersonnelService } from './services/personnel.service';
import { JobPositionMockService } from './services/mocks/job-position.mock.service';
import { JobPositionService } from './services/job-position.service';
import { PersonnelsComponent } from './personnels/personnels.component';
import { LoginComponent } from './login/login.component';
import { EventsMockService } from './services/mocks/events.mock.service';
import { EventService } from './services/event.service';


const materialModule = [
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule, 
  MatInputModule,
  MatSelectModule
]
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    FourOhFourComponent,
    AddEventComponent,
    PersonnelsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    materialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
	{
		provide : TeamsService,
		useFactory : () => {
			let teamsService = new TeamsMockService();
			//TODO preload datas

			return teamsService;
		},
		deps : []
	},
	{
		provide : PersonnelService,
		useFactory : () => {
			let personnelService = new PersonnelMockService();
			// TODO preload datas

			return personnelService;
		}
	},
	{
		provide : JobPositionService,
		useFactory : () => {
			let jobPositionService = new JobPositionMockService();
			// TODO preload datas

			return jobPositionService;
		}
	},
	{
		provide : EventService, 
		useFactory : () => {
			let eventService = new EventsMockService();
			// TODO preload datas
			
			return eventService;
		}
	}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
