import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  constructor(){ 
    this.studentdetails.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholar'){
          this.studentdetails.addControl('busFee',new FormControl());
          this.studentdetails.removeControl('hostelFee');
        }
        else{
          this.studentdetails.addControl('hostelFee',new FormControl());
          this.studentdetails.removeControl('busFee');
        }
      }
    )
  }



  public studentdetails:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    class:new FormControl(),
    fatherName:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    address: new FormGroup({
      addresLine:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
       pincode: new FormControl()

    }),
    type:new FormControl(),
    marks:new FormArray([]),

  })

  submit(){
    console.log(this.studentdetails.value);
  }

  get MarksFormArray(){
    return this.studentdetails.get('marks') as FormArray;

  }
  addMarks(){
    this.MarksFormArray.push(
      new FormGroup({
        class:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl()
      })
    )
  }
  deleteMarks(i:number){
    this.MarksFormArray.removeAt(i)
  }

}
