import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EAccountComponent } from './e-account.component';

describe('EAccountComponent', () => {
  let component: EAccountComponent;
  let fixture: ComponentFixture<EAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
