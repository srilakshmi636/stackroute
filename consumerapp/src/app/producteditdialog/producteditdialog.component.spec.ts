import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteditdialogComponent } from './producteditdialog.component';

describe('ProducteditdialogComponent', () => {
  let component: ProducteditdialogComponent;
  let fixture: ComponentFixture<ProducteditdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducteditdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducteditdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
