import { Component } from '@angular/core';
import { Product } from '../core/services/product';

@Component({
  selector: 'app-prod-details',
  imports: [],
  templateUrl: './prod-details.html',
  styleUrl: './prod-details.css',
})
export class ProdDetails {
  prod :{
    id: number;
    name: string;
    price: number;
}[]=[];

  constructor(private productServices:Product) {
    this.prod=this.productServices.getDetails();
  }

}
