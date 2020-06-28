import { TestBed } from '@angular/core/testing';

import { ManageJobService } from './manage-job.service';

describe('ManageJobService', () => {
  let service: ManageJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
