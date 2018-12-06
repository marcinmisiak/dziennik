import { TestBed } from '@angular/core/testing';

import { DziennikService } from './dziennik.service';

describe('DziennikService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DziennikService = TestBed.get(DziennikService);
    expect(service).toBeTruthy();
  });
});
