import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cfor',
  imports: [FormsModule],
  templateUrl: './cfor.html',
  styleUrl: './cfor.css',
})
export class Cfor {
  users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  name='Man Patel';
}
