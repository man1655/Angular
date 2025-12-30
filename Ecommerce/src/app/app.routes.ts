import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProductLisr } from './features/product-lisr/product-lisr';

export const routes: Routes = [
  {
    path:'',component:Home

  },
  {
    path:'products',component:ProductLisr
  },

];
