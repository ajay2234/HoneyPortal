import { TestBed } from '@angular/core/testing';

import { ViewmoreserviceService } from './viewmoreservice.service';

describe('ViewmoreserviceService', () => {
  let service: ViewmoreserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewmoreserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
