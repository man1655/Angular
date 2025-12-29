import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users:{id:number,name:string,age:number}[]=[
    {
      id:1,
      name:"John",
      age:25
    },
    {
      id:2,
      name:"Jane",
      age:30
    },
    {
      id:3,
      name:"Bob",
      age:35
    },
    {
      id:4,
      name:"Alice",
      age:40
    }
  ]
}
