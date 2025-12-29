import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';
import { first } from 'rxjs';

@Component({
  selector: 'app-from-group',
  imports: [ReactiveFormsModule],
  templateUrl: './from-group.html',
  styleUrl: './from-group.css',
})
export class FromGroup {
  LoginForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
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

}
