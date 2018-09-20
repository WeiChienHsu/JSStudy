import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {mobileValidator, equlValidator, mobileAsyncValidator} from '../validator/validators';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

    // 响应式表单===========
    formModel: FormGroup;

    // 可以把通用的校验器放到外部文件中---
    // // 自定义校验器--校验的是FormControl
    // mobileValidator(control: FormControl): any {
    //     const myreg = /^(((13[0-9]{1}) | (15[0-9]{1}) | (18[0-9]{1}))+\d{8})$ /;
    //     // control.value 要校验数据的为输入值
    //     const vaild = myreg.test( control.value );
    //     console.log('mobile 校验结果是：' + vaild );
    //
    //     // 验证通过时vaild为true，则校验器返回 null，不然返回错误信息
    //     return vaild ? null : {mobile: true};
    // }
    //
    // // 自定义校验器--校验的是FormGroup
    // equlValidator(group: FormGroup): any {
    //     const password: FormControl = group.get('password') as FormControl;
    //     const pconfirm: FormControl = group.get('pconfirm') as FormControl;
    //
    //     const valid: boolean = (password.value === pconfirm.value);
    //     if (valid) {
    //         console.log('密码正确');
    //     } else {
    //         console.log('密码错误');
    //     }
    //     return valid ? null : {equal: true};
    // }

    // constructor() {
    //     this.formModel = new FormGroup({
    //         username: new FormControl(),
    //         mobile: new FormControl(),
    //         passwordGroup: new FormGroup({
    //             password: new FormControl(),
    //             pconfirm: new FormControl()
    //         })
    //     });
    // }

    // 用FormBuilder重写 Validators是系统的检验器
    constructor(fb: FormBuilder) {
        this.formModel = fb.group({
            // 表示username是必须的，而且不能少于6位
            username: ['', [Validators.required, Validators.minLength(6)]],
            // mobile: ['', this.mobileValidator],
            mobile: ['', mobileValidator, mobileAsyncValidator],
            // 校验FormGroup方法
            passwordGroup: fb.group({
                password: ['', Validators.minLength(6)],
                pconfirm: ['']
            // }, {validator: this.equlValidator})
            }, {validator: equlValidator})
        });
    }

    ngOnInit() {
    }

    onSubmit() {

        // const isValid: boolean = this.formModel.get('username').valid;
        // const errors: any = this.formModel.get('username').errors;
        // console.log( 'username的校验结果是: ' + isValid);
        // if (errors) {
        //     console.log('username的错误信息是：' + errors);
        // }

        // 表单所有字段都是合法
        if (this.formModel.valid) {
            console.log('表单所有字段都是合法');
            console.log( this.formModel.value );
        } else {
            console.log('表单有字段是不合法');
        }

    }
}


































