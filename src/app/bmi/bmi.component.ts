import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  weight:number=0;
  height:number=0;
  bmi:number=0;
  Bmi()
  {
    this.bmi=(this.weight)/(this.height*this.height);
  }



}
