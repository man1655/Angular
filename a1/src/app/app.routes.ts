import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { Auth } from './auth';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  {
    path:'admin',
    component:Admin,
    canActivate:[authGuard]
  }
];

