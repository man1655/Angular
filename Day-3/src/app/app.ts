import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name:string=''
  Email:string=''
  handleEvent(event:Event){
    console.log(event.type)
    }
    handleSubmit(event:Event){
      this.name=(event.target as HTMLInputElement).value
    }



    handleTemplate(value:any){
      this.Email=value
    }
    setval(input:HTMLInputElement){
      input.value=this.Email
    }
}
