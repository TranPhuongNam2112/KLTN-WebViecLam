import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJobPostComponent } from './manage-job-post.component';

describe('ManageJobPostComponent', () => {
  let component: ManageJobPostComponent;
  let fixture: ComponentFixture<ManageJobPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageJobPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
