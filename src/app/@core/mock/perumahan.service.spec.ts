import { TestBed } from '@angular/core/testing';

import { PerumahanService } from './perumahan.service';

describe('PerumahanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerumahanService = TestBed.get(PerumahanService);
    expect(service).toBeTruthy();
  });
});
