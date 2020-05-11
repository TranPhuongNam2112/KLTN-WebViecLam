import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlljoblistComponent } from './alljoblist.component';

describe('AlljoblistComponent', () => {
  let component: AlljoblistComponent;
  let fixture: ComponentFixture<AlljoblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlljoblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlljoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
