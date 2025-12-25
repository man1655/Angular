import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    count = signal(0);
    handleCount(t:string){
      if(t=='inc'){
      this.count.set(this.count()+1);
      }else{
        this.count.set(this.count()-1);
      }
    }
}
