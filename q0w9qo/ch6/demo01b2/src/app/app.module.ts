import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { PriceQuoteComponent } from './price-quote/price-quote.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    PriceQuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
