import { TestBed } from '@angular/core/testing';

import { OrderdetailsserviceService } from './orderdetailsservice.service';

describe('OrderdetailsserviceService', () => {
  let service: OrderdetailsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderdetailsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
