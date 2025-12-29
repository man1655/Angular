import { Routes } from '@angular/router';
import { Products } from './products/products';
import { ProductDetails } from './product-details/product-details';
import { User } from './user/user';

export const routes: Routes = [
  {
    path:'',
    component:Products
  },
  {
    path:'details/:id',
    component:ProductDetails
  },
  {
    path:'user/:id', component:User
  }
];

