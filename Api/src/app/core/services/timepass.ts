import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Timepass {
  constructor(private http:HttpClient) {}
 getTimepass():Observable<User[]>{
  return this.http.get<User[]>('http://localhost:3000/users')
  }
  saveTimepass(user:User){
    return this.http.post<User>('http://localhost:3000/users',user);
  }
  deleteTimepass(id:string){
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
  fetchtimepass(id:string):Observable<User>{
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
}
updateTimepass(id:string,user:User):Observable<User>{
  return  this.http.put<User>(`http://localhost:3000/users/${id}`,user)
}
}
