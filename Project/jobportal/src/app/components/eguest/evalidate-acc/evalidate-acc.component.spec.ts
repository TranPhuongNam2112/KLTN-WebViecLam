import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalidateAccComponent } from './evalidate-acc.component';

describe('EvalidateAccComponent', () => {
  let component: EvalidateAccComponent;
  let fixture: ComponentFixture<EvalidateAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalidateAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalidateAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
