import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IEvent } from 'models/event';
import { ITeam } from 'models/team';
import { EventService } from 'src/app/services/event.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit {
  teams : ITeam[] = []

  eventForm: FormGroup;

  startDate = '';
  endDate = '';

  constructor(
    private formBuilder : FormBuilder,
    private eventService : EventService,
    private teamService : TeamsService,
    private route : Router
  ) { 
    this.eventForm = this.formBuilder.group({
			title: ['', [Validators.required]],
			start: ['', [Validators.required]],
			end: ['', [Validators.required]],
      description: ['', [Validators.required]],
      team : ['', [Validators.required]]
		});
  }

  get title(): FormControl<string> { return this.eventForm.get('title') as FormControl; }
  get start(): FormControl { return this.eventForm.get('start') as FormControl; }
  get end(): FormControl { return this.eventForm.get('end') as FormControl; }
  get description(): FormControl { return this.eventForm.get('description') as FormControl; }
  get team(): FormControl { return this.eventForm.get('team') as FormControl; }


  ngOnInit(): void {
    this.teamService.getTeam$().subscribe(
      (values) => {
        this.teams = values;
        console.log('les teams : ', this.teams)
      }
    )
  }

  openPicker(picker: any) {
    picker.open();
  }

  getTeam(teamName : string) : ITeam {
    for (let index = 0; index < this.teams.length; index++) {
      const element = this.teams[index];
      if (element.name == teamName){
        return element;
      }
    }
    return this.teams[this.teams.length-1];
  }

  onSubmitForm(){
    const event : IEvent = {
      title: this.title.value,
      start: this.start.value,
      end: this.end.value,
      team: this.getTeam(this.team.value),
      description : this.description.value,
      color : '#f97316'

    }
    this.eventService.addEvents$(event).subscribe(
      () => {
        console.log('event enregistre')
      }
    )

    this.route.navigate(['']);
  }

}
