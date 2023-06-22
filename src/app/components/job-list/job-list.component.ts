import { Component, OnInit } from '@angular/core';
import { IJobPosition } from 'models/personnel.model';
import { JobPositionService } from 'src/app/services/job-position.service';
import jobPositions from 'src/app/services/mocks/Job.mock';

@Component({
  selector: 'app-job-list',
  templateUrl: 'job-list.component.html',
  styleUrls: ['job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobs : IJobPosition[] = [] ;


  constructor(
    private jobService : JobPositionService
  ) { }

  async ngOnInit() {
    await this.jobService.saveJobs$(jobPositions).subscribe(
      (values) => {
        console.log('values JOB ', values)
      }
    )
  }

}
