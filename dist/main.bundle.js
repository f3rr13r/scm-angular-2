webpackJsonp([1,4],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// routing

var HomeComponent = (function () {
    function HomeComponent(_router) {
        this._router = _router;
    }
    // make sure we always arrive back at top of page.
    HomeComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    HomeComponent.prototype.navigateToServices = function () {
        this._router.navigateByUrl('services');
    };
    HomeComponent.prototype.navigateToTeam = function () {
        this._router.navigateByUrl('team');
    };
    HomeComponent.prototype.navigateToFindUs = function (location) {
        this._router.navigate(['find-us', location]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__(284),
        styles: [__webpack_require__(272)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataStorageService = (function () {
    function DataStorageService() {
        this.locations = [
            {
                latitude: 51.5070346,
                longitude: -3.5786352,
                address1: '1st Floor',
                address2: '14 Wyndham Street',
                city: 'BRIDGEND',
                postcode: 'CF31 1EF',
                phone: +441656767766,
                phonestring: '01656767766',
                openingHours: {
                    monday: '09:00 - 17:00',
                    tuesday: '09:00 - 17:00',
                    wednesday: '09:00 - 17:00',
                    thursday: '09:00 - 17:00',
                    friday: '09:00 - 17:00',
                    saturday: 'Closed',
                    sunday: 'Closed'
                },
                imageUrl: 'url(/assets/BridgendMap-image.png)'
            }, {
                latitude: 51.6187044,
                longitude: -3.939985,
                address1: 'Metropole Chambers',
                address2: 'Salubrious Passage, Wind Street',
                city: 'SWANSEA',
                postcode: 'SA1 3RT',
                phone: +441656767766,
                phonestring: '01656767766',
                openingHours: {
                    monday: '09:00 - 17:00',
                    tuesday: '09:00 - 17:00',
                    wednesday: '09:00 - 17:00',
                    thursday: '09:00 - 17:00',
                    friday: '09:00 - 17:00',
                    saturday: 'Closed',
                    sunday: 'Closed'
                },
                imageUrl: 'url(/assets/SwanseaMap-image.png)'
            }, {
                latitude: 51.4866957,
                longitude: -3.1587076,
                address1: '10 Clifton Street',
                address2: 'Adamsdown',
                city: 'CARDIFF',
                postcode: 'CF24 1PW',
                phone: +441656767766,
                phonestring: '01656767766',
                openingHours: {
                    monday: '09:00 - 17:00',
                    tuesday: '09:00 - 17:00',
                    wednesday: '09:00 - 17:00',
                    thursday: '09:00 - 17:00',
                    friday: '09:00 - 17:00',
                    saturday: 'Closed',
                    sunday: 'Closed'
                },
                imageUrl: 'url(/assets/CardiffMap-image.png)'
            }
        ];
    }
    DataStorageService.prototype.getOfficeLocations = function () {
        return this.locations;
    };
    return DataStorageService;
}());
DataStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DataStorageService);

//# sourceMappingURL=data.storage.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 180;


/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(208);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'not-found',
        template: "\n    <p>Not found</p>\n  "
    })
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterContactComponent = (function () {
    function FooterContactComponent() {
    }
    return FooterContactComponent;
}());
FooterContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer-contact',
        template: __webpack_require__(279),
        styles: [__webpack_require__(267)]
    })
], FooterContactComponent);

//# sourceMappingURL=footer-contact.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(_router) {
        this._router = _router;
    }
    FooterComponent.prototype.navigateToHome = function () {
        this._router.navigateByUrl('/');
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer',
        template: __webpack_require__(280),
        styles: [__webpack_require__(268)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderContactComponent = (function () {
    function HeaderContactComponent() {
    }
    return HeaderContactComponent;
}());
HeaderContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header-contact',
        template: __webpack_require__(281),
        styles: [__webpack_require__(269)]
    })
], HeaderContactComponent);

//# sourceMappingURL=header-contact.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// routing

var HeaderComponent = (function () {
    function HeaderComponent(_router) {
        this._router = _router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // show home page by default.
        this.navigateToHome();
    };
    // routing
    HeaderComponent.prototype.navigateToHome = function () {
        this._router.navigateByUrl('/');
        //this.homePageSelected();
    };
    HeaderComponent.prototype.navigateToServices = function () {
        this._router.navigateByUrl('services');
        //this.servicesPageSelected();
    };
    HeaderComponent.prototype.navigateToTeam = function () {
        this._router.navigateByUrl('team');
        //this.teamPageSelected();
    };
    HeaderComponent.prototype.navigateToFindUs = function () {
        this._router.navigateByUrl('find-us');
        //this.findUsPageSelected();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header',
        template: __webpack_require__(282),
        styles: [__webpack_require__(270)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_contact_header_contact_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_contact_footer_contact_component__ = __webpack_require__(192);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* _SharedModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_contact_header_contact_component__["a" /* HeaderContactComponent */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_contact_footer_contact_component__["a" /* FooterContactComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_contact_header_contact_component__["a" /* HeaderContactComponent */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_contact_footer_contact_component__["a" /* FooterContactComponent */]
        ],
        providers: [],
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_storage__ = __webpack_require__(148);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// shared service

var FindUsComponent = (function () {
    function FindUsComponent(_sharedDataService, activatedRoute) {
        this._sharedDataService = _sharedDataService;
        this.activatedRoute = activatedRoute;
        this.offices = [];
    }
    FindUsComponent.prototype.ngOnInit = function () {
        // check width for styles
        this.checkInitialScreenWidth();
        // get the data
        this.offices = this._sharedDataService.getOfficeLocations();
        // start by showing correct office on screen centre.
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            if (params['location'] === 'bridgend') {
                window.scrollTo(0, 0);
            }
            else if (params['location'] === 'swansea') {
                window.scrollTo(0, 480);
            }
            else if (params['location'] === 'cardiff') {
                window.scrollTo(0, 960);
            }
            else {
                window.scrollTo(0, 0);
            }
        });
    };
    FindUsComponent.prototype.checkInitialScreenWidth = function () {
        if (window.innerWidth < 829) {
            this.canShowBackgroundImage = true;
        }
        else {
            this.canShowBackgroundImage = false;
        }
    };
    FindUsComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 827) {
            this.canShowBackgroundImage = true;
        }
        else {
            this.canShowBackgroundImage = false;
        }
    };
    return FindUsComponent;
}());
FindUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'find-us',
        template: __webpack_require__(283),
        styles: [__webpack_require__(271)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
], FindUsComponent);

var _a, _b;
//# sourceMappingURL=find-us.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find_us_find_us_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__team_team_component__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var companyRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_4__services_services_component__["a" /* ServicesComponent */] },
    { path: 'find-us', component: __WEBPACK_IMPORTED_MODULE_3__find_us_find_us_component__["a" /* FindUsComponent */] },
    { path: 'find-us/:location', component: __WEBPACK_IMPORTED_MODULE_3__find_us_find_us_component__["a" /* FindUsComponent */] },
    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_6__team_team_component__["a" /* TeamComponent */] },
];
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* _SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(companyRoutes)
        ],
        exports: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_4__services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_3__find_us_find_us_component__["a" /* FindUsComponent */]
        ],
        providers: [],
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_storage__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// shared service

