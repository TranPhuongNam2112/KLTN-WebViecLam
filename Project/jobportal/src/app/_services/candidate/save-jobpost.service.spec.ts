import { TestBed } from '@angular/core/testing';

import { SaveJobpostService } from './save-jobpost.service';

describe('SaveJobpostService', () => {
  let service: SaveJobpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveJobpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
