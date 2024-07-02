import { Injectable } from '@angular/core';
import { AbstractFlightService } from './abstract-flight.service';
import { Flight } from '../entities/flight';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService implements AbstractFlightService {
  constructor() {}

  save(flight: Flight): Observable<Flight> {
    return of(flight);
  }

  search(from: string, to: string): Observable<Flight[]> {
    return of([
      {
        id: 1,
        from,
        to,
        date: new Date().toISOString(),
        delayed: false
      }
    ]);
  }
}
