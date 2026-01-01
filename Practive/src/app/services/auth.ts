import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isLogin: boolean = false;
  login(){
    this.isLogin=true;
  }
  isLoggedIn(){
    return this.isLogin;
  }
}
