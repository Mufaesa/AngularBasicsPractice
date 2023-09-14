import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent {
  @Input() messageFromParent: string = "";
  @Output() eventEmitter = new EventEmitter<string>(); 

  messageFromChild: string = "Hello world from child!";

  generateChildMessage(){
    this.eventEmitter.emit(this.messageFromChild);
  }
}
