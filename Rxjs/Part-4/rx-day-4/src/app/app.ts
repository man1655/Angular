import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { forkJoin, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  http = inject(HttpClient);
  searchControl=new FormControl();



  user$=this.http.get('https://jsonplaceholder.typicode.com/users');
  post$=this.http.get('https://jsonplaceholder.typicode.com/posts');
  constructor(){
    forkJoin([this.user$,this.post$]).subscribe(([users,post]:any)=>{
      console.log(users[0].name)
      console.log(post[0].title)
    })

     this.searchControl.valueChanges.pipe(
      switchMap((search:string)=>this.http.get(
        `https://dummyjson.com/products/search?q=${search}`
      ))
     ).subscribe((res)=>{
console.log(res)
     })
}
}
