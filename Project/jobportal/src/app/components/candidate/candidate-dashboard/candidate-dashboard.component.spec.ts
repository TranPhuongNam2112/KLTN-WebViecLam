import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDashboardComponent } from './candidate-dashboard.component';

describe('CandidateDashboardComponent', () => {
  let component: CandidateDashboardComponent;
  let fixture: ComponentFixture<CandidateDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
