import { TestBed } from '@angular/core/testing';

import { JobDetailService } from './job-detail.service';

describe('JobDetailService', () => {
  let service: JobDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
