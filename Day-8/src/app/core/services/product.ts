import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  getDetails() {
    let data = [
      {
        id: 1,
        name: 'laptop',
        price: 4500,
      },
      {
        id: 2,
        name: 'bike',
        price: 10000,
      },
    ];
    return data;
  }
}
