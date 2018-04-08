webpackJsonp(["news.module"],{

/***/ "./src/app/admin/news/delete-news/delete-news.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/news/delete-news/delete-news.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Delete News</h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Modal Confirmation Window -->\n<div class=\"col-md-6\" *ngIf=\"foundNews\">\n  <!-- Model Outer Layer -->\n  <div class=\"modal-content\">\n    <!-- Modal Header -->\n    <div class=\"modal-header\">\n      <!-- Close Button -->\n      <button type=\"button\" name=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      <!-- Modal Title -->\n      <h4 class=\"modal-title\">Confirm</h4>\n    </div>\n\n    <!-- Modal Body -->\n    <div class=\"modal-body\">\n      <p>Are you sure you would like to delete this news?</p>\n    </div>\n\n    <!-- Modal Footer -->\n    <div class=\"modal-footer\">\n      <!-- Yes Button -->\n      <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"deleteNews()\">Yes</button>\n      <!-- No Button -->\n      <a routerLink=\"/news\"><button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\">No</button></a>\n    </div>\n  </div>\n\n  <br />\n\n  <!-- card -->\n  <div class=\"card card-primary\">\n    <!-- card Heading -->\n    <div class=\"card-heading\">\n      <!-- card Title -->\n      <h3 class=\"card-title\">{{ news.title }}</h3>\n    </div>\n\n    <!-- card Body -->\n    <div class=\"card-body\">\n      {{ news.body }}\n    </div>\n\n    <!-- card Footer -->\n    <div class=\"card-footer\">\n      <strong>Posted by: </strong> {{ news.createdBy }}\n      <br />\n      <strong>Date: </strong> {{ news.createdAt | date:'MMM dd, yyyy' }}\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/news/delete-news/delete-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__myservices_news_service__ = __webpack_require__("./src/app/myservices/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteNewsComponent = /** @class */ (function () {
    function DeleteNewsComponent(newsService, activatedRoute, router) {
        this.newsService = newsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.foundNews = false;
        this.processing = false;
    }
    // Function to delete news
    DeleteNewsComponent.prototype.deleteNews = function () {
        var _this = this;
        this.processing = true; // Disable buttons
        // Function for DELETE request
        this.newsService.deleteNews(this.currentUrl.id).subscribe(function (data) {
            // Check if delete request worked
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error bootstrap class
                _this.message = data.message; // Return error message
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return bootstrap success class
                _this.message = data.message; // Return success message
                // After two second timeout, route to news page
                setTimeout(function () {
                    _this.router.navigate(['/admin/dashboard']); // Route users to news page
                }, 2000);
            }
        });
    };
    DeleteNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // Get URL paramaters on page load
        // Function for GET request to retrieve news
        this.newsService.getSingleNews(this.currentUrl.id).subscribe(function (data) {
            // Check if request was successfull
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return bootstrap error class
                _this.message = data.message; // Return error message
            }
            else {
                // Create the news object to use in HTML
                _this.news = {
                    title: data.news.title,
                    body: data.news.body,
                    createdBy: data.news.createdBy,
                    createdAt: data.news.createdAt // Set created_at field
                };
                _this.foundNews = true; // Displaly news window
            }
        });
    };
    DeleteNewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-news',
            template: __webpack_require__("./src/app/admin/news/delete-news/delete-news.component.html"),
            styles: [__webpack_require__("./src/app/admin/news/delete-news/delete-news.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__myservices_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DeleteNewsComponent);
    return DeleteNewsComponent;
}());



/***/ }),

/***/ "./src/app/admin/news/edit-news/edit-news.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/news/edit-news/edit-news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit News</h1>\n  <div class=\"row show-hide-message\" *ngIf=\"message\">\n    <div [ngClass]=\"messageClass\">\n      {{ message }}\n    </div>\n  </div>\n\n  <form (submit)=\"updateNewsSubmit()\" *ngIf=\"!loading\"> \n    <div class=\"form-group\">\n      <label for=\"Title\">Title</label>\n      <input type=\"text\" name=\"title\" placeholder=\"News Title\" class=\"form-control\" [(ngModel)]=\"news.title\" [disabled]=\"processing\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"Title\">Body</label>\n      <textarea [disabled]=\"processing\" type=\"text\" rows=\"80\" name=\"body\" placeholder=\"News Body\" class=\"form-control\" [(ngModel)]=\"news.body\"></textarea>\n    </div>\n    <a [routerLink]=\"['/delete/', news._id]\"><button type=\"button\" name=\"button\" class=\"btn btn-danger\">Delete</button></a>\n    <button type=\"button\" name=\"button\" class=\"btn btn-info\" (click)=\"goBack()\">Go Back</button>\n    <button [disabled]=\"processing\" type=\"submit\" name=\"save\" class=\"btn btn-success\">Save Changes</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/admin/news/edit-news/edit-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myservices_news_service__ = __webpack_require__("./src/app/myservices/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditNewsComponent = /** @class */ (function () {
    function EditNewsComponent(location, activatedRoute, newsService, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.newsService = newsService;
        this.router = router;
        this.processing = false;
        this.loading = true;
    }
    EditNewsComponent.prototype.updateNewsSubmit = function () {
        var _this = this;
        this.processing = true; // form is disabled
        // console.log(this.news);
        this.newsService.editNews(this.news).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['/admin/news']);
                }, 2000);
            }
        });
    };
    EditNewsComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.newsService.getSingleNews(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.news = data.news;
                _this.loading = false;
            }
        });
    };
    EditNewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-news',
            template: __webpack_require__("./src/app/admin/news/edit-news/edit-news.component.html"),
            styles: [__webpack_require__("./src/app/admin/news/edit-news/edit-news.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__myservices_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditNewsComponent);
    return EditNewsComponent;
}());



