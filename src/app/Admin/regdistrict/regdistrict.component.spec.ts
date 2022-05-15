import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdistrictComponent } from './regdistrict.component';

describe('RegdistrictComponent', () => {
  let component: RegdistrictComponent;
  let fixture: ComponentFixture<RegdistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegdistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegdistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
