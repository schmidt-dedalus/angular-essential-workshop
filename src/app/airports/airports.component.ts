import { Component, inject, OnInit } from '@angular/core';
import { AbstractAirportService } from './abstract-airport.service';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrl: './airports.component.css'
})
export class AirportsComponent implements OnInit {
  airports: string[] = [];

  private airportService = inject(AbstractAirportService);

  ngOnInit(): void {
    this.airportService.findAll().subscribe((airports) => {
      this.airports = airports;
    });
  }
}
