import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscardComponent } from './buscard.component';

describe('BuscardComponent', () => {
  let component: BuscardComponent;
  let fixture: ComponentFixture<BuscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
