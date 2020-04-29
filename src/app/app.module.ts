import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import {Routes,RouterModule} from '@angular/router';
const ROUTES:Routes=[
  {
    path:'page1',component:Page1Component
  }
  ,
  {
    path:'page2',component:Page2Component
  }
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, Page1Component, Page2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
