import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherswebJoblistComponent } from './othersweb-joblist.component';

describe('OtherswebJoblistComponent', () => {
  let component: OtherswebJoblistComponent;
  let fixture: ComponentFixture<OtherswebJoblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherswebJoblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherswebJoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
