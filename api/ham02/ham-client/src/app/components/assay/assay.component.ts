import { Component, OnInit, Inject } from '@angular/core';
import {Assay} from "../../models/assay.model";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-assay',
  templateUrl: './assay.component.html',
  styleUrls: ['./assay.component.css']
})
export class AssayComponent implements OnInit {

/*  constructor() { }

  ngOnInit() {
  }*/
  imgUrl:String = "http://via.placeholder.com/250x100";

  assays:Assay[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //"this.problems" is view model
    //after we have got the view model, then we can display it at frontend
    // this.problems = PROBLEMS;
    this.getAssays();
  }

  getAssays(): void {
    this.assays = this.dataService.getAssays();
  }

}
