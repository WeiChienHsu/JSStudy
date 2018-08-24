import { Component, OnInit, Inject } from '@angular/core';
import {Problem} from "../../models/problem.model";

import { Subscription } from 'rxjs';


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  //this is the definition of variable "problems" by TypeScript, which is an "Problem" array.
  problems:Problem[];
  subscriptionProblems: Subscription;


  constructor(@Inject("data") private data) { }

  ngOnInit() {
    //"this.problems" is view model
    //after we have got the view model, then we can display it at frontend
    // this.problems = PROBLEMS;
    this.getProblems();
  }
/*

  getProblems(): void {
    this.problems = this.data.getProblems();
  }
*/

  private getProblems(): void {

    this.subscriptionProblems = this.data.getProblems()
      .subscribe(problems => this.problems = problems);

    console.log("this.data.getProblems()");
    console.log(this.subscriptionProblems );
  }


}
