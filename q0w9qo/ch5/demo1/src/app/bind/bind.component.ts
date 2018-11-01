import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  birthday:Date = new Date();

  pi:number = 3;

  // L04 Html property
  size:number = 7;
  //L04 html property
  divClass: string;
  isBig: boolean = false;

  divClass2:any = {
    a: false,
    b: false,
    c: false
  };

  isDev: boolean = true;

  divStyle: any = {
    color: 'red',
    background: 'yellow',
  }

  constructor() {
    setTimeout(() => {
      // this.divClass = "a b c";
      // this.isBig = true;
      this.divClass2 = {
        a: true,
        b: true,
        c: true
      }
    }, 3000

    );
  }



  ngOnInit() {
  }
  //L02
  doOnClick (event: any) {
    console.log(event);
  }
  //L03 Dom property
  imgUrl: string = "https://via.placeholder.com/150";


  /*HTML property value is initial value, 
  Dom property value is current value,
   
  HTML property value can not be changed, 
  Dom property value can be changed.

  template binding is done through Dom property and events, not HTML property.

  */
  doOnInput(event: any) {
    //Dom propterty
    console.log(event.target.value);
    //html property
    console.log(event.target.getAttribute('value'));
  }

  // L05
  name: string;
  doOnInput2 (event) {
    this.name = event.target.value;
  }


}
