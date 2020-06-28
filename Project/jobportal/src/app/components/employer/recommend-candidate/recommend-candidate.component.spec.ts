import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendCandidateComponent } from './recommend-candidate.component';

describe('RecommendCandidateComponent', () => {
  let component: RecommendCandidateComponent;
  let fixture: ComponentFixture<RecommendCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
