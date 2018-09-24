import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ParentModel } from "../shared/parent-model";
import { ChildModel } from "../shared/child-model";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentModel:ParentModel = new ParentModel();

  parentFormGroup:FormGroup;

  constructor(
    private _formBuilder:FormBuilder
    , private _cd:ChangeDetectorRef 
  ) {}

  ngOnInit() {
    this.parentFormGroup = this._formBuilder.group({
      description: [null, Validators.required]
    })
    console.log(this.parentFormGroup);
  }

  addChild(){
    this.parentModel.children.push(new ChildModel());
    this._cd.detectChanges()
  }

}
