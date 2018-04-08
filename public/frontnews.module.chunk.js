webpackJsonp(["frontnews.module"],{

/***/ "./src/app/components/frontnews/frontnews.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/frontnews/frontnews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrontNewsComponent = /** @class */ (function () {
    function FrontNewsComponent() {
    }
    FrontNewsComponent.prototype.ngOnInit = function () {
    };
    FrontNewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-frontnews',
            template: __webpack_require__("./src/app/components/frontnews/frontnews.component.html"),
            styles: [__webpack_require__("./src/assets/css/now-ui-kit.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FrontNewsComponent);
    return FrontNewsComponent;
}());



/***/ }),

/***/ "./src/app/components/frontnews/frontnews.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontNewsModule", function() { return FrontNewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__frontnews_component__ = __webpack_require__("./src/app/components/frontnews/frontnews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__frontnews_routing__ = __webpack_require__("./src/app/components/frontnews/frontnews.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FrontNewsModule = /** @class */ (function () {
    function FrontNewsModule() {
    }
    FrontNewsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__frontnews_routing__["a" /* FrontNewsRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__frontnews_component__["a" /* FrontNewsComponent */]]
        })
    ], FrontNewsModule);
    return FrontNewsModule;
}());



/***/ }),

/***/ "./src/app/components/frontnews/frontnews.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontNewsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frontnews_component__ = __webpack_require__("./src/app/components/frontnews/frontnews.component.ts");

var FrontNewsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__frontnews_component__["a" /* FrontNewsComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=frontnews.module.chunk.js.map