var ServicesDetailComponent = (function () {
    function ServicesDetailComponent(_dataStorageService, _location) {
        this._dataStorageService = _dataStorageService;
        this._location = _location;
    }
    ServicesDetailComponent.prototype.ngOnInit = function () {
        // make sure we always arrive back at top of page.
        window.scrollTo(0, 0);
        // get data from shared service
        this.service = this._dataStorageService.getService();
    };
    ServicesDetailComponent.prototype.goBack = function () {
        this._location.back();
    };
    return ServicesDetailComponent;
}());
ServicesDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'services-detail',
        template: __webpack_require__(285),
        styles: [__webpack_require__(273)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */]) === "function" && _b || Object])
], ServicesDetailComponent);

var _a, _b;
//# sourceMappingURL=services-detail.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_storage__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// routing

// shared service

var ServicesComponent = (function () {
    function ServicesComponent(_router, _dataStorageService) {
        this._router = _router;
        this._dataStorageService = _dataStorageService;
    }
    // make sure we always arrive back at top of page.
    ServicesComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.services = [
            {
                path: "violent-crime-offences",
                title: "Violent Crime Offences",
                description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
                imageUrl: "url(/assets/services/violent-crime.jpg)",
                crimes: [
                    "Murder",
                    "Section 18 grievous bodily harm with intent",
                    "Section 20 grievous bodily harm",
                    "Actual body harm with intent",
                    "Actual body harm"
                ]
            }, {
                path: "sexual-crime-offences",
                title: "Sexual Crime Offences",
                description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
                imageUrl: "url(/assets/services/sexual-offences.jpg)",
                crimes: [
                    "Rape",
                    "Sexual Assault",
                    "Sexual Offences against children",
                    "Possessing indecent images of children",
                    "Exposure / Voyerism"
                ]
            }, {
                path: "drugs-offences",
                title: "Drugs Offences",
                description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
                imageUrl: "url(/assets/services/drugs-offences.jpg)",
                crimes: [
                    "Conspiracy to supply",
                    "Possession with intent to supply",
                    "Production of controlled drugs",
                    "Permitting premises to be used",
                    "Possessing controlled drugs"
                ]
            }, {
                path: "fraud-offences",
                title: "Fraud Offences",
                description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
                imageUrl: "url(/assets/services/fraud-offences.jpg)",
                crimes: [
                    "Conspiracy to defraud",
                    "False representation",
                    "Bribery",
                    "Money Laundering",
                    "TAX / Benefit fraud"
                ]
            }, {
                path: "theft-and-dishonesty-offences",
                title: "Theft & Dishonesty Offences",
                description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
                imageUrl: "url(/assets/services/theft-offences.jpg)",
                crimes: [
                    "Burglary",
                    "Shoplifting",
                    "Theft from employer",
                    "Handling stolen goods",
                    "Something to do with payment."
                ]
            }, {
                path: "cyber-offences",
                title: "Cyber Offences",
                description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
                imageUrl: "url(/assets/services/cyber-offences.jpg)",
                crimes: [
                    "Child pornography",
                    "Child grooming",
                    "Espionage",
                    "Copyright Infringement",
                    "Financial Theft"
                ]
            }, {
                path: "regulatory-offences",
                title: "Regulatory Offences",
                description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
                imageUrl: "url(/assets/services/regulatory-offences.jpg)",
                crimes: [
                    "Health and safety offences",
                    "Food hygiene offences",
                    "Trading Standards offences",
                    "Licensing offences",
                    "Environment offences"
                ]
            }, {
                path: "motoring-offences",
                title: "Motoring Offences",
                description: "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
                imageUrl: "url(/assets/services/motoring-offences.jpg)",
                crimes: [
                    "Driving while under the influence of drink/drugs",
                    "Speeding",
                    "Driving without a license",
                    "Driving without insurance",
                    "Driving whilst disqualified"
                ]
            }
        ];
    };
    ServicesComponent.prototype.showLayer = function (value) {
        this.selectedRow = value;
    };
    ServicesComponent.prototype.hideLayer = function (value) {
        // do something
    };
    ServicesComponent.prototype.goToServicesDetail = function (_path, _title, _description, _imageUrl, _crimes) {
        // pass data to shared storage
        this._dataStorageService.setService(_path, _title, _description, _imageUrl, _crimes);
        // navigate to services detail.
        this._router.navigate(['/services', _path]);
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'services',
        template: __webpack_require__(286),
        styles: [__webpack_require__(274)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]) === "function" && _b || Object])
], ServicesComponent);

var _a, _b;
//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data_storage__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_detail_services_detail_component__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/* -- shared -- */

// shared services

// components

var appRoutes = [
    { path: 'services/:name', component: __WEBPACK_IMPORTED_MODULE_4__services_detail_services_detail_component__["a" /* ServicesDetailComponent */] }
];
var ServicesModule = (function () {
    function ServicesModule() {
    }
    return ServicesModule;
}());
ServicesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* _SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__services_detail_services_detail_component__["a" /* ServicesDetailComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__services_detail_services_detail_component__["a" /* ServicesDetailComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__data_data_storage__["a" /* DataStorageService */]],
    })
], ServicesModule);

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_storage__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// shared data service

var TeamDetailComponent = (function () {
    function TeamDetailComponent(_dataStorageService) {
        this._dataStorageService = _dataStorageService;
    }
    TeamDetailComponent.prototype.ngOnInit = function () {
        // make sure we always arrive back at top of page.
        window.scrollTo(0, 0);
        // get appropriate data from shared data service
        this.teamMember = this._dataStorageService.getTeamMember();
        console.log(this.teamMember);
    };
    return TeamDetailComponent;
}());
TeamDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'team-detail',
        template: __webpack_require__(287),
        styles: [__webpack_require__(275)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_data_storage__["a" /* DataStorageService */]) === "function" && _a || Object])
], TeamDetailComponent);

var _a;
//# sourceMappingURL=team-detail.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_storage__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// routing

// service

