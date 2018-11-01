import { Component, OnInit } from '@angular/core';
import { map, filter, scan } from 'rxjs/operators';

// rxjs: Contains creation methods, types, schedulers, and utilities.
import { Observable, Subject, asapScheduler, pipe, of, from,
  interval, merge, fromEvent } from 'rxjs';


@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  constructor() { 
    var subscription = from([1,2,3,4])
    .pipe(filter((e) => e%2 == 0))
    .pipe(map((e) => e*e))
    .subscribe(
      e => console.log(e),
      error => console.error(error),
      () => console.log("结束啦!")
    );

    subscription.unsubscribe();
   }

  ngOnInit() {
  }


  onKey(event) {
    console.log(event.target.value);
  }

  onKey2(value: string) {
    console.log(value);
  }

  

}
