import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  private user:any[]=[];
  getuser(){
    return this.user;
  }
  adduser(user:any){
    this.user.push(user)
  }
  deletuser(index:number){
    this.user.splice(index,1);
  }
}
