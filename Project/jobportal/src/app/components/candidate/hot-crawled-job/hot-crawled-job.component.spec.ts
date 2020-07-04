import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotCrawledJobComponent } from './hot-crawled-job.component';

describe('HotCrawledJobComponent', () => {
  let component: HotCrawledJobComponent;
  let fixture: ComponentFixture<HotCrawledJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotCrawledJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotCrawledJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
