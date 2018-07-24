import { Injectable } from '@angular/core';
import { Problem } from "../models/problem.model";
import { PROBLEMS } from "../mock-problems";
// import { Http, Response, Headers } from '@angular/http';
// import { HttpHandler } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
// import { HttpRequest } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
// import 'rxjs/add/operator/toPromise';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';


// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/toPromise';



// this data service is used to mimick server during developing client
// it shall be changed to get data from the server when the server is done

@Injectable()
export class DataService {
/*
  //define a variable for "add problem"

  // after the server end is done,
  problems: Problem[] = PROBLEMS;

  //PROBLEMS is static

  // constructor() { }
  constructor(private Nahttp : HttpClient) { }


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

 */


  private problemsSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http : HttpClient) { }

  // problems: Problem[] = PROBLEMS;

  getProblems(): Observable<Problem[]> {
    this.http.get("api/v1/problems")
      .toPromise()
      .then((res : HttpResponse<Problem[]>) => {
        console.log("data service");
        console.log(res);
        console.log(typeof res);
        console.log(res[0]);
        console.log(res.headers);

        // this.problemsSource.next([res[5]]);
        this.problemsSource.next(res);

      })
      .catch(this.handleError);
    return this.problemsSource.asObservable();
  }


/*
  getProblems(): Problem[] {
    // return PROBLEMS;
    return PROBLEMS;

  }*/

  getProblem(id: number): Promise<Problem> {
    return this.http.get(`api/v1/problems/${id}`)
      .toPromise()
      .then((res: HttpResponse<Problem[]>) => res)
      .catch(this.handleError);
  }

  addProblem(problem: Problem): Promise<Problem> {
    let headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post('api/v1/problems', problem, {headers})
      .toPromise()
      .then((res: HttpResponse<Problem[]>) => {
        this.getProblems();
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error : any) : Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.body || error);
  }

}
