import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJobpostResultComponent } from './search-jobpost-result.component';

describe('SearchJobpostResultComponent', () => {
  let component: SearchJobpostResultComponent;
  let fixture: ComponentFixture<SearchJobpostResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchJobpostResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJobpostResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
