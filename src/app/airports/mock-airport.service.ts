import { Injectable } from '@angular/core';
import { AbstractAirportService } from './abstract-airport.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAirportService implements AbstractAirportService {
  findAll(): Observable<string[]> {
    return of(['a', 'b', 'c', 'd']);
  }
}
