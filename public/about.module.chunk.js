webpackJsonp(["about.module"],{

/***/ "./src/app/components/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n*{\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tposition: relative;\n}\n\n.cf:before,\n.cf:after {\n    content: \" \"; /* 1 */\n    display: table; /* 2 */\n}\n\n.cf:after {\n    clear: both;\n}\n\n/**\n * For IE 6/7 only\n * Include this rule to trigger hasLayout and contain floats.\n */\n\n.cf {\n    *zoom: 1;\n}\n\n.content{\n\twidth: 100%;\n\tmax-width: 1142px;\n\tmargin: 0 auto;\n\tpadding: 0 20px;\n}\n\n@media all and (max-width: 767px){\n\t.content{\n\t\tpadding: 0 20px;\n\t}\t\n}\n\nul{\n\tpadding: 0;\n\tmargin: 0;\n\tlist-style: none;\t\t\n}\n\nul a{\n\tdisplay: block;\n\tbackground: #f96332;\n\tborder: 4px solid #fff;\n\ttext-align: center;\n\toverflow: hidden;\n\tfont-size: .7em;\n\ttext-decoration: none;\n\tfont-weight: bold;\n\tcolor: #f7f7f7;\n\theight: 70px;\n\tmargin-bottom: -26px;\n\t-webkit-box-shadow: 4px 4px 9px -4px rgba(0,0,0,0.4);\n\t        box-shadow: 4px 4px 9px -4px rgba(0,0,0,0.4);\n\t-webkit-transition: all linear .1s;\n\ttransition: all linear .1s;\n}\n\n@media all and (max-width: 767px){\n\tul a{\n\t\tfont-size: 1em;\n\t}\n}\n\nul a span{\n\ttop: 50%;\n\tmargin-top: -0.7em;\n\tdisplay: block;\n}\n\n/*\n \n */\n\n.administration > li > a{\n\tmargin-bottom: 25px;\n}\n\n.administration li a:hover{\n    height: 80px;\n\twidth: 95%;\n    top: 5px;\n    font-size: 1vw;\n}\n\n.director > li > a{\n\twidth: 50%;\n\tmargin: 0 auto 0px auto;\n}\n\n.subdirector:after{\n\tcontent: \"\";\n\tdisplay: block;\n\twidth: 0;\n\theight: 130px;\n\tbackground: #f96332;\n\tborder-left: 4px solid #fff;\n\tleft: 45.45%;\n\tposition: relative;\n}\n\n.subdirector,\n.departments{\n\tposition: absolute;\n\twidth: 100%;\n}\n\n.subdirector > li:first-child,\n.departments > li:first-child{\t\n\twidth: 18.59894921190893%;\n\theight: 64px;\n\tmargin: 0 auto 92px auto;\t\t\n\tpadding-top: 25px;\n\tborder-bottom: 4px solid white;\n\tz-index: 1;\t\n}\n\n.subdirector > li:first-child{\n\tfloat: right;\n\tright: 27.2%;\n\tborder-left: 4px solid white;\n}\n\n.departments > li:first-child{\t\n\tfloat: left;\n\tleft: 27.2%;\n\tborder-right: 4px solid white;\t\n}\n\n.subdirector > li:first-child a,\n.departments > li:first-child a{\n\twidth: 100%;\n}\n\n.subdirector > li:first-child a{\t\n\tleft: 25px;\n}\n\n@media all and (max-width: 767px){\n\t.subdirector > li:first-child,\n\t.departments > li:first-child{\n\t\twidth: 40%;\t\n\t}\n\n\t.subdirector > li:first-child{\n\t\tright: 10%;\n\t\tmargin-right: 2px;\n\t}\n\n\t.subdirector:after{\n\t\tleft: 49.8%;\n\t}\n\n\t.departments > li:first-child{\n\t\tleft: 10%;\n\t\tmargin-left: 2px;\n\t}\n}\n\n.departments > li:first-child a{\n\tright: 25px;\n}\n\n.department:first-child,\n.departments li:nth-child(2){\n\tmargin-left: 0;\n\tclear: left;\t\n}\n\n.departments:after{\n\tcontent: \"\";\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 81.1%;\n\theight: 22px;\t\n\tborder-top: 4px solid #fff;\n\tborder-right: 4px solid #fff;\n\tborder-left: 4px solid #fff;\n\tmargin: 0 auto;\n\ttop: 130px;\n\tleft: 9.1%\n}\n\n@media all and (max-width: 767px){\n\t.departments:after{\n\t\tborder-right: none;\n\t\tleft: 0;\n\t\twidth: 49.8%;\n\t}  \n}\n\n@media all and (min-width: 768px){\n\t.department:first-child:before,\n   .department:last-child:before{\n    border:none;\n  }\n}\n\n.department:before{\n\tcontent: \"\";\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 0;\n\theight: 22px;\n\tborder-left: 4px solid white;\n\tz-index: 1;\n\ttop: -22px;\n\tleft: 50%;\n\tmargin-left: -4px;\n}\n\n.department{\n\tborder-left: 4px solid #fff;\n\twidth: 18.59894921190893%;\n\tfloat: left;\n\tmargin-left: 1.751313485113835%;\n\tmargin-bottom: 60px;\n}\n\n.lt-ie8 .department{\n\twidth: 18.25%;\n}\n\n@media all and (max-width: 767px){\n\t.department{\n\t\tfloat: none;\n\t\twidth: 100%;\n\t\tmargin-left: 0;\n\t}\n\n\t.department:before{\n\t\tcontent: \"\";\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\twidth: 0;\n\t\theight: 60px;\n\t\tborder-left: 4px solid white;\n\t\tz-index: 1;\n\t\ttop: -60px;\n\t\tleft: 0%;\n\t\tmargin-left: -4px;\n\t}\n\n\t.department:nth-child(2):before{\n\t\tdisplay: none;\n\t}\n}\n\n.department > a{\n\tmargin: 0 0 -26px -4px;\n\tz-index: 1;\n}\n\n.department > a:hover{\t\n\theight: 80px;\n}\n\n.department > ul{\n\tmargin-top: 0px;\n\tmargin-bottom: 0px;\n}\n\n.department li{\t\n\tpadding-left: 25px;\n\tborder-bottom: 4px solid #fff;\n\theight: 80px;\t\n}\n\n.department li a{\n\tbackground: #fff;\n\ttop: 48px;\t\n\tposition: absolute;\n\tz-index: 1;\n\twidth: 90%;\n\theight: 60px;\n\tvertical-align: middle;\n\tright: -1px;\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a7cfdf+0,23538a+100;Blue+3d+%238 */\n    background: rgb(167,207,223); /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(167,207,223,1)),to(rgba(35,83,138,1)));\n    background: linear-gradient(to bottom, rgba(167,207,223,1) 0%,rgba(35,83,138,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a7cfdf', endColorstr='#23538a',GradientType=0 ); /* IE6-9 */\n}\n\n.department li a:hover{\n\t-webkit-box-shadow: 8px 8px 9px -4px rgba(7, 126, 206, 0.57);\n\t        box-shadow: 8px 8px 9px -4px rgba(7, 126, 206, 0.57);\n\theight: 80px;\n\twidth: 95%;\n\ttop: 39px;\n    background-image: none!important;\n    color: black;\n}\n\n/* Department/ section colors */\n\n.department.dep-a a{ background: #FFB236; }\n\n.department.dep-b a{ background: #2CA8FF; }\n\n.department.dep-c a{ background: #FF3636; }\n\n.department.dep-d a{ background: #888; }\n\n.department.dep-e a{ background: #707070; }"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header page-header-small\">\n  <div class=\"page-header-image\" style=\"background-image: url('../assets/osomedia/osomedia/bulsu113.jpg');\">\n  </div>\n  <div class=\"container\">\n    <div class=\"content-center\">\n      <h1 class=\"title\">About BulSU-OSO</h1>\n    </div>\n  </div>\n</div>\n<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a href=\"#\">Home</a>\n    </li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">About</li>\n  </ol>\n</nav>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!-- navs  -->\n    <div class=\"col-sm-4\">\n      <div class=\"nav nav-pills flex-column flex-row\" id=\"v-pills-tab\" role=\"tablist\">\n        <a class=\"flex-sm-fill nav-link active\" id=\"v-pills-tab1-tab\" data-toggle=\"pill\" href=\"#v-pills-tab1\" role=\"tab\" aria-controls=\"v-pills-tab1\"\n          aria-selected=\"true\">Office of Student Organizations</a>\n        <a class=\"flex-sm-fill nav-link\" id=\"v-pills-tab2-tab\" data-toggle=\"pill\" href=\"#v-pills-tab2\" role=\"tab\" aria-controls=\"v-pills-tab2\"\n          aria-selected=\"false\">BulSU</a>\n      </div>\n      <img src=\"../assets/osomedia/logo/slider-oso-shap.png\" alt=\"\">\n    </div>\n    <!-- content -->\n    <div class=\"col-sm-8\">\n      <div class=\"tab-content\" id=\"v-pills-tabContent\">\n        <div class=\"tab-pane fade show active\" id=\"v-pills-tab1\" role=\"tabpanel\" aria-labelledby=\"v-pills-tab1-tab\">\n            <div class=\"content\">\n                <h3>All About OSO</h3>\n                  <h5 class=\"display-4\">OSO Primer</h5>\n                  <p class=\"text-justify\">On January 25th, 2003, Sony Creative Software released version 1.0 of Sony Vegas Pro,[9] which displays the phrase “Sample Text” when adding a text overlay in a video clip, indicating that the user can customize the type. On November 21st, 2013, YouTuber iTheRainbowDash uploaded a montage parody which included the sample text overlay in a clip of a quickscoping player during a Call of Duty online match (shown below).On January 25th, 2003, Sony Creative Software released version 1.0 of Sony Vegas Pro,[9] which displays the phrase “Sample Text” when adding a text overlay in a video clip, indicating that the user can customize the type. On November 21st, 2013, YouTuber iTheRainbowDash uploaded a montage parody which included the sample text overlay in a clip of a quickscoping player during a Call of Duty online match (shown below).On January 25th, 2003, Sony Creative Software released version 1.0 of So can customize the type. On November 21st, 2013, YouTuber iTheRainbowDash uploaded a montage parody which included the sample text overlay in a clip of a quickscoping player during a Call of Duty online match (shown below).</p>\n                <div class=\"img-thumbnail\">\n                    <img src=\"../../../assets/osomedia/system_media/oso_chart.jpg\" alt=\"OSO Org Chart\">\n                </div>\n                \n              </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"v-pills-tab2\" role=\"tabpanel\" aria-labelledby=\"v-pills-tab2-tab\">\n          <div class=\"content\">\n              <h5 class=\"display-4\">About BulSU</h5>\n              <img src=\"../../../assets/osomedia/osomedia/suc317.jpg\" class=\"img-fluid\" alt=\"Responsive image\"><br>\n                <p class=\"text-justify\">Bulacan State University (BulSU) is a state-funded institution of higher learning established in 1904 and converted into a university in 1993 by virtue of Republic Act 7665. The University in mandated to provide higher professional/technical and special instruction for special purpose and to promote research and extension services, advanced studies and extension services, advanced studies and progressive leadership in Engineering, Architecture, Education, Art and Science, Fine Arts, Information Technology, Technical courses, Commerce, Agriculture, Forestry, Medicine, Law, Public Administration, Fishery, Leather Technology and other courses as circumstance warrants. The University today offers degree programs in the fields of Engineering, Industrial Technology, Arts and Science, Education, Architecture, Fine Arts, Information Technology, Law, Business and Management, Public Administration and Health care.</p> <br>\n                <p class=\"text-justify\">The University has four campuses located in the province of Bulacan. Its seven-hectare main campus is located in the City of Malolos, the capital of Bulacan. The external campuses are: Bustos Campus in the town of Bustos, Sarmiento Campus in the City of San Jose Del Monte, Meneses Campus in the town of Bulakan. BulSU has a manpower complement of 385 full-time permanent and temporary faculty, 420 part-time faculty, 92 regular academic support personnel and 127 employees-by-job-order. As of the first semester of school year 2009, 2010, the university has a total enrolled student of 24,069.</p> <br>\n                <p class=\"text-justify\">Integral to the delivery of quality tertiary-level education service, BulSU conducts surveys and applied research and performs many public service functions through its research and extension programs and linkages with various stakeholders. Its Center for Local Governance is one of the most active governance skills resource centers in the country. The Department of Science and Technology (DOST) has selected the University as the Provincial Science and Technology Center. In partnership with DOST, BulSU operates a Food Testing Laboratory which serve the food processing industry of the region. Recognizing the accomplishment of the region. Recognizing the accomplishments of the University as a technology and teacher training institution, the Commission on Higher Education cited it as Center of Development for Mechanical and Electrical Engineering. The University's Center for Bulacan Studies actively pursue research on the history and culture of the province and promotes community-oriented projects.</p> <br>\n                <h5 class=\"display-4\">Vision and Mission</h5>\n                <div class=\"row\">\n                  <div class=\"col-sm-4\">\n                    <h5>Vision</h5>\n                    <p class=\"text-justify\">Bulacan State University is a progressive knowledge-generating institution globally recognized for excellent instruction, pioneering research, and responsive community engagements</p>\n                  </div>\n                  <div class=\"col-sm-4\">\n                      <h5>Mission</h5>\n                    <p class=\"text-justify\">Bulacan State University exists to produce highly competent, ethical and service-oriented professionals that contribute to the sustainable socio-economic growth and development of the nation</p>\n                    </div>\n                </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_routing__ = __webpack_require__("./src/app/components/about/about.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__about_routing__["a" /* AboutRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__about_component__["a" /* AboutComponent */]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");

var AboutRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__about_component__["a" /* AboutComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=about.module.chunk.js.map