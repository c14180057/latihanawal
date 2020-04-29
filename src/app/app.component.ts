import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  
   constructor (private router : Router) {}
  input(){
    this.router.navigate(['/page1']);
  }
  page2()
  {
      this.router.navigate(['/page2']);
  }
}
