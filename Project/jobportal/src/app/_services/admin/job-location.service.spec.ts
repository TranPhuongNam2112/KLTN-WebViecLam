import { TestBed } from '@angular/core/testing';

import { JobLocationService } from './job-location.service';

describe('JobLocationService', () => {
  let service: JobLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
