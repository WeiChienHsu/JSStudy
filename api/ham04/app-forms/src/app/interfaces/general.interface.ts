import {SpecificInterface} from './specific.interface'

export interface GeneralInterface {
    name: string;
    email: string;
    note: SpecificInterface[];
}
