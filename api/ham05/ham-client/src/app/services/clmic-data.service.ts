import { Injectable } from '@angular/core';
// import {ClmicInterface} from '../interfaces/clmic-interface.interface';
import {ClmicMeta} from '../models/clmic-meta.model';
import { ClmicMetas } from "../data/mock-clmic";



// const filledClmicInterface: ClmicMeta = {
//   firstName: 'Bruce',
//   lastName: 'Zhu',
//   email: 'tzhu@api.com',

//   studyNum: '1808x001',
//   experimentNum: '01',
//   versionNum: '01',

//   units: [
//     {
//       compoundName: 'compound01',
//       lotNum: 'abc1',
//       source: 'plate',
//       well: 'A1',
//       concentration: '10',
//       sp1_mouse: 'true',
//       sp2_rat: '',
//       sp3_minipig: '',
//       sp4_dog: '',
//       sp5_monkey: '',
//       sp6_human: '',
//       sp7_other: '',

//     }
//   ],
// };

@Injectable({
  providedIn: 'root'
})
export class ClmicDataService {

  constructor() { }

  // getFilledWillClmic(): ClmicInterface {
  //   return filledClmicInterface;
  // }

  getClmics(): ClmicMeta[] {
    return ClmicMetas;
  }

  getClmic(id: string): ClmicMeta {
      return ClmicMetas.find((clmic) => clmic.id === id);
  }


}


