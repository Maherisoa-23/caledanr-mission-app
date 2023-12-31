import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './components/team-list/team-list.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { PersonnelListComponent } from './components/personnel-list/personnel-list.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AddEventComponent } from './components/calendar/add-event/add-event.component';
import { EventAddComponent } from './components/event-list/event-add/event-add.component';

const routes: Routes = [
  { path: '', component:LandingPageComponent},
  { path: 'calendar', component:CalendarComponent},
  { path: 'calendar/add-event', component:CalendarComponent},
  { path: 'personnel', component:PersonnelListComponent},
  { path: 'job', component:JobListComponent},
  { path: 'team', component:TeamListComponent},
  { path: 'event', component:EventListComponent},
  { path: 'event/add', component:EventAddComponent},
  { path: 'not-found', component:FourOhFourComponent},
  {
	  path: 'personnels', 
	  component: PersonnelsComponent,
	  pathMatch : 'full'
  },
  {
	  path : 'login',
	  component : LoginComponent,
  },
  { path: '**', redirectTo: 'not-found' },
  { path: '**', redirectTo : 'not-found'},
]
import { CalendarComponent } from './calendar/calendar.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { PersonnelsComponent } from './personnels/personnels.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
