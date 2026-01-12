import { Component } from '@angular/core';
import { User } from '../../../core/services/user';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  users:any=[];
  constructor(private userservice:User){
  }
  ngOnInit(){
    this.users=this.userservice.getuser();
  }

}
