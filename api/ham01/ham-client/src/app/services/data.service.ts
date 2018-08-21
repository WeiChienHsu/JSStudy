import { Injectable } from '@angular/core';

import {Assay} from "../models/assay.model";
import {ASSAYS} from "../data/mock-assays";

import {ClMic} from "../models/cl-mic.model";
import {CLMICS} from "../data/mock-cl-mic";


/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class DataService {

  //the new array for the clmics, Can also do CREATE
  clmics: ClMic[] = CLMICS;


  constructor() { }

  getAssays(): Assay[] {
    return ASSAYS;
  }

  getAssay(id: number): Assay {
    return ASSAYS.find((assay) => assay.id === id);
  }

  getClmics(): ClMic[] {
    //this is the original version, can only do READ
    // return CLMICS;

    //this is the version for "new array for the clmics"
    //Can also do CREATE
    return this.clmics;

  }

  getClmic(id: number): ClMic {
    //this is the original version, can only do READ
    // return CLMICS.find((clMic) => clMic.clmic_id === clmic_id);

    //this is the version for "new array for the clmics"
    //Can also do CREATE
    return this.clmics.find((clMic) => clMic.id === id);

  }

  addClmic(clmic: ClMic):void{

    //this is the original version, can only do READ
    // return Clmic;

    //we would like to add the new problem to the clmic array
    //but the the clmic array is static
    //so we need to make a new array for the clmics
    clmic.id = this.clmics.length + 1;
    this.clmics.push(clmic);

  }


}
