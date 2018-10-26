// import { Component, OnInit } from '@angular/core';
import {Component} from '@angular/core';
import {BaseNestedform} from '../nestedforms.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.css']
})
export class SpecificComponent extends BaseNestedform {

  nestedFormGroup = new FormGroup({
    title: new FormControl('Compound Name needed'),
    content: new FormControl('Compound Info needed'),
  });

  // ngOnInit() {
  // }

}
