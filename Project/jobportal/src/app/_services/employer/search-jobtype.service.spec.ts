import { TestBed } from '@angular/core/testing';

import { SearchJobtypeService } from './search-jobtype.service';

describe('SearchJobtypeService', () => {
  let service: SearchJobtypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchJobtypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
