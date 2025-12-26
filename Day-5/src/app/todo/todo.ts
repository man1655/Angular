import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  backgroundColor='blue';
  fontSize=20;
  margin=15;
  show=true;

  task='';
  taskList:{id:number,task:string}[]=[];
  handlesubmit(){
    this.taskList.push({
      id:this.taskList.length+1,
      task:this.task
    })
    this.task=''
  }
  handelDelete(id:number){
    this.taskList=this.taskList.filter((t)=>t.id!=id)
  }

}
