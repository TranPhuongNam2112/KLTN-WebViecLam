import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EguestComponent } from './eguest.component';

describe('EguestComponent', () => {
  let component: EguestComponent;
  let fixture: ComponentFixture<EguestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EguestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
