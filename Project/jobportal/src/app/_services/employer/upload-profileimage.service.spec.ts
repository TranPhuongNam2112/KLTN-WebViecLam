import { TestBed } from '@angular/core/testing';

import { UploadProfileimageService } from './upload-profileimage.service';

describe('UploadProfileimageService', () => {
  let service: UploadProfileimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadProfileimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
