import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteditopenerComponent } from './producteditopener.component';

describe('ProducteditopenerComponent', () => {
  let component: ProducteditopenerComponent;
  let fixture: ComponentFixture<ProducteditopenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducteditopenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducteditopenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
