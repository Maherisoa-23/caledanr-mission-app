import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { IPersonnel } from 'models/personnel.model';
import personnel from '../services/mocks/personnel.mock';

@Component({
  selector: 'app-personnel-list',
  templateUrl: './personnel-list.component.html',
  styleUrls: ['./personnel-list.component.scss']
})
export class PersonnelListComponent implements OnInit {
  
  private personnels : IPersonnel[] = [];

  constructor(
    private personnelService : PersonnelService
  ) { }

  async ngOnInit() {
  }

}
