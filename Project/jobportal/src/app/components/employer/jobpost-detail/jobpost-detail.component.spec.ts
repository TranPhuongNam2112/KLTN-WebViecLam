import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostDetailComponent } from './jobpost-detail.component';

describe('JobpostDetailComponent', () => {
  let component: JobpostDetailComponent;
  let fixture: ComponentFixture<JobpostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobpostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
