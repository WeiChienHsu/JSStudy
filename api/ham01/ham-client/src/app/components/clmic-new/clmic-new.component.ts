import { Component, OnInit, Inject } from '@angular/core';
import { ClMic } from "../../models/cl-mic.model";

import { DataService } from "../../services/data.service";


const DEFAULT_CLMIC: ClMic = Object.freeze({
  id: 0,
  name: "name_XXX",
  desc: "desc_XXX",
  Num_Incubation: 1,
/*  Num_SP: 0,
  Vol_DMSO: 247.5,
  Vol_Liver_Microsome: 246.9,
  Vol_Stop: 200,
  Vol_CompoundMix: 0,
  Vol_Kpi_NADPH: 0,
  Num_Timers: 0,
  Vol_Collection_Sample: 0,
  order: [0],
  Num_Inc_Each_SP: [0],
  LabwareID: ["LabwareID_XXX"],
  PositionID: ["PositionID_XXX"],
  Vol_CMP: [0],*/
  SP: ["M"],
/*  LM_LabwareID: ["LM_LabwareID_XXX"],
  LM_PositionID: ["LM_PositionID_XXX"],
  Timer: [0],
  authorFirstName: "Bruce",
  authorLastName: "Zhu",
  email: "tzhu@api.com",
  date: ""*/
});

@Component({
  selector: 'app-clmic-new',
  templateUrl: './clmic-new.component.html',
  styleUrls: ['./clmic-new.component.css']
})
export class ClmicNewComponent implements OnInit {

  public numberIncubations = [];
  //let list: number[] = [1, 2, 3];

  public SPArray = ["M", "R", "MN", "D", "MK","H"];

  public sp1 = "";
  public sp2 = "";
  public sp3 = "";
  public sp4 = "";
  public sp5 = "";
  public sp6 = "";


  newClmic: ClMic = Object.assign({}, DEFAULT_CLMIC);

/*  constructor(@Inject("data") private data) {
      for(var i:number = 0; i<= 64;i++) {
        this.numberIncubations[i] = i + 1;
      }
  }*/
  constructor(private dataService: DataService) {
      for(var i:number = 0; i<= 64;i++) {
        this.numberIncubations[i] = i + 1;
      }
  }

  ngOnInit() {
  }

/*
  addClmic(): void {
    this.newClmic.SP[0] = this.sp1;
    this.newClmic.SP[1] = this.sp2;
    this.newClmic.SP[2] = this.sp3;
    this.newClmic.SP[3] = this.sp4;
    this.newClmic.SP[4] = this.sp5;
    this.newClmic.SP[5] = this.sp6;

/!*
    for(var i:number = 0; i<= 5;i++) {
      var numSP = 0;
      if (this.newClmic.SP[i] != "") {
        continue;
      } else {
        numSP++;
      }
      this.newClmic.SP[6] = numSP + "";
    }
*!/


/!*    this.data.addClmic(this.newClmic)
      .catch(error => console.log(error._body));*!/

    this.dataService.addClmic(this.newClmic);



    //this is to clear the form for the next creation
    // we need to chagne new clmic into Default Problem after each added
    this.newClmic = Object.assign({}, DEFAULT_CLMIC);

  }
*/

  addClmic() {
    this.newClmic.SP[0] = this.sp1;
    this.newClmic.SP[1] = this.sp2;
    this.newClmic.SP[2] = this.sp3;
    this.newClmic.SP[3] = this.sp4;
    this.newClmic.SP[4] = this.sp5;
    this.newClmic.SP[5] = this.sp6;

    this.dataService.addClmic(this.newClmic)
      .catch(error => console.log(error._body))
    ;
    // we need to chagne new Problem into Default Problem after each added
    this.newClmic = Object.assign({}, DEFAULT_CLMIC);
  }

}
