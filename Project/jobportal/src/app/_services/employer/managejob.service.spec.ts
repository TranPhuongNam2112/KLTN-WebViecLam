import { TestBed } from '@angular/core/testing';

import { ManagejobService } from './managejob.service';

describe('ManagejobService', () => {
  let service: ManagejobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagejobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
