import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRegisterComponent } from './c-register.component';

describe('CRegisterComponent', () => {
  let component: CRegisterComponent;
  let fixture: ComponentFixture<CRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
