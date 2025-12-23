import { Component, signal } from '@angular/core';
import { Nav } from './nav/nav';

@Component({
  selector: 'app-root',
  imports: [Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name="mddm"
}
