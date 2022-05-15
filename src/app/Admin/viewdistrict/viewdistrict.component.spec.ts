import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdistrictComponent } from './viewdistrict.component';

describe('ViewdistrictComponent', () => {
  let component: ViewdistrictComponent;
  let fixture: ComponentFixture<ViewdistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
