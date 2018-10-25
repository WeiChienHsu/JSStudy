import { TestBed } from '@angular/core/testing';

import { PbplDataService } from './pbpl-data.service';

describe('PbplDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PbplDataService = TestBed.get(PbplDataService);
    expect(service).toBeTruthy();
  });
});
