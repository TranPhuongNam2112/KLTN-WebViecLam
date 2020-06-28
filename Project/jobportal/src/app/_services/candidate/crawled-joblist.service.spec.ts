import { TestBed } from '@angular/core/testing';

import { CrawledJoblistService } from './crawled-joblist.service';

describe('CrawledJoblistService', () => {
  let service: CrawledJoblistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrawledJoblistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
