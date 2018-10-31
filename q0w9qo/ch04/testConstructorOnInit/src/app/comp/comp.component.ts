import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  constructor() { 
    console.log("This is constructor.")
  }

  ngOnInit() {
    console.log("This is ngOnInit.")

  }

}
