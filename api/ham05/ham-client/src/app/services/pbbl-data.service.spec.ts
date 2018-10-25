import { TestBed } from '@angular/core/testing';

import { PbblDataService } from './pbbl-data.service';

describe('PbblDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PbblDataService = TestBed.get(PbblDataService);
    expect(service).toBeTruthy();
  });
});
