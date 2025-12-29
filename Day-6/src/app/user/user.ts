import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  id:number=0;
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.params.subscribe(params => {
    this.id=+params['id'];
    console.log('User ID:', params['id']);
  });
}
}
