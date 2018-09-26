(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _hero_team_builder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-team-builder.component */ "./src/app/hero-team-builder.component.ts");
/* harmony import */ var _hero_list_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-list-basic.component */ "./src/app/hero-list-basic.component.ts");
/* harmony import */ var _hero_list_inline_styles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero-list-inline-styles.component */ "./src/app/hero-list-inline-styles.component.ts");
/* harmony import */ var _hero_list_enter_leave_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero-list-enter-leave.component */ "./src/app/hero-list-enter-leave.component.ts");
/* harmony import */ var _hero_list_enter_leave_states_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero-list-enter-leave-states.component */ "./src/app/hero-list-enter-leave-states.component.ts");
/* harmony import */ var _hero_list_combined_transitions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero-list-combined-transitions.component */ "./src/app/hero-list-combined-transitions.component.ts");
/* harmony import */ var _hero_list_twoway_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hero-list-twoway.component */ "./src/app/hero-list-twoway.component.ts");
/* harmony import */ var _hero_list_auto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hero-list-auto.component */ "./src/app/hero-list-auto.component.ts");
/* harmony import */ var _hero_list_groups_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hero-list-groups.component */ "./src/app/hero-list-groups.component.ts");
/* harmony import */ var _hero_list_multistep_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hero-list-multistep.component */ "./src/app/hero-list-multistep.component.ts");
/* harmony import */ var _hero_list_timings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hero-list-timings.component */ "./src/app/hero-list-timings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]],
            // ... more stuff ...
            declarations: [
                _hero_team_builder_component__WEBPACK_IMPORTED_MODULE_3__["HeroTeamBuilderComponent"],
                _hero_list_basic_component__WEBPACK_IMPORTED_MODULE_4__["HeroListBasicComponent"],
                _hero_list_inline_styles_component__WEBPACK_IMPORTED_MODULE_5__["HeroListInlineStylesComponent"],
                _hero_list_combined_transitions_component__WEBPACK_IMPORTED_MODULE_8__["HeroListCombinedTransitionsComponent"],
                _hero_list_twoway_component__WEBPACK_IMPORTED_MODULE_9__["HeroListTwowayComponent"],
                _hero_list_enter_leave_component__WEBPACK_IMPORTED_MODULE_6__["HeroListEnterLeaveComponent"],
                _hero_list_enter_leave_states_component__WEBPACK_IMPORTED_MODULE_7__["HeroListEnterLeaveStatesComponent"],
                _hero_list_auto_component__WEBPACK_IMPORTED_MODULE_10__["HeroListAutoComponent"],
                _hero_list_timings_component__WEBPACK_IMPORTED_MODULE_13__["HeroListTimingsComponent"],
                _hero_list_multistep_component__WEBPACK_IMPORTED_MODULE_12__["HeroListMultistepComponent"],
                _hero_list_groups_component__WEBPACK_IMPORTED_MODULE_11__["HeroListGroupsComponent"]
            ],
            bootstrap: [_hero_team_builder_component__WEBPACK_IMPORTED_MODULE_3__["HeroTeamBuilderComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/hero-list-auto.component.ts":
/*!*********************************************!*\
  !*** ./src/app/hero-list-auto.component.ts ***!
  \*********************************************/
/*! exports provided: HeroListAutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListAutoComponent", function() { return HeroListAutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroListAutoComponent = /** @class */ (function () {
    function HeroListAutoComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeroListAutoComponent.prototype, "heroes", void 0);
    HeroListAutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-auto',
            template: "\n    <ul>\n      <li *ngFor=\"let hero of heroes\"\n          [@shrinkOut]=\"'in'\">\n        {{hero.name}}\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__(/*! ./hero-list.component.css */ "./src/app/hero-list.component.css")],
            /* When the element leaves (transition "in => void" occurs),
             * get the element's current computed height and animate
             * it down to 0.
             */
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('shrinkOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 0 }))
                    ])
                ])
            ]
        })
    ], HeroListAutoComponent);
    return HeroListAutoComponent;
}());



/***/ }),

/***/ "./src/app/hero-list-basic.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hero-list-basic.component.ts ***!
  \**********************************************/
