import { TestBed } from '@angular/core/testing';

import { KelurahanService } from './kelurahan.service';

describe('KelurahanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KelurahanService = TestBed.get(KelurahanService);
    expect(service).toBeTruthy();
  });
});
