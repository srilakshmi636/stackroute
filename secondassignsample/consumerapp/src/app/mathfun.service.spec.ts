import { TestBed } from '@angular/core/testing';

import { MathfunService } from './mathfun.service';

describe('MathfunService', () => {
  let service: MathfunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathfunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
