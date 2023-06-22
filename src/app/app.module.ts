import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { MatDialogModule } from '@angular/material/dialog';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamItemComponent } from './components/team-list/team-item/team-item.component';
import { AddEventComponent } from './components/calendar/add-event/add-event.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { JobItemComponent } from './components/job-list/job-item/job-item.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { PersonnelItemComponent } from './components/personnel-list/personnel-item/personnel-item.component';
import { PersonnelListComponent } from './components/personnel-list/personnel-list.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventItemComponent } from './components/event-list/event-item/event-item.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


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
    PersonnelListComponent,
    PersonnelItemComponent,
    JobListComponent,
    JobItemComponent,
    TeamListComponent,
    TeamItemComponent,
    EventListComponent,
    EventItemComponent,
    LandingPageComponent
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
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
