import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { JobListComponent } from './job-list/job-list.component';
import { TeamListComponent } from './team-list/team-list.component';

const routes: Routes = [
  { path: '', component:CalendarComponent},
  { path: 'calendar', component:CalendarComponent},
  { path: 'calendar/add-event', component:CalendarComponent},
  { path: 'personnel', component:PersonnelListComponent},
  { path: 'job', component:JobListComponent},
  { path: 'team', component:TeamListComponent},
  { path: 'not-found', component:FourOhFourComponent},
  { path: '**', redirectTo : 'not-found'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
