import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IdCardService } from '../id-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-idcard',
  templateUrl: './create-idcard.component.html',
  styleUrls: ['./create-idcard.component.css']
})
export class CreateIdcardComponent {

   public idcardForm:FormGroup = new FormGroup({
    name:new FormControl(),
    phone:new FormControl(),
    dob:new FormControl(),
    email:new FormControl(),
    city:new FormControl(),
    school_logo:new FormControl(),
    profile_picture:new FormControl(),
    school_city:new FormControl(),
    school_name:new FormControl(),
    school_pin:new FormControl(),
      
    })
    constructor(private _idCardService:IdCardService,private _router:Router){}
    create(){
  
      console.log(this.idcardForm.value);
      this._idCardService.createidcard(this.idcardForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("new id card  is created successfully")
          this._router.navigateByUrl("/dashborad/idcard")
        },
        (err:any)=>{
          alert("internal Server Error ")
          
        }
      )
      
    }

}
