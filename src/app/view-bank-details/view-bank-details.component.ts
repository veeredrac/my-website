import { Component } from '@angular/core';
import { BankAccountDetailsService } from '../bank-account-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-bank-details',
  templateUrl: './view-bank-details.component.html',
  styleUrls: ['./view-bank-details.component.css']
})
export class ViewBankDetailsComponent {

  id:number=0;
  bankDetails:any;
  constructor(private _bankAccountDetailsService:BankAccountDetailsService,private _activatedRouter:ActivatedRoute){
    _activatedRouter.params.subscribe(
      (data:any)=>{

        console.log(data.id);
        this.id=data.id
      },
      (err:any)=>{
        alert("internal server error ...")                                    
      }
    )                           
    _bankAccountDetailsService.getviewBankDetails(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.bankDetails=data;
      },
      (error:any)=>{
        alert("internal server error .....")
      }
    )

  }

}
