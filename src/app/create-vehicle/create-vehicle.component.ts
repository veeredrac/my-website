import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
  id:number=0;
  constructor( private _router:Router,  private _activatedRoute:ActivatedRoute, private _vehicleService:VehicleService)
  {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
   
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
    if(this.id){
      _vehicleService.getVehicledetails(this.id).subscribe(

        (data:any)=>{
          console.log(data);
          this.vehicleForm.patchValue(data)
        }
        ,(err:any)=>{
          alert("internal server error")
        }
      )

    }
   
    
  }
  create(){

    if(this.id){
      console.log(this.vehicleForm.value);
      this._vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("update record is successfully");
          this._router.navigateByUrl("/dashborad/idcard")
        },
        (err:any)=>{
          alert("internal Server Error111 ")
          
        }
      )

    }
    else{
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
}
