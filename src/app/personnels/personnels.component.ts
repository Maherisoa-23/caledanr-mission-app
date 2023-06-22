import { Component, Inject, OnInit} from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { IPersonnel } from 'models/personnel.model';
import { ICommonCrudService } from '../services/common.service';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.scss']
})
export class PersonnelsComponent implements OnInit {

  constructor(
	@Inject(PersonnelService) 
	private readonly personnelService : ICommonCrudService<IPersonnel>
  ) { }

  ngOnInit(): void {
  }

}
