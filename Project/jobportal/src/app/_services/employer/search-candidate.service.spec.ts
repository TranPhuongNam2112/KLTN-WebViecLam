import { TestBed } from '@angular/core/testing';

import { SearchCandidateService } from './search-candidate.service';

describe('SearchCandidateService', () => {
  let service: SearchCandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
