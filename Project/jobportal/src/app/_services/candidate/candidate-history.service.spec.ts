import { TestBed } from '@angular/core/testing';

import { CandidateHistoryService } from './candidate-history.service';

describe('CandidateHistoryService', () => {
  let service: CandidateHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
