import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vew-vehicle-details',
  templateUrl: './vew-vehicle-details.component.html',
  styleUrls: ['./vew-vehicle-details.component.css']
})
export class VewVehicleDetailsComponent {

  id:any=0;
  vehicledetails:any=''
  constructor(private _activatedRoute:ActivatedRoute, private _vehicleService:VehicleService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        console.log(this.id);
      },
      (error:any)=>{
        alert("interal server error")
      }
    )
    _vehicleService.getVehicledetails(this.id).subscribe(
     (data:any)=>{
      console.log(data);
      this.vehicledetails=data;
       console.log(this.vehicledetails);
    },
      (err:any)=>{
        alert("inter server error ");
      }
    )

  }

}