/*! exports provided: HeroListBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListBasicComponent", function() { return HeroListBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroListBasicComponent = /** @class */ (function () {
    function HeroListBasicComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeroListBasicComponent.prototype, "heroes", void 0);
    HeroListBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-basic',
            /* The click event calls hero.toggleState(), which
             * causes the state of that hero to switch from
             * active to inactive or vice versa.
             */
            template: "\n    <ul>\n      <li *ngFor=\"let hero of heroes\"\n          [@heroState]=\"hero.state\"\n          (click)=\"hero.toggleState()\">\n        {{hero.name}}\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__(/*! ./hero-list.component.css */ "./src/app/hero-list.component.css")],
            /**
             * Define two states, "inactive" and "active", and the end
             * styles that apply whenever the element is in those states.
             * Then define animations for transitioning between the states,
             * one in each direction
             */
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('heroState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-out'))
                ])
            ]
        })
    ], HeroListBasicComponent);
    return HeroListBasicComponent;
}());



/***/ }),

/***/ "./src/app/hero-list-combined-transitions.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/hero-list-combined-transitions.component.ts ***!
  \*************************************************************/
/*! exports provided: HeroListCombinedTransitionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListCombinedTransitionsComponent", function() { return HeroListCombinedTransitionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroListCombinedTransitionsComponent = /** @class */ (function () {
    function HeroListCombinedTransitionsComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeroListCombinedTransitionsComponent.prototype, "heroes", void 0);
    HeroListCombinedTransitionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-combined-transitions',
            template: "\n   <ul>\n     <li *ngFor=\"let hero of heroes\"\n         [@heroState]=\"hero.state\"\n         (click)=\"hero.toggleState()\">\n       {{hero.name}}\n     </li>\n   </ul>\n ",
            styles: [__webpack_require__(/*! ./hero-list.component.css */ "./src/app/hero-list.component.css")],
            /*
             * Define two states, "inactive" and "active", and the end
             * styles that apply whenever the element is in those states.
             * Then define an animated transition between these two
             * states, in *both* directions.
             */
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('heroState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active, active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-out'))
                ])
            ]
        })
    ], HeroListCombinedTransitionsComponent);
    return HeroListCombinedTransitionsComponent;
}());



/***/ }),

/***/ "./src/app/hero-list-enter-leave-states.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/hero-list-enter-leave-states.component.ts ***!
  \***********************************************************/
/*! exports provided: HeroListEnterLeaveStatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListEnterLeaveStatesComponent", function() { return HeroListEnterLeaveStatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroListEnterLeaveStatesComponent = /** @class */ (function () {
    function HeroListEnterLeaveStatesComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeroListEnterLeaveStatesComponent.prototype, "heroes", void 0);
    HeroListEnterLeaveStatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-enter-leave-states',
            template: "\n    <ul>\n      <li *ngFor=\"let hero of heroes\"\n          (click)=\"hero.toggleState()\"\n          [@heroState]=\"hero.state\">\n        {{hero.name}}\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__(/*! ./hero-list.component.css */ "./src/app/hero-list.component.css")],
            /* The elements here have two possible states based
             * on the hero state, "active", or "inactive". We animate
             * six transitions: Between the two states in both directions,
             * and between each state and void. With this we can animate
             * the enter and leave of elements differently based on which
             * state they are in when they are added and removed.
             */
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('heroState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0) scale(1)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0) scale(1.1)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => inactive', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%) scale(1)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%) scale(1)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0) scale(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0) scale(0)' }))
                    ])
                ])
            ]
        })
    ], HeroListEnterLeaveStatesComponent);
    return HeroListEnterLeaveStatesComponent;
}());



/***/ }),

/***/ "./src/app/hero-list-enter-leave.component.ts":
/*!****************************************************!*\
  !*** ./src/app/hero-list-enter-leave.component.ts ***!
  \****************************************************/
/*! exports provided: HeroListEnterLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListEnterLeaveComponent", function() { return HeroListEnterLeaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroListEnterLeaveComponent = /** @class */ (function () {
    function HeroListEnterLeaveComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeroListEnterLeaveComponent.prototype, "heroes", void 0);
    HeroListEnterLeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-enter-leave',
            template: "\n    <ul>\n      <li *ngFor=\"let hero of heroes\"\n          [@flyInOut]=\"'in'\">\n        {{hero.name}}\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__(/*! ./hero-list.component.css */ "./src/app/hero-list.component.css")],
            /* The element here always has the state "in" when it
             * is present. We animate two transitions: From void
             * to in and from in to void, to achieve an animated
             * enter and leave transition. The element enters from
             * the left and leaves to the right using translateX.
             */
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
                    ])
                ])
            ]
        })
    ], HeroListEnterLeaveComponent);
    return HeroListEnterLeaveComponent;
}());



/***/ }),

