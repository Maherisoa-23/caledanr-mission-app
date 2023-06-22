import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription, catchError, map, tap, throwError } from 'rxjs';
import { ITeam } from 'models/team';

@Injectable({
    providedIn: 'root'
  })
export class TeamsService {
    private teams : ITeam[] = [];
  
  
    constructor(
      private httpClient: HttpClient
    ) { }
  
    getteam$(): Observable<ITeam[]> {
      return this.httpClient.get<ITeam[]>('https://calendar-app-c2037-default-rtdb.firebaseio.com/teams.json')
          .pipe(
              catchError((error: Error) => {
                  console.error('[ErrorGettingteam]',  error);
                  return throwError (()=> error)
              }),
              tap((teams) => {
                  this.teams = teams;
              })
          );
    }
  
    saveteam$(teams: ITeam[]) : Observable<void>
    {
      return this.httpClient
                  .put('https://calendar-app-c2037-default-rtdb.firebaseio.com/teams.json', teams)
                  .pipe(
                      map(_ => {})
                  )
    }
  
  
  
  }
  