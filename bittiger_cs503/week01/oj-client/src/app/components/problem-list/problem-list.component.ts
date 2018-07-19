import { Component, OnInit } from '@angular/core';
import {Problem} from "../../models/problem.model";

const PROBLEMS: Problem[] = [
  {
    id: 1,
    name: "Two Sum",
    desc: `Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    difficulty: "easy"
  },
  {
    id: 2,
    name: "3Sum",
    desc: `Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.`,
    difficulty: "medium"
  },
  {
    id: 3,
    name: "4Sum",
    desc: `Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.`,
    difficulty: "medium"
  },
  {
    id: 4,
    name: "Sudoku Solver",
    desc: `Write a program to solve a Sudoku puzzle by filling the empty cells.
Empty cells are indicated by the character '.'.
You may assume that there will be only one unique solution.`,
    difficulty: "hard"
  },
  {
    id: 5,
    name: "Sliding Window Maximum",
    desc: `Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.`,
    difficulty: "super"
  }
];

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
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
