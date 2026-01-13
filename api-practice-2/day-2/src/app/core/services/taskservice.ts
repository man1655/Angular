import { inject, Injectable } from '@angular/core';
import { API_CONFIG } from '../api.config';
import { HttpClient } from '@angular/common/http';
import { task } from '../../models/task.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Taskservice {
  private url = API_CONFIG.TASKS;
  protected http = inject(HttpClient);

  getall():Promise<task[]> {
    return firstValueFrom(this.http.get<task[]>(this.url))
  }
  getById(id:number):Promise<task> {
    return firstValueFrom(this.http.get<task>(`${this.url}/${id}`))
  }
  create(data:task):Promise<task> {
    return firstValueFrom(this.http.post<task>(`${this.url}`,data))
  }
  update(id:number,data:task) {
    return firstValueFrom(this.http.patch(`${this.url}/${id}`,data))
  }
  delete() {
    return firstValueFrom(this.http.delete(`${this.url}`))  
  }
}
