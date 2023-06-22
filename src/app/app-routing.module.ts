import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './components/team-list/team-list.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { PersonnelListComponent } from './components/personnel-list/personnel-list.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component:LandingPageComponent},
  { path: 'calendar', component:CalendarComponent},
  { path: 'calendar/add-event', component:CalendarComponent},
  { path: 'personnel', component:PersonnelListComponent},
  { path: 'job', component:JobListComponent},
  { path: 'team', component:TeamListComponent},
  { path: 'event', component:EventListComponent},
  { path: 'not-found', component:FourOhFourComponent},
  { path: '**', redirectTo : 'not-found'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
