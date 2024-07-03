import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';

export abstract class AbstractFlightService {
  abstract search(from: string, to: string): Observable<Flight[]>;

  abstract save(flight: Flight): Observable<Flight>;

  abstract findById(id: string): Observable<Flight>;
}
