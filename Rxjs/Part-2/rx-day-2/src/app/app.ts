import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, from, map, of } from 'rxjs';
import { Userservice } from './userservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  num$ = from([1, 2, 3, 5, 3, 2, 4, 6, 8, 10]);
  userservice=inject(Userservice)

  nof$ = of([1, 2, 3, 5, 3, 2, 4, 6, 8, 10]);

  constructor() {
    this.num$.pipe(filter((num) => num % 2 === 0)).subscribe({
      next: (val) => console.log(val),
    });


    // this.nof$.pipe(
    //   map((num)=>num.filter((num:any)=>num%2===0)
    // ).subscribe({
    //   next: (val) => console.log(val),
    // });
    this.userservice.getUser().subscribe(
      {
        next:(val)=>console.log(val)
      }
    )


  }
}
