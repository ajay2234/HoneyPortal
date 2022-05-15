import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookingdetailsComponent } from './my-bookingdetails.component';

describe('MyBookingdetailsComponent', () => {
  let component: MyBookingdetailsComponent;
  let fixture: ComponentFixture<MyBookingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBookingdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBookingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
