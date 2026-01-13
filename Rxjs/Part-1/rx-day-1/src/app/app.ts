import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, interval, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  data$ = from([1,2,3,4,5]);

  fruit$=of('apple','banana','orange')


  constructor() {
    // this.data$.subscribe((val) => {
    //   console.log(val);
    // });

    this.data$.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });


    this.fruit$.subscribe({
      next:(val)=>console.log(val)
    })

    
  }
}
