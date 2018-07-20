import { Component, OnInit, Inject } from '@angular/core';
import {Problem} from "../../models/problem.model";


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  //this is the definition of variable "problems" by TypeScript, which is an "Problem" array.
  problems:Problem[];

  constructor(@Inject("data") private data) { }

  ngOnInit() {
    //"this.problems" is view model
    //after we have got the view model, then we can display it at frontend
    // this.problems = PROBLEMS;
    this.getProblems();
  }

  getProblems(): void {
    this.problems = this.data.getProblems();
  }


}
