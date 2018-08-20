import { Component, OnInit, Inject } from '@angular/core';
import { ClMic } from "../../models/cl-mic.model";


const DEFAULT_CLMIC: ClMic = Object.freeze({
  id: 0,
  clmic_id:0,
  type: "type_XXX",
  name: "name_XXX",
  desc: "desc_XXX",
  Num_Incubation: 1,
  Num_SP: 0,
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
  Vol_CMP: [0],
  SP: ["M"],
  LM_LabwareID: ["LM_LabwareID_XXX"],
  LM_PositionID: ["LM_PositionID_XXX"],
  Timer: [0],
  authorFirstName: "Bruce",
  authorLastName: "Zhu",
  email: "tzhu@api.com",
  date: ""
});

@Component({
  selector: 'app-clmic-new',
  templateUrl: './clmic-new.component.html',
  styleUrls: ['./clmic-new.component.css']
})
export class ClmicNewComponent implements OnInit {

  public numberIncubations = [];


  newClmic: ClMic = Object.assign({}, DEFAULT_CLMIC);

  constructor(@Inject("data") private data) {
      for(var i:number = 0; i<= 64;i++) {
        this.numberIncubations[i] = i + 1;
      }
  }

  ngOnInit() {
  }

  addClmic(): void {

    this.data.addClmic(this.newClmic)
      .catch(error => console.log(error._body));

    this.newClmic = Object.assign({}, DEFAULT_CLMIC);


  }

}
