webpackJsonp(["services.module"],{

/***/ "./src/app/components/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header page-header-small\">\n  <div class=\"page-header-image\" style=\"background-image: url('../assets/osomedia/osomedia/senate_hearing.jpg');\">\n  </div>\n  <div class=\"container\">\n    <div class=\"content-center\">\n      <h1 class=\"title\">Downloads</h1>\n    </div>\n  </div>\n</div>\n<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a href=\"#\">Home</a>\n    </li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Downloads</li>\n  </ol>\n</nav>\n\n<button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" name=\"button\" class=\"btn btn-primary\" *ngIf=\"!validated\" (click)=\"studentValidation()\"><i class=\"now-ui-icons ui-1_check\"></i>&nbsp;&nbsp;I am a BULSUAN!</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Hello BulSUAN!</h4>\n      </div>\n      <div class=\"modal-body\">\n          <div class=\"row show-hide-message\" *ngIf=\"message && validStudent\">\n              <div [ngClass]=\"messageClass\">\n                {{ message }}\n              </div>\n            </div>\n        <form [formGroup]=\"form\" name=\"studentForm\" (submit)=\"onFormSubmit()\" *ngIf=\"validStudent\">\n          <div class=\"form-group\">\n            <label for=\"formGroupExampleInput\">Student Number</label>\n            <div [ngClass]=\"{'has-success': form.controls.studnum.valid, 'has-error': form.controls.studnum.dirty && form.controls.studnum.errors }\">\n              <input type=\"text\" name=\"studnum\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Enter your 10 digit Student Number\" formControlName=\"studnum\"/>\n              <ul class=\"form-text\">\n                <li *ngIf=\"form.controls.studnum.dirty && form.controls.studnum.errors?.required\">This field is required.</li>\n                <li *ngIf=\"(form.controls.studnum.dirty && form.controls.studnum.errors?.minlength) || (form.controls.studnum.dirty && form.controls.studnum.errors?.maxlength)\">Length must be 10 digits only</li>\n                <li *ngIf=\"form.controls.studnum.dirty && form.controls.studnum.errors?.numericValidator\">This must contain all numbers.</li>\n              </ul>\n            </div>\n          </div>\n        \n          <div class=\"form-group\">\n            <label for=\"formGroupExampleInput2\">Student Name</label>\n            <div [ngClass]=\"{'has-success': form.controls.studname.valid, 'has-error': form.controls.studname.dirty && form.controls.studname.errors }\">\n              <input type=\"text\" name=\"studname\" class=\"form-control\" placeholder=\"Ex.) Juana D. Dela Cruz\" autocomplete=\"off\" formControlName=\"studname\">\n            </div>\n          </div>\n          <div div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default btn-simple\" data-dismiss=\"modal\">Close</button>\n            <input type=\"submit\" class=\"btn btn-primary btn-lg\" value=\"Yes I am!\">\n        </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n    \t\t\n<!-- Modal -->\n\n\n<div class=\"container-fluid\" *ngIf=\"validated\">\n  <div class=\"card\">\n    <ul class=\"nav nav-tabs nav-tabs-neutral justify-content-center\" role=\"tablist\" data-background-color=\"orange\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#set1\" role=\"tab\" aria-expanded=\"true\">Exec Board</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#set2\" role=\"tab\" aria-expanded=\"false\">Renewal</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#set3\" role=\"tab\" aria-expanded=\"false\">OSO Search</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#set4\" role=\"tab\" aria-expanded=\"false\">RER</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#set5\" role=\"tab\" aria-expanded=\"false\">Sample Letters</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#set6\" role=\"tab\" aria-expanded=\"false\">Templates</a>\n      </li>\n    </ul>\n    <div class=\"card-body\">\n      <!-- Tab panes -->\n      <div class=\"tab-content mx-5\">\n        <div class=\"tab-pane active\" id=\"set1\" role=\"tabpanel\" aria-expanded=\"true\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item h6\">Cras justo odio\n              <br>\n              <small> Title:\n                <em>Form 1 </em> Size:\n                <em>1MB </em>\n              </small>\n              <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n            </li>\n            <li class=\"list-group-item h6\">Dapibus ac facilisis in\n              <br>\n              <small> Title:\n                <em>Form 1 </em> Size:\n                <em>1MB </em>\n              </small>\n              <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n            </li>\n          </ul>\n        </div>\n        <div class=\"tab-pane\" id=\"set2\" role=\"tabpanel\" aria-expanded=\"false\">\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item h6\">Cras justo odio\n                <br>\n                <small> Title:\n                  <em>Form 1 </em> Size:\n                  <em>1MB </em>\n                </small>\n                <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n                </li>\n                <li class=\"list-group-item h6\">Dapibus ac facilisis in\n                  <br>\n                  <small> Title:\n                    <em>Form 1 </em> Size:\n                    <em>1MB </em>\n                  </small>\n                  <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n                </li>\n              </ul>\n            </div>\n            <div class=\"col-sm-4\">\n              <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item h6\">Cras justo odio\n                <br>\n                <small> Title:\n                  <em>Form 1 </em> Size:\n                  <em>1MB </em>\n                </small>\n                <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n                </li>\n                <li class=\"list-group-item h6\">Dapibus ac facilisis in\n                  <br>\n                  <small> Title:\n                    <em>Form 1 </em> Size:\n                    <em>1MB </em>\n                  </small>\n                  <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n                </li>\n              </ul>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane\" id=\"set3\" role=\"tabpanel\" aria-expanded=\"false\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item h6\">Cras justo odio\n            <br>\n            <small> Title:\n              <em>Form 1 </em> Size:\n              <em>1MB </em>\n            </small>\n            <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n            </li>\n            <li class=\"list-group-item h6\">Dapibus ac facilisis in\n              <br>\n              <small> Title:\n                <em>Form 1 </em> Size:\n                <em>1MB </em>\n              </small>\n              <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n            </li>\n          </ul>\n        </div>\n        <div class=\"tab-pane\" id=\"set4\" role=\"tabpanel\" aria-expanded=\"false\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item h6\">Cras justo odio\n            <br>\n            <small> Title:\n              <em>Form 1 </em> Size:\n              <em>1MB </em>\n            </small>\n            <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n            </li>\n            <li class=\"list-group-item h6\">Dapibus ac facilisis in\n              <br>\n              <small> Title:\n                <em>Form 1 </em> Size:\n                <em>1MB </em>\n              </small>\n              <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n            </li>\n          </ul>\n        </div>\n        <div class=\"tab-pane\" id=\"set5\" role=\"tabpanel\" aria-expanded=\"false\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item h6\">Cras justo odio\n            <br>\n            <small> Title:\n              <em>Form 1 </em> Size:\n              <em>1MB </em>\n            </small>\n            <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n            </li>\n            <li class=\"list-group-item h6\">Dapibus ac facilisis in\n              <br>\n              <small> Title:\n                <em>Form 1 </em> Size:\n                <em>1MB </em>\n              </small>\n              <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n            </li>\n          </ul>\n        </div>\n        <div class=\"tab-pane\" id=\"set6\" role=\"tabpanel\" aria-expanded=\"false\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item h6\">Cras justo odio\n            <br>\n            <small> Title:\n              <em>Form 1 </em> Size:\n              <em>1MB </em>\n            </small>\n            <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n            </li>\n            <li class=\"list-group-item h6\">Dapibus ac facilisis in\n              <br>\n              <small> Title:\n                <em>Form 1 </em> Size:\n                <em>1MB </em>\n              </small>\n              <button class=\"btn btn-primary btn-simple btn-round float-right\" type=\"button\">Download</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myservices_students_service__ = __webpack_require__("./src/app/myservices/students.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(formBuilder, studService) {
        this.formBuilder = formBuilder;
        this.studService = studService;
        this.validStudent = false;
        this.validated = false;
        this.processing = false;
        this.validateStudentForm();
    }
    ServicesComponent.prototype.validateStudentForm = function () {
        this.form = this.formBuilder.group({
            studnum: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(10),
                    this.numericValidator
                ])],
            studname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(50)
                ])]
        });
    };
    ServicesComponent.prototype.enableFormvalidateStudentForm = function () {
        this.form.get('studnum').enable();
        this.form.get('studname').enable();
    };
    ServicesComponent.prototype.disableFormvalidateStudentForm = function () {
        this.form.get('studnum').disable();
        this.form.get('studname').disable();
    };
    ServicesComponent.prototype.numericValidator = function (controls) {
        var regExp = new RegExp(/^[0-9]*$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'numericValidator': true };
        }
    };
    ServicesComponent.prototype.studentValidation = function () {
        this.validStudent = true;
        this.validated = false;
    };
    ServicesComponent.prototype.onFormSubmit = function () {
        var _this = this;
        // console.log(this.form.get('studnum').value);
        // console.log(this.form.get('studname').value);
        this.processing = true;
        this.disableFormvalidateStudentForm();
        var student = {
            studnum: this.form.get('studnum').value,
            studname: this.form.get('studname').value
        };
        this.studService.validation(student).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.enableFormvalidateStudentForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                // this.studService.storeStudentsData(data.token, data.student);
                _this.validStudent = false;
                _this.validated = true;
            }
        });
    };
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-services',
            template: __webpack_require__("./src/app/components/services/services.component.html"),
            styles: [__webpack_require__("./src/assets/css/now-ui-kit.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__myservices_students_service__["a" /* StudentsService */]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_component__ = __webpack_require__("./src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_routing__ = __webpack_require__("./src/app/components/services/services.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__myservices_students_service__ = __webpack_require__("./src/app/myservices/students.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__services_routing__["a" /* ServiceRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__services_component__["a" /* ServicesComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__myservices_students_service__["a" /* StudentsService */]]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/components/services/services.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_component__ = __webpack_require__("./src/app/components/services/services.component.ts");

var ServiceRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__services_component__["a" /* ServicesComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=services.module.chunk.js.map