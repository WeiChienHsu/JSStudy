import { TestBed } from '@angular/core/testing';

import { PbmicDataService } from './pbmic-data.service';

describe('PbmicDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PbmicDataService = TestBed.get(PbmicDataService);
    expect(service).toBeTruthy();
  });
});
