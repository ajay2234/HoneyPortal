import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegcategoryComponent } from './regcategory.component';

describe('RegcategoryComponent', () => {
  let component: RegcategoryComponent;
  let fixture: ComponentFixture<RegcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
