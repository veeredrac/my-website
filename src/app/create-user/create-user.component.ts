import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { googleMail } from '../validator';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  constructor(){ 
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholar'){
          this.userForm.addControl('busFee',new FormControl());
          this.userForm.removeControl('hostelFee');
        }
        else{
          this.userForm.addControl('hostelFee',new FormControl());
          this.userForm.removeControl('busFee');
        }
      }
    )
  }
    submit()
    {
      console.log(this.userForm.value);
    }
  

  public userForm:FormGroup=new FormGroup({
    name:new FormControl(),
    email:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12),googleMail]),
    password:new FormControl(),
    mobile:new FormControl(),
    address:new FormGroup({
      city:new FormControl(), 
      state:new FormControl(),
      pincode:new FormControl()
    }),
    type:new FormControl(),
    cards:new FormArray([]),
 
  })
  get cardFormArray(){
    return this.userForm.get('cards') as FormArray;
  }
  addcard(){
    this.cardFormArray.push(
      new FormGroup({
        number: new FormControl(),
        expiry: new FormControl(),
        cvv : new FormControl()
      })
    )
  }
  deleteCard(i:number){
    this.cardFormArray.removeAt(i)
  }








}
