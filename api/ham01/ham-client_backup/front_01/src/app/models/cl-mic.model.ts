export class ClMic {
  id: number;
  clmic_id: number;
  type: string;
  name: string;
  desc: string;

  Num_Incubation: number;
  Num_SP: number;
  Vol_DMSO: number;
  Vol_Liver_Microsome: number;
  Vol_Stop: number;
  Vol_CompoundMix: number;
  Vol_Kpi_NADPH: number;
  Num_Timers: number;
  Vol_Collection_Sample: number;
  order: number[];
  Num_Inc_Each_SP: number[];
  LabwareID: string[]
  PositionID: string[];
  Vol_CMP: number[];
  SP: string[];
  LM_LabwareID: string[];
  LM_PositionID: string[];
  Timer: number[];

  authorFirstName: string;
  authorLastName: string;
  email: string;
  date: string;

}
