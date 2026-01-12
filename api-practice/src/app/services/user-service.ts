import { Injectable } from '@angular/core';
import {apiUrl}  from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { first, firstValueFrom } from 'rxjs';
import {user} from '../models/user.model';
import { th, use } from 'framer-motion/client';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl=`${apiUrl}/users`
  constructor(private http:HttpClient){}


  //getusers
  getusers():Promise<user[]>{
    return firstValueFrom(this.http.get<user[]>(this.baseUrl))
  }


  getuserbyid(id:number):Promise<user>{
    return firstValueFrom(
      this.http.get<user>(this.baseUrl+'/'+id)
    )
  }

  createUser(user:user):Promise<user>{
    return firstValueFrom(
      this.http.post<user>(this.baseUrl,user)
    )
  }
  updateuser(id:number,user:user):Promise<user>{
    return firstValueFrom(
      this.http.post<user>(`${this.baseUrl}${id}`,user)
    )
  }
  deleteUser(id:number):Promise<void>{
    return firstValueFrom(
      this.http.delete<void>(`${this.baseUrl}${id}`)
    )
  }

}