/***/ }),

/***/ "./src/app/admin/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>News Feed</h1>\r\n  <div class=\"row show-hide-message\" *ngIf=\"message && newPost\">\r\n    <div [ngClass]=\"messageClass\">\r\n      {{ message }}\r\n    </div>\r\n  </div>\r\n  <button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newPost\" (click)=\"createNewsForm()\"><i class=\"now-ui-icons ui-1_simple-add\"></i>&nbsp;&nbsp;New Post</button>\r\n  <button [disabled]=\"loadingNews\" type=\"button\" name=\"button\" class=\"btn btn-default\" *ngIf=\"!newPost\" (click)=\"reloadNews()\"><i class=\"now-ui-icons loader_refresh\"></i>&nbsp;&nbsp;Reload</button>\r\n<!-- Create new news post -->\r\n<!-- New title -->\r\n      <form [formGroup]=\"form\" name=\"newsForm\" (submit)=\"onNewsSubmit()\" *ngIf=\"newPost\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Title</label>\r\n          <div [ngClass]=\"{'has-success': form.controls.title.valid, 'has-error': form.controls.title.dirty && form.controls.title.errors }\">\r\n            <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"News Title\" autocomplete=\"off\" formControlName=\"title\"/>\r\n            <ul class=\"form-text\">\r\n              <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required.</li>\r\n              <li *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.minlength) || (form.controls.title.dirty && form.controls.title.errors?.maxlength)\">Max Length: 50, Min: 5</li>\r\n              <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidator\">Must be alphanumeric.</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n  <!-- New title -->\r\n  <!-- New Body -->\r\n    <div class=\"form-group\">\r\n      <label for=\"body\">Body</label>\r\n      <div [ngClass]=\"{'has-success': form.controls.body.valid, 'has-error': form.controls.body.dirty && form.controls.body.errors }\">\r\n        <textarea name=\"body\" rows=\"10\" cols=\"10\" placeholder=\"Body\" class=\"form-control\" formControlName=\"body\"></textarea>\r\n        <ul class=\"form-text\">\r\n          <li *ngIf=\"form.controls.body.dirty && form.controls.body.errors?.required\">This field is required.</li>\r\n          <li *ngIf=\"(form.controls.body.dirty && form.controls.body.errors?.minlength) || (form.controls.body.dirty && form.controls.body.errors?.maxlength)\">Max Length: 500, Min: 15</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  <!-- New Body -->\r\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-warning\">Go Back</button>\r\n  <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Submit</button>\r\n<!-- Create new news post -->\r\n  </form>\r\n  <!-- NEWS -->\r\n  <div *ngIf=\"!newPost\">\r\n    <div class=\"card bg-light border-dark\" *ngFor=\"let news of newsArticles\">\r\n    <div class=\"card-body\">\r\n      <!-- news title -->\r\n      <h5 class=\"card-title\">{{ news.title }}</h5>\r\n      <!-- news body -->\r\n      <p class=\"card-text\">{{ news.body }}</p>\r\n    </div>\r\n    <!-- news footer start -->\r\n    <div class=\"card-footer text-muted\">\r\n      <!-- news author -->\r\n      <strong>Posted by: </strong>{{ news.createdBy }}&nbsp;&nbsp;\r\n      <!-- news created -->\r\n      <strong>Date: </strong>{{ news.createdAt | date: 'MMM dd, yyyy' }}\r\n      <!-- Like and Dislike Button -->\r\n      <div *ngIf=\"username === news.createdBy\">\r\n        <p><strong>Likes: </strong>{{ news.likes }}&nbsp;&nbsp;\r\n        <strong>Dislikes: </strong>{{ news.dislikes }}</p>\r\n      </div>\r\n\r\n      <!-- Like and Dislike Button -->\r\n      <div class=\"btn-group\" role=\"group\">\r\n        <!-- Edit Button -->\r\n        <a [routerLink]=\"['edit/', news._id ]\" *ngIf=\"username === news.createdBy\" class=\"btn btn-primary mx-1 rounded\">Edit</a>\r\n\r\n        <!-- Delete Button -->\r\n        <a [routerLink]=\"['delete/', news._id ]\" *ngIf=\"username === news.createdBy\" class=\"btn btn-danger mx-1 rounded\" role=\"button\">Delete</a>\r\n\r\n          <!-- Likes Dropdown -->\r\n        <div class=\"dropdown dropup\">\r\n          <button class=\"btn btn-success mx-1 dropdown-toggle\" *ngIf=\"username !== news.createdBy\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Likes: 8\r\n          </button>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </div>\r\n        <!-- Dislikes Dropdown -->\r\n        <div class=\"dropdown dropup\">\r\n          <button class=\"btn btn-warning mx-1 dropdown-toggle\" *ngIf=\"username !== news.createdBy\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Dislikes\r\n          </button>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- footer end -->\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">\r\n        <button class=\"btn btn-outline-secondary\" name=\"button\" type=\"button\" (click)=\"draftComment()\">Post Comment</button>\r\n        <br>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myservices_auth_service__ = __webpack_require__("./src/app/myservices/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myservices_news_service__ = __webpack_require__("./src/app/myservices/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsComponent = /** @class */ (function () {
    function NewsComponent(formBuilder, authService, newsService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.newsService = newsService;
        this.newPost = false;
        this.loadingNews = false;
        this.processing = false;
        this.createNewsPost();
    }
    NewsComponent.prototype.createNewsPost = function () {
        this.form = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(50),
                    this.alphaNumericValidator
                ])],
            body: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(15),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(500)
                ])]
        });
    };
    NewsComponent.prototype.enableFormNewsForm = function () {
        this.form.get('title').enable();
        this.form.get('body').enable();
    };
    NewsComponent.prototype.disableFormNewsForm = function () {
        this.form.get('title').disable();
        this.form.get('body').disable();
    };
    NewsComponent.prototype.alphaNumericValidator = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ]*$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'alphaNumericValidator': true };
        }
    };
    NewsComponent.prototype.createNewsForm = function () {
        this.newPost = true;
    };
    NewsComponent.prototype.reloadNews = function () {
        var _this = this;
        this.loadingNews = true;
        this.getAllNews();
        setTimeout(function () {
            _this.loadingNews = false;
        }, 4000);
    };
    NewsComponent.prototype.draftComment = function () {
    };
    NewsComponent.prototype.onNewsSubmit = function () {
        var _this = this;
        // console.log('form submitted');
        this.processing = true;
        this.disableFormNewsForm();
        var news = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            createdBy: this.username
        };
        this.newsService.createNews(news).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableFormNewsForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                _this.getAllNews();
                setTimeout(function () {
                    _this.newPost = false;
                    _this.processing = false;
                    _this.message = false;
                    _this.form.reset();
                    _this.enableFormNewsForm();
                }, 2000);
            }
        });
    };
    NewsComponent.prototype.goBack = function () {
        window.location.reload();
    };
    NewsComponent.prototype.getAllNews = function () {
        var _this = this;
        this.newsService.getAllNews().subscribe(function (data) {
            _this.newsArticles = data.news;
        });
    };
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username;
        });
        this.getAllNews();
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-news',
            template: __webpack_require__("./src/app/admin/news/news.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__myservices_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__myservices_news_service__["a" /* NewsService */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/admin/news/news.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_component__ = __webpack_require__("./src/app/admin/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_routing__ = __webpack_require__("./src/app/admin/news/news.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_news_edit_news_component__ = __webpack_require__("./src/app/admin/news/edit-news/edit-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__delete_news_delete_news_component__ = __webpack_require__("./src/app/admin/news/delete-news/delete-news.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__news_routing__["a" /* NewsRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__news_component__["a" /* NewsComponent */], __WEBPACK_IMPORTED_MODULE_6__edit_news_edit_news_component__["a" /* EditNewsComponent */], __WEBPACK_IMPORTED_MODULE_7__delete_news_delete_news_component__["a" /* DeleteNewsComponent */]]
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ }),

/***/ "./src/app/admin/news/news.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_news_edit_news_component__ = __webpack_require__("./src/app/admin/news/edit-news/edit-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_component__ = __webpack_require__("./src/app/admin/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delete_news_delete_news_component__ = __webpack_require__("./src/app/admin/news/delete-news/delete-news.component.ts");



var NewsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__news_component__["a" /* NewsComponent */]
            },
            {
                path: 'edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_0__edit_news_edit_news_component__["a" /* EditNewsComponent */]
            },
            {
                path: 'delete/:id',
                component: __WEBPACK_IMPORTED_MODULE_2__delete_news_delete_news_component__["a" /* DeleteNewsComponent */]
            }
        ]
    }
];


/***/ })

});
//# sourceMappingURL=news.module.chunk.js.map