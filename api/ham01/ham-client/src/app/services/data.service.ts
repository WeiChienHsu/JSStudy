import { Injectable } from '@angular/core';

import {Assay} from "../models/assay.model";
import {ASSAYS} from "../mock-assays";

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class DataService {

  constructor() { }

  getAssays(): Assay[] {
    return ASSAYS;
  }

  getAssay(id: number): Assay {
    return ASSAYS.find((assay) => assay.id === id);
  }
}
