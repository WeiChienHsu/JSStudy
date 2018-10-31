import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {of} from 'rxjs';


@Component({
  selector: 'app-validation',
  template: `
  <form [formGroup]="form" (ngSubmit)="_submitForm(form)">
      <input type="email" formControlName="email">
      <input type="text" formControlName="nickname">
      <button type="submit" [disabled]="form.invalid">Submit</button>
  </form>
  `
})
export class UserEditComponent {
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}
  
  ngOnInit() {
      this.form = this.fb.group({
          email: ['', Validators.compose([Validators.required, Validators.email])],
          nickname: ['', [Validators.required]]
      });
      
      this.route.params
          .switchMap((params: Params) => loadUser(+params['id']))
          .subscribe(data => {
              // Updating value
          });
  }
  
  loadUser() {
      return of({ email: 'xx@xx.com', nickname: 'cipchk' }).delay(1000);
  }
  
  _submitForm({ value }) {
      // Save value
  }
}
