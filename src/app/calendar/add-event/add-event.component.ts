import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddEventComponent>,
    private formBuilder : FormBuilder
  ) { 
    this.eventForm = this.formBuilder.group({
			name: ['', [Validators.required, Validators.minLength(5)]],
			description: ['', [Validators.required, Validators.minLength(10)]],
			remarks: [''],
			reference: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
			category: [null, [Validators.required]], // ToBe: iCategory
			price: [null, [Validators.min(100)]],
			buyingPrice: [null, [Validators.min(100)]],
			quantity: [1, [Validators.min(1)]],
			image: [null],
			newGroup: [null], // ToBe : : iArticleGroup
			group: [{ value: '', disabled: false }] // ToBe: iArticle Group
		});
  }

  ngOnInit(): void {
  }

}
