import { Component, inject } from '@angular/core';
import { user } from '../models/user.model';
import { UserService } from '../services/user-service';
import { a } from 'framer-motion/client';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  users: user[] = [];
  loading = false;
  errr = '';
  editingUserId: number | null = null;
  isSubmitting = false;

  private userservice = inject(UserService);
  private fb = inject(FormBuilder);

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    phone: ['', Validators.required],
  });

  async ngOnIt() {
    await this.loaduser();
  }
  getname(){
    return this.userForm.get('name')
  }
  getemail(){
    return this.userForm.get('email')
  }
  getphone(){
    return this.userForm.get('phone')
  }
  async loaduser() {
    this.loading = true;
    try {
      this.users = await this.userservice.getusers();
    } catch (err) {
      console.log(err);
    } finally {
      this.loading = false;
    }
  }

  async deleteuser(id: number) {
    this.loading = true;
    try {
      await this.userservice.deleteUser(id);
      this.users = this.users.filter((user) => user.id != id);
    } catch (err) {
      console.log(err);
    } finally {
      this.loading = false;
    }
  }
  edituser(user: user) {
    this.editingUserId = user.id!;
    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  }

  async submitForm() {
    if (this.userForm.invalid) {
      return;
    }
    const userData = this.userForm.value as user;
    try {
      if (this.editingUserId) {
        await this.userservice.updateuser(this.editingUserId, userData);
      } else {
        await this.userservice.createUser(userData);
      }
      this.userForm.reset();
      this.editingUserId = null;
      await this.loaduser();
    } catch (err) {
      console.log(err);
    }
  }
}
