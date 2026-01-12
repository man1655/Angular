import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { UserForm } from './features/user/user-form/user-form';
import { UserList } from './features/user/user-list/user-list';


export const routes: Routes = [
  {
    path:'',component:Login
  },
  {
    path:'user',component:UserList
  },
  {
    path:'add',component:UserForm
  },
  {
    path:'edit/:id',component:UserForm
  }
];
