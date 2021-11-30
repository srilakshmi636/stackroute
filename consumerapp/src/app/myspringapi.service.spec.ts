import { TestBed } from '@angular/core/testing';

import { MyspringapiService } from './myspringapi.service';

describe('MyspringapiService', () => {
  let service: MyspringapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyspringapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
