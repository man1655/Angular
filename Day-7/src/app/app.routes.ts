import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Products } from './products/products';

export const routes: Routes = [
  {
    path:'productList',component:ProductList
  },
  {
    path:'products', component:Products
  }
];