var TeamComponent = (function () {
    function TeamComponent(_router, _dataStorageService) {
        this._router = _router;
        this._dataStorageService = _dataStorageService;
    }
    TeamComponent.prototype.ngOnInit = function () {
        // make sure we always arrive back at top of page.
        window.scrollTo(0, 0);
        // default to dai's profile on arrival.
        this.selectedItem = 0;
        // team data
        this.partner = [
            {
                path: 'David-Sedgewick',
                name: 'David Sedgewick',
                initials: 'DS',
                backgroundImageUrl: '/assets/team/rhod-profile.jpg',
                imageUrl: '/assets/team/rhod-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }, {
                path: 'Rhodri-Chudleigh',
                name: 'Rhodri Chudleigh',
                initials: 'RC',
                backgroundImageUrl: '/assets/team/rhod-profile.jpg',
                imageUrl: '/assets/team/rhod-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }, {
                path: 'Robert-Chudleigh',
                name: 'Robert Chudleigh',
                initials: 'RC',
                backgroundImageUrl: '/assets/team/rob-profile.jpg',
                imageUrl: '/assets/team/rob-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }, {
                path: 'James-McKenna',
                name: 'James McKenna',
                initials: 'JM',
                backgroundImageUrl: '/assets/team/james-profile.jpg',
                imageUrl: '/assets/team/james-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            },
        ];
        this.duty = [
            {
                path: 'A-Duty',
                name: 'A Duty',
                initials: 'AD',
                backgroundImageUrl: '/assets/team/rhod-profile.jpg',
                imageUrl: '/assets/team/rhod-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }, {
                path: 'Another-Duty',
                name: 'Another Duty',
                initials: 'AD',
                backgroundImageUrl: '/assets/team/rhod-profile.jpg',
                imageUrl: '/assets/team/rhod-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }
        ];
        this.admin = [
            {
                path: 'Deb-Admin',
                name: 'Deb Admin',
                initials: 'DA',
                backgroundImageUrl: '/assets/team/deb-profile.jpg',
                imageUrl: '/assets/team/deb-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }, {
                path: 'Jackie-Admin',
                name: 'Jackie Admin',
                initials: 'JA',
                backgroundImageUrl: '/assets/team/jackie-profile.jpg',
                imageUrl: '/assets/team/jackie-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }, {
                path: 'Mary-Admin',
                name: 'Mary Admin',
                initials: 'MA',
                backgroundImageUrl: '/assets/team/mary-profile.jpg',
                imageUrl: '/assets/team/mary-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }, {
                path: 'Phil-Admin',
                name: 'Phil Admin',
                initials: 'PA',
                backgroundImageUrl: '/assets/team/phil-profile.jpg',
                imageUrl: '/assets/team/phil-profile.jpg',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam.',
                fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique eget augue eget gravida. Etiam eget imperdiet massa. Aliquam nisi eros, molestie a vulputate quis, tempor nec quam. Ut at libero in sem pellentesque imperdiet. Praesentpretium, sapien vel mollis porttitor, felis magna vehicula metus, ac dignissim odio tortor nec quam. Nam molestie, arcu id maximus lacinia, ante ipsum posuere mauris, ac maximus massa felis quis quam. Curabitur malesuada placerat nunc, id dapibus justo tempor in. Ut molestie arcu justo, id volutpat eros vestibulum eget. Fusce tincidunt leo in est venenatis porta.',
                emailAddress: 'example@example.com',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }
        ];
    };
    TeamComponent.prototype.onTeamHover = function () {
        this.isOnTeamHover = true;
    };
    TeamComponent.prototype.offTeamHover = function () {
        this.isOnTeamHover = false;
    };
    TeamComponent.prototype.itemHover = function (value) {
        this.selectedItem = value;
    };
    TeamComponent.prototype.goToTeamDetail = function (_urlPath, _name, _initials, _imageUrl, _shortDescription, _fullDescription, _emailAddress, _phoneNumberString, _phoneNumber) {
        // navigate to team detail.
        this._router.navigate(['/team', _urlPath]);
        // pass data to shared storage
        this._dataStorageService.setTeamMember(_urlPath, _name, _initials, _imageUrl, _shortDescription, _fullDescription, _emailAddress, _phoneNumberString, _phoneNumber);
    };
    TeamComponent.prototype.userClicked = function () {
        console.log('Team member clicked');
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'team',
        template: __webpack_require__(288),
        styles: [__webpack_require__(276)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]) === "function" && _b || Object])
], TeamComponent);

var _a, _b;
//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_detail_team_detail_component__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/* -- shared -- */

/* -- shared data service -- */

/* -- components -- */

var appRoutes = [
    { path: 'team/:name', component: __WEBPACK_IMPORTED_MODULE_4__team_detail_team_detail_component__["a" /* TeamDetailComponent */] }
];
var TeamModule = (function () {
    function TeamModule() {
    }
    return TeamModule;
}());
TeamModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* _SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__team_detail_team_detail_component__["a" /* TeamDetailComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__team_detail_team_detail_component__["a" /* TeamDetailComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__data_data_storage__["a" /* DataStorageService */]],
    })
], TeamModule);

//# sourceMappingURL=team.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_storage__ = __webpack_require__(148);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleMapsComponent = (function () {
    function GoogleMapsComponent(_router, _sharedDataService) {
        this._router = _router;
        this._sharedDataService = _sharedDataService;
        this.lat = 51.507914;
        this.lng = -3.577515;
        this.offices = [];
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
        this.offices = this._sharedDataService.getOfficeLocations();
    };
    GoogleMapsComponent.prototype.navigateToFindUs = function (location) {
        this._router.navigate(['/find-us', location.toLowerCase()]);
    };
    return GoogleMapsComponent;
}());
GoogleMapsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'google-maps',
        template: __webpack_require__(289),
        styles: [__webpack_require__(277)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]) === "function" && _b || Object])
], GoogleMapsComponent);

