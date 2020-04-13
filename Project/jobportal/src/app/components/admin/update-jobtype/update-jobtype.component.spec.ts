import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobtypeComponent } from './update-jobtype.component';

describe('UpdateJobtypeComponent', () => {
  let component: UpdateJobtypeComponent;
  let fixture: ComponentFixture<UpdateJobtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJobtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJobtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
