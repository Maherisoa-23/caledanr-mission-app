import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import teams from '../services/mocks/team.mock';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  constructor(
    private teamService : TeamsService
  ) { }

  ngOnInit(): void {
    this.teamService.saveteam$(teams).subscribe(
      () => {
        console.log('team saved');
      }
    )
  }

}
