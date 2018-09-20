import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';

@NgModule({
declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    ReactFormComponent,
    MobileValidatorDirective,
    EqualValidatorDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
