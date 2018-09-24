import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ChildModel } from "../shared/child-model";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  child:ChildModel;  
  @Input()
  parentFormArray:FormArray;
  @Output()
  onRemoveChild:EventEmitter<ChildModel> = new EventEmitter<ChildModel>(); 

  childFormGroup:FormGroup;


  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.childFormGroup = this._formBuilder.group({
      child_description: [null, Validators.required]
    })
    this.parentFormArray.push(this.childFormGroup);
  }

  remove(){
    this.onRemoveChild.emit(this.child)
  }

}
