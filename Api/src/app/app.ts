import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Timepass } from './core/services/timepass';
import { User } from './interface/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data:User[]=[];
  selectedUser:User|undefined;
  constructor(private timpass:Timepass){}
  ngOnInit(){
    this.timpass.getTimepass().subscribe((data:User[])=>{
      this.data=data;
      console.log(this.data);
    })
  }
  addUser(user:User){
    if(!this.selectedUser){
    this.timpass.saveTimepass(user).subscribe((data)=>{
      alert('User Added Successfully');
    })
  }else{
    const id=this.selectedUser.id
    this.timpass.updateTimepass(id,user).subscribe((data)=>{
      console.log(data)
    })
  }
  }
  deletUser(id:string){
    console.log(id)
    this.timpass.deleteTimepass(id).subscribe(()=>{
      alert('deleted')
    })
  }

  updateUser(id:string){
    this.timpass.fetchtimepass(id).subscribe((data:User)=>{
      this.selectedUser=data
    })
  }
}
