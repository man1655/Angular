import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  studentname$ = new Subject<string>();

  private subscription!: Subscription;

  constructor() {
    setTimeout(() => {
      this.studentname$.next('Angular 20');
    }, 3000);
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
