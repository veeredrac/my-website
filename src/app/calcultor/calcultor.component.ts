import { Component } from '@angular/core';

@Component({
  selector: 'app-calcultor',
  templateUrl: './calcultor.component.html',
  styleUrls: ['./calcultor.component.css']
})
export class CalcultorComponent {
  n1:number=0;
  n2:number=0;
  result:number=0;
  add(){
    this.result=this.n1+this.n2
  }
  sub(){
    this.result=this.n1-this.n2
  }
  mul()
  {
    this.result=this.n1*this.n2;
  }
  div(){
    this.result=this.n1/this.n2
  }

}
