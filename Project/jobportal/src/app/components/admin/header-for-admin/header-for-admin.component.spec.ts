import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForAdminComponent } from './header-for-admin.component';

describe('HeaderForAdminComponent', () => {
  let component: HeaderForAdminComponent;
  let fixture: ComponentFixture<HeaderForAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderForAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
