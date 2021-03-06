import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictReportComponent } from './district-report.component';

describe('DistrictReportComponent', () => {
  let component: DistrictReportComponent;
  let fixture: ComponentFixture<DistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
