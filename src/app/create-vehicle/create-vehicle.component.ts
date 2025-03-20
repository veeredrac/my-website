import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public vehicleForm:FormGroup = new FormGroup({
    Vehicle:new FormControl(),
    color:new FormControl(),
    cost:new FormControl(),
    fuel:new FormControl(),
    
  })
  constructor(private _vehicleService:VehicleService,private _router:Router){}
  create(){

    console.log(this.vehicleForm.value);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("new vehicle is created successfully")
        this._router.navigateByUrl("/dashborad/vehicle")
      },
      (err:any)=>{
        alert("internal Server Error ")
        
      }
    )
    
  }
}
