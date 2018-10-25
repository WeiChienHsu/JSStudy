import { TestBed } from '@angular/core/testing';

import { ClmicDataService } from './clmic-data.service';

describe('ClmicDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClmicDataService = TestBed.get(ClmicDataService);
    expect(service).toBeTruthy();
  });
});
