import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightService } from './flight-search/flight.service';
import { AbstractFlightService } from './flight-search/abstract-flight.service';

@NgModule({
  declarations: [FlightSearchComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [FlightSearchComponent],
  providers: [
    {
      provide: AbstractFlightService,
      useClass: FlightService
    }
  ]
})
export class FlightBookingModule {}
