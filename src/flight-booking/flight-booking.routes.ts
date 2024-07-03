import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

export const flightBookingRoutes: Routes = [
  { path: 'flight-search', component: FlightSearchComponent },
  { path: 'flight-search/:id', component: FlightEditComponent }
];
