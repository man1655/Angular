import { Component } from '@angular/core';
import { Product } from '../core/services/product';
import { QuizServices } from '../core/services/quiz-services';

@Component({
  selector: 'app-prod-details',
  imports: [],
  templateUrl: './prod-details.html',
  styleUrl: './prod-details.css',
})
export class ProdDetails {
  prod :{
    id: number;
    name: string;
    price: number;
}[]=[];
quiz:any=[];

  constructor(private productServices:Product,private quizServices:QuizServices) {
    this.prod=this.productServices.getDetails();
    this.quizServices.getQuiz().subscribe((data:any)=>{
      this.quiz=data.results
      console.log(this.quiz)
  })
  }


}
