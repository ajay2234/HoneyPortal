import { TestBed } from '@angular/core/testing';

import { CustproductserviceService } from './custproductservice.service';

describe('CustproductserviceService', () => {
  let service: CustproductserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustproductserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