/***/ "./src/app/hero-list-groups.component.ts":
/*!***********************************************!*\
  !*** ./src/app/hero-list-groups.component.ts ***!
  \***********************************************/
/*! exports provided: HeroListGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListGroupsComponent", function() { return HeroListGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroListGroupsComponent = /** @class */ (function () {
    function HeroListGroupsComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeroListGroupsComponent.prototype, "heroes", void 0);
    HeroListGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-groups',
            template: "\n    <ul>\n      <li *ngFor=\"let hero of heroes\"\n          [@flyInOut]=\"'in'\">\n        {{hero.name}}\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__(/*! ./hero-list.component.css */ "./src/app/hero-list.component.css")],
            styles: ["\n    li {\n      padding: 0 !important;\n      text-align: center;\n    }\n  "],
            /* The element here always has the state "in" when it
             * is present. We animate two transitions: From void
             * to in and from in to void, to achieve an animated
             * enter and leave transition.
             *
             * The transitions have  *parallel group* that allow
             * animating several properties at the same time but
             * with different timing configurations. On enter
             * (void => *) we start the opacity animation 0.1s
             * earlier than the translation/width animation.
             * On leave (* => void) we do the opposite -
             * the translation/width animation begins immediately
             * and the opacity animation 0.1s later.
             */
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: 120, transform: 'translateX(0)', opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s 0.1s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(0)',
                                width: 120
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 1
                            }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(50px)',
                                width: 10
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s 0.2s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 0
                            }))
                        ])
                    ])
                ])
            ]
        })
    ], HeroListGroupsComponent);
    return HeroListGroupsComponent;
}());



/***/ }),

/***/ "./src/app/hero-list-inline-styles.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-list-inline-styles.component.ts ***!
  \******************************************************/
/*! exports provided: HeroListInlineStylesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListInlineStylesComponent", function() { return HeroListInlineStylesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroListInlineStylesComponent = /** @class */ (function () {
    function HeroListInlineStylesComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeroListInlineStylesComponent.prototype, "heroes", void 0);
    HeroListInlineStylesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-inline-styles',
            template: "\n   <ul>\n     <li *ngFor=\"let hero of heroes\"\n         [@heroState]=\"hero.state\"\n         (click)=\"hero.toggleState()\">\n       {{hero.name}}\n     </li>\n   </ul>\n ",
            styles: [__webpack_require__(/*! ./hero-list.component.css */ "./src/app/hero-list.component.css")],
            /**
             * Define two states, "inactive" and "active", and the end
             * styles that apply whenever the element is in those states.
             * Then define an animation for the inactive => active transition.
             * This animation has no end styles, but only styles that are
             * defined inline inside the transition and thus are only kept
             * as long as the animation is running.
             */
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('heroState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            backgroundColor: '#cfd8dc',
                            transform: 'scale(1.3)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('80ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            backgroundColor: '#eee',
                            transform: 'scale(1)'
                        }))
                    ]),
                ])
            ]
        })
    ], HeroListInlineStylesComponent);
    return HeroListInlineStylesComponent;
}());



/***/ }),

/***/ "./src/app/hero-list-multistep.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hero-list-multistep.component.ts ***!
  \**************************************************/
/*! exports provided: HeroListMultistepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListMultistepComponent", function() { return HeroListMultistepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroListMultistepComponent = /** @class */ (function () {
    function HeroListMultistepComponent() {
    }
    HeroListMultistepComponent.prototype.animationStarted = function (event) {
        console.warn('Animation started: ', event);
    };
    HeroListMultistepComponent.prototype.animationDone = function (event) {
        console.warn('Animation done: ', event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeroListMultistepComponent.prototype, "heroes", void 0);
    HeroListMultistepComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-multistep',
            template: "\n    <ul>\n      <li *ngFor=\"let hero of heroes\"\n          (@flyInOut.start)=\"animationStarted($event)\"\n          (@flyInOut.done)=\"animationDone($event)\"\n          [@flyInOut]=\"'in'\">\n        {{hero.name}}\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__(/*! ./hero-list.component.css */ "./src/app/hero-list.component.css")],
            /* The element here always has the state "in" when it
             * is present. We animate two transitions: From void
             * to in and from in to void, to achieve an animated
             * enter and leave transition. Each transition is
             * defined in terms of multiple keyframes, to give it
             * a bounce effect.
             */
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                        ]))
                    ])
                ])
            ]
        })
    ], HeroListMultistepComponent);
    return HeroListMultistepComponent;
}());



