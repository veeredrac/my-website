import { Component } from '@angular/core';
import  { BankAccountDetailsService } from '../bank-account-details.service';

@Component({
  selector: 'app-bank-account-details',
  templateUrl: './bank-account-details.component.html',
  styleUrls: ['./bank-account-details.component.css']
})
export class BankAccountDetailsComponent {
  
bandetails:any=[];
constructor(private _bankAccountDetailsService:BankAccountDetailsService ){

  _bankAccountDetailsService.getBankDetails().subscribe(
  (data:any)=>{
    console.log(data);
    this.bandetails=data;
  },
  (err:any)=>{
    alert("internal server Error")
  }
  );

}
}
