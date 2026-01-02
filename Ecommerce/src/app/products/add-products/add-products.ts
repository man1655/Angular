import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-products',
  imports: [ReactiveFormsModule],
  templateUrl: './add-products.html',
  styleUrl: './add-products.css',
})
export class AddProducts {
  productForm=new FormGroup({
    name:new FormControl('',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),
    price:new FormControl('',
      [
        Validators.required
      ]
    ),
    stocK:new FormControl(true)
  })

  addProduct(){
    debugger;
    if(this.productForm.invalid){
      return;
    }else{
      console.log(this.productForm.value);
    }
  }
}
