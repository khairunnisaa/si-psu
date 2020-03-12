import { TestBed } from '@angular/core/testing';

import { KecamatanService } from './kecamatan.service';

describe('KecamatanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KecamatanService = TestBed.get(KecamatanService);
    expect(service).toBeTruthy();
  });
});
