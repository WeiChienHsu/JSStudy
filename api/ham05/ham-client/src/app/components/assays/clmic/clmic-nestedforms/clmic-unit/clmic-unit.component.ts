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

  nestedFormGroup = new FormGroup({
    title: new FormControl('My note', [Validators.required]),
    content: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

}
