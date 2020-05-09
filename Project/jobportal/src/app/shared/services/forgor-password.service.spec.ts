import { TestBed } from '@angular/core/testing';

import { ForgorPasswordService } from './forgor-password.service';

describe('ForgorPasswordService', () => {
  let service: ForgorPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgorPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
