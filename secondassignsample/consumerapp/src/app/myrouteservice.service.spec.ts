import { TestBed } from '@angular/core/testing';

import { MyrouteserviceService } from './myrouteservice.service';

describe('MyrouteserviceService', () => {
  let service: MyrouteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyrouteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
