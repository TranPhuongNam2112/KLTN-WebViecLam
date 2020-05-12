import { TestBed } from '@angular/core/testing';

import { ManageProfileService } from './manage-profile.service';

describe('ManageProfileService', () => {
  let service: ManageProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
