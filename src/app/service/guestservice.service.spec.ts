import { TestBed } from '@angular/core/testing';

import { GuestserviceService } from './guestservice.service';

describe('GuestserviceService', () => {
  let service: GuestserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
