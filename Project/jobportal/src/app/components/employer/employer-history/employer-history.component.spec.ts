import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerHistoryComponent } from './employer-history.component';

describe('EmployerHistoryComponent', () => {
  let component: EmployerHistoryComponent;
  let fixture: ComponentFixture<EmployerHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
