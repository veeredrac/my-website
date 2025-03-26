import { Component } from '@angular/core';
import { IdCardService } from '../id-card.service';

@Component({
  selector: 'app-id-card-details',
  templateUrl: './id-card-details.component.html',
  styleUrls: ['./id-card-details.component.css']
})
export class IdCardDetailsComponent {

  idcard:any=[];
   
  constructor(private _idCardService:IdCardService){
    this.loadIdCardDetails();
    
    
  }
  loadIdCardDetails(){
    this._idCardService.getIdCardDetails().subscribe(
      (data:any)=>{
        console.log(data);
        this.idcard=data;
      },
      (err:any)=>{
        alert("internal Error .... ");
      }
    )

  }

  term:string='';
   
    filter(){
    this._idCardService.getFiltervehicleDetails(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.idcard=data;
      },
      (err:any)=>{
        alert("interal server error")
      }
  
    )
     
    }

    column:string='';
order:string='';
sort(){
  
    this._idCardService.getSortIdcardDetails(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.idcard=data
      },
      (err:any)=>{
        alert("internal server issue ")
      }
    )
  }


  limit:string='';
  page:string='';
  pagination()
  {
    
    this._idCardService.getpaginationIdcardDetails(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.idcard=data;
      },
      (err:any)=>{
        alert("internal Server Error ")
      }
    )
  }
  

  delete(id:any){

    if(confirm("are sure to delete ?")==true){
    this._idCardService.deleteidCarddetails(id).subscribe(
      (data:any)=>{
        alert("record deleted successfully ")
        this.loadIdCardDetails(); 
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

}