var _a, _b;
//# sourceMappingURL=google-maps.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        // apply no-padding class to main when on the homepage
        this.contentPadding = true;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                if (event.url === '/') {
                    _this.contentPadding = false;
                }
                else {
                    _this.contentPadding = true;
                }
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'body',
        template: __webpack_require__(290),
        styles: [__webpack_require__(278)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_layout_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pages_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_services_services_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_team_team_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__404_not_found_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home_component__ = __webpack_require__(147);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// angular modules





// 3rd party

/* -- shared & layout -- */





// app components



// import { enableProdMode } from '@angular/core';
// enableProdMode();
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__pages_home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_12__404_not_found_component__["a" /* NotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            // angular
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            // core, shared & layout
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* _SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7__layout_layout_module__["a" /* LayoutModule */],
            // pages modules
            __WEBPACK_IMPORTED_MODULE_8__pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_9__pages_services_services_module__["a" /* ServicesModule */],
            __WEBPACK_IMPORTED_MODULE_10__pages_team_team_module__["a" /* TeamModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__404_not_found_component__["a" /* NotFoundComponent */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.footer-contact {\n  width: 100%;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 0; }\n  .footer-contact--button {\n    width: 100%;\n    height: 100%;\n    background-color: #3e7ee6;\n    border: none;\n    font-family: \"Helvetica Neue\";\n    font-weight: 200;\n    font-size: 20px;\n    color: white;\n    text-decoration: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .footer-contact--button:hover {\n      background-color: #1B5DD1;\n      cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.footer {\n  min-width: 100%; }\n  .footer--main {\n    height: 60px;\n    background-color: #002E52;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .footer--main--icon {\n      height: 50px;\n      margin: 0px 10px; }\n      .footer--main--icon--social {\n        list-style: none;\n        height: 40px;\n        padding: 0; }\n        .footer--main--icon--social .facebook,\n        .footer--main--icon--social .linkedin {\n          display: inline-block;\n          border: 2px solid white;\n          border-radius: 50%;\n          margin-right: 5px; }\n          .footer--main--icon--social .facebook--logo,\n          .footer--main--icon--social .linkedin--logo {\n            width: 20px;\n            height: 20px;\n            padding: 6px 8px; }\n      .footer--main--icon__scm {\n        cursor: pointer; }\n  .footer--info {\n    height: 140px;\n    background-color: #F1F1F1; }\n    .footer--info--list {\n      margin: 0 10px;\n      padding: 0;\n      background-color: #F1F1F1;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      list-style: none;\n      padding: 10px 0; }\n      .footer--info--list--item {\n        text-align: center;\n        padding: 4px 0;\n        font-family: \"Helvetica Neue\";\n        font-weight: 200;\n        font-size: 14px;\n        color: #888888; }\n        .footer--info--list--item:first-child {\n          padding-top: 0px; }\n        .footer--info--list--item:last-child {\n          padding-bottom: 0px; }\n\n@media screen and (max-width: 608px) {\n  .footer--info--list--item {\n    font-size: 12px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.header-contact {\n  z-index: 100;\n  width: 100%;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .header-contact--phone {\n    width: 70%;\n    height: 100%;\n    background-color: #888888; }\n    .header-contact--phone ul {\n      list-style: none;\n      height: 100%;\n      margin: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .header-contact--phone ul li {\n        padding: 0;\n        margin: 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-right: 30px;\n        color: white;\n        font-family: \"Helvetica Neue\";\n        font-weight: 200;\n        font-size: 18px; }\n        .header-contact--phone ul li:last-child {\n          margin-right: 0; }\n          .header-contact--phone ul li:last-child:hover {\n            color: #3d3d3d;\n            font-weight: bold;\n            cursor: pointer; }\n        .header-contact--phone ul li a {\n          text-decoration: none;\n          color: white; }\n        .header-contact--phone ul li:first-child:hover {\n          color: #3d3d3d;\n          font-weight: bold;\n          cursor: pointer; }\n        .header-contact--phone ul li span {\n          margin-right: 6px; }\n  .header-contact--button {\n    width: 30%;\n    height: 100%;\n    background-color: #3e7ee6;\n    border: none;\n    font-family: \"Helvetica Neue\";\n    font-weight: 200;\n    font-size: 20px;\n    color: white;\n    text-decoration: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .header-contact--button:hover {\n      background-color: #1B5DD1;\n      cursor: pointer; }\n\n@media screen and (max-width: 608px) {\n  .header-contact {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column; }\n    .header-contact--phone {\n      width: 100%;\n      text-align: center; }\n      .header-contact--phone ul {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n        padding: 0; }\n        .header-contact--phone ul a {\n          color: white;\n          text-decoration: none; }\n    .header-contact--button {\n      width: 100%;\n      height: 20vh;\n      padding-top: 25px;\n      padding-bottom: 25px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.header {\n  z-index: 12;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 80px;\n  background-color: #002E52;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .header--link--option {\n    color: white;\n    text-transform: uppercase;\n    background: none;\n    border: none;\n    font-size: 18px;\n    font-family: \"Helvetica Neue\";\n    font-weight: 200;\n    height: 100%;\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n    .header--link--option:hover {\n      cursor: pointer; }\n    .header--link--option:active, .header--link--option:focus {\n      outline: none; }\n  .header--link--logo {\n    height: 60px; }\n    .header--link--logo:hover {\n      cursor: pointer; }\n\nheader-contact {\n  z-index: 12;\n  position: fixed;\n  top: 80px;\n  width: 100%; }\n\n@media screen and (max-width: 786px) {\n  .header--link--option {\n    font-size: 14px; } }\n\n@media screen and (max-width: 608px) {\n  .header--link--logo {\n    height: 48px; }\n  .header--link--option {\n    font-size: 12px; } }\n\n.option--selected {\n  border-bottom: 3px solid #3e7ee6; }\n  .option--selected:last-of-type {\n    border-color: #888888; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.find-us {\n  margin-top: 130px;\n  width: 100%;\n  height: 1440px; }\n  .find-us--location {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .find-us--location--reverse {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: reverse;\n          -ms-flex-direction: row-reverse;\n              flex-direction: row-reverse; }\n  .find-us--map {\n    height: 480px;\n    width: 50%;\n    background-position: center;\n    background-size: cover; }\n  .find-us--details {\n    height: 480px;\n    width: 50%;\n    background-color: #002E52;\n    font-family: \"Helvetica Neue\";\n    color: white;\n    font-weight: 100; }\n    .find-us--details h1 {\n      text-align: center;\n      font-weight: 100; }\n    .find-us--details hr {\n      background: #3e7ee6;\n      height: 1px;\n      width: 60%;\n      border: none; }\n  .find-us--phone {\n    padding-top: 5vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .find-us--phone a {\n      text-decoration: none;\n      color: white; }\n      .find-us--phone a:hover {\n        font-weight: bold;\n        cursor: pointer; }\n  .find-us--locationdetails {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n  .find-us--opening {\n    text-align: center; }\n    .find-us--opening h2 {\n      font-size: 25px;\n      font-weight: 150; }\n    .find-us--opening p {\n      font-size: 19px; }\n  .find-us--address {\n    text-align: center;\n    font-size: 20px; }\n    .find-us--address h2 {\n      font-size: 25px; }\n    .find-us--address p {\n      font-size: 19px; }\n\n@media screen and (max-width: 829px) {\n  .find-us--details {\n    width: 100%;\n    border-bottom: 1px solid #3e7ee6;\n    font-weight: 400; }\n    .find-us--details h1 {\n      font-weight: 400; }\n    .find-us--details hr {\n      background: white;\n      width: 40%; }\n  .find-us--map {\n    display: none; } }\n\n@media screen and (max-width: 608px) {\n  .find-us {\n    margin-top: 180px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.home {\n  margin-top: 130px;\n  width: 100%;\n  height: 1440px;\n  background-color: #888888; }\n\n.home-jumbotron {\n  background: url(\"http://offices-maputo.com/wp-content/uploads/2013/08/confrooms.jpg\") no-repeat center;\n  background-size: cover;\n  height: 480px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-family: \"Helvetica Neue\";\n  font-weight: 200; }\n  .home-jumbotron--head {\n    text-align: center;\n    margin-top: 100px; }\n    .home-jumbotron--head h1 {\n      font-size: 50px;\n      color: white;\n      font-weight: 200; }\n    .home-jumbotron--head h2 {\n      font-size: 30px;\n      color: white;\n      font-weight: 100; }\n  .home-jumbotron .underline {\n    width: 50%;\n    height: 1px;\n    background: #3e7ee6;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    margin-left: 25%;\n    margin-bottom: 8vh; }\n  .home-jumbotron--button {\n    text-align: center;\n    border: 1px solid #3e7ee6;\n    font-size: 20px;\n    padding: 15px;\n    border-radius: 10px;\n    width: 200px;\n    color: white;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    background: none; }\n    .home-jumbotron--button:hover {\n      border: 1px solid white;\n      cursor: pointer; }\n\n.layer {\n  background-color: rgba(0, 46, 82, 0.7);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.layer--grey {\n  background-color: rgba(0, 0, 0, 0.6);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.whoweare {\n  color: #888888;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  .whoweare--text {\n    font-family: \"Helvetica Neue\";\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: center;\n    width: 45%;\n    background-color: white;\n    padding: 0 2.5% 0 2.5%;\n    height: 480px; }\n    .whoweare--text h1 {\n      margin-top: 50px;\n      font-weight: 100;\n      font-size: 36px; }\n    .whoweare--text hr {\n      width: 50%;\n      height: 1px;\n      background: #3e7ee6;\n      border: none; }\n    .whoweare--text p {\n      font-size: 20px;\n      padding: 0 20px;\n      font-weight: 100;\n      font-size: 17px;\n      margin-top: 40px; }\n    .whoweare--text button {\n      margin-top: 20px;\n      border: 1px solid #888888;\n      font-size: 20px;\n      padding: 15px;\n      border-radius: 10px;\n      width: 200px;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      color: #3e7ee6;\n      background: none; }\n      .whoweare--text button:hover {\n        border-color: #3e7ee6;\n        cursor: pointer; }\n  .whoweare--image {\n    background: url(\"http://offices-maputo.com/wp-content/uploads/2013/08/confrooms.jpg\") no-repeat center;\n    background-size: cover;\n    height: 480px;\n    width: 50%; }\n\n.wheretofind {\n  height: 480px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  .wheretofind--map {\n    width: 50%;\n    height: 100%;\n    z-index: 5;\n    position: relative; }\n  .wheretofind--text {\n    width: 50%;\n    font-family: \"Helvetica Neue\";\n    color: white;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-item-align: center;\n        align-self: center;\n    float: right;\n    background-color: #626262;\n    height: 100%; }\n    .wheretofind--text h1 {\n      font-weight: 100;\n      font-size: 36px;\n      text-align: center;\n      margin-top: 40px; }\n    .wheretofind--text p {\n      font-weight: 100;\n      margin: 5%;\n      text-align: center;\n      margin-top: 10%;\n      margin-bottom: 10%; }\n    .wheretofind--text h2 {\n      text-align: center;\n      font-size: 18px;\n      font-family: \"Helvetica Neue\";\n      font-weight: 100; }\n    .wheretofind--text hr {\n      width: 30%;\n      height: 1px;\n      background: #3e7ee6;\n      border: none; }\n  .wheretofind--buttons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    margin: 5%; }\n  .wheretofind button {\n    margin-top: 40px;\n    border: 1px solid white;\n    font-size: 20px;\n    padding: 10px;\n    border-radius: 10px;\n    width: 26%;\n    color: white;\n    background: none; }\n    .wheretofind button:hover {\n      border: 2px solid white;\n      cursor: pointer; }\n\n@media screen and (max-width: 827px) {\n  .whoweare--text {\n    width: 100%;\n    background: url(\"http://offices-maputo.com/wp-content/uploads/2013/08/confrooms.jpg\") no-repeat center;\n    background-size: cover;\n    color: white;\n    padding: 0; }\n  .whoweare button {\n    font-size: 15px;\n    margin-top: 30px; }\n  .whoweare--image {\n    display: none; }\n  .whoweare--layer__grey {\n    background-color: rgba(0, 0, 0, 0.6);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .layer--grey {\n    background-color: rgba(0, 0, 0, 0.6);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2; }\n  .wheretofind--text {\n    width: 100%;\n    background: url(\"/assets/GoogleMap-image.png\") no-repeat center;\n    background-size: cover;\n    color: white;\n    padding: 0; }\n  .wheretofind--buttons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .wheretofind button {\n    font-size: 15px; }\n  .wheretofind--map {\n    display: none; }\n  .wheretofind--layer__grey {\n    background-color: rgba(0, 0, 0, 0.8);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; } }\n\n@media screen and (max-width: 608px) {\n  .home-jumbotron--head {\n    margin: 134px 20px 0; }\n    .home-jumbotron--head h2 {\n      font-size: 25px;\n      color: white;\n      font-weight: 100; }\n  .home-jumbotron--button {\n    font-size: 15px;\n    padding: 10px;\n    display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.service-detail {\n  margin-top: 130px; }\n  .service-detail--title {\n    width: 100%;\n    height: 200px;\n    background-position: center;\n    background-size: cover; }\n  .service-detail--content h2 {\n    font-family: \"Helvetica Neue\";\n    background-color: #002E52;\n    color: #F1F1F1;\n    text-align: center;\n    font-size: 28px;\n    padding: 10px;\n    margin: 0; }\n  .service-detail--content p {\n    padding: 10px 40px;\n    font-family: \"Helvetica Neue\";\n    text-align: center;\n    color: #888888;\n    font-weight: 200; }\n    .service-detail--content p:last-of-type {\n      color: black;\n      font-size: 12px;\n      font-weight: 400;\n      padding-top: 16px; }\n  .service-detail--content hr {\n    width: 140px;\n    height: 2px;\n    border: none;\n    color: #002E52;\n    background-color: #1B5DD1; }\n  .service-detail--content__crime-list {\n    list-style: none; }\n    .service-detail--content__crime-list li {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      font-family: \"Helvetica Neue\";\n      font-size: 20px;\n      color: #002E52;\n      padding: 4px 0; }\n      .service-detail--content__crime-list li img {\n        width: 24px;\n        height: 24px;\n        margin-right: 20px; }\n\n@media screen and (max-width: 608px) {\n  .service-detail {\n    margin-top: 180px; }\n    .service-detail--title h2 {\n      margin-top: 40px; }\n    .service-detail li {\n      font-size: 15px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.services {\n  margin-top: 130px;\n  width: 100%;\n  height: 100%;\n  background-color: #002E52; }\n  .services--intro {\n    padding-bottom: 20px;\n    background-color: #F1F1F1;\n    font-family: \"Helvetica Neue\";\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .services--intro__title {\n      color: #002E52;\n      font-size: 36px; }\n    .services--intro__hr {\n      width: 140px;\n      height: 2px;\n      border: none;\n      background-color: #3e7ee6; }\n    .services--intro__description {\n      color: #888888;\n      padding: 0 40px;\n      text-align: center;\n      font-weight: 200; }\n    .services--intro .regular {\n      font-weight: 400;\n      padding: 0 25%; }\n  .services--item {\n    height: 140px;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover; }\n    .services--item .layer {\n      background-color: rgba(0, 46, 82, 0.7);\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      transition: background-color 0.6s; }\n      .services--item .layer--clear {\n        background: none;\n        transition: background 0.6s; }\n    .services--item--content {\n      width: 100%;\n      height: 100%;\n      margin: 0px;\n      padding: 0;\n      list-style: none; }\n      .services--item--content li {\n        height: 100%;\n        padding: 0 30px;\n        cursor: pointer;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n      .services--item--content .title {\n        color: white;\n        font-size: 22px;\n        font-family: \"Helvetica Neue\";\n        transition: font-size 0.6s; }\n        .services--item--content .title--hover {\n          font-size: 26px;\n          transition: font-size 0.6s; }\n\n@media screen and (max-width: 608px) {\n  .services {\n    margin-top: 170px; }\n    .services--item--content li {\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    .services--item--content .title {\n      font-size: 18px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.team-detail {\n  width: 100%;\n  height: 600px;\n  margin-top: 130px;\n  background-color: lightgray;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .team-detail__content-box {\n    width: 25%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    .team-detail__content-box--info {\n      width: 100%;\n      height: 60%;\n      background-position: center center;\n      background-size: cover;\n      background-repeat: no-repeat;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .team-detail__content-box--contact {\n      width: 100%;\n      height: 40%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background-color: #888888; }\n      .team-detail__content-box--contact a {\n        margin: 10px 4px;\n        width: 90%;\n        line-height: 40px;\n        text-decoration: none;\n        font-size: 16px;\n        text-align: center;\n        font-family: \"Helvetica Neue\";\n        color: #F1F1F1;\n        background-color: #3d3d3d;\n        border-radius: 10px;\n        border: none; }\n        .team-detail__content-box--contact a:hover {\n          background-color: #002E52; }\n        .team-detail__content-box--contact a:first-of-type {\n          margin-top: 24px; }\n  .team-detail__info-box {\n    width: 75%;\n    height: 100%;\n    background-color: #F1F1F1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-family: \"Helvetica Neue\"; }\n    .team-detail__info-box--border {\n      height: 94%;\n      width: 94%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      .team-detail__info-box--border img {\n        display: none; }\n      .team-detail__info-box--border h1,\n      .team-detail__info-box--border h4,\n      .team-detail__info-box--border hr,\n      .team-detail__info-box--border p {\n        margin: 0;\n        padding: 0; }\n      .team-detail__info-box--border h1 {\n        margin-top: 50px;\n        margin-left: 30px;\n        margin-bottom: 8px;\n        color: #3e7ee6; }\n      .team-detail__info-box--border h4 {\n        margin-left: 30px;\n        margin-bottom: 20px; }\n      .team-detail__info-box--border hr {\n        width: 100px;\n        margin-left: 30px;\n        border-color: #888888;\n        background-color: #888888; }\n      .team-detail__info-box--border p {\n        padding: 30px;\n        font-weight: 200; }\n      .team-detail__info-box--border a {\n        display: none; }\n\n@media screen and (max-width: 848px) {\n  .team-detail {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%; }\n    .team-detail__content-box {\n      display: none; }\n    .team-detail__info-box {\n      width: 100%; }\n      .team-detail__info-box--border {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .team-detail__info-box--border img {\n          display: block;\n          height: 140px;\n          width: 140px;\n          margin-top: 50px;\n          border-radius: 50%;\n          border: 4px solid #002E52; }\n        .team-detail__info-box--border h1 {\n          margin: 30px 0 0 0; }\n        .team-detail__info-box--border h4 {\n          margin: 4px 0 0 0; }\n        .team-detail__info-box--border hr {\n          margin: 24px 0 0 0; }\n        .team-detail__info-box--border p {\n          margin: 24px 0;\n          padding: 0 30px;\n          font-size: 14px;\n          text-align: center; }\n        .team-detail__info-box--border .contact-button {\n          display: block;\n          padding: 0;\n          margin: 10px 4px;\n          width: 90%;\n          line-height: 60px;\n          text-decoration: none;\n          text-align: center;\n          font-size: 16px;\n          font-family: \"Helvetica Neue\";\n          color: #F1F1F1;\n          background-color: #3d3d3d;\n          border-radius: 10px;\n          border: none; }\n          .team-detail__info-box--border .contact-button:hover {\n            background-color: #002E52; }\n          .team-detail__info-box--border .contact-button:last-of-type {\n            margin-bottom: 24px; } }\n\n@media screen and (max-width: 848px) {\n  /*    .team-detail {\n        img {\n            margin-top: 50px;\n            display: block;\n        }\n    }*/ }\n\n@media screen and (max-width: 608px) {\n  .team-detail {\n    margin-top: 170px; }\n    .team-detail .contact-button {\n      line-height: 40px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\nhr {\n  max-width: 400px; }\n\n.team {\n  width: 100%;\n  margin-top: 130px;\n  background-color: #F1F1F1; }\n  .team__intro {\n    padding: 20px 40px; }\n    .team__intro h1 {\n      font-family: \"Helvetica Neue\";\n      color: #3d3d3d;\n      text-align: center;\n      font-size: 40px; }\n    .team__intro hr {\n      margin-bottom: 40px; }\n    .team__intro p {\n      font-family: \"Helvetica Neue\";\n      color: #888888;\n      text-align: center;\n      font-size: 18px; }\n  .team__partners {\n    padding-top: 70px; }\n    .team__partners__title {\n      padding: 0 0;\n      font-size: 32px;\n      font-family: \"Helvetica Neue\";\n      color: #3d3d3d;\n      text-align: center; }\n    .team__partners__list {\n      list-style: none;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      margin: 0 20px;\n      padding: 20px; }\n      .team__partners__list__item {\n        width: 23%;\n        height: 285px;\n        margin-right: 10px; }\n        .team__partners__list__item .profile {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-box-pack: end;\n              -ms-flex-pack: end;\n                  justify-content: flex-end;\n          background-position: center;\n          background-size: cover;\n          height: 100%; }\n          .team__partners__list__item .profile__name {\n            text-align: center;\n            color: #F1F1F1;\n            font-family: \"Helvetica Neue\";\n            background-color: none;\n            text-shadow: 2px 2px 4px black; }\n        .team__partners__list__item .partners:hover {\n          cursor: pointer; }\n\n@media screen and (max-width: 827px) {\n  .team__partners__list__item {\n    width: 40%;\n    height: 285px;\n    margin-bottom: 20px; } }\n\n@media screen and (max-width: 558px) {\n  .team__partners__list__item {\n    width: 75%;\n    height: 285px;\n    margin-bottom: 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.sebm-google-map-container {\n  height: 100%;\n  width: 100%; }\n\n.gm-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 260px;\n  font-family: \"Helvetica Neue\";\n  margin: 0;\n  padding: 0; }\n  .gm-content .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .gm-content .icon--text, .gm-content .icon--image {\n      height: 120px;\n      width: 50%;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center; }\n    .gm-content .icon--image img {\n      max-width: 100%;\n      max-height: 100%;\n      padding-top: 17px; }\n\n.icon--button {\n  width: 100%;\n  margin-top: 20px;\n  font-size: 15px;\n  border: none;\n  color: white;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  background: #3e7ee6;\n  height: 40px; }\n  .icon--button:hover {\n    background-color: #1B5DD1;\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-contact\">\n    <a class=\"footer-contact--button\" href=\"mailto:info@scmlaw.co.uk\">Contact Us\n        </a>\n</div>"

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__google_maps_google_maps_component__ = __webpack_require__(205);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// google maps

// modules
// components

var _SharedModule = (function () {
    function _SharedModule() {
    }
    return _SharedModule;
}());
_SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBe--3uk1M3mNAsxPgeHI_RjbfjEvcclFg'
            })
        ],
        exports: [
            // angular
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__google_maps_google_maps_component__["a" /* GoogleMapsComponent */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__google_maps_google_maps_component__["a" /* GoogleMapsComponent */]]
    })
], _SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <footer-contact></footer-contact>\n    <div class=\"footer--main\">\n        <ul class=\"footer--main--icon footer--main--icon--social\">\n            <li class=\"facebook\">\n                <a href=\"https://www.facebook.com/pg/Sedgwick-Chudleigh-McKenna-Solicitors-222487694772423/about/\" target=\"_blank\"><img class=\"facebook--logo\" src=\"/assets/footer-facebook-logo.png\" /></a>\n            </li>\n            <li class=\"linkedin\">\n                <a href=\"https://www.linkedin.com/company/sedgwick-chudleigh-mckenna-solicitors\" target=\"_blank\"><img class=\"linkedin--logo\" src=\"/assets/footer-linkedin-logo.png\" /></a>\n            </li>\n        </ul>\n        <img (click)=\"navigateToHome()\" class=\"footer--main--icon footer--main--icon__scm\" src=\"/assets/scm-logo--small.png\" />\n        <img class=\"footer--main--icon\" src=\"/assets/footer-lexcel-logo.png\" />\n    </div>\n    <div class=\"footer--info\">\n        <ul class=\"footer--info--list\">\n            <li class=\"footer--info--list--item\">This firm is regulated by the Solicitors Regulation Authority</li>\n            <li class=\"footer--info--list--item\">Company Registration Number: 6519150</li>\n            <li class=\"footer--info--list--item\">SRA Number: 485534</li>\n            <li class=\"footer--info--list--item\">VAT Registration Number: 811 2016 92</li>\n            <li class=\"footer--info--list--item\">Sedgwick Chudleigh McKenna Solicitors is the trading name of David Sedgwick Solicitors Limited</li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "<div class=\"header-contact\">\n    <div class=\"header-contact--phone\">\n        <ul>\n            <li>\n                <span style=\"font-weight: bold\">T :</span><a href=\"tel:01656767776\">01656 767776</a>\n            </li>\n            <li>\n                <span style=\"font-weight: bold\">24hr :</span><a href=\"tel:07917754134\">07917 754134</a>\n            </li>\n        </ul>\n    </div>\n    <a class=\"header-contact--button\" href=\"mailto:info@scmlaw.co.uk\">Contact Us</a>\n</div>"

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <button (click)=\"navigateToHome()\" class=\"header--link header--link--option\" [class.option--selected]=\"_router.url.length == 1\">Home</button>\n    <button (click)=\"navigateToServices()\" class=\"header--link header--link--option\" [class.option--selected]=\"_router.url.includes('services')\">Services</button>\n    <img (click)=\"navigateToHome()\" class=\"header--link header--link--logo\" src=\"/assets/scm-logo--small.png\" />\n    <button (click)=\"navigateToTeam()\" class=\"header--link header--link--option\" [class.option--selected]=\"_router.url.includes('team')\">Team</button>\n    <button (click)=\"navigateToFindUs()\" class=\"header--link header--link--option\" [class.option--selected]=\"_router.url == '/find-us'\">Find Us</button>\n</div>\n<header-contact></header-contact>"

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "<div class=\"find-us\" (window:resize)=\"onResize($event)\">\n    <div *ngFor=\"let office of offices, let i = index\" class=\"find-us--location\" [class.find-us--location--reverse]=\"i === 1\">\n        <div class=\"find-us--map\" [ngStyle]=\"{ 'background-image': office.imageUrl }\">\n        </div>\n        <div class=\"find-us--details\" [style.background-image]=\"canShowBackgroundImage ? office.imageUrl : ''\">\n            <h1>{{office.city}}</h1>\n            <hr />\n            <div class=\"find-us--locationdetails\">\n                <div class=\"find-us--address\">\n                    <h2>Our office</h2>\n                    <p>{{office.address1}}</p>\n                    <p>{{office.address2}}</p>\n                    <p>{{office.city}}</p>\n                    <p>{{office.postcode}}</p>\n                    <div class=\"find-us--phone\">\n                        <a href=\"tel:{{office.phone}}\"><span style=\"font-weight: bold\">T :</span> {{office.phonestring}}</a>\n                        <a href=\"tel:07917754134\"><span style=\"font-weight: bold\">24hr :</span> 07917 754134</a>\n                    </div>\n                </div>\n                <div class=\"find-us--opening\">\n                    <h2>Opening Hours</h2>\n                    <p><span style=\"font-weight:bold\">Mon:</span> {{office.openingHours.monday}}</p>\n                    <p><span style=\"font-weight:bold\">Tue:</span> {{office.openingHours.tuesday}}</p>\n                    <p><span style=\"font-weight:bold\">Wed:</span> {{office.openingHours.wednesday}}</p>\n                    <p><span style=\"font-weight:bold\">Thu:</span> {{office.openingHours.thursday}}</p>\n                    <p><span style=\"font-weight:bold\">Fri:</span> {{office.openingHours.friday}}</p>\n                    <p><span style=\"font-weight:bold\">Sat:</span> {{office.openingHours.saturday}}</p>\n                    <p><span style=\"font-weight:bold\">Sun:</span> {{office.openingHours.sunday}}</p>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n\n    <!---Jumbotron-->\n    <div class=\"home-jumbotron\">\n        <div class=\"layer\">\n            <div class=\"home-jumbotron--head\">\n                <h1>SCM Solicitors</h1>\n                <h2>When it comes to the law, you couldn’t be in safer hands.\n                </h2>\n            </div>\n            <div class=\"underline\"></div>\n            <button (click)=\"navigateToServices()\" class=\"home-jumbotron--button\">\n                What We Do\n            </button>\n        </div>\n    </div>\n\n    <!---Who we are-->\n    <div class=\"whoweare\">\n        <div class=\"whoweare--text\">\n            <div class=\"whoweare--layer__grey\">\n                <h1>Who We Are</h1>\n                <hr />\n                <p>SCM solicitors were formed in January 2015 with the merger of Bridgend Firms <strong>David Sedgwick Solicitors</strong> and <strong>Chudleigh Solicitors</strong>. The merger brought together 2 specialist Criminal practices to become one\n                    of South Wales leading Criminal Law Firms. We are a specialist Criminal Practice which services clients across the length of South Wales. Our experienced tam of Solicitors offers our clients a tailored service to their individual needs.</p>\n                <button (click)=\"navigateToTeam()\">\n        Meet the team\n    </button>\n            </div>\n        </div>\n        <div class=\"whoweare--image\">\n            <div class=\"layer--grey\"></div>\n        </div>\n    </div>\n\n    <!---Where to find us-->\n    <div class=\"wheretofind\">\n        <div class=\"wheretofind--map\">\n            <google-maps></google-maps>\n        </div>\n        <div class=\"wheretofind--text\">\n            <div class=\"wheretofind--layer__grey\">\n                <h1>Where To Find Us</h1>\n                <hr />\n                <p>Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale</p>\n                <hr />\n                <h2>Click your preferred office below:</h2>\n                <div class=\"wheretofind--buttons\">\n                    <button (click)=\"navigateToFindUs('swansea')\">Swansea</button>\n                    <button (click)=\"navigateToFindUs('bridgend')\">Bridgend</button>\n                    <button (click)=\"navigateToFindUs('cardiff')\">Cardiff</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = "<div class=\"service-detail\">\n    <div class=\"service-detail--title\" [ngStyle]=\"{ 'background-image': service.imageUrl }\">\n    </div>\n    <div class=\"service-detail--content\">\n        <h2>{{ service.title }}</h2>\n        <p>{{ service.description }}</p>\n        <hr />\n        <ul class=\"service-detail--content__crime-list\">\n            <li *ngFor=\"let crime of service.crimes\">\n                <img src=\"/assets/services/list-arrow--icon.png\" alt=\"list-item-arrow\" /> {{ crime }}\n            </li>\n        </ul>\n        <hr />\n        <p>If you would like to discuss anything with us, please feel free to get in touch via our phone or email. Alternatively, specific contact information for each of our solicitors is available within the 'team' section of our website.</p>\n    </div>\n</div>"

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = "<div class=\"services\">\n    <div class=\"services--intro\">\n        <h1 class=\"services--intro__title\">Services</h1>\n        <hr class=\"services--intro__hr\" />\n        <p class=\"services--intro__description\">SCM prides itself on being able to offer a 24-hour service 365 days of the year offering immediate expert legal advice and representation. The firm has a contract with the Legal Aid Agency enabling us to offer free and independent legal advice\n            at the police station, and representation through to the Magistrates Court and Crown Court depending on your income. The firm also represents high net worth individuals throughout all stages of the criminal justice process.</p>\n        <br />\n        <p class=\"services--intro__description regular\">The firm delivers highly specialised services throughout the spectrum of the Criminal Justice System including :-</p>\n    </div>\n    <div *ngFor=\"let service of services; let i = index;\" [ngStyle]=\"{ 'background-image': service.imageUrl }\" class=\"services--item\">\n        <div (mouseenter)=\"showLayer(i)\" (mouseleave)=\"hideLayer(i)\" class=\"layer\" [class.layer--clear]=\"i == selectedRow\">\n            <!--<p class=\"\">{{ service.title }}</p>-->\n            <ul class=\"services--item--content\">\n                <li (click)=\"goToServicesDetail(service.path, service.title, service.description, service.imageUrl, service.crimes)\" class=\"title\" [class.title--hover]=\"i == selectedRow\">{{ service.title }}</li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = "<div class=\"team-detail\">\n    <div class=\"team-detail__content-box\">\n        <div class=\"team-detail__content-box--info\" [ngStyle]=\"{ 'background-image': teamMember.backgroundImageUrl }\">\n        </div>\n        <div class=\"team-detail__content-box--contact\">\n            <a [href]=\"'tel:' + teamMember.phoneNumber\"><strong>Call </strong>{{ teamMember.phoneNumberString }}</a>\n            <a [href]=\"'mailto:' + teamMember.emailAddress\"><strong>Email </strong>{{ teamMember.emailAddress }}</a>\n        </div>\n    </div>\n    <div class=\"team-detail__info-box\">\n        <div class=\"team-detail__info-box--border\">\n            <img [src]=\"teamMember.imageUrl\" alt=\"teamMember.name\" />\n            <h1>{{ teamMember.name }}</h1>\n            <h4>Accreditations - TBC</h4>\n            <hr />\n            <p>{{ teamMember.fullDescription }}</p>\n            <a [href]=\"'tel:' + teamMember.phoneNumber\" class=\"contact-button\"><strong>Call </strong>{{ teamMember.phoneNumberString }}</a>\n            <a [href]=\"'mailto:' + teamMember.emailAddress\" class=\"contact-button\"><strong>Email </strong>{{ teamMember.emailAddress }}</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

