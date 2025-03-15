import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {

  temp:number=0;
  celsius:Number=0;
  Fahrenheit:number=0;
  celTofah(){
     this.Fahrenheit=0;
  }
  fahTocel(){

  }

}
