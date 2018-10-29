import {ClmicUnit} from './clmic-unit.model';

export class ClmicMeta {
    firstName: string;
    lastName: string;
    email: string;

    id: string;
    studyNum: string;
    experimentNum: string;
    versionNum: string;
    units: ClmicUnit[]

}