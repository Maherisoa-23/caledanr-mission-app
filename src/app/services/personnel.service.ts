import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription, catchError, map, tap, throwError } from 'rxjs';
import { IPersonnel } from 'models/personnel.model';


@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private personnels: IPersonnel[] = [];

  constructor(
    private httpClient: HttpClient
  ) {

  }

  getPersonnel$(): Observable<IPersonnel[]> {
    return this.httpClient.get<IPersonnel[]>('https://calendar-app-c2037-default-rtdb.firebaseio.com/personnels.json')
      .pipe(
        catchError((error: Error) => {
          console.error('[ErrorGettingpersonnel]', error);
          return throwError(() => error)
        }),
        tap((personnels) => {
          this.personnels = personnels;
        })
      );
  }

  savePersonnel$(personals: IPersonnel[]): Observable<void> {
    return this.httpClient
      .put('https://calendar-app-c2037-default-rtdb.firebaseio.com/personnels.json', personals)
      .pipe(
        map(_ => { })
      )
  }
}
