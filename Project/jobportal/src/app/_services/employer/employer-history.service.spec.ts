import { TestBed } from '@angular/core/testing';

import { EmployerHistoryService } from './employer-history.service';

describe('EmployerHistoryService', () => {
  let service: EmployerHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
