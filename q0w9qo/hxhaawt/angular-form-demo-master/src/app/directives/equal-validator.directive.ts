import { Directive } from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";
import {equlValidator} from "../validator/validators";

@Directive({
    selector: '[equal]',
    providers: [{
        provide: NG_VALIDATORS, useValue: equlValidator, multi: true
    }]
})
export class EqualValidatorDirective {

    // 这是一个指令组件
    constructor() { }

}