/***/ }),

/***/ "./src/app/hero-list-timings.component.ts":
/*!************************************************!*\
  !*** ./src/app/hero-list-timings.component.ts ***!
  \************************************************/
/*! exports provided: HeroListTimingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListTimingsComponent", function() { return HeroListTimingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroListTimingsComponent = /** @class */ (function () {
    function HeroListTimingsComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeroListTimingsComponent.prototype, "heroes", void 0);
    HeroListTimingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-timings',
            template: "\n    <ul>\n      <li *ngFor=\"let hero of heroes\"\n          [@flyInOut]=\"'in'\"\n          (click)=\"hero.toggleState()\">\n         {{hero.name}}\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__(/*! ./hero-list.component.css */ "./src/app/hero-list.component.css")],
            /* The element here always has the state "in" when it
             * is present. We animate two transitions: From void
             * to in and from in to void, to achieve an animated
             * enter and leave transition. The element enters from
             * the left and leaves to the right using translateX,
             * and fades in/out using opacity. We use different easings
             * for enter and leave.
             */
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0,
                            transform: 'translateX(-100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s 0.1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0,
                            transform: 'translateX(100%)'
                        }))
                    ])
                ])
            ]
        })
    ], HeroListTimingsComponent);
    return HeroListTimingsComponent;
}());



/***/ }),

/***/ "./src/app/hero-list-twoway.component.ts":
/*!***********************************************!*\
  !*** ./src/app/hero-list-twoway.component.ts ***!
  \***********************************************/
/*! exports provided: HeroListTwowayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListTwowayComponent", function() { return HeroListTwowayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroListTwowayComponent = /** @class */ (function () {
    function HeroListTwowayComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeroListTwowayComponent.prototype, "heroes", void 0);
    HeroListTwowayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-twoway',
            template: "\n   <ul>\n     <li *ngFor=\"let hero of heroes\"\n         [@heroState]=\"hero.state\"\n         (click)=\"hero.toggleState()\">\n       {{hero.name}}\n     </li>\n   </ul>\n ",
            styles: [__webpack_require__(/*! ./hero-list.component.css */ "./src/app/hero-list.component.css")],
            /*
             * Define two states, "inactive" and "active", and the end
             * styles that apply whenever the element is in those states.
             * Then define an animated transition between these two
             * states, in *both* directions.
             */
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('heroState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive <=> active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-out'))
                ])
            ]
        })
    ], HeroListTwowayComponent);
    return HeroListTwowayComponent;
}());



/***/ }),

/***/ "./src/app/hero-list.component.css":
/*!*****************************************!*\
  !*** ./src/app/hero-list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  padding: 0;\n}\n\nli {\n  display: block;\n  width: 120px;\n  line-height: 50px;\n  padding: 0 10px;\n  box-sizing: border-box;\n  background-color: #eee;\n  border-radius: 4px;\n  margin: 10px;\n  cursor: pointer;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.active {\n  background-color: #cfd8dc;\n  -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.inactive {\n  background-color: #eee;\n  -webkit-transform: scale(1);\n      -ms-transform: scale(1);\n          transform: scale(1);\n}\n"

/***/ }),

/***/ "./src/app/hero-team-builder.component.ts":
/*!************************************************!*\
  !*** ./src/app/hero-team-builder.component.ts ***!
  \************************************************/
