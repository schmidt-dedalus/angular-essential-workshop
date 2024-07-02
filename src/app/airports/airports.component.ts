import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AbstractAirportService } from './abstract-airport.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, delay, Observable, of, share } from 'rxjs';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrl: './airports.component.css'
})
export class AirportsComponent implements OnInit {
  airports: string[] = [];
  airports$?: Observable<string[]>;
  isLoading = false;

  private readonly destroyRef = inject(DestroyRef);
  private readonly airportService = inject(AbstractAirportService);

  ngOnInit(): void {
    this.isLoading = true;
    this.airports$ = this.airportService.findAll().pipe(
      share(),
      delay(3000),
      catchError((err) => {
        console.error("Couldn't fetch airports", err);
        return of([]);
      })
    );

    this.airports$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.airports = value;
      this.isLoading = false;
    });
  }
}
