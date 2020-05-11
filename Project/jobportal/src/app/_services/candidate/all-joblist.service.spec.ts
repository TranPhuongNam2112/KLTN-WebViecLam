import { TestBed } from '@angular/core/testing';

import { AllJoblistService } from './all-joblist.service';

describe('AllJoblistService', () => {
  let service: AllJoblistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllJoblistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
