import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './calendar/calendar.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AddEventComponent } from './calendar/add-event/add-event.component';
import { MatDialogModule } from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';

const materialModule = [
  MatButtonModule,
  MatDialogModule
]
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    FourOhFourComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    materialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
