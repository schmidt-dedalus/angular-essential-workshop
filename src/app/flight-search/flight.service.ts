import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, switchMap } from 'rxjs';
import { Flight } from '../entities/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private static readonly URL = 'http://www.angular.at/api/flight';

  private readonly http = inject(HttpClient);

  search(from: string, to: string): Observable<Flight[]> {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('from', from).set('to', to);

    return this.http.get<Flight[]>(FlightService.URL, { headers, params });
  }

  save(flight: Flight): Observable<Flight> {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.post<Flight>(FlightService.URL, flight, { headers });
  }
}
