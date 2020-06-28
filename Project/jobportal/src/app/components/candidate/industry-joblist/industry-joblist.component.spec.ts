import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryJoblistComponent } from './industry-joblist.component';

describe('IndustryJoblistComponent', () => {
  let component: IndustryJoblistComponent;
  let fixture: ComponentFixture<IndustryJoblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryJoblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryJoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
