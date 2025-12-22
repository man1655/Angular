import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone:true,
  imports: [],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  count:number=0;
  handlePlus(){
    if(this.count>=10) return;
    this.count++;
  }
  handleMinus(){
    if(this.count<=0) return;
    this.count--;
  }

}
