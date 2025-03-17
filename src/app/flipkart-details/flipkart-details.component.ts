import { Component } from '@angular/core';
import { FlipkartDetailsService } from '../flipkart-details.service';

@Component({
  selector: 'app-flipkart-details',
  templateUrl: './flipkart-details.component.html',
  styleUrls: ['./flipkart-details.component.css']
})
export class FlipkartDetailsComponent {  

  flipkartetails:any=[];
  constructor(private _flipkartDetailsService:FlipkartDetailsService){
    _flipkartDetailsService.getflpkartDetails().subscribe(
    (data:any)=>{
      console.log(data);
      this.flipkartetails=data;
    },
    (err:any)=>{
      alert("internal server Error")
    }
  )
  }

}
