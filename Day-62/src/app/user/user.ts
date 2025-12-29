import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  userId: number|null =null;
  name:string|null =null;
  constructor(private  route:ActivatedRoute) {};
  ngOnInit(): void {
    this.userId=Number(this.route.snapshot.paramMap.get('id'));
    this.name=this.route.snapshot.paramMap.get('name');
  }
}
