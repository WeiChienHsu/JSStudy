import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from './base-form/base-form.component';
import {FormDataService} from '../services/form-data.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent extends BaseFormComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }


  form = new FormGroup({
    lastName: new FormControl(''), // Field specified only in profile form
    email: new FormControl('', [Validators.email]), // This field will be merged with nested

    /**
     * Don't forget to specify this Array
     */
    specific: new FormArray([])
  });

  constructor(private formDataService: FormDataService) {
    super();
  }

  ngOnInit() {
    const value = this.formDataService.getFilledWithSpecificGeneral();
    this.setFormValues(value);
  }

  addNote() {
    const notes = this.form.get('specific') as FormArray;
    notes.push(new FormGroup({}));
  }

  removeNote(index: number) {
    const notes = this.form.get('specific') as FormArray;
    notes.removeAt(index);
  }
}
