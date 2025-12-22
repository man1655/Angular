  import { Component, signal } from '@angular/core';
  import { Navbar } from './navbar/navbar';
  import { Footer } from './footer/footer';
import { Homepage } from './homepage/homepage';
import { Profile } from './profile/profile';

  @Component({
    selector: 'app-root',
    standalone:true,
    imports: [Navbar,Footer,Homepage,Profile],
    templateUrl: './app.html',
    styleUrl: './app.css'
  })
  export class App {
    title="Man Patel";
    Count='2';
    name1="Man Patel";
    name2="saurabh"
  }
