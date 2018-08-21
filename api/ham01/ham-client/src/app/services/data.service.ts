import { Injectable } from '@angular/core';

import {Assay} from "../models/assay.model";
import {ASSAYS} from "../data/mock-assays";

import {ClMic} from "../models/cl-mic.model";
// import {CLMICS} from "../data/mock-cl-mic";


// import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';


import {BehaviorSubject, Observable, Subscription} from "rxjs";
// import { Subscription } from 'rxjs';
// import { Observable } from 'rxjs/Rx';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/operator/toPromise';




/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class DataService {

  //the new array for the clmics, Can also do CREATE
  //this is a local array, only stays in RAM
  // clmics: ClMic[] = CLMICS;

  //this is the version for the server
  private _clmicSource = new BehaviorSubject<ClMic[]>([]);


  //this is the original version constructor
  // constructor() { }

  //this is the version for the server
  constructor(private httpClient: HttpClient) { }

  getAssays(): Assay[] {
    return ASSAYS;
  }

  getAssay(id: number): Assay {
    return ASSAYS.find((assay) => assay.id === id);
  }

  // This is the version without server
/*  getClmics(): ClMic[] {
    //this is the original version, can only do READ
    // return CLMICS;

    //this is the version for "new array for the clmics"
    //Can also do CREATE
    // return this.clmics;

    //this is the version for the server

  }*/

  //This is the version for the server
  getClmics(): Observable<ClMic[]> {
    this.httpClient.get('api/v1/cl-mic')
      .toPromise()
      .then((res: any) => {
        this._clmicSource.next(res);
      })
      .catch(this.handleError);
    return this._clmicSource.asObservable();
  }



  // This is the version without server
/*  getClmic(id: number): ClMic {
    //this is the original version, can only do READ
    // return CLMICS.find((clMic) => clMic.clmic_id === clmic_id);

    //this is the version for "new array for the clmics"
    //Can also do CREATE
    // return this.clmics.find((clMic) => clMic.id === id);

    //this is the version for the server
  }*/


  //This is the version for the server
  getClmic(id: number): Promise<ClMic> {

    return this.httpClient.get(`api/v1/cl-mic/${id}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }



// This is the version without server
/*  addClmic(clmic: ClMic):void{
    //this is the original version, can only do READ
    // return Clmic;

    //we would like to add the new problem to the clmic array
    //but the the clmic array is static
    //so we need to make a new array for the clmics
    // clmic.id = this.clmics.length + 1;
    // this.clmics.push(clmic);

    //this is the version for the server
  }*/

  //This is the version for the server
  addClmic(clmic: ClMic) {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.httpClient.post('api/v1/problems', clmic, options)
      .toPromise()
      .then((res: any) => {
        this.getClmics();
        return res;
      })
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }


}
