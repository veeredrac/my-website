import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  products:any=[
    {name:'pen',price:10,rating:3.4},
    {name:'book',price:50,rating:1.9},
    {name:'shirt',price:450,rating:4.3},
    {name:'shoes',price:1599,rating:5},
    {name:'bike',price:100000,rating:4.8},
    {name:'car',price:10000000,rating:3.4},
  ]
  states:string[]=['AP','KA','TN','KL','MH','TG']
newDate:any=new Date();

}
