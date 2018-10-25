import { Injectable } from '@angular/core';
import {ClmicInterface} from '../interfaces/clmic-interface.interface';

const filledClmicInterface: ClmicInterface = {
  firstName: 'Bruce',
  lastName: 'Zhu',
  email: 'tzhu@api.com',

  studyNum: '1808x001',
  experimentNum: '01',
  versionNum: '01',

  units: [
    {
      compoundName: 'compound01',
      lotNum: 'abc1',
      source: 'plate',
      well: 'A1',
      concentration: '10',
      sp1_mouse: 'true',
      sp2_rat: '',
      sp3_minipig: '',
      sp4_dog: '',
      sp5_monkey: '',
      sp6_human: '',
      sp7_other: '',

    }
  ],
};

@Injectable({
  providedIn: 'root'
})
export class ClmicDataService {

  constructor() { }

  getFilledWillClmic(): ClmicInterface {
    return filledClmicInterface;
  }
}
