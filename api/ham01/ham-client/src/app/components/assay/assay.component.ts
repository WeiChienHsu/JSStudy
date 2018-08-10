import { Component, OnInit, Inject } from '@angular/core';
import {Assay} from "../../models/assay.model";

@Component({
  selector: 'app-assay',
  templateUrl: './assay.component.html',
  styleUrls: ['./assay.component.css']
})
export class AssayComponent implements OnInit {

/*  constructor() { }

  ngOnInit() {
  }*/

  assays:Assay[];

  constructor(@Inject("data") private data) { }

  ngOnInit() {
    //"this.problems" is view model
    //after we have got the view model, then we can display it at frontend
    // this.problems = PROBLEMS;
    this.getAssays();
  }

  getAssays(): void {
    this.assays = this.data.getAssays();
  }

}
