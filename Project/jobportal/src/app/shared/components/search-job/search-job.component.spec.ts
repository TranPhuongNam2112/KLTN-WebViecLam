import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJobComponent } from './search-job.component';

describe('SearchJobComponent', () => {
  let component: SearchJobComponent;
  let fixture: ComponentFixture<SearchJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
