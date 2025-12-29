import { Routes } from '@angular/router';
import { User } from './user/user';
import { Form } from './form/form';
import { FromGroup } from './from-group/from-group';
import { Template } from './template/template';

export const routes: Routes = [
  {
    path:'user/:id/:name', component:User
  },
  {
    path:'form', component:Form
  },
  {
    path:'formGroup', component:FromGroup
  },
  {
    path:'temp', component:Template
  }
];
