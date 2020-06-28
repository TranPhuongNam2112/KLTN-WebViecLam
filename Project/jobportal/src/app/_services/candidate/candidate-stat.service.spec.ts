import { TestBed } from '@angular/core/testing';

import { CandidateStatService } from './candidate-stat.service';

describe('CandidateStatService', () => {
  let service: CandidateStatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateStatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
