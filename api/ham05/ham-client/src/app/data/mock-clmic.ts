import {ClmicMeta} from "../models/clmic-meta.model";

export const ClmicMetas: ClmicMeta[] = [
  { 
    id: "1808x01E02V01",
    firstName: "Bruce",
    lastName: "Zhu",
    email: "tzhu@api.com",
    units: [
      {
        compoundName: "Compound1",
        lotNum: "Lot1",
        source: "plate",
        well: "A1",
        concentration: "10",
        SP1_mouse: true,
        SP2_rat: false,
        SP3_miniPig: false,
        SP4_dog: false,
        SP5_monkey: false,
        SP6_human: false,
        SP7_other: false
      },
      {
        compoundName: "Compound2",
        lotNum: "Lot2",
        source: "plate",
        well: "A2",
        concentration: "5",
        SP1_mouse: false,
        SP2_rat: true,
        SP3_miniPig: false,
        SP4_dog: false,
        SP5_monkey: false,
        SP6_human: false,
        SP7_other: false
      }
    ],
    studyNum: "1808x01",
    experimentNum: "02",
    versionNum: "01"
  },
  { 
    id: "1808x02E02V03",
    firstName: "Bruce",
    lastName: "Zhu",
    email: "tzhu@api.com",
    units: [
      {
        compoundName: "Compound1",
        lotNum: "Lot1",
        source: "plate",
        well: "A1",
        concentration: "10",
        SP1_mouse: true,
        SP2_rat: true,
        SP3_miniPig: true,
        SP4_dog: false,
        SP5_monkey: false,
        SP6_human: false,
        SP7_other: false
      },
      {
        compoundName: "Compound2",
        lotNum: "Lot2",
        source: "plate",
        well: "A2",
        concentration: "5",
        SP1_mouse: false,
        SP2_rat: true,
        SP3_miniPig: false,
        SP4_dog: false,
        SP5_monkey: false,
        SP6_human: true,
        SP7_other: false
      }
    ],
    studyNum: "1808x02",
    experimentNum: "02",
    versionNum: "03"
  }
        
];
