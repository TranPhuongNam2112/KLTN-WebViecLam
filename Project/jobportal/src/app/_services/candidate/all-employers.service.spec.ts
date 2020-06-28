import { TestBed } from '@angular/core/testing';

import { AllEmployersService } from './all-employers.service';

describe('AllEmployersService', () => {
  let service: AllEmployersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllEmployersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
