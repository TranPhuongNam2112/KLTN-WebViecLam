import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EforgotPassComponent } from './eforgot-pass.component';

describe('EforgotPassComponent', () => {
  let component: EforgotPassComponent;
  let fixture: ComponentFixture<EforgotPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EforgotPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EforgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
