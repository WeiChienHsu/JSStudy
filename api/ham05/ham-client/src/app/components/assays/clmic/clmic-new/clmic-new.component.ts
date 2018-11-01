import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {BaseFormComponent} from '../../base/base-form.component';

import {ClmicDataService} from '../../../../services/clmic-data.service';
import { speciesNumValidator } from "../../../../validators/clmic-validator";


@Component({
  selector: 'app-clmic-new',
  templateUrl: './clmic-new.component.html',
  styleUrls: ['./clmic-new.component.css']
})
export class ClmicNewComponent extends BaseFormComponent implements OnInit {

  //Basic model for the "form" in the webpage
  form = new FormGroup({
    // Field specified only in profile form
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    // This field will be merged with nested
    email: new FormControl('', [Validators.email]),

    /**
     * Don't forget to specify this Array
     */
    units: new FormArray([]),
    numLines: new FormControl('', [Validators.max(64)]),
  });


  constructor(private clmicDataService: ClmicDataService) {
    super();
  }


  ngOnInit() {
    // const vremoveUnitalue = this.clmicDataService.getFilledWillClmic();
    // this.setFormValues(value);
  }

  addUnit() {
    const notes = this.form.get('units') as FormArray;
    notes.push(new FormGroup({}));
    var numLines = Number(this.form.get("numLines").value);
    numLines++;
    this.form.get("numLines").setValue(numLines);
  }



  //remove unit from the most top level
  //not used in current version
  removeUnit(index: number) {
    const units = this.form.get('units') as FormArray;
    units.removeAt(index);

    var numLines = Number(this.form.get("numLines").value);
    numLines--;
    this.form.get("numLines").setValue(numLines);
  }

  //TODO
  //add multiple lines of units
  public arrNumLinesNeed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18,19, 20, 21, 22, 23, 24, 
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 
    39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 
    53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,];
  // numLines: number;
  
    // initNew(){
    //   this.form = new FormGroup({
    //     // Field specified only in profile form
    //     firstName: new FormControl(''),
    //     lastName: new FormControl(''),
    //     // This field will be merged with nested
    //     email: new FormControl('', [Validators.email]),
    
    //     /**
    //      * Don't forget to specify this Array
    //      */
    //     units: new FormArray([]),
    //     numLines: new FormControl('', [Validators.max(64)]),
    //   });
    // }

  setMultiUnit() {
    let numLinesToAdd = this.form.get("numLines").value;
    const units = this.form.get('units') as FormArray;
    const lengUnits = units.length;

    // console.log(lengUnits);
    for (let i = lengUnits - 1; i >= 0; i--) {
      units.removeAt(i);
    }

    this.form.get("numLines").setValue(0);
    // console.log(this.form.get("numLines").value);
    // this.form.patchValue();
    // this.form.get("numLines").setValue(numLinesToAdd);
    
    for (var i = 0; i < numLinesToAdd; i++) {
      this.addUnit();
    }
  }

  //TODO
  validateLineNum (numToAdd: number) {
    
  }

  //TODO
  
// generateID(): string {
//   var studyNum = this.form.get("")
  
// }


}

/*

  public difficulties = ["Easy", "Medium", "Hard", "Super"];

  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);

  constructor(@Inject("data") private data) { }
  // constructor() { }

  ngOnInit() {
  }

  addProblem(): void {
    //data.addProblem shall be in the data service
    // this.data.addProblem(this.newProblem);
    this.data.addProblem(this.newProblem)
      .catch(error => console.log(error._body));

    // clear the form for next input
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);


  }
 */
