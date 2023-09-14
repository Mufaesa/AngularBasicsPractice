import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { FirstChildChildComponent } from './first-child-child/first-child-child.component';
import { BoldNBlueDirective } from './bold-nblue.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstChildComponent,
    SecondChildComponent,
    FirstChildChildComponent,
    BoldNBlueDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
