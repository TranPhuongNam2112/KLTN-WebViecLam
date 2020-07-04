import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSearchJobComponent } from './share-search-job.component';

describe('ShareSearchJobComponent', () => {
  let component: ShareSearchJobComponent;
  let fixture: ComponentFixture<ShareSearchJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareSearchJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareSearchJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
