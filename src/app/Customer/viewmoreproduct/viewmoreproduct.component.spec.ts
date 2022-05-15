import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmoreproductComponent } from './viewmoreproduct.component';

describe('ViewmoreproductComponent', () => {
  let component: ViewmoreproductComponent;
  let fixture: ComponentFixture<ViewmoreproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmoreproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmoreproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
