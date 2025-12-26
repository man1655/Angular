import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { About } from '../about/about';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
