import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { Cfor } from './cfor/cfor';
import { Todo } from './todo/todo';
import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [Cfor,Todo,RouterOutlet,RouterLink],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
    constructor(){
      effect(()=>{
        if(this.count()===2){
          this.show=true;
        }
        else{
          this.show=false;
        }
      })
    }
    title: WritableSignal<number | string> = signal('My First App');
    x = signal(20);
    y = signal(40);
    show=false;
    z: Signal<number> = computed(() => this.x() + this.y());
    ChangeClick() {
      this.title.set(10);
      this.x.set(30);
    }
    count: WritableSignal<number> = signal(0);
    counter() {
      this.count.set(this.count() + 1);
    }
}
