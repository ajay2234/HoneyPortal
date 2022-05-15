import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegproductComponent } from './regproduct.component';

describe('RegproductComponent', () => {
  let component: RegproductComponent;
  let fixture: ComponentFixture<RegproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
