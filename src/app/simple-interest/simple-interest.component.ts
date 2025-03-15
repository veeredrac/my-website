import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
export class SimpleInterestComponent {
  p:number=0;
  r:number=0;
  t:number=0;
  siamount:number=0;
  si(){
    this.siamount=(this.p*this.t*this.r)/100;

  }

}
