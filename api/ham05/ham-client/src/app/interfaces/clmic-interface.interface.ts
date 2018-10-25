import {ClmicUnit} from './clmic-unit.interface';

export interface ClmicInterface {
    firstName: string;
    lastName: string;
    email: string;

    studyNum: string;
    experimentNum: string;
    versionNum: string;

    units: ClmicUnit[];

}
