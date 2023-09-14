import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent {
  approved : boolean = false;

  // | undefined is required because of the life cycle. fName is not yet known at the time this is loaded.
  // @ViewChild('fName') fName : ElementRef | undefined;
  
  @ViewChild('fName') fName! : ElementRef;
  
  getApproval(cb: HTMLInputElement){
    // this.approved = true;
    // this.fName = cb.value;
    console.log(this.fName);
  }

  calledFromParent(){
    console.log("Called from parent");
  }
}
