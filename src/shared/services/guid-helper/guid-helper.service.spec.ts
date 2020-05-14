import { TestBed } from '@angular/core/testing';

import { GuidHelperService } from './guid-helper.service';

describe('GuidHelperService', () => {
  let service: GuidHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuidHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
