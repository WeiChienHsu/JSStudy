import { Directive } from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";
import {mobileValidator} from "../validator/validators";

@Directive({
    selector: '[mobile]',
    providers: [{
        provide: NG_VALIDATORS, useValue: mobileValidator, multi: true
    }]
})
export class MobileValidatorDirective {

    // 这是一个指令组件
    constructor() { }

}
