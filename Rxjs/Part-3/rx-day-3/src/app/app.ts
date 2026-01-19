import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Userservices } from './userservices';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css',
})

export class App {
  studentname$ = new Subject<string>();
  number$ = new BehaviorSubject<number>(0);

  private subscription!: Subscription;
  private userServices = inject(Userservices);

  user$ = this.userServices.getUser();
  constructor() {
    this.number$.subscribe((val) => {
      console.log('subscriber 1', val);
    });
    this.number$.next(1);
    this.number$.next(2);
    this.number$.next(3);


    setTimeout(() => {
      this.studentname$.next('Angular 20');
    }, 3000);
    this.number$.subscribe((val) => {
      console.log('sub2', val);
    });
  }

  refresh() {
    this.user$ = this.userServices.getUser();
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
