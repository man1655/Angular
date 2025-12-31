import { TestBed } from '@angular/core/testing';

import { Timepass } from './timepass';

describe('Timepass', () => {
  let service: Timepass;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Timepass);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
