import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppliedJobsComponent } from './manage-applied-jobs.component';

describe('ManageAppliedJobsComponent', () => {
  let component: ManageAppliedJobsComponent;
  let fixture: ComponentFixture<ManageAppliedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAppliedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
