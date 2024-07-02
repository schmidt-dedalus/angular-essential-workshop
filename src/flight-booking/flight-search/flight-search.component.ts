import { Component, inject } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClient } from '@angular/common/http';
import { AbstractFlightService } from './abstract-flight.service';
import { CityFormatting } from '../../shared/pipes/city.pipe';

const url = 'http://www.angular.at/api/flight';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent {
  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight?: Flight;
  message = '';
  protected readonly CityFormatting = CityFormatting;
  private readonly http = inject(HttpClient);
  private readonly flightService = inject(AbstractFlightService);

  search(): void {
    if (this.from.length === 0 || this.to.length === 0) return;

    this.flightService.search(this.from, this.to).subscribe({
      next: (next) => (this.flights = next),
      error: (err) => console.error('Error searching flights', err)
    });
  }

  save(): void {
    if (!this.selectedFlight) return;

    this.flightService.save(this.selectedFlight).subscribe({
      next: (value) => {
        this.selectedFlight = value;
        this.message = 'Success!';
      },
      error: (err) => {
        console.error('Error saving flight', err);
        this.message = 'Error: ';
      }
    });
  }
}
