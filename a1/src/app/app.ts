import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Auth } from './auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private auth:Auth,private route:Router){
  }
  submitForm(){
    this.auth.login();
    this.route.navigate(['/admin']);
  }
}
