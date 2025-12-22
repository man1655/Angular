import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone:true,
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  handleClick(){
    alert("Hello World")
    this.handleClick1()
  }
  handleClick1(){
    alert("Hello World1")
  }
 sum(a: number, b: number) {
  alert(a + b);
}
}
