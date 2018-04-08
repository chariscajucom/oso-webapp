webpackJsonp(["pdforms.module"],{

/***/ "./src/app/admin/pdf-forms/pdforms.component.html":
/***/ (function(module, exports) {

module.exports = "   <div class=\"input-group\">\n        <div class=\"custom-file\">\n          <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile04\">\n          <label class=\"custom-file-label\" for=\"inputGroupFile04\">Choose file</label>\n        </div>\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-outline-secondary\" type=\"button\">Button</button>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/admin/pdf-forms/pdforms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PDFormsComponent; });
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

var PDFormsComponent = /** @class */ (function () {
    function PDFormsComponent() {
    }
    PDFormsComponent.prototype.ngOnInit = function () {
    };
    PDFormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-pdforms',
            template: __webpack_require__("./src/app/admin/pdf-forms/pdforms.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PDFormsComponent);
    return PDFormsComponent;
}());



/***/ }),

/***/ "./src/app/admin/pdf-forms/pdforms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDFModule", function() { return PDFModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdforms_component__ = __webpack_require__("./src/app/admin/pdf-forms/pdforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdforms_routing__ = __webpack_require__("./src/app/admin/pdf-forms/pdforms.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PDFModule = /** @class */ (function () {
    function PDFModule() {
    }
    PDFModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__pdforms_routing__["a" /* PDFRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__pdforms_component__["a" /* PDFormsComponent */]]
        })
    ], PDFModule);
    return PDFModule;
}());



/***/ }),

/***/ "./src/app/admin/pdf-forms/pdforms.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PDFRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pdforms_component__ = __webpack_require__("./src/app/admin/pdf-forms/pdforms.component.ts");

var PDFRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__pdforms_component__["a" /* PDFormsComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=pdforms.module.chunk.js.map