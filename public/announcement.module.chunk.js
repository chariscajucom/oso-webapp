webpackJsonp(["announcement.module"],{

/***/ "./src/app/admin/announcement/announcement.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Announcement Works!</h1>"

/***/ }),

/***/ "./src/app/admin/announcement/announcement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementComponent; });
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

var AnnouncementComponent = /** @class */ (function () {
    function AnnouncementComponent() {
    }
    AnnouncementComponent.prototype.ngOnInit = function () {
    };
    AnnouncementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-announce',
            template: __webpack_require__("./src/app/admin/announcement/announcement.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AnnouncementComponent);
    return AnnouncementComponent;
}());



/***/ }),

/***/ "./src/app/admin/announcement/announcement.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementModule", function() { return AnnouncementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcement_component__ = __webpack_require__("./src/app/admin/announcement/announcement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__announcement_routing__ = __webpack_require__("./src/app/admin/announcement/announcement.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AnnouncementModule = /** @class */ (function () {
    function AnnouncementModule() {
    }
    AnnouncementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__announcement_routing__["a" /* AnnouncementRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__announcement_component__["a" /* AnnouncementComponent */]]
        })
    ], AnnouncementModule);
    return AnnouncementModule;
}());



/***/ }),

/***/ "./src/app/admin/announcement/announcement.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__announcement_component__ = __webpack_require__("./src/app/admin/announcement/announcement.component.ts");

var AnnouncementRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__announcement_component__["a" /* AnnouncementComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=announcement.module.chunk.js.map