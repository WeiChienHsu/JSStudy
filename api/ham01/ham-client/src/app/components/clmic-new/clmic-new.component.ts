import { Component, OnInit, Inject } from '@angular/core';
import { ClMic } from "../../models/cl-mic.model";



const DEFAULT_CLMIC: ClMic = Object.freeze({
    id: 0,
  clmic_id:0,
  type: "",
  name: "",
  desc: "",

  Num_Incubation: 0,
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
  LabwareID: [""],
  PositionID: [""],
  Vol_CMP: [0],
  SP: [""],
  LM_LabwareID: [""],
  LM_PositionID: [""],
  Timer: [0],

  authorFirstName: "",
  authorLastName: "",
  email: "",
  date: "",

});

@Component({
  selector: 'app-clmic-new',
  templateUrl: './clmic-new.component.html',
  styleUrls: ['./clmic-new.component.css']
})
export class ClmicNewComponent implements OnInit {


  newClmic: ClMic = Object.assign({}, DEFAULT_CLMIC);

  constructor(@Inject("data") private data) { }

  ngOnInit() {
  }

  addClmic(): void {
    //data.addProblem shall be in the data service
    // this.data.addProblem(this.newProblem);
    // this.data.add(this.newClmic)
    //   .catch(error => console.log(error._body));

    // clear the form for next input
    this.newClmic = Object.assign({}, DEFAULT_CLMIC);


  }

}
