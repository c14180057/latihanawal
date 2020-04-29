import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private route: ActivatedRoute,private router : Router ) { }
  res;
  ngOnInit() {
     this.res = this.route.snapshot.paramMap.get('hasil');
  }
  back()
  {
     this.router.navigate(['/page1']);
  }
}