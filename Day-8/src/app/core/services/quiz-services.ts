import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizServices {
  constructor(private http: HttpClient) {

  }
  getQuiz(){
    const url='https://opentdb.com/api.php?amount=10'
    const data= this.http.get(url)
    return data;
  }
}
