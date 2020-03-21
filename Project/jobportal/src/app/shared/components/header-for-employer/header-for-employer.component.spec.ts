import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForEmployerComponent } from './header-for-employer.component';

describe('HeaderForEmployerComponent', () => {
  let component: HeaderForEmployerComponent;
  let fixture: ComponentFixture<HeaderForEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderForEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
