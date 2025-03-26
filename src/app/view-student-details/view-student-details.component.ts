import { Component } from '@angular/core';
import { IdCardService } from '../id-card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.css']
})
export class ViewStudentDetailsComponent {

  id:number=0;
  idDetails:any;
  constructor(private _idCardService:IdCardService, private _activatedRouter:ActivatedRoute)
  {
    _activatedRouter.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      },
      (err:any)=>{
        alert("internal service error ");
      }
    )
    _idCardService.getiddetails(this.id).subscribe(
      (data:any)=>{
        this.idDetails=data;
      },
      (err:any)=>{
        alert("internal server error ");
      }

    )
   
  }

}
