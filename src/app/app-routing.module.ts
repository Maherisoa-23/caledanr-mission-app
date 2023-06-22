import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { PersonnelsComponent } from './personnels/personnels.component';

const routes: Routes = [
	{ path: '', component: CalendarComponent },
	{ path: 'calendar', component: CalendarComponent },
	{ path: 'calendar/add-event', component: CalendarComponent },
	{ path: 'not-found', component: FourOhFourComponent },
	{
		path: 'personnels', 
		component: PersonnelsComponent,
		pathMatch : 'full'
	},
	{ path: '**', redirectTo: 'not-found' },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
