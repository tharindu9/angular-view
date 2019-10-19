import { TestBed } from '@angular/core/testing';

import { BodrimaService } from './bodrima.service';

describe('BodrimaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BodrimaService = TestBed.get(BodrimaService);
    expect(service).toBeTruthy();
  });
});
