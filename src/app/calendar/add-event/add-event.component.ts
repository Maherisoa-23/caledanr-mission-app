import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { 
    this.eventForm = this.formBuilder.group({
			title: ['', [Validators.required]],
			start: ['', [Validators.required]],
			end: ['', [Validators.required]],
      missionName:  ['', [Validators.required]],
      missionDescription: ['', [Validators.required]],
      team : ['', [Validators.required]]
		});
  }

  get title(): FormControl { return this.eventForm.get('title') as FormControl; }
  get start(): FormControl { return this.eventForm.get('start') as FormControl; }
  get end(): FormControl { return this.eventForm.get('end') as FormControl; }
  get missionName(): FormControl { return this.eventForm.get('missionName') as FormControl; }
  get missionDescription(): FormControl { return this.eventForm.get('missionDescription') as FormControl; }
  get team(): FormControl { return this.eventForm.get('team') as FormControl; }


  ngOnInit(): void {
  }

  onSubmitForm(){
    console.log('form value : ', this.eventForm.value)
  }

}
