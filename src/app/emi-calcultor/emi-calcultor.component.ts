import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calcultor',
  templateUrl: './emi-calcultor.component.html',
  styleUrls: ['./emi-calcultor.component.css']
})
export class EmiCalcultorComponent {
  principle:number=0;
  Rate:number=0/12/100;
  perionds:number=0;
  emi:number=0;
  Emi(){
    this.emi=(this.principle*((this.Rate))*(1+this.Rate)^(this.perionds))/((1+this.Rate)^(this.perionds)-1)

  }


}
