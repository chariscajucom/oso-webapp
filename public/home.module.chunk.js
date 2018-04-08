webpackJsonp(["home.module"],{

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "    /* GLOBAL STYLES\r\n-------------------------------------------------- */\r\n/* Padding below the footer and lighter body text */\r\nbody {\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n  color: #5a5a5a;\r\n}\r\n/* CUSTOMIZE THE CAROUSEL\r\n-------------------------------------------------- */\r\n.carousel {\r\n  margin-bottom: 0rem;\r\n  background: rgba(44, 44, 44, 0.2);\r\n }\r\n/* Since positioning the image, we need to help out the caption */\r\n.carousel-caption {\r\n  bottom: 3rem;\r\n  z-index: 10;\r\n\r\n}\r\n/* Declare heights because of positioning of img element */\r\n.carousel-item {\r\n  height: 41rem;\r\n  /* For browsers that do not support gradients */\r\n  /* For Safari 5.1 to 6.0 */\r\n  /* For Opera 11.1 to 12.0 */\r\n  /* For Firefox 3.6 to 15 */\r\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(44, 44, 44, 0.2)), to(rgba(224, 23, 3, 0.6)));\r\n  background: linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6));\r\n  /* Standard syntax */\r\n}\r\n.carousel-item > img {\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 0;\r\n  left: 0;\r\n  min-width: 100%;\r\n  height: auto;\r\n  max-width: none;\r\n  background: rgba(44, 44, 44, 0.2);\r\n  opacity: 0.6;\r\n  -webkit-filter:contrast(150%);\r\n          filter:contrast(150%);\r\n}\r\n.team-player img {\r\n  width: 10rem;\r\n}\r\n/* RESPONSIVE CSS\r\n-------------------------------------------------- */\r\n@media (min-width: 40em) {\r\n  /* Bump up size of carousel content */\r\n  .carousel-caption p {\r\n    margin-bottom: 1.25rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.4;\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = " <div id=\"myCarousel\" class=\"carousel slide page-header-small\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner page-header-image\" style=\"transform: translate3d(0px, 0px, 0px);\">\n          <div class=\"carousel-item active\">\n            <img class=\"first-slide\" src=\"./assets/osomedia/osomedia/balangayan.jpg\" alt=\"First slide\">\n            <div class=\"container\">\n              <div class=\"carousel-caption text-left\">\n                <h2>A Good Leader is A Good Follower</h2>\n                <p>A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves. </p>\n                <p><a class=\"btn btn-lg btn-primary\" routerLink = '/services' role=\"button\">Go to Forms</a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"second-slide\" src=\"./assets/osomedia/osomedia/03.jpg\" alt=\"Second slide\">\n            <div class=\"container\">\n              <div class=\"carousel-caption text-right\">\n                <h2>Organizations in Action</h2>\n                <p>Did you know that BulSU has over 127 diverse organizations? That's over a hundred and twenty-seven opportunities for lasting friendships and learning experiences!</p>\n                <p><a class=\"btn btn-lg btn-primary\" routerLink = '/studorgs' role=\"button\">Learn more</a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"third-slide\" src=\"./assets/osomedia/osomedia/08.jpg\" alt=\"Third slide\">\n            <div class=\"container\">\n              <div class=\"carousel-caption text-left\">\n                <h2>Formality is everything</h2>\n                <p>The Office of the Student Organizations have a wide array of forms and primers ready for downloading and for a quick instruction or a refresher on filling up the forms</p>\n                <p><a class=\"btn btn-lg btn-primary\" routerLink='/about' role=\"button\">Go to about</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n</div>\n<div class=\"section section-about-us\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">What are we all about?</h2>\n                        <h5 class=\"description\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>\n                    </div>\n                </div>\n                <div class=\"separator separator-primary\"></div>\n                <div class=\"section-story-overview\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"image-container image-left\" style=\"background-image: url('../assets/osomedia/osomedia/suc317.jpg')\">\n                                <!-- First image on the left side -->\n                                <p class=\"blockquote blockquote-primary\">\"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.\"\n                                    <br>\n                                    <br>\n                                    <small>-Sirius Black, Harry Potter and the Goblet of Fire</small>\n                                </p>\n                            </div>\n                            <!-- Second image on the left side of the article -->\n                            <div class=\"image-container\" style=\"background-image: url('../assets/osomedia/new/grp.jpg'); background-size: cover;\"></div>\n                        </div>\n                        <div class=\"col-md-5\">\n                            <!-- First image on the right side, above the article -->\n                            <div class=\"image-container image-right\" style=\"background-image: url('../assets/osomedia/osomedia/poster.jpg')\"></div>\n                            <h3>Great moments are born from great opportunity</h3>\n                            <p>To officially open the celebration, the event started with the entrance of colors led by the BulSU ROTC Unit, followed by the singing of the National Anthem and BulSU Hymn headed by the very talended people from BulSU Saring Himig. The program was graced by the administration officials headed by BulSU President, Dr. Cecilia Gascon, vice president, deans and directors, and students.\n                            </p>\n                            <p>\n                                President Gascon thanked all the officials, faculty and students for the love and support that they have poured out for BulSU. She added that it is through their hard work and fierce loyalty to the institution that our University has come this far, and it is through these same loyalty and dedications that the university will soar to superior heights.\n                            </p>\n                            <p>Dr. Jaime P. Pulumbarit, the Vice President for Administration, Finance and Resource Generation, took charge in the introduction of the guest speaker, Gov. Wilhelmino M. Sy-Alvarado. The Governor stated that our university should continue to produce more competitive graduates that would help in the development of our province, especially the country. He articulated that he admires teachers and officials in this institution because of their unending dedication.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-team text-center\">\n            <div class=\"container\">\n                <h2 class=\"title\">Here is our team</h2>\n                <div class=\"team\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"team-player\">\n                                <img src=\"../assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                                <h4 class=\"title\">Romina Hadid</h4>\n                                <p class=\"category text-primary\">Model</p>\n                                <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                    <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-instagram\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"team-player\">\n                                <img src=\"../assets/osomedia/admins/roy.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                                <h4 class=\"title\">Sir Joseph Celestino</h4>\n                                <p class=\"category text-primary\">Director</p>\n                                <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                    <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-linkedin\"></i></a>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"team-player\">\n                                <img src=\"../assets/img/eva.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                                <h4 class=\"title\">Eva Jenner</h4>\n                                <p class=\"category text-primary\">Fashion</p>\n                                <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                    <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-google-plus\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-youtube-play\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-contact-us text-center\">\n            <div class=\"container\">\n                <h2 class=\"title\">Want to work with us?</h2>\n                <p class=\"description\">Your project is very important to us.</p>\n                <div class=\"row\">\n                    <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">\n                        <div class=\"col-md-6 col-lg-12\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" value=\"\" placeholder=\"Name\" class=\"form-control\" />\n                                </div>\n                        </div>\n                        <div class=\"col-md-6 col-lg-12\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" value=\"\" placeholder=\"Email\" class=\"form-control\" />\n                                </div>\n                        </div>\n                        <div class=\"textarea-container m-5\">\n                            <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\n                        </div>\n                        <div class=\"send-button\">\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-block btn-lg\">Send Message</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css"), __webpack_require__("./src/assets/css/now-ui-kit.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing__ = __webpack_require__("./src/app/components/home/home.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__home_routing__["a" /* HomeRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");

var HomeRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map