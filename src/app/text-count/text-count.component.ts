import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-count',
  templateUrl: './text-count.component.html',
  styleUrls: ['./text-count.component.css']
})
export class TextCountComponent {
  text:string='';
  count()
  {

    if(this.text.length>50){

      this.text=this.text.substring(0,50);

    }
  }

}
