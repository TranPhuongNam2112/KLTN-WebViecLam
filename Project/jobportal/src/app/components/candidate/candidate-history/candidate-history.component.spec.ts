import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateHistoryComponent } from './candidate-history.component';

describe('CandidateHistoryComponent', () => {
  let component: CandidateHistoryComponent;
  let fixture: ComponentFixture<CandidateHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
