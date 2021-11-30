import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactComponent } from './manufact.component';

describe('ManufactComponent', () => {
  let component: ManufactComponent;
  let fixture: ComponentFixture<ManufactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