/*! exports provided: HeroTeamBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroTeamBuilderComponent", function() { return HeroTeamBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.service */ "./src/app/hero.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroTeamBuilderComponent = /** @class */ (function () {
    function HeroTeamBuilderComponent(heroService) {
        this.heroService = heroService;
        this.heroes = heroService.heroes;
    }
    HeroTeamBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n    <div class=\"buttons\">\n      <button [disabled]=\"!heroService.canAdd()\" (click)=\"heroService.addInactive()\">Add inactive hero</button>\n      <button [disabled]=\"!heroService.canAdd()\" (click)=\"heroService.addActive()\">Add active hero</button>\n      <button [disabled]=\"!heroService.canRemove()\" (click)=\"heroService.remove()\">Remove hero</button>\n    </div>\n\n    <div class=\"columns\">\n      <div class=\"column\">\n        <h4>Basic State</h4>\n        <p>Switch between active/inactive on click.</p>\n        <app-hero-list-basic [heroes]=\"heroes\"></app-hero-list-basic>\n      </div>\n      <div class=\"column\">\n        <h4>Styles inline in transitions</h4>\n        <p>Animated effect on click, no persistend end styles.</p>\n        <app-hero-list-inline-styles [heroes]=\"heroes\"></app-hero-list-inline-styles>\n      </div>\n      <div class=\"column\">\n        <h4>Combined transition syntax</h4>\n        <p>Switch between active/inactive on click. Define just one transition used in both directions.</p>\n        <app-hero-list-combined-transitions [heroes]=\"heroes\"></app-hero-list-combined-transitions>\n      </div>\n      <div class=\"column\">\n        <h4>Two-way transition syntax</h4>\n        <p>Switch between active/inactive on click. Define just one transition used in both directions using the <=> syntax.</p>\n        <app-hero-list-twoway [heroes]=\"heroes\"></app-hero-list-twoway>\n      </div>\n      <div class=\"column\">\n        <h4>Enter & Leave</h4>\n        <p>Enter and leave animations using the void state.</p>\n        <app-hero-list-enter-leave [heroes]=\"heroes\"></app-hero-list-enter-leave>\n      </div>\n    </div>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <h4>Enter & Leave & States</h4>\n        <p>\n          Enter and leave animations combined with active/inactive state animations.\n          Different enter and leave transitions depending on state.\n        </p>\n        <app-hero-list-enter-leave-states [heroes]=\"heroes\"></app-hero-list-enter-leave-states>\n      </div>\n      <div class=\"column\">\n        <h4>Auto Style Calc</h4>\n        <p>Leave animation from the current computed height using the auto-style value *.</p>\n        <app-hero-list-auto [heroes]=\"heroes\"></app-hero-list-auto>\n      </div>\n      <div class=\"column\">\n        <h4>Different Timings</h4>\n        <p>Enter and leave animations with different easings, ease-in for enter, ease-out for leave.</p>\n        <app-hero-list-timings [heroes]=\"heroes\"></app-hero-list-timings>\n      </div>\n      <div class=\"column\">\n        <h4>Multiple Keyframes</h4>\n        <p>Enter and leave animations with three keyframes in each, to give the transition some bounce.</p>\n        <app-hero-list-multistep [heroes]=\"heroes\"></app-hero-list-multistep>\n      </div>\n      <div class=\"column\">\n        <h4>Parallel Groups</h4>\n        <p>Enter and leave animations with multiple properties animated in parallel with different timings.</p>\n        <app-hero-list-groups [heroes]=\"heroes\"></app-hero-list-groups>\n      </div>\n    </div>\n  ",
            styles: ["\n    .buttons {\n      text-align: center;\n    }\n    button {\n      padding: 1.5em 3em;\n    }\n    .columns {\n      display: flex;\n      flex-direction: row;\n    }\n    .column {\n      flex: 1;\n      padding: 10px;\n    }\n    .column p {\n      min-height: 6em;\n    }\n  "],
            providers: [_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]]
        }),
        __metadata("design:paramtypes", [_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]])
    ], HeroTeamBuilderComponent);
    return HeroTeamBuilderComponent;
}());



/***/ }),

/***/ "./src/app/hero.service.ts":
/*!*********************************!*\
  !*** ./src/app/hero.service.ts ***!
  \*********************************/
/*! exports provided: Hero, HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Hero = /** @class */ (function () {
    function Hero(name, state) {
        if (state === void 0) { state = 'inactive'; }
        this.name = name;
        this.state = state;
    }
    Hero.prototype.toggleState = function () {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    };
    return Hero;
}());

var ALL_HEROES = [
    'Windstorm',
    'RubberMan',
    'Bombasto',
    'Magneta',
    'Dynama',
    'Narco',
    'Celeritas',
    'Dr IQ',
    'Magma',
    'Tornado',
    'Mr. Nice'
].map(function (name) { return new Hero(name); });
var HeroService = /** @class */ (function () {
    function HeroService() {
        this.heroes = [];
    }
    HeroService.prototype.canAdd = function () {
        return this.heroes.length < ALL_HEROES.length;
    };
    HeroService.prototype.canRemove = function () {
        return this.heroes.length > 0;
    };
    HeroService.prototype.addActive = function (active) {
        if (active === void 0) { active = true; }
        var hero = ALL_HEROES[this.heroes.length];
        hero.state = active ? 'active' : 'inactive';
        this.heroes.push(hero);
    };
    HeroService.prototype.addInactive = function () {
        this.addActive(false);
    };
    HeroService.prototype.remove = function () {
        this.heroes.length -= 1;
    };
    HeroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/b/WebstormProjects/JSStudy/angular/animations/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map