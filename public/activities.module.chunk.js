webpackJsonp(["activities.module"],{

/***/ "./src/app/admin/activities/activities.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Activities Works!</h1>"

/***/ }),

/***/ "./src/app/admin/activities/activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
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

var ActivitiesComponent = /** @class */ (function () {
    function ActivitiesComponent() {
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
    };
    ActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-activities',
            template: __webpack_require__("./src/app/admin/activities/activities.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/admin/activities/activities.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesModule", function() { return ActivitiesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_component__ = __webpack_require__("./src/app/admin/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activities_routing__ = __webpack_require__("./src/app/admin/activities/activities.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ActivitiesModule = /** @class */ (function () {
    function ActivitiesModule() {
    }
    ActivitiesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__activities_routing__["a" /* ActivitiesRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__activities_component__["a" /* ActivitiesComponent */]]
        })
    ], ActivitiesModule);
    return ActivitiesModule;
}());



/***/ }),

/***/ "./src/app/admin/activities/activities.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_component__ = __webpack_require__("./src/app/admin/activities/activities.component.ts");

var ActivitiesRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__activities_component__["a" /* ActivitiesComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=activities.module.chunk.js.map