import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IdCardService } from '../id-card.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    id:number=0;
    constructor(private _idCardService:IdCardService,private _router:Router,private _activatedRouter:ActivatedRoute){
      _activatedRouter.params.subscribe(
        (data:any)=>{

          console.log(data.id);
          this.id=data.id
        }
        ,(err:any)=>{
          alert("internal server error ... ");
        }
      )

      _idCardService.getiddetails(this.id).subscribe(

        (data:any)=>{
          console.log(data);
          this.idcardForm.patchValue(data)
        }
        ,(err:any)=>{
          alert("internal server error")
        }
      )
    }
    create(){
      if(this.id)
        {
          console.log(this.idcardForm.value);
          this._idCardService.updateidCrad(this.id,this.idcardForm.value).subscribe(
            (data:any)=>{
              console.log(data);
              alert("update record is successfully");
              this._router.navigateByUrl("/dashborad/idcard")
            },
            (err:any)=>{
              alert("internal Server Error111 ")
              
            }
          )
    
        
      }
      else{
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

}
