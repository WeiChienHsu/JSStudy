import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-clmic',
  templateUrl: './clmic.component.html',
  styleUrls: ['./clmic.component.css']
})
export class ClmicComponent implements OnInit {

  // Compound: new FormArray([]),
  // Lot: new FormArray([]),
  // Souce: new FormArray([]),
  // Well: new FormArray([]),
  // Concentration: new FormArray([]),
  // M: new FormArray([]),
  // R: new FormArray([]),
  // MP: new FormArray([]),
  // D: new FormArray([]),
  // MK: new FormArray([]),
  // H: new FormArray([]),
  // OT: new FormArray([]),

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],

    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),

    aliases: this.fb.array(
      [
      this.fb.control('')
    ]),

    arr: this.fb.array(
      [
        this.fb.group({
          street: [''],
          city: [''],
          state: [''],
          zip: ['']
        })
    ]),
    
    // Compound: this.fb.array(
    //   [
    //   this.fb.control('')
    // ]),
    // Lot: this.fb.array(
    //   [
    //   this.fb.control('')
    // ]),
    // Souce: this.fb.array(
    //   [
    //   this.fb.control('')
    // ]),
    // Well: this.fb.array(
    //   [
    //   this.fb.control('')
    // ]),
    // Concentration: this.fb.array(
    //   [
    //   this.fb.control('')
    // ]),
    // M: this.fb.array(
    //   [
    //   this.fb.control('')
    // ]),
    // R: this.fb.array(
    //   [
    //   this.fb.control('')
    // ]),
    // MP: this.fb.array(
    //   [
    //   this.fb.control('')
    // ]),
    // D: this.fb.array(
    //   [
    //   this.fb.control('')
    // ]),
    // MK: this.fb.array(
    //   [
    //   this.fb.control('')
    // ]),
    // H: this.fb.array(
    //   [
    //   this.fb.control('')
    // ]),
    // OT: this.fb.array(
    //   [
    //   this.fb.control('')
    // ]),


  });


  ngOnInit(){}

  constructor(private fb: FormBuilder) { }


  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  get getCompound() {
    return this.profileForm.get('Compound') as FormArray;
  }

  get arr() {
    return this.profileForm.get('arr') as FormArray;
  }
  // get getLot() {
  //   return this.profileForm.get('Lot') as FormArray;
  // }
  // get getSouce() {
  //   return this.profileForm.get('Souce') as FormArray;
  // }
  // get getWell() {
  //   return this.profileForm.get('Well') as FormArray;
  // }
  // get getConcentration() {
  //   return this.profileForm.get('Concentration') as FormArray;
  // }
  // get getM() {
  //   return this.profileForm.get('M') as FormArray;
  // }
  // get getR() {
  //   return this.profileForm.get('R') as FormArray;
  // }
  // get getMP() {
  //   return this.profileForm.get('MP') as FormArray;
  // }
  // get getD() {
  //   return this.profileForm.get('D') as FormArray;
  // }
  // get getMK() {
  //   return this.profileForm.get('MK') as FormArray;
  // }
  // get getH() {
  //   return this.profileForm.get('H') as FormArray;
  // }
  // get getOT() {
  //   return this.profileForm.get('OT') as FormArray;
  // }


  addAlias() {
    this.aliases.push(this.fb.control(''));
    
    this.getCompound.push(this.fb.control(''));
    // this.getLot.push(this.fb.control(''));
    // this.getSouce.push(this.fb.control(''));
    // this.getWell.push(this.fb.control(''));
    // this.getConcentration.push(this.fb.control(''));
    // this.getM.push(this.fb.control(''));
    // this.getR.push(this.fb.control(''));
    // this.getMP.push(this.fb.control(''));
    // this.getD.push(this.fb.control(''));
    // this.getMK.push(this.fb.control(''));
    // this.getH.push(this.fb.control(''));
    // this.getOT.push(this.fb.control(''));
  }

  addArr() {
    this.arr.push(this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }));
    
    // this.getCompound.push(this.fb.control(''));
    // this.getLot.push(this.fb.control(''));
    // this.getSouce.push(this.fb.control(''));
    // this.getWell.push(this.fb.control(''));
    // this.getConcentration.push(this.fb.control(''));
    // this.getM.push(this.fb.control(''));
    // this.getR.push(this.fb.control(''));
    // this.getMP.push(this.fb.control(''));
    // this.getD.push(this.fb.control(''));
    // this.getMK.push(this.fb.control(''));
    // this.getH.push(this.fb.control(''));
    // this.getOT.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
