import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  studentname$ = new Subject<string>();
  number$=new BehaviorSubject<number>(0);

  private subscription!: Subscription;

  constructor() {
    this.number$.subscribe((val)=>{
      console.log('subscriber 1',val)
    })
    this.number$.next(1);
    this.number$.next(2);
    setTimeout(() => {
      this.studentname$.next('Angular 20');
    }, 3000);
    this.number$.subscribe((val)=>{
      console.log(val)
    })
  }

  ngOnInit() {
    this.subscription = this.studentname$.subscribe((res) => {
      console.log(res);
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
