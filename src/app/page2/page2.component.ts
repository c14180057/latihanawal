import { Component, OnInit } from '@angular/core';
import { Page1Component } from '../page1/page1.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private pageComponent: Page1Component,private router : Router ) { }
  res;
  ngOnInit() {
    // this.res=this.pageComponent.getresult()
  }
  back()
  {
     this.router.navigate(['/page1']);
  }
}