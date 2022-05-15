import { TestBed } from '@angular/core/testing';

import { GoogleServiceService } from './googleservice.service';

describe('GoogleserviceService', () => {
  let service: GoogleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
