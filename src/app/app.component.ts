import { Component, ViewChild } from '@angular/core';
import { SecondChildComponent } from "./second-child/second-child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skills';
  @ViewChild(SecondChildComponent) secondChild! : SecondChildComponent; 
  msgFromChild = "";

  messageFromChildren(msg:string){
    this. msgFromChild = msg;
    console.log("MooieMessage: " + msg);
  }

  // This is the recommended function to use with "viewChild"
  ngAfterViewInit(){
    this.secondChild.calledFromParent();
  }
}
