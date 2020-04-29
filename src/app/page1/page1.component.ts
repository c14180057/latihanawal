import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

 constructor (private router : Router) {}
  
  text=""
  angka1="";
  angka2="";
  ops="";
  result;
  ang1;
  ang2;
  operator=false
  ngOnInit() {
  }
  getresult()
  {
    return this.result
  }
  test(angka)
  {
    if(angka=="1")
    {
      this.text=this.text+"1"
      if(this.operator==false)
      {
        this.angka1=this.angka1+"1"
      }
      else
      {
         this.angka2=this.angka2+"1"
      }
    }
    else if(angka=="2")
    {
      this.text=this.text+"2"
      if(this.operator==false)
      {
        this.angka1=this.angka1+"2"
      }
       else
      {
         this.angka2=this.angka2+"2"
      }
    }
    else if(angka=="3")
    {
      this.text=this.text+"3"
      if(this.operator==false)
      {
        this.angka1=this.angka1+"3"
      }
       else
      {
         this.angka2=this.angka2+"3"
      }
    }
      else if(angka=="4")
    {
      this.text=this.text+"4"
      if(this.operator==false)
      {
        this.angka1=this.angka1+"4"
      }
       else
      {
         this.angka2=this.angka2+"4"
      }
    }
      else if(angka=="5")
    {
      this.text=this.text+"5"
      if(this.operator==false)
      {
        this.angka1=this.angka1+"5"
      }
       else
      {
         this.angka2=this.angka2+"5"
      }
    }
    else if(angka=="6")
    {
      this.text=this.text+"6"
      if(this.operator==false)
      {
        this.angka1=this.angka1+"6"
      }
       else
      {
         this.angka2=this.angka2+"6"
      }
    }
    else if(angka=="7")
    {
      this.text=this.text+"7"
      if(this.operator==false)
      {
        this.angka1=this.angka1+"7"
      }
       else
      {
         this.angka2=this.angka2+"7"
      }
    }
    else if(angka=="8")
    {
      this.text=this.text+"8"
      if(this.operator==false)
      {
        this.angka1=this.angka1+"8"
      }
       else
      {
         this.angka2=this.angka2+"8"
      }
    }
    else if(angka=="9")
    {
      this.text=this.text+"9"
      if(this.operator==false)
      {
        this.angka1=this.angka1+"9"
      }
       else
      {
         this.angka2=this.angka2+"9"
      }
    }
    else if(angka=="10")
    {
      this.text=this.text+"-"
      this.operator=true
      this.ops="-"
    }
    else if(angka=="11")
    {
      this.text=this.text+"+"
      this.operator=true
      this.ops="+"
    }
    else if(angka=="12")
    {
      this.text=this.text+"*"
      this.operator=true
      this.ops="*"
    }
    else if(angka=="13")
    {
      this.ang1=parseInt(this.angka1)
      this.ang2=parseInt(this.angka2)
      if(this.ops=="+")
      {
        this.result=this.ang1+this.ang2
      }
      else if(this.ops=="*")
      {
        this.result=this.ang1*this.ang2
      }
      else
      {
        this.result=this.ang1-this.ang2
      }
      
    this.router.navigate(['/page2',this.result]);
    }
  }
}