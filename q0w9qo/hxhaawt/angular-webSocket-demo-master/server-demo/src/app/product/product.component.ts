import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    // 这是一种方法
    dataSource: Observable<any>;
    products: Array<any> = [];

    // 这是另一种方法
    products2: Observable<any>;


    constructor(
        private http: Http
    ) {
        // 可以设置请求头
        let myHeaders: Headers = new Headers();
        myHeaders.append("Authorization", "Basic 123456");

        // 只是定阅了一个get请求
        this.dataSource = this.http.get('/api/products', {
            headers: myHeaders
        }).map( (res) => res.json());

        // 只是定阅了一个get请求，html中用async异步
        this.products2 = this.http.get('/api/products')
                        .map( (res) => res.json());
    }

    ngOnInit() {
        // 方法一需要 发送已经定阅的请求
        this.dataSource.subscribe(
            (data) => this.products = data
        );
    }

}


































