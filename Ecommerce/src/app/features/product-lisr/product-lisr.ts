import { Component, effect, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-lisr',
  imports: [RouterLink],
  templateUrl: './product-lisr.html',
  styleUrl: './product-lisr.css',
})
export class ProductLisr {

  products = signal([
    { id: 1, name: 'Laptop', price: 60000, stock: true },
    { id: 2, name: 'Mobile', price: 25000, stock: false },
    { id: 3, name: 'Headphones', price: 3000, stock: true },
  ]);

  selectedProductId = signal<number | null>(null);

  constructor() {
    effect(() => {
      console.log('Selected product:', this.selectedProductId());
    });
  }
  selectProduct(id: number) {
    this.selectedProductId.set(id);
  }
}
