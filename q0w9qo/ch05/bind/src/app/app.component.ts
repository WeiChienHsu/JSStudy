import { Component } from '@angular/core';
// import {Observable} from "rxjs";
// import {from} from "rxjs";
// import { filter } from 'rxjs/operators';

import {PriceQuote} from "./price-quote/price-quote.component";

import { map, filter, scan } from 'rxjs/operators';

// rxjs: Contains creation methods, types, schedulers, and utilities.
import { Observable, Subject, asapScheduler, pipe, of, from,
  interval, merge, fromEvent } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  priceQuote:PriceQuote = new PriceQuote("",0);

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }

  constructor() {
    var subscription = from([1,2,3,4]).pipe(filter((e) => e%2 == 0)).pipe(map((e) => e*e)).subscribe(
      e => console.log(e),
      error => console.error(error),
      () => console.log("结束啦!")
    );

    subscription.unsubscribe();
  }
}
