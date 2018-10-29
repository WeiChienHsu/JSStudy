import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';


import {BaseNestedform} from '../clmic-base.nestedform';
import {ClmicDataService} from '../../../../../services/clmic-data.service';


@Component({
  selector: 'app-clmic-meta',
  templateUrl: './clmic-meta.component.html',
  styleUrls: ['./clmic-meta.component.css']
})
export class ClmicMetaComponent extends BaseNestedform {

  // constructor() { }
  //
  // ngOnInit() {
  // }

/*  nestedFormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', ),
  });*/

  nestedFormGroup = new FormGroup({
    studyNum: new FormControl(''),
    experimentNum: new FormControl(''),
    versionNum: new FormControl('' ),
  });



}
