import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html',
  styleUrl:'profile.css'
})
export class Profile {
  
  showProfile = false;
  toggleDiv = false;

  toggleProfile() {
    this.showProfile = !this.showProfile;
  }

  changeDiv() {
    this.toggleDiv = !this.toggleDiv;
  }
}
