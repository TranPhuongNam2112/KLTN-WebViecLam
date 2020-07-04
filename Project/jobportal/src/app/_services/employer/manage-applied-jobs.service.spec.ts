import { TestBed } from '@angular/core/testing';

import { ManageAppliedJobsService } from './manage-applied-jobs.service';

describe('ManageAppliedJobsService', () => {
  let service: ManageAppliedJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageAppliedJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
