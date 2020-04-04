import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveprofileComponent } from './saveprofile.component';

describe('SaveprofileComponent', () => {
  let component: SaveprofileComponent;
  let fixture: ComponentFixture<SaveprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
