import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightService } from './flight-search/flight.service';
import { AbstractFlightService } from './flight-search/abstract-flight.service';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { StatusToggleComponent } from './status-toggle/status-toggle.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    StatusToggleComponent,
    FlightEditComponent
  ],
  imports: [CommonModule, FormsModule, SharedModule, ReactiveFormsModule],
  exports: [FlightSearchComponent],
  providers: [
    {
      provide: AbstractFlightService,
      useClass: FlightService
    }
  ]
})
export class FlightBookingModule {}
