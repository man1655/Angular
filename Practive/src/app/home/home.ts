import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.html'
})
export class Home {

  loginForm: any;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        ]
      ],
      password: [
        '',
        [Validators.required]
      ],
      rememberMe: [false]
    });
  }

  submit() {
    console.log(this.loginForm.value);
  }
}
