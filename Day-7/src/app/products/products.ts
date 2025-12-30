import { Component, Input, input } from '@angular/core';

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
}
