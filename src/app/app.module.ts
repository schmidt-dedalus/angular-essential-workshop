import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AirportsComponent } from './airports/airports.component';
import { AbstractAirportService } from './airports/abstract-airport.service';
import { AirportService } from './airports/airport.service';
import { SharedModule } from '../shared/shared.module';
import { FlightBookingModule } from '../flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    FlightBookingModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AirportsComponent,
    HomeComponent,
    PassengerSearchComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: AbstractAirportService,
      useClass: AirportService
    }
  ]
})
export class AppModule {}
