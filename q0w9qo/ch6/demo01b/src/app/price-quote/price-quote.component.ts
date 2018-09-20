import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCode:string = "IBM";

  price: number;

  constructor() {

  }

  ngOnInit() {
  }

}


export class PriceQuote {

  constructor(public stockCode:string,
              public lastPrice:number
  ){

  }

}
