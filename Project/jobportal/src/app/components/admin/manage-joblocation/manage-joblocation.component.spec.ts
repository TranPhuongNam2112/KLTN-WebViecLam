import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJoblocationComponent } from './manage-joblocation.component';

describe('ManageJoblocationComponent', () => {
  let component: ManageJoblocationComponent;
  let fixture: ComponentFixture<ManageJoblocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageJoblocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageJoblocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
