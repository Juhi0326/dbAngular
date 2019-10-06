import { TestBed } from '@angular/core/testing';

import { ValamiService } from './valami.service';

describe('ValamiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValamiService = TestBed.get(ValamiService);
    expect(service).toBeTruthy();
  });
});
