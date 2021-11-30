import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttakerComponent } from './producttaker.component';

describe('ProducttakerComponent', () => {
  let component: ProducttakerComponent;
  let fixture: ComponentFixture<ProducttakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducttakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