module.exports = "<div class=\"team\">\n    <div class=\"team__intro\">\n        <h1>Meet Our Team</h1>\n        <hr />\n        <p>SCM prides itself on being able to offer a 24-hour service 365 days of the year offering immediate expert legal advice and representation. The firm has a contract with the Legal Aid Agency enabling us to offer free and independent legal advice\n            at the police station, and representation through to the Magistrates Court and Crown Court depending on your income. The firm also represents high net worth individuals throughout all stages of the criminal justice process.\n        </p>\n    </div>\n    <div class=\"team__partners\">\n        <h2 class=\"team__partners__title\">Partners</h2>\n          <hr />\n        <ul class=\"team__partners__list\">\n            <li *ngFor=\"let person of partner\" class=\"team__partners__list__item\">\n                <div class=\"profile partners\" [ngStyle]=\"{'background-image': 'url(' + person.imageUrl + ')'}\" (click)=\"goToTeamDetail(person.path, person.name, person.initials, person.imageUrl, person.shortDescription, person.fullDescription, person.emailAddress, person.phoneNumberString, person.phoneNumber)\">\n                    <h2 class=\"profile__name\">{{ person.name }}</h2>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <div class=\"team__partners\">\n        <h2 class=\"team__partners__title\">Duty Solicitors</h2>\n        <hr />\n        <ul class=\"team__partners__list\">\n            <li *ngFor=\"let person of duty\" class=\"team__partners__list__item\">\n                <div class=\"profile\" [ngStyle]=\"{'background-image': 'url(' + person.imageUrl + ')'}\">\n                    <h2 class=\"profile__name\">{{ person.name }}</h2>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <div class=\"team__partners\">\n        <h2 class=\"team__partners__title\">Administration</h2>\n        <hr />\n        <ul class=\"team__partners__list\">\n            <li *ngFor=\"let person of admin\" class=\"team__partners__list__item\">\n                <div class=\"profile\" [ngStyle]=\"{'background-image': 'url(' + person.imageUrl + ')'}\">\n                    <h2 class=\"profile__name\">{{ person.name }}</h2>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

