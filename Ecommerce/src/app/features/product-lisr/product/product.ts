import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  productId:number=0;
  product: any;
    products = [
    { id: 1, name: 'Laptop', price: 60000, stock: true },
    { id: 2, name: 'Mobile', price: 25000, stock: false },
    { id: 3, name: 'Headphones', price: 3000, stock: true },
  ];
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(){
    this.productId=this.route.snapshot.params['id'];
    this.product=this.products.find(p=>p.id==this.productId)
  }

}
