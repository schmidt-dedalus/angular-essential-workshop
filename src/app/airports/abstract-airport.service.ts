import { Observable } from 'rxjs';

export abstract class AbstractAirportService {
  abstract findAll(): Observable<string[]>;
}