module.exports = "<sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [scrollwheel]=\"false\">\n    <sebm-google-map-marker *ngFor=\"let office of offices\" [latitude]=\"office.latitude\" [longitude]=\"office.longitude\" [iconUrl]=\"'assets/gm-pin--blue.png'\">\n        <sebm-google-map-info-window [disableAutoPan]=\"true\">\n            <div class=\"gm-content\">\n                <div class=\"icon\">\n                    <div class=\"icon--text\">\n                        <p>{{ office.address1 }}</p>\n                        <p>{{ office.address2 }}</p>\n                        <p>{{ office.city }}</p>\n                        <p>{{ office.postcode }}</p>\n                    </div>\n                    <div class=\"icon--image\">\n                        <img src=\"http://www.newyorker.com/wp-content/uploads/2014/12/KONNIKOVA-Open-Office-1200.jpg\" />\n                    </div>\n                </div>\n                <div class=\"gm-content--button\">\n                    <button class=\"icon--button\" (click)=\"navigateToFindUs(office.city)\">More Info</button>\n                </div>\n            </div>\n        </sebm-google-map-info-window>\n    </sebm-google-map-marker>\n</sebm-google-map>"

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

module.exports = "<div>\n    <header></header>\n    <main>\n        <router-outlet>\n        </router-outlet>\n    </main>\n    <footer></footer>\n</div>"

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(181);


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataStorageService = (function () {
    function DataStorageService() {
        this.service = {
            path: null,
            title: null,
            description: null,
            imageUrl: null,
            crimes: []
        };
    }
    DataStorageService.prototype.setService = function (urlPath, title, description, imageUrl, crimes) {
        this.service = {
            path: urlPath,
            title: title,
            description: description,
            imageUrl: imageUrl,
            crimes: crimes
        };
    };
    DataStorageService.prototype.getService = function () {
        return this.service;
    };
    return DataStorageService;
}());
DataStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DataStorageService);

//# sourceMappingURL=data.storage.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataStorageService = (function () {
    function DataStorageService() {
        this.teamMember = {
            path: null,
            name: null,
            initials: null,
            backgroundImageUrl: null,
            imageUrl: null,
            shortDescription: null,
            fullDescription: null,
            emailAddress: null,
            phoneNumberString: null,
            phoneNumber: null
        };
    }
    DataStorageService.prototype.setTeamMember = function (urlPath, name, initials, imageUrl, shortDescription, fullDescription, emailAddress, phoneNumberString, phoneNumber) {
        this.teamMember = {
            path: urlPath,
            name: name,
            initials: initials,
            backgroundImageUrl: 'url(' + imageUrl + ')',
            imageUrl: imageUrl,
            shortDescription: shortDescription,
            fullDescription: fullDescription,
            emailAddress: emailAddress,
            phoneNumberString: phoneNumberString,
            phoneNumber: phoneNumber
        };
    };
    DataStorageService.prototype.getTeamMember = function () {
        return this.teamMember;
    };
    return DataStorageService;
}());
DataStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DataStorageService);

//# sourceMappingURL=data.storage.js.map

/***/ })

},[324]);
//# sourceMappingURL=main.bundle.js.map