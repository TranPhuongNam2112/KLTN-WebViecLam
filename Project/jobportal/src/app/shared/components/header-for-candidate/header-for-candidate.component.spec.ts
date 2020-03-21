import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForCandidateComponent } from './header-for-candidate.component';

describe('HeaderForCandidateComponent', () => {
  let component: HeaderForCandidateComponent;
  let fixture: ComponentFixture<HeaderForCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderForCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
