import { TestBed } from '@angular/core/testing';

import { ClhepDataService } from './clhep-data.service';

describe('ClhepDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClhepDataService = TestBed.get(ClhepDataService);
    expect(service).toBeTruthy();
  });
});
