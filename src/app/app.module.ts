import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { AbstractFlightService } from './flight-search/abstract-flight.service';
import { FlightService } from './flight-search/flight.service';
import { CityPipe } from './shared/pipes/city.pipe';
import { AirportsComponent } from './airports/airports.component';
import { AbstractAirportService } from './airports/abstract-airport.service';
import { AirportService } from './airports/airport.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FlightSearchComponent,
    CityPipe,
    AirportsComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: AbstractFlightService,
      useClass: FlightService
    },
    {
      provide: AbstractAirportService,
      useClass: AirportService
    }
  ]
})
export class AppModule {}
