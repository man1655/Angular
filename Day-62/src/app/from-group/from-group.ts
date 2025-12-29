import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { form, validate } from '@angular/forms/signals';
import { first } from 'rxjs';

@Component({
  selector: 'app-from-group',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './from-group.html',
  styleUrl: './from-group.css',
})
export class FromGroup {
  LoginForm: FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required,Validators.maxLength(20)]),
  });
  submitForm(){
    console.log(this.LoginForm.value)
  }
  setValue(){
    this.LoginForm.setValue({
      firstName:'hello',
      lastName:'bye '
    })
  }
  get  firstName(){
    return this.LoginForm.get('firstName')
  }
  get lastName(){
    return this.LoginForm.get('lastName')
  }
}
