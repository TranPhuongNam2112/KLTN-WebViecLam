import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLoginComponent } from './c-login.component';

describe('CLoginComponent', () => {
  let component: CLoginComponent;
  let fixture: ComponentFixture<CLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
