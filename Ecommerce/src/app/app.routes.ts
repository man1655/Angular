import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProductLisr } from './features/product-lisr/product-lisr';
import { Product } from './features/product-lisr/product/product';
import { AddProducts } from './products/add-products/add-products';

export const routes: Routes = [
  {
    path:'',component:Home

  },
  {
    path:'products',component:ProductLisr
  },
  {
    path:'products/:id',component:Product
  },
  {
    path:'addProducts',component:AddProducts
  }

];
