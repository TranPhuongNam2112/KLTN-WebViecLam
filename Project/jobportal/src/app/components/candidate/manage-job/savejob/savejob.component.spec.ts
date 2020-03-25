import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavejobComponent } from './savejob.component';

describe('SavejobComponent', () => {
  let component: SavejobComponent;
  let fixture: ComponentFixture<SavejobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavejobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
