import { TestBed } from '@angular/core/testing';

import { EmployerJobpostService } from './employer-jobpost.service';

describe('EmployerJobpostService', () => {
  let service: EmployerJobpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerJobpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
