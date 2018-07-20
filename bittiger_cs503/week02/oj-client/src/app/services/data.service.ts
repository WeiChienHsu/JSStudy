import { Injectable } from '@angular/core';

import {Problem} from "../models/problem.model";
import {PROBLEMS} from "../mock-problems";

@Injectable()
export class DataService {

  //define a variable for "add problem"
  problems: Problem[] = PROBLEMS;

  //PROBLEMS is static

  constructor() { }

  getProblems(): Problem[] {
    // return PROBLEMS;
    return this.problems;
  }

  getProblem(id: number): Problem {
    // return PROBLEMS.find((problem) => problem.id === id);
    return this.problems.find((problem) => problem.id === id);

  }

  //define a method for "add problem"
  addProblem(problem: Problem): void {
      problem.id = this.problems.length + 1;
      this.problems.push(problem);
  }

}
