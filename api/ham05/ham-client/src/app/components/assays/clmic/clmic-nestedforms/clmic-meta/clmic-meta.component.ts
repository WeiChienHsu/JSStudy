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

  //TODO
  //array of experiment number
  public arrExperimentNum = ['E01', 'E02', 'E03', 'E04', 'E05', 'E06', 'E07', 'E08', 'E09', 'E10', ];


  //TODO
  //array of version number
  public arrVersionNum = ['V01', 'V02', 'V03', 'V04', 'V05', 'V06', 'V07', 'V08', 'V09', 'V10',];
  //TODO




}
