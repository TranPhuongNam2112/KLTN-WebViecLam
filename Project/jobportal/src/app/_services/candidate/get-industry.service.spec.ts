import { TestBed } from '@angular/core/testing';

import { GetIndustryService } from './get-industry.service';

describe('GetIndustryService', () => {
  let service: GetIndustryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetIndustryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
