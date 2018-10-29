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
    lastName: new FormControl(''), // Field specified only in profile form
    email: new FormControl('', [Validators.email]), // This field will be merged with nested

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

  removeUnit(index: number) {
    const notes = this.form.get('units') as FormArray;
    notes.removeAt(index);
  }

}
