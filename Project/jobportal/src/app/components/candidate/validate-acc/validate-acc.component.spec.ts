import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateAccComponent } from './validate-acc.component';

describe('ValidateAccComponent', () => {
  let component: ValidateAccComponent;
  let fixture: ComponentFixture<ValidateAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
