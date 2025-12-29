import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  details:any=[];
addDetails(detail:any){
  console.log(detail);
  this.details.push(detail);
}
}
  