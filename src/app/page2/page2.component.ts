import { Component, OnInit } from '@angular/core';
import { Page1Component } from '../page1/page1.component';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private pageComponent: Page1Component ) { }
  res;
  ngOnInit() {
    this.res=this.pageComponent.getresult()
  }

}