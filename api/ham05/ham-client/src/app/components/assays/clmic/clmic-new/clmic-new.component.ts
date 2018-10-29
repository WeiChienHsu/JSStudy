import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {BaseFormComponent} from '../../base/base-form.component';

import {ClmicDataService} from '../../../../services/clmic-data.service';


@Component({
  selector: 'app-clmic-new',
  templateUrl: './clmic-new.component.html',
  styleUrls: ['./clmic-new.component.css']
})
export class ClmicNewComponent extends BaseFormComponent implements OnInit {


  form = new FormGroup({
    // Field specified only in profile form
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    // This field will be merged with nested
    email: new FormControl('', [Validators.email]),

    /**
     * Don't forget to specify this Array
     */
    units: new FormArray([])
  });

  constructor(private clmicDataService: ClmicDataService) {
    super();
  }


  ngOnInit() {
    // const value = this.clmicDataService.getFilledWillClmic();
    // this.setFormValues(value);
  }

  addUnit() {
    const notes = this.form.get('units') as FormArray;
    notes.push(new FormGroup({}));
  }

  addMultiUnit() {

  }

  removeUnit(index: number) {
    const notes = this.form.get('units') as FormArray;
    notes.removeAt(index);
  }

}
