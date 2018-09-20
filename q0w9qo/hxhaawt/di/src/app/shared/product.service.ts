import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
export class ProductService {

    constructor(public logger: LoggerService) { }
    // constructor() { }

    getProduct(): Product {
        this.logger.logMess('getProduct被调用');
        return new Product(0, 'iphone8', 5888, '最新的苹果手机');
    }


}

export class Product {

    constructor (
        public id: number,
        public title: string,
        public price: number,
        public desc: string
    ) {

    }
}









































