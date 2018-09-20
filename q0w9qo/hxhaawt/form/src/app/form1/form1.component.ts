import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

    constructor() { }

    ngOnInit() {

    }

    onSubmit2(value: any) {
        console.log ( value );
    }

    onSubmit(value: any, valid: boolean) {
        console.log('valid: ' + valid);
        console.log( value );
    }

    usernameValid: boolean = true;
    usernameUntouched: boolean = true;

    onUsernameInput(form: NgForm) {
        if ( form ) {
            this.usernameValid = form.form.get('username').valid;
            this.usernameUntouched = form.form.get('username').untouched;
        }
    }
}












