import { TestBed } from '@angular/core/testing';

import { MockAirportService } from './mock-airport.service';

describe('MockAirportService', () => {
  let service: MockAirportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAirportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
