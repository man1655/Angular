import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
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
