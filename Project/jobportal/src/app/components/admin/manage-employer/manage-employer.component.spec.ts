import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployerComponent } from './manage-employer.component';

describe('ManageEmployerComponent', () => {
  let component: ManageEmployerComponent;
  let fixture: ComponentFixture<ManageEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
