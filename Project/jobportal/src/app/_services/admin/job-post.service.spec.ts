import { TestBed } from '@angular/core/testing';

import { JobPostService } from './job-post.service';

describe('JobPostService', () => {
  let service: JobPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
