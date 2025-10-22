import { TestBed } from '@angular/core/testing';

import { Travelservice } from './travelservice';

describe('Travelservice', () => {
  let service: Travelservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Travelservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
