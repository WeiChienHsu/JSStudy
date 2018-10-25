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
    title: new FormControl('My specific title'),
    content: new FormControl('My specific content'),
  });

  // ngOnInit() {
  // }

}
