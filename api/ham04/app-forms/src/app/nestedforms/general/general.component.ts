// import { Component, OnInit } from '@angular/core';

import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BaseNestedform} from '../nestedforms.component';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent extends BaseNestedform {

  nestedFormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', ),
    
  });

}
