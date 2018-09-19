# ImoocAuction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## 2-2:
_✨_
##### angular introduce


## 2-3:
_✨✨_
##### init
```
sudo npm install -g @angular/cli
ng -v
ng new imooc-auction
```


## 2-3: dialog file introduce
_✨✨_
##### e2e: test
##### .angular.cli.json: angular config
##### karma.confi.js: auto test
##### tslint.json: typScript code check
##### assets: static file
##### environments: config environment 
##### main.js: entrance file 
##### polyfills.ts: import library
##### test.js: auto test
##### tsconfig.app.json: typescript config
##### app.component.ts:  


## 2-4: run angular app
_✨✨_
##### introduce run process
```
npm start
```


## 2-5: app prepare
_✨✨_
##### install
```
npm install jquery --save
npm install @types/jquery --save-dev
npm install bootstrap --save
npm install @types/bootstrap --save-dev
``` 
##### angular-cli.json
```
      "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.css"
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/bootstrap/dist/js/bootstrap.js"
      ],
```
##### create component
```
ng g component navbar
ng g component footer
ng g component search
ng g component carousel
ng g component product
ng g component stars
```


## 2-6: app
_✨✨_


## 2-7: navbar and footer 
_✨✨_


## 2-8: search and carousel
_✨✨_


## 2-9: product
_✨✨_
##### *ngFor


## 2-10: star
_✨✨_
##### @Input


## 3-1: route introduce
_✨✨_


## 3-2: route basic
_✨✨✨_
##### install
```
ng new router --routing
(--routing: add app-routing.module.ts)

ng g component home
ng g component product
```
##### Routes, RouterOutlet, RouterLink
##### event binding
```
(click)="toProductDetail()"
```
##### 404 
```
// put last
  {path: '**', component: RouterCode404Component}
```


## 3-3: route pass data
_✨✨✨✨_
##### Passing data in query parameters
```
/product?id=1&name=2 => ActivatedRoute.queryParams[id]
``` 
##### Passing data in the routing path
```
{path:/product/:id} => /product/1 => ActivatedRoute.params[id]
``` 
##### Passing data in a routing configuration
```
{path:/product, component: ProductComponent, data: [{isProd: true}]} => ActivatedRoute.data[0][isProd] 
```
##### snapshot:
##### subscribe:


## 3-4: redirected route
_✨✨_
##### visit a url, jump other url
```
www.aaa.com => www.aaa.com/products
```


## 3-5: children route
_✨✨✨_


## 3-8: auxiliary route
_✨✨✨_


## 3-7: guards route
_✨✨✨_


## 3-8: resolve route ?
_✨✨✨✨✨_


## 3-9: modify auction
_✨✨✨_


## branch di
## 4-1: Dependency injection
_✨_


## 4-2: Dependency injection introduce
_✨✨✨✨_


## 4-3: Dependency injection introduce
_✨✨✨✨_
##### install
```
ng g component product1
ng g component product2
ng g service shared/product
ng g service shared/anotherProduct
ng g service shared/logger
```


## 4-4: useFactory
_✨✨✨_


## 4-5: Injectable hierarchy
_✨✨✨_


## 4-6: modify auction ?
_✨✨✨_
