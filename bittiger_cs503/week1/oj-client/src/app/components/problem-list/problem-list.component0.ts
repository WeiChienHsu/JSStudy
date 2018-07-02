import {Component, OnInit} from '@angular/core';
//import "Problem". this is the way to use definitions from other folder
import {Problem} from "../../models/problem.model";

//we just defined the const here, but we need to let the components to have it
const PROBLEMS: Problem[] = [
  {
    id: 1,
    name: "Two Sum",
    desc: `Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    difficulty: "easy"
  }
];

@Component({
  selector: 'app-problem-list',
  // templateUrl: './problem-list.component.html',
  // styleUrls: ['./problem-list.component.css'],
  template: `
  <p>
    problem-list Works!
  </p>

  <div class="container">
    <div class="list-group">
      <a class="list-group-item" *ngFor="let problem of problems" [routerLink]="['/problems', problem.id]">
        
        <span class="{{'pull-left label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}">{{problem.difficulty}}</span>
        
        <strong class="title">{{problem.id}}.{{problem.name}}</strong>
        
      </a>
    </div>
  </div>
  `,

  styles: [`
    .difficulty {
      min-width: 65px;
      margin-right: 10px;
    }

    .label.difficulty {
      padding-top: 0.6em;
      color: #fbfdfa;
      font-size: 12px;
    }

    .title {
      font-size: 1.2em;
    }

    .diff-easy {
      background-color: #42ebf4;
    }

    .diff-medium {
      background-color: #92cf5c;
    }

    .diff-hard {
      background-color: #dd0d1e;
    }

    .diff-super {
      background-color: #8d16e2;
    }
  `]
})

export class ProblemListComponent implements OnInit {
  //this is the definition of variable "problems" by TypeScript, which is an "Problem" array.
  problems:Problem[];

  constructor() { }

  ngOnInit() {
    //"this.problems" is view model
    //after we have got the view model, then we can display it at frontend
    this.problems = PROBLEMS;
  }
}
