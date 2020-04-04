import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagejobComponent } from './managejob.component';

describe('ManagejobComponent', () => {
  let component: ManagejobComponent;
  let fixture: ComponentFixture<ManagejobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagejobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
