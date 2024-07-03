import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'passenger-search', component: PassengerSearchComponent },
  {
    path: 'flight-booking',
    loadChildren: () =>
      import('../flight-booking/flight-booking.module').then((m) => m.FlightBookingModule)
  },
  { path: '**', redirectTo: 'home' }
];
