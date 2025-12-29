import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'] // Corrected
})
export class ProductDetails {
  id: number = 0;

  // Inject Router for navigation
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Read the route parameter
    this.id = +this.route.snapshot.params['id']; // + converts string to number
    console.log(this.id);
  }

  // Navigate to user page
  goToUser() {
    this.router.navigate(['/user', 25]); // ✅ Use router, not route
  }
}
