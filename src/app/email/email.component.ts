import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  emailDetails:any=[];

  constructor(private _emailService:EmailService){
    _emailService.geteMAILDetails().subscribe(
      (data:any)=>{ 
        console.log(data);
        this.emailDetails=data;
      },
      (err:any)=>{
        alert("internal server Error")
      }

    )

  }
  fun(){
    
  }

}
