import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployersComponent } from './all-employers.component';

describe('AllEmployersComponent', () => {
  let component: AllEmployersComponent;
  let fixture: ComponentFixture<AllEmployersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEmployersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
