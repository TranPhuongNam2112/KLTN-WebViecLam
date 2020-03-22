import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EguestDashboardComponent } from './eguest-dashboard.component';

describe('EguestDashboardComponent', () => {
  let component: EguestDashboardComponent;
  let fixture: ComponentFixture<EguestDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EguestDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EguestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
