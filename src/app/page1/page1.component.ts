import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() { }
  text=""
  ngOnInit() {
  }
  test(angka)
  {
    if(angka=="1")
    {
      this.text=this.text+"1"
    }
    else if(angka=="2")
    {
      this.text=this.text+"2"
    }
    else if(angka=="3")
    {
      this.text=this.text+"3"
    }
      else if(angka=="4")
    {
      this.text=this.text+"4"
    }
      else if(angka=="5")
    {
      this.text=this.text+"5"
    }
    else if(angka=="6")
    {
      this.text=this.text+"6"
    }
    else if(angka=="7")
    {
      this.text=this.text+"7"
    }
    else if(angka=="8")
    {
      this.text=this.text+"8"
    }
    else if(angka=="9")
    {
      this.text=this.text+"9"
       alert(angka)
    }
    else if(angka=="10")
    {
      this.text=this.text+"-"
    }
    else if(angka=="11")
    {
      this.text=this.text+"+"
    }
    else if(angka=="12")
    {
      this.text=this.text+"*"
    }
    else if(angka=="13")
    {
      this.text=this.text+"="
    }
  }
}