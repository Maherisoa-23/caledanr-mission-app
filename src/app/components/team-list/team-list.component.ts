import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import { ITeam } from 'models/team';

@Component({
  selector: 'app-team-list',
  templateUrl: 'team-list.component.html',
  styleUrls: ['team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams : ITeam[] = []

  constructor(
    private teamService : TeamsService
  ) { }

  ngOnInit(): void {
    this.teamService.getTeam$().subscribe(
      (values) => {
        this.teams = values;
        console.log('les teams : ', this.teams)
      }
    )
  }

}
