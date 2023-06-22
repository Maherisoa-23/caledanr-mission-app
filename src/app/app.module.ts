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
    AddEventComponent
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
