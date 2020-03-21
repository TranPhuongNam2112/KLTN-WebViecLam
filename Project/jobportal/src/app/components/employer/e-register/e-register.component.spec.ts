import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ERegisterComponent } from './e-register.component';

describe('ERegisterComponent', () => {
  let component: ERegisterComponent;
  let fixture: ComponentFixture<ERegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ERegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ERegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
