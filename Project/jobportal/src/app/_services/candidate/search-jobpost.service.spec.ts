import { TestBed } from '@angular/core/testing';

import { SearchJobpostService } from './search-jobpost.service';

describe('SearchJobpostService', () => {
  let service: SearchJobpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchJobpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
