import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

    // 这是响应式表单--demo

    formModel: FormGroup = new FormGroup({
        // username 初始化值为 aaa
        username: new FormControl('aaa'),

        dateRange: new FormGroup({
            from: new FormControl(),
            to: new FormControl()
        }),
        emails:  new FormArray([
            new FormControl('aaa@.com'),
            new FormControl('bbb@.com')
        ])
    });

    constructor() { }

    ngOnInit() {
    }

    onSubmit() {
        console.log ( this.formModel.value );
    }

    addEmail() {
        let emails = this.formModel.get('emails') as FormArray;
        emails.push(new FormControl());
    }

}














































