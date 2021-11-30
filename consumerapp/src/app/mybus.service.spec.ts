import { TestBed } from '@angular/core/testing';

import { MybusService } from './mybus.service';

describe('MybusService', () => {
  let service: MybusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MybusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
