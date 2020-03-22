import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForEguestComponent } from './header-for-eguest.component';

describe('HeaderForEguestComponent', () => {
  let component: HeaderForEguestComponent;
  let fixture: ComponentFixture<HeaderForEguestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderForEguestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForEguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
