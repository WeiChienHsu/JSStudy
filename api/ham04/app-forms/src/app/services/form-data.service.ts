import { Injectable } from '@angular/core';
import {GeneralInterface} from '../interfaces/general.interface';


const filledWithSpecificGeneral: GeneralInterface = {
  name: 'Bruce',
  email: 'tzhu@api.com',
  note: [{
    title: 'My First Compound',
    content: 'Content of 1st Compound',
  }, {
    title: 'My Second Compound',
    content: 'Content of 2nd Compound',
  }]
}

@Injectable({
  providedIn: 'root'
})

export class FormDataService {

  constructor() { }

  getFilledWithSpecificGeneral(): GeneralInterface{
    return filledWithSpecificGeneral;
  }
}
