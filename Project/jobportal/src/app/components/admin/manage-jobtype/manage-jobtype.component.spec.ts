import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJobtypeComponent } from './manage-jobtype.component';

describe('ManageJobtypeComponent', () => {
  let component: ManageJobtypeComponent;
  let fixture: ComponentFixture<ManageJobtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageJobtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageJobtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
