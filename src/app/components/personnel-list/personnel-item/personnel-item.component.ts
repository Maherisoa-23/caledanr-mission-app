import { Component, Input, OnInit } from '@angular/core';
import { IPersonnel } from 'models/personnel.model';

@Component({
  selector: 'app-personnel-item',
  templateUrl: './personnel-item.component.html',
  styleUrls: ['./personnel-item.component.scss']
})
export class PersonnelItemComponent implements OnInit {

  @Input() personnel : IPersonnel | null = null;


  constructor() { }

  ngOnInit(): void {
  }

}
