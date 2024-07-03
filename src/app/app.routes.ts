import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightSearchComponent } from '../flight-booking/flight-search/flight-search.component';
import { FlightEditComponent } from '../flight-booking/flight-edit/flight-edit.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'passenger-search', component: PassengerSearchComponent },
  { path: 'flight-booking', component: FlightSearchComponent },
  { path: 'flight-booking/:id', component: FlightEditComponent },
  { path: '**', redirectTo: 'page-not-found' }
];
