import { TestBed } from '@angular/core/testing';

import { AllCandidateService } from './all-candidate.service';

describe('AllCandidateService', () => {
  let service: AllCandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
