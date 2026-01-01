import { Injectable } from '@angular/core';

@Injectable({ 
  providedIn: 'root',
})
export class Auth {
  login(){
    localStorage.setItem('isLoggedIn', 'true');
  }
  logout(){
    localStorage.removeItem('isLoggedIn');
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
