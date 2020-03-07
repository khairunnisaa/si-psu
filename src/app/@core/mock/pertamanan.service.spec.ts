import { TestBed } from '@angular/core/testing';

import { PertamananService } from './pertamanan.service';

describe('PertamananService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PertamananService = TestBed.get(PertamananService);
    expect(service).toBeTruthy();
  });
});
