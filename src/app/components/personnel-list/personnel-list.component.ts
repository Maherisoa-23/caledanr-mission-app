import { Component, OnInit } from '@angular/core';
import { IPersonnel } from 'models/personnel.model';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-personnel-list',
  templateUrl: 'personnel-list.component.html',
  styleUrls: ['personnel-list.component.scss']
})
export class PersonnelListComponent implements OnInit {
  
  private personnels : IPersonnel[] = [];

  constructor(
    private personnelService : PersonnelService
  ) { }

  ngOnInit() {
    this.personnelService.getPersonnel$().subscribe(
      (values) => {
        this.personnels = values;
      }
    )
  }

}
