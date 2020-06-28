import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobpostComponent } from './company-jobpost.component';

describe('CompanyJobpostComponent', () => {
  let component: CompanyJobpostComponent;
  let fixture: ComponentFixture<CompanyJobpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyJobpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyJobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
