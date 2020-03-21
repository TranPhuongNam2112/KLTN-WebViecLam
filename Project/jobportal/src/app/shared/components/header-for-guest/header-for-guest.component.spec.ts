import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForGuestComponent } from './header-for-guest.component';

describe('HeaderForGuestComponent', () => {
  let component: HeaderForGuestComponent;
  let fixture: ComponentFixture<HeaderForGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderForGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
