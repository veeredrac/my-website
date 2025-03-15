import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  Pivalue:number=3.14;
  Radius:number=0;
  areaOfCircle:number=0;
  Area(){

  this.areaOfCircle=(this.Pivalue*(this.Radius*this.Radius));
  console.log(this.areaOfCircle);

  }

}
