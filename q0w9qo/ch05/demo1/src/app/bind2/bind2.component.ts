import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, timer } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-bind2',
  templateUrl: './bind2.component.html',
  styleUrls: ['./bind2.component.css']
})
export class Bind2Component implements OnInit {

  searchInput: FormControl = new FormControl();

  constructor() { 
/*     this.searchInput.valueChanges
    .subscribe(stockCode => this.getStockInfo(stockCode)); */

    this.searchInput.valueChanges
    .pipe(debounceTime(500))
    .subscribe(stockCode => this.getStockInfo(stockCode));

  }

  ngOnInit() {
  }

getStockInfo (value: string) {
  console.log(value);
}


}
