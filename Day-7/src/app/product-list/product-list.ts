import { Component } from '@angular/core';
import { Products } from '../products/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  imports:[Products],
  styleUrl: './product-list.css',
})
export class ProductList {
  message:string='hello from product list'
  users:{name:string,age:number}[]=[
    {
      name:'amit',
      age:21
    },
    {
      name:'sumit',
      age:22,
    }
  ]
  receivedProd: { name: string; price: number }[] = [];
  getProductsFromChild(data:any){
    this.receivedProd=data;
  }
}
