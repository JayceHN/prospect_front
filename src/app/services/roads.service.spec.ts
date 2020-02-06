import { TestBed } from '@angular/core/testing';

import { RoadsService } from './roads.service';

describe('RoadsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoadsService = TestBed.get(RoadsService);
    expect(service).toBeTruthy();
  });
});
