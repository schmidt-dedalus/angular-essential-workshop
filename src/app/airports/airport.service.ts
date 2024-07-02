import { inject, Injectable } from '@angular/core';
import { AbstractAirportService } from './abstract-airport.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirportService implements AbstractAirportService {
  private static readonly BASE_URL = 'http://www.angular.at/api/airport';
  private readonly http = inject(HttpClient);

  findAll(): Observable<string[]> {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<string[]>(AirportService.BASE_URL, { headers });
  }
}
