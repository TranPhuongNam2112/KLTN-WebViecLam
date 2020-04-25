import { TestBed } from '@angular/core/testing';

import { SocialloginService } from './sociallogin.service';

describe('SocialloginService', () => {
  let service: SocialloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
