import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Taskservice } from '../../core/services/taskservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './task.html',
  standalone:true,
  styleUrl: './task.css',
})
export class Task {
  taskservices=inject(Taskservice);
  tasks:any=[];
  loading=false;
  async ngOnInit(){
    await this.loadtask();
  }
  async loadtask(){
    this.loading=true;
    try{
      const response=await this.taskservices.getall();
      this.tasks=response.todos;
    }catch(err){
      console.log(err);
    }
    this.loading=false;
  }

}
