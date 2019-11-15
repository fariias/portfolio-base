import { TestBed } from '@angular/core/testing';

import { UnhideApiService } from './unhide-api.service';

describe('UnhideApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnhideApiService = TestBed.get(UnhideApiService);
    expect(service).toBeTruthy();
  });
});
