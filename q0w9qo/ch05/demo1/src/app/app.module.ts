import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// WHAT IS THE DIFFERENCE???
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Bind2Component } from './bind2/bind2.component';
import { PipeComponent } from './pipe/pipe.component';
import { MultiplePipe } from './pipes/multiple.pipe'

//deprecated
// import { Http, HttpModule} from '@angular/http'


@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    Bind2Component,
    PipeComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
