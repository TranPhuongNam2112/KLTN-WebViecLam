import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFileComponent } from './candidate-file.component';

describe('CandidateFileComponent', () => {
  let component: CandidateFileComponent;
  let fixture: ComponentFixture<CandidateFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
