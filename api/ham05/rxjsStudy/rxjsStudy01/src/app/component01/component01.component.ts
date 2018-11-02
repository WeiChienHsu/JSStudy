import { Component, OnInit } from '@angular/core';

// import Rx from 'rxjs/Rx';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-component01',
  templateUrl: './component01.component.html',
  styleUrls: ['./component01.component.css']
})
export class Component01Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Observable.of(1,2,3).map(x => x + '!!!'); 


}
