import { Injectable } from '@angular/core';
import {Product, ProductService} from "./product.service";
import {LoggerService} from "./logger.service";

@Injectable()
export class AnotherProductService implements ProductService{
// export class AnotherProductService {

    constructor(public logger: LoggerService) { }

    getProduct(): Product {
        this.logger.logMess('anotherProduct service 调用');
        return new Product(1, '华为P9', 3888, '最新的华为手机');
    }

}































