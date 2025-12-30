import { Component, EventEmitter, Input, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  @Input() products:string=''
  @Input() prodctsList:string=''
  @Input() users:{name:string,age:number}[]=[]
  
   prod:{name:string,price:number}[]=[
    {
      'name':'bii',
      price:200
    },
    {
      name:'jam',
      price:100
    }
  ]

  @Output() sendProducts=new EventEmitter();

  sendproducts(){
    this.sendProducts.emit(this.prod)
  }
}
