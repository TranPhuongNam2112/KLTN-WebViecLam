import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobtypeComponent } from './create-jobtype.component';

describe('CreateJobtypeComponent', () => {
  let component: CreateJobtypeComponent;
  let fixture: ComponentFixture<CreateJobtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJobtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
