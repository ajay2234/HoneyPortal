import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilefillComponent } from './profilefill.component';

describe('ProfilefillComponent', () => {
  let component: ProfilefillComponent;
  let fixture: ComponentFixture<ProfilefillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilefillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
