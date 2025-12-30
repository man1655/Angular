import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrencyConverterPipe } from './pipe/currency-converter-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule,CurrencyConverterPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 title='hello'
 date=new Date();
 num1=10;
 num2=20;
}
