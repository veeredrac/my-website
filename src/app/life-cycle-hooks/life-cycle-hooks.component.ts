import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent  implements OnChanges,OnInit,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy{

  interval:any;

  ngOnInit(): void {
  console.log('ngOnInit is runing .');
      this.interval=setInterval(()=>{
        console.log("count"); 
      },1000)
  }
  ngOnDestroy(): void {
    console.log('ngOnInit is runing .');
    clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is runing .');
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck is runing .');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is runing .');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is runing .');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is runing .');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is runing .');
  }
 


}
