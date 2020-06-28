import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendJobComponent } from './recommend-job.component';

describe('RecommendJobComponent', () => {
  let component: RecommendJobComponent;
  let fixture: ComponentFixture<RecommendJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
