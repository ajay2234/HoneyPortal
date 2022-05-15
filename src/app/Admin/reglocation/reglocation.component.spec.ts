import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglocationComponent } from './reglocation.component';

describe('ReglocationComponent', () => {
  let component: ReglocationComponent;
  let fixture: ComponentFixture<ReglocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
