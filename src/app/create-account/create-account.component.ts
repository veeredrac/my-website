import { Component } from '@angular/core';
import { BankAccountDetailsService } from '../bank-account-details.service';
import { Route, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent { 
   public bankForm:FormGroup = new FormGroup({
    account_name:new FormControl(),
    account_number:new FormControl(),
    available_balance:new FormControl(),
    city:new FormControl(),
      
    })

  constructor(private  _bankAccountDetailsService:BankAccountDetailsService , private _rout:Router){

  }

  create(){

    console.log(this.bankForm.value);
    this._bankAccountDetailsService.createBankAccount(this.bankForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("created Bank account  successfully")
        this._rout.navigateByUrl("/dashborad/bankaccountDetails")
      },
      (err:any)=>{
        alert("internal Server Error ")
        
      }
    )
    
  }

}
