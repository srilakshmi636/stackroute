import { TestBed } from '@angular/core/testing';

import { ProductsecureGuard } from './productsecure.guard';

describe('ProductsecureGuard', () => {
  let guard: ProductsecureGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductsecureGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
