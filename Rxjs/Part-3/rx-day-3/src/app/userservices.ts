import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class Userservices {
  private user$?: Observable<User[]>;
  http = inject(HttpClient);

  getUser() {
    if (!this.user$) {
      this.user$ = this.http
        .get<User[]>('https://jsonplaceholder.typicode.com/users')
        .pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }
    return this.user$;
  }
   refreshUsers() {
    this.user$ = undefined;
  }
}
