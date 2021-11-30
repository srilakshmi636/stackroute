import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsampleComponent } from './productsample.component';

describe('ProductsampleComponent', () => {
  let component: ProductsampleComponent;
  let fixture: ComponentFixture<ProductsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
