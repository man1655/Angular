import { Routes } from '@angular/router';
import { User } from './user/user';

export const routes: Routes = [
  {
    path:'user/:id/:name', component:User
  }
];
