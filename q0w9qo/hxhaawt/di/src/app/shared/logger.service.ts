import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    constructor() { }

    logMess (message: string) {
        console.log(message);
    }

}
