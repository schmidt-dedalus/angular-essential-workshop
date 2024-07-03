import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FlightSearchComponent } from './flight-search.component';
import { FlightBookingModule } from '../flight-booking.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from '../../app/app.routes';

describe('Unit test: flight-search.component', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot(APP_ROUTES),
        FlightBookingModule,
        SharedModule
      ],
      providers: [
        // Add Providers if you need them for your tests
      ]
    });

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not have any flights loaded initially', () => {
    expect(component.flights.length).toBe(0);
  });
});
