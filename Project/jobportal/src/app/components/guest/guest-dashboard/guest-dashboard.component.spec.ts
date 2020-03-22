import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestDashboardComponent } from './guest-dashboard.component';
import {SearchJobComponent } from '../search-job/search-job.component';
describe('GuestDashboardComponent', () => {
  let component: GuestDashboardComponent;
  let fixture: ComponentFixture<GuestDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
