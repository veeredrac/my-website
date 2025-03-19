import { Component } from '@angular/core';
import  { BankAccountDetailsService } from '../bank-account-details.service';

@Component({
  selector: 'app-bank-account-details',
  templateUrl: './bank-account-details.component.html',
  styleUrls: ['./bank-account-details.component.css']
})
export class BankAccountDetailsComponent {
  
bandetails:any={};
constructor(private _bankAccountDetailsService:BankAccountDetailsService ){
  this.loadBandetails();

 

}
loadBandetails(){
  this._bankAccountDetailsService.getBankDetails().subscribe(
    (data:any)=>{
      console.log(data);
      this.bandetails=data;
    },
    (err:any)=>{ 
      alert("internal server Error")
    }
    );

}
term:string='';
filter(){
this._bankAccountDetailsService.getfilterBankDetails(this.term).subscribe(
  (data:any)=>{
    console.log(data);
    this.bandetails=data;
  },
 (err:any)=>{
  alert("internal server error");
 }
)
}

column:string='';
order:string='';
sort(){
  this._bankAccountDetailsService.getsortBankDetails(this.column,this.order).subscribe(
  (data:any)=>{
    console.log(data);
    this.bandetails=data;
  },
  (err:any)=>{
    alert("internal server error ")
  }
)
}
limit:string='';
page:string='';
pagination(){
  this._bankAccountDetailsService.getpaginationBankDetails(this.limit,this.page).subscribe(
    (data:any)=>{
      console.log(data);
      this.bandetails=data;
    },
    (err:any)=>{
      alert("internal server error ")
    }
  )
}
delete(id:any){
  if(confirm("are you sure to delet ")==true){
  this._bankAccountDetailsService.getdeleteBankDetails(id).subscribe(
    (data:any)=>{
      console.log(data);
      alert("record is succesfully deleted .....")
      
      this.loadBandetails()
    }
    ,(err:any)=>{
      alert("internal server issue")
    }
  )
  }
  else{
    alert("your canceled ....")
  }

}

}
