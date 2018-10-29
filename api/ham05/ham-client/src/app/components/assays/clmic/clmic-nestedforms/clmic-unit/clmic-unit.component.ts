import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';


import {BaseNestedform} from '../clmic-base.nestedform';


@Component({
  selector: 'app-clmic-unit',
  templateUrl: './clmic-unit.component.html',
  styleUrls: ['./clmic-unit.component.css']
})
export class ClmicUnitComponent extends BaseNestedform {

  // constructor() { }
  //
  // ngOnInit() {
  // }

/*  nestedFormGroup = new FormGroup({
    title: new FormControl('My note', [Validators.required]),
    content: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });*/



    nestedFormGroup = new FormGroup({
      compoundName: new FormControl('Compound Name', [Validators.required]),
      lotNum: new FormControl('Lot#', [Validators.required]),
      source: new FormControl('source', [Validators.required]),
      well: new FormControl('well', [Validators.required]),
      concentration: new FormControl('concentration', [Validators.required]),
      SP1_mouse: new FormControl(''),
      SP2_rat: new FormControl(''),
      SP3_miniPig: new FormControl(''),
      SP4_dog: new FormControl(''),
      SP5_monkey: new FormControl(''),
      SP6_human: new FormControl(''),
      SP7_other: new FormControl(''),



    });
}
