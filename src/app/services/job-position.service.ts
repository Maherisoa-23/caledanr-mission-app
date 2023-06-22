import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription, catchError, map, tap, throwError } from 'rxjs';
import { IJobPosition } from 'models/personnel.model';
@Injectable({
    providedIn: 'root'
  })
export class JobPositionService {
    private Jobs : any[] = [];
  
    constructor(
      private httpClient: HttpClient
    ) { }
  
    getJobs$(): Observable<IJobPosition[]> {
      return this.httpClient.get<IJobPosition[]>('https://calendar-app-c2037-default-rtdb.firebaseio.com/Jobs.json')
          .pipe(
              catchError((error: Error) => {
                  console.error('[ErrorGettingJobs]',  error);
                  return throwError (()=> error)
              }),
              tap((Jobs) => {
                  this.Jobs = Jobs;
              })
          );
    }
  
    saveJobs$(jobs: IJobPosition[]) : Observable<void>
    {
      return this.httpClient
                  .put('https://calendar-app-c2037-default-rtdb.firebaseio.com/Jobs.json', jobs)
                  .pipe(
                      map(_ => {})
                  )
    }
  
  
  
  

}