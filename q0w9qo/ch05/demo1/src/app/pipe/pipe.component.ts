import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  birthday: Date = new Date();
  pi: number = 3.1415926;
  three: number = 3;

  size: number = 4;
  constructor() { }

  ngOnInit() {
  }

  // ng g pipe pipes/multiple

}
