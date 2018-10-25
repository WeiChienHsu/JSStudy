import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
// import { BaseFormComponent } from './form/base-form/base-form.component';
// import { NestedformsComponent } from './nestedforms/nestedforms.component';
import { GeneralComponent } from './nestedforms/general/general.component';
import { SpecificComponent } from './nestedforms/specific/specific.component';

import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {FormDataService} from './services/form-data.service';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    // BaseFormComponent,
    // NestedformsComponent,
    GeneralComponent,
    SpecificComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    FormDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
