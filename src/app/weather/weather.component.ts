import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {  
  weather:any={};
  constructor(private _weatherService:WeatherService){
    _weatherService.getWeatherDetails().subscribe(
      (data:any)=>{
        console.log(data); 
           this.weather=data;
      },
      (err:any)=>{
        alert("invalidate data ") 
      }
    )



}
}
