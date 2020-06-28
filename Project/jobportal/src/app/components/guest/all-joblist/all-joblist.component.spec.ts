import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJoblistComponent } from './all-joblist.component';

describe('AllJoblistComponent', () => {
  let component: AllJoblistComponent;
  let fixture: ComponentFixture<AllJoblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllJoblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
