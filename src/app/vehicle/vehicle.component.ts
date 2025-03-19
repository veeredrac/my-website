import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {  

  term:string='';
  vehicles:any=[];
  constructor(private _vehicleService:VehicleService){
    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server Error")
      }
    );

  }
  filter(){
  this._vehicleService.getFiltervehicleDetails(this.term).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },
    (err:any)=>{
      alert("interal server error")
    }

  )
   
  }

column:string='';
order:string='';
sort(){
  
    this._vehicleService.getSortvehicleDetails(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data
      },
      (err:any)=>{
        alert("internal server issue ")
      }
    )
  }

  delete(id:any){
    this._vehicleService.deleteVehicledetails(id).subscribe(
      (data:any)=>{
        alert("record deleted successfully ")
      },
      (err:any)=>{
        alert("internal server Error")
      }
    )

  }
}
