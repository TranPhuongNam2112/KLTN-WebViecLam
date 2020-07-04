import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopviewJobpostComponent } from './topview-jobpost.component';

describe('TopviewJobpostComponent', () => {
  let component: TopviewJobpostComponent;
  let fixture: ComponentFixture<TopviewJobpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopviewJobpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopviewJobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
