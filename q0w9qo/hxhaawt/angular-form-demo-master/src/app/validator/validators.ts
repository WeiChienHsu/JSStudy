import { FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

// 自定义校验器--校验的是FormControl
export function mobileValidator(control: FormControl): any {
    const myreg = /^1(3|4|5|7|8)\d{9}$/;
    // control.value 要校验数据的为输入值
    const vaild = myreg.test( control.value );
    console.log('mobile 校验结果是：' + vaild );

    // 验证通过时vaild为true，则校验器返回 null，不然返回错误信息
    return vaild ? null : {mobile: true};
}

// 这个是异步校验器
export function mobileAsyncValidator(control: FormControl): any {

    const myreg = /^1(3|4|5|7|8)\d{9}$/;
    // control.value 要校验数据的为输入值
    const vaild = myreg.test( control.value );
    console.log('mobile 校验结果是：' + vaild );

    // 验证通过时vaild为true，则校验器返回 null，不然返回错误信息
    // return vaild ? null : {mobile: true};
    return Observable.of(vaild ? null : {mobile: true});
}

// 自定义校验器--校验的是FormGroup
export function equlValidator(group: FormGroup): any {
    const password: FormControl = group.get('password') as FormControl;
    const pconfirm: FormControl = group.get('pconfirm') as FormControl;

    const valid: boolean = (password.value === pconfirm.value);
    if (valid) {
        console.log('密码正确');
    } else {
        console.log('密码错误');
    }
    return valid ? null : {equal: {descxx: '密码和确认密码不匹配'}};
}














