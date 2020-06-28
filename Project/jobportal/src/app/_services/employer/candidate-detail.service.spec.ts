import { TestBed } from '@angular/core/testing';

import { CandidateDetailService } from './candidate-detail.service';

describe('CandidateDetailService', () => {
  let service: CandidateDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
