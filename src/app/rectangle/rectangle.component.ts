import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  width:number=0;
  height:number=0;
  AreaOfRectangle:number=0;
  area(){
    this.AreaOfRectangle=this.width*this.height

  }

}
