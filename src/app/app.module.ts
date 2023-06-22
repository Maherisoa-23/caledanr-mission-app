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
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { PersonnelItemComponent } from './personnel-list/personnel-item/personnel-item.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobItemComponent } from './job-list/job-item/job-item.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamItemComponent } from './team-list/team-item/team-item.component';


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
    TeamItemComponent
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
