import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authservices=inject(Auth);
  const router=inject(Router);
  if(authservices.isLoggedIn()){
    return true;
  }else{
    router.navigate(['/'])
    return false;
  }
};
