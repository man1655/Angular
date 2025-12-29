import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  name: FormControl = new FormControl('add');
  password: FormControl = new FormControl('add');
  submitform(){
    console.log(this.name.value);
    console.log(this.password.value);
  }

}
