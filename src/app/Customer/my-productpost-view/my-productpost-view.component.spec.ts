import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductpostViewComponent } from './my-productpost-view.component';

describe('MyProductpostViewComponent', () => {
  let component: MyProductpostViewComponent;
  let fixture: ComponentFixture<MyProductpostViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProductpostViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProductpostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
