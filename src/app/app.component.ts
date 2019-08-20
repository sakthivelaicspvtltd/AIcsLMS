import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Showheader=true;
  // showHeader = true
  pathString = ""
  constructor( location: Location) {
    this.pathString = location.path();
    if(this.pathString == "/login" || this.pathString == "")
    {
      this.Showheader = false
    }
    
   }
   

}
