import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {
color=1
setColor(val:number){
  this.color=val;
}
 students=[
  {name:'ankit',age:20},
  {name:'pankhu',age:30},
  {name:'jaa',age:35}
]  
}
