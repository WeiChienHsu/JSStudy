import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from "@angular/forms";

import { ChildModel } from "../shared/child-model";

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {

  @Input()
  childrenList:ChildModel[] = [];
  @Input()
  parentFormGroup:FormGroup;


  childListFormArray:FormArray;

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.childListFormArray = this._formBuilder.array([]);
    this.parentFormGroup.addControl('children',this.childListFormArray);
  }

  onRemoveChild(pChild:ChildModel){
    let index = this.childrenList.indexOf(pChild);
    this.childrenList.splice(index,1)
    this.childListFormArray.removeAt(index);
  }

}
