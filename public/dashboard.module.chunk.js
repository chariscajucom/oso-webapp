webpackJsonp(["dashboard.module"],{

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-md-12 ml-auto mr-auto\">\n      <div class=\"card card-stats card-raised\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"statistics\">\n                <div class=\"info\">\n                  <div class=\"icon icon-primary\">\n                    <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                  </div>\n                  <h3 class=\"info-title\">859</h3>\n                  <h6 class=\"stats-title\">Messages</h6>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"statistics\">\n                <div class=\"info\">\n                  <div class=\"icon icon-success\">\n                    <i class=\"now-ui-icons business_money-coins\"></i>\n                  </div>\n                  <h3 class=\"info-title\">\n                    <small>$</small>3,521</h3>\n                  <h6 class=\"stats-title\">Today Revenue</h6>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"statistics\">\n                <div class=\"info\">\n                  <div class=\"icon icon-info\">\n                    <i class=\"now-ui-icons users_single-02\"></i>\n                  </div>\n                  <h3 class=\"info-title\">562</h3>\n                  <h6 class=\"stats-title\">Customers</h6>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"statistics\">\n                <div class=\"info\">\n                  <div class=\"icon icon-danger\">\n                    <i class=\"now-ui-icons objects_support-17\"></i>\n                  </div>\n                  <h3 class=\"info-title\">353</h3>\n                  <h6 class=\"stats-title\">Support Requests</h6>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-10 ml-auto mr-auto\">\n      <div class=\"card card-calendar\">\n        <div class=\"card-body\">\n          <div id=\"fullCalendar\"></div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var $calendar = $('#fullCalendar');
        var today = new Date();
        var y = today.getFullYear();
        var m = today.getMonth();
        var d = today.getDate();
        $calendar.fullCalendar({
            viewRender: function (view, element) {
                // We make sure that we activate the perfect scrollbar when the view isn't on Month
                if (view.name != 'month') {
                    $(element).find('.fc-scroller').perfectScrollbar();
                }
            },
            header: {
                left: 'title',
                center: 'month,agendaWeek,agendaDay',
                right: 'prev,next,today'
            },
            defaultDate: today,
            selectable: true,
            selectHelper: true,
            views: {
                month: {
                    titleFormat: 'MMMM YYYY'
                    // other view-specific options here
                },
                week: {
                    titleFormat: " MMMM D YYYY"
                },
                day: {
                    titleFormat: 'D MMM, YYYY'
                }
            },
            select: function (start, end) {
                // on select we show the Sweet Alert modal with an input
                swal({
                    title: 'Create an Event',
                    html: '<div class="form-group">' +
                        '<input class="form-control" placeholder="Event Title" id="input-field">' +
                        '</div>',
                    showCancelButton: true,
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                }).then(function (result) {
                    var eventData;
                    var event_title = $('#input-field').val();
                    if (event_title) {
                        eventData = {
                            title: event_title,
                            start: start,
                            end: end
                        };
                        $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
                    }
                    $calendar.fullCalendar('unselect');
                });
            },
            editable: true,
            eventLimit: true,
            // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
            events: [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    className: 'event-default'
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d - 1, 10, 30),
                    allDay: false,
                    className: 'event-green'
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d + 7, 12, 0),
                    end: new Date(y, m, d + 7, 14, 0),
                    allDay: false,
                    className: 'event-red'
                },
                {
                    title: 'Nud-pro Launch',
                    start: new Date(y, m, d - 2, 12, 0),
                    allDay: true,
                    className: 'event-azure'
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false,
                    className: 'event-azure'
                },
                {
                    title: 'Click for Creative Tim',
                    start: new Date(y, m, 21),
                    end: new Date(y, m, 22),
                    url: 'http://www.creative-tim.com/',
                    className: 'event-orange'
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 21),
                    end: new Date(y, m, 22),
                    url: 'http://www.creative-tim.com/',
                    className: 'event-orange'
                }
            ]
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'admin-dash',
            template: __webpack_require__("./src/app/admin/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing__ = __webpack_require__("./src/app/admin/dashboard/dashboard.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__dashboard_routing__["a" /* DashboardRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("./src/app/admin/dashboard/dashboard.component.ts");

var DashboardRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map