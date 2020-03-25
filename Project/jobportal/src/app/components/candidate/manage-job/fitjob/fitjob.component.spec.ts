import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitjobComponent } from './fitjob.component';

describe('FitjobComponent', () => {
  let component: FitjobComponent;
  let fixture: ComponentFixture<FitjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
