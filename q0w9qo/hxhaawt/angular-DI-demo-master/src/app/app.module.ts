import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { ProductService} from "./shared/product.service";
import { Product2Component } from './product2/product2.component';
import { LoggerService} from "./shared/logger.service";
import {AnotherProductService} from "./shared/another-product.service";

@NgModule({
    declarations: [
        AppComponent,
        Product1Component,
        Product2Component
    ],
    imports: [
        BrowserModule
    ],
    // 直接使用接口service
    // providers: [ProductService, LoggerService],

    // 用工厂方法
    providers: [
        {
            provide: ProductService,
            // useFactory: (logger: LoggerService, isDev) => {
            useFactory: (logger: LoggerService, appConfig) => {

                if ( appConfig.isDev ) {
                    return new ProductService( logger );
                } else {
                    return new AnotherProductService( logger );
                }
            },
            // deps: [LoggerService, 'IS_DEV_ENV']
            deps: [LoggerService, 'APP_CONFIG']
        }
        , LoggerService
        , {
            // provide: 'IS_DEV_ENV', useValue: false
            provide: 'APP_CONFIG', useValue: {isDev: false}
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }


























