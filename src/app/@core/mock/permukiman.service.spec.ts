import { TestBed } from '@angular/core/testing';

import { PermukimanService } from './permukiman.service';

describe('PermukimanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermukimanService = TestBed.get(PermukimanService);
    expect(service).toBeTruthy();
  });
});
