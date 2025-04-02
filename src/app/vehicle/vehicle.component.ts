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
    this.loadVehicle();
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

  loadVehicle(){
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server Error")
      }
    );
  }

  delete(id:any){

    if(confirm("are sure to delete ?")==true){ 
    this._vehicleService.deleteVehicledetails(id).subscribe(
      (data:any)=>{
        alert("record deleted successfully ")
        this.loadVehicle();
      }, 
      (err:any)=>{
        alert("internal server Error")
      }
    )
  }
    else{
      alert("your have cancelled ...!")
    }

  }
  limit:string='';
  page:string='';
  pagination()
  {
    
    this._vehicleService.getpaginationvehicleDetails(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal Server Error ")
      }
    )
  }
}
