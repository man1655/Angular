import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
  private url = 'https://jsonplaceholder.typicode.com/users';
  http = inject(HttpClient);
  getUser() {
    return this.http.get(this.url).pipe(
      map((users: any) =>
        users.map((user: any) => ({
          id: user.id,
          username: user.name,
        }))
      )
    );
  }
}
