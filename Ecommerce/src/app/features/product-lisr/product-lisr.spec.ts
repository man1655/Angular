import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLisr } from './product-lisr';

describe('ProductLisr', () => {
  let component: ProductLisr;
  let fixture: ComponentFixture<ProductLisr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLisr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLisr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
