webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/404/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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

/***/ "../../../../../src/app/_layout/footer/footer-contact/footer-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-contact\">\n    <a class=\"footer-contact--button\" href=\"mailto:info@scmlaw.co.uk\">Contact Us\n        </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/_layout/footer/footer-contact/footer-contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.footer-contact {\n  width: 100%;\n  height: 50px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  margin-bottom: 0; }\n  .footer-contact--button {\n    width: 100%;\n    height: 100%;\n    background-color: #3e7ee6;\n    border: none;\n    font-family: \"Helvetica Neue\";\n    font-weight: 400;\n    font-size: 20px;\n    color: white;\n    text-decoration: none;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center; }\n    .footer-contact--button:hover {\n      background-color: #1B5DD1;\n      cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/footer/footer-contact/footer-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        template: __webpack_require__("../../../../../src/app/_layout/footer/footer-contact/footer-contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_layout/footer/footer-contact/footer-contact.component.scss")]
    })
], FooterContactComponent);

//# sourceMappingURL=footer-contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/_layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <footer-contact></footer-contact>\n  <div class=\"footer--main\">\n    <ul class=\"footer--main--icon footer--main--icon--social\">\n      <li class=\"facebook\">\n        <a href=\"https://www.facebook.com/pg/Sedgwick-Chudleigh-McKenna-Solicitors-222487694772423/about/\"\n          target=\"_blank\"><img class=\"facebook--logo\" src=\"/assets/footer-facebook-logo.png\" /></a>\n      </li>\n      <li class=\"linkedin\">\n        <a href=\"https://www.linkedin.com/company/sedgwick-chudleigh-mckenna-solicitors\" target=\"_blank\"><img\n            class=\"linkedin--logo\" src=\"/assets/footer-linkedin-logo.png\" /></a>\n      </li>\n    </ul>\n    <img (click)=\"navigateToHome()\" class=\"footer--main--icon footer--main--icon__scm\"\n      src=\"/assets/scm-logo--small.png\" />\n    <img class=\"footer--main--icon\" src=\"/assets/footer-lexcel-logo.png\" />\n  </div>\n  <div class=\"footer--info\">\n    <ul class=\"footer--info--list\">\n      <li class=\"footer--info--list--item\">This firm is regulated by the Solicitors Regulation Authority</li>\n      <li class=\"footer--info--list--item\">Company Registration Number: 6519150</li>\n      <li class=\"footer--info--list--item\">SRA Number: 485534</li>\n      <li class=\"footer--info--list--item\">VAT Registration Number: 811 2016 92</li>\n      <li class=\"footer--info--list--item\">Sedgwick Chudleigh McKenna Solicitors is the trading name of David Sedgwick\n        Solicitors Limited</li>\n    </ul>\n  </div>\n  <div class=\"footer__bottom\">\n    <a class=\"link\" routerLink=\"/site-management-policy\">Site Management Policy</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/_layout/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.footer {\n  min-width: 100%; }\n  .footer--main {\n    height: 60px;\n    background-color: #002E52;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-align: center;\n        align-items: center; }\n    .footer--main--icon {\n      height: 50px;\n      margin: 0px 10px; }\n      .footer--main--icon--social {\n        list-style: none;\n        height: 40px;\n        padding: 0; }\n        .footer--main--icon--social .facebook,\n        .footer--main--icon--social .linkedin {\n          display: inline-block;\n          border: 2px solid white;\n          border-radius: 50%;\n          margin-right: 5px; }\n          .footer--main--icon--social .facebook--logo,\n          .footer--main--icon--social .linkedin--logo {\n            width: 20px;\n            height: 20px;\n            padding: 6px 8px; }\n      .footer--main--icon__scm {\n        cursor: pointer; }\n  .footer--info {\n    height: 140px;\n    background-color: #F1F1F1; }\n    .footer--info--list {\n      margin: 0;\n      padding: 0;\n      background-color: #F1F1F1;\n      height: 100%;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-align: center;\n          align-items: center;\n      list-style: none;\n      padding: 10px 0; }\n      .footer--info--list--item {\n        text-align: center;\n        padding: 4px 0;\n        font-family: \"Helvetica Neue\";\n        font-weight: 400;\n        font-size: 14px;\n        color: #888888; }\n        .footer--info--list--item:first-child {\n          padding-top: 0px; }\n        .footer--info--list--item:last-child {\n          padding-bottom: 0px; }\n  .footer__bottom {\n    padding: 18px 0;\n    background-color: #888888;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center; }\n    .footer__bottom .link {\n      text-decoration: none;\n      font-weight: 400;\n      font-size: 14px;\n      font-family: \"Helvetica Neue\";\n      color: #F1F1F1; }\n\n@media screen and (max-width: 608px) {\n  .footer {\n    bottom: 0px;\n    width: 100%;\n    background-color: #F1F1F1; }\n  .footer--info--list--item {\n    font-size: 12px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
        template: __webpack_require__("../../../../../src/app/_layout/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_layout/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/_layout/header/header-contact/header-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<div class=\"header-contact\">\n    <div class=\"header-contact--phone\">\n        <ul>\n            <li>\n                <span style=\"font-weight: bold\">T :</span><a href=\"tel:01656767776\">01656 767776</a>\n            </li>\n            <li>\n                <span style=\"font-weight: bold\">24hr :</span><a href=\"tel:07917754134\">07917 754134</a>\n            </li>\n        </ul>\n    </div>\n    <a class=\"header-contact--button\" href=\"mailto:info@scmlaw.co.uk\">Contact Us</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/_layout/header/header-contact/header-contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\nbody {\n  -webkit-text-size-adjust: none; }\n\n.header-contact {\n  z-index: 100;\n  width: 100%;\n  height: 50px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center; }\n  .header-contact--phone {\n    width: 70%;\n    height: 100%;\n    background-color: #888888; }\n    .header-contact--phone ul {\n      list-style: none;\n      height: 100%;\n      margin: 0;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-align: center;\n          align-items: center; }\n      .header-contact--phone ul li {\n        padding: 0;\n        margin: 0;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-align: center;\n            align-items: center;\n        margin-right: 30px;\n        color: white;\n        font-family: \"Helvetica Neue\";\n        font-weight: 400;\n        font-size: 18px; }\n        .header-contact--phone ul li:last-child {\n          margin-right: 0; }\n          .header-contact--phone ul li:last-child:hover {\n            color: #3d3d3d;\n            font-weight: bold;\n            cursor: pointer; }\n        .header-contact--phone ul li a {\n          text-decoration: none;\n          color: white; }\n        .header-contact--phone ul li:first-child:hover {\n          color: #3d3d3d;\n          font-weight: bold;\n          cursor: pointer; }\n        .header-contact--phone ul li span {\n          margin-right: 6px; }\n  .header-contact--button {\n    width: 30%;\n    height: 100%;\n    background-color: #3e7ee6;\n    border: none;\n    font-family: \"Helvetica Neue\";\n    font-weight: 400;\n    font-size: 20px;\n    color: white;\n    text-decoration: none;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -webkit-border-fit: border !important; }\n    .header-contact--button:hover {\n      background-color: #1B5DD1;\n      cursor: pointer; }\n\n@media screen and (max-width: 608px) {\n  .header-contact {\n    -ms-flex-flow: column;\n        flex-flow: column;\n    display: -ms-flexbox;\n    display: flex; }\n    .header-contact--phone {\n      width: 100%;\n      height: 60px;\n      text-align: center;\n      position: fixed; }\n      .header-contact--phone ul {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n        padding: 0; }\n        .header-contact--phone ul a {\n          color: white;\n          text-decoration: none; }\n    .header-contact--button {\n      width: 100%;\n      height: 20px;\n      margin-top: 60px;\n      padding-top: 20px;\n      padding-bottom: 20px;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n      position: fixed; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/header/header-contact/header-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        template: __webpack_require__("../../../../../src/app/_layout/header/header-contact/header-contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_layout/header/header-contact/header-contact.component.scss")]
    })
], HeaderContactComponent);

//# sourceMappingURL=header-contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/_layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<div class=\"header\">\n    <button (click)=\"navigateToHome()\" class=\"header--link header--link--option\" [class.option--selected]=\"_router.url.length == 1\">Home</button>\n    <button (click)=\"navigateToServices()\" class=\"header--link header--link--option\" [class.option--selected]=\"_router.url.includes('services')\">Services</button>\n    <img (click)=\"navigateToHome()\" class=\"header--link header--link--logo\" src=\"/assets/scm-logo--small.png\" />\n    <button (click)=\"navigateToTeam()\" class=\"header--link header--link--option\" [class.option--selected]=\"_router.url.includes('team')\">Team</button>\n    <button (click)=\"navigateToFindUs()\" class=\"header--link header--link--option\" [class.option--selected]=\"_router.url == '/find-us'\">Find Us</button>\n</div>\n<header-contact></header-contact>"

/***/ }),

/***/ "../../../../../src/app/_layout/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\nbody {\n  -webkit-text-size-adjust: none; }\n\n.header {\n  z-index: 12;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 80px;\n  background-color: #002E52;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-align: center;\n      align-items: center; }\n  .header--link--option {\n    color: white;\n    text-transform: uppercase;\n    background: none;\n    border: none;\n    font-size: 18px;\n    font-family: \"Helvetica Neue\";\n    font-weight: 400;\n    height: 100%;\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -ms-flex-positive: 1;\n        flex-grow: 1; }\n    .header--link--option:hover {\n      cursor: pointer; }\n    .header--link--option:active, .header--link--option:focus {\n      outline: none; }\n  .header--link--logo {\n    height: 60px; }\n    .header--link--logo:hover {\n      cursor: pointer; }\n\nheader-contact {\n  z-index: 12;\n  position: fixed;\n  top: 80px;\n  width: 100%; }\n\n@media screen and (max-width: 786px) {\n  .header--link--option {\n    font-size: 14px; } }\n\n@media screen and (max-width: 608px) {\n  .header--link--logo {\n    height: 32px; }\n  .header--link--option {\n    font-size: 10px; } }\n\n.header-contact {\n  z-index: 12;\n  position: fixed; }\n\n.option--selected {\n  border-bottom: 3px solid #3e7ee6; }\n  .option--selected:last-of-type {\n    border-color: #888888; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
        this._router.navigateByUrl("/");
    };
    HeaderComponent.prototype.navigateToServices = function () {
        this._router.navigateByUrl("services");
    };
    HeaderComponent.prototype.navigateToTeam = function () {
        this._router.navigateByUrl("team");
    };
    HeaderComponent.prototype.navigateToFindUs = function () {
        this._router.navigateByUrl("find-us");
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "header",
        template: __webpack_require__("../../../../../src/app/_layout/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_layout/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/_layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/_shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__("../../../../../src/app/_layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_contact_header_contact_component__ = __webpack_require__("../../../../../src/app/_layout/header/header-contact/header-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("../../../../../src/app/_layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_contact_footer_contact_component__ = __webpack_require__("../../../../../src/app/_layout/footer/footer-contact/footer-contact.component.ts");
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

/***/ "../../../../../src/app/_pages/find-us/find-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"find-us\" (window:resize)=\"onResize($event)\">\n    <div *ngFor=\"let office of offices, let i = index\" class=\"find-us--location\" [class.find-us--location--reverse]=\"i === 1\">\n        <div class=\"find-us--map\" [ngStyle]=\"{ 'background-image': office.imageUrl }\">\n        </div>\n        <div class=\"find-us--details\" [style.background-image]=\"canShowBackgroundImage ? office.imageUrl : ''\">\n            <h1>{{office.city}}</h1>\n            <hr />\n            <div class=\"find-us--locationdetails\">\n                <div class=\"find-us--address\">\n                    <h2>Our office</h2>\n                    <p>{{office.address1}}</p>\n                    <p>{{office.address2}}</p>\n                    <p>{{office.city}}</p>\n                    <p>{{office.postcode}}</p>\n                    <div class=\"find-us--phone\">\n                        <a href=\"tel:{{office.phone}}\"><span style=\"font-weight: bold\">T :</span> {{office.phonestring}}</a>\n                        <a href=\"tel:07917754134\"><span style=\"font-weight: bold\">24hr :</span> 07917 754134</a>\n                    </div>\n                </div>\n                <div class=\"find-us--opening\">\n                    <h2>Opening Hours</h2>\n                    <p><span style=\"font-weight:bold\">Mon:</span> {{office.openingHours.monday}}</p>\n                    <p><span style=\"font-weight:bold\">Tue:</span> {{office.openingHours.tuesday}}</p>\n                    <p><span style=\"font-weight:bold\">Wed:</span> {{office.openingHours.wednesday}}</p>\n                    <p><span style=\"font-weight:bold\">Thu:</span> {{office.openingHours.thursday}}</p>\n                    <p><span style=\"font-weight:bold\">Fri:</span> {{office.openingHours.friday}}</p>\n                    <p><span style=\"font-weight:bold\">Sat:</span> {{office.openingHours.saturday}}</p>\n                    <p><span style=\"font-weight:bold\">Sun:</span> {{office.openingHours.sunday}}</p>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/_pages/find-us/find-us.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.find-us {\n  margin-top: 130px;\n  width: 100%;\n  height: 1440px; }\n  .find-us--location {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -ms-flex-direction: row;\n        flex-direction: row; }\n    .find-us--location--reverse {\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n  .find-us--map {\n    height: 480px;\n    width: 50%;\n    background-position: center;\n    background-size: cover; }\n  .find-us--details {\n    height: 480px;\n    width: 50%;\n    background-color: #002E52;\n    font-family: \"Helvetica Neue\";\n    color: white;\n    font-weight: 100; }\n    .find-us--details h1 {\n      text-align: center;\n      font-weight: 100; }\n    .find-us--details hr {\n      background: #3e7ee6;\n      height: 1px;\n      width: 60%;\n      border: none; }\n  .find-us--phone {\n    padding-top: 5vh;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n    .find-us--phone a {\n      text-decoration: none;\n      color: white; }\n      .find-us--phone a:hover {\n        font-weight: bold;\n        cursor: pointer; }\n  .find-us--locationdetails {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n  .find-us--opening {\n    text-align: center; }\n    .find-us--opening h2 {\n      font-size: 25px;\n      font-weight: 150; }\n    .find-us--opening p {\n      font-size: 19px; }\n  .find-us--address {\n    text-align: center;\n    font-size: 20px; }\n    .find-us--address h2 {\n      font-size: 25px; }\n    .find-us--address p {\n      font-size: 19px; }\n\n@media screen and (max-width: 829px) {\n  .find-us--details {\n    width: 100%;\n    border-bottom: 1px solid #3e7ee6;\n    font-weight: 400; }\n    .find-us--details h1 {\n      font-weight: 400; }\n    .find-us--details hr {\n      background: white;\n      width: 40%; }\n  .find-us--map {\n    display: none; } }\n\n@media screen and (max-width: 608px) {\n  .find-us {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-top: 200px; }\n    .find-us--details {\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content; }\n      .find-us--details h1 {\n        padding-top: 16px;\n        font-size: 26px; }\n    .find-us--locationdetails {\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n      .find-us--locationdetails .find-us--address h2 {\n        display: none; }\n      .find-us--locationdetails .find-us--address p {\n        font-size: 16px;\n        line-height: 12px; }\n      .find-us--locationdetails .find-us--address .find-us--phone {\n        padding-top: 20px; }\n        .find-us--locationdetails .find-us--address .find-us--phone a {\n          font-size: 16px; }\n      .find-us--locationdetails .find-us--opening {\n        padding-top: 32px;\n        padding-bottom: 32px; }\n        .find-us--locationdetails .find-us--opening h2 {\n          font-size: 20px; }\n        .find-us--locationdetails .find-us--opening p {\n          font-size: 16px;\n          line-height: 12px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/find-us/find-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_storage__ = __webpack_require__("../../../../../src/app/data/data.storage.ts");
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
        template: __webpack_require__("../../../../../src/app/_pages/find-us/find-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_pages/find-us/find-us.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
], FindUsComponent);

var _a, _b;
//# sourceMappingURL=find-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/_pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n\n  <!---Jumbotron-->\n  <div class=\"home-jumbotron\">\n    <div class=\"layer\">\n      <div class=\"home-jumbotron--head\">\n        <h1>SCM Solicitors</h1>\n        <h2>When it comes to the law, you couldn’t be in safer hands\n        </h2>\n      </div>\n      <div class=\"underline\"></div>\n      <button (click)=\"navigateToServices()\" class=\"home-jumbotron--button\">\n        What We Do\n      </button>\n    </div>\n  </div>\n\n  <!---Who we are-->\n  <div class=\"whoweare\">\n    <div class=\"whoweare--text\">\n      <div class=\"whoweare--layer__grey\">\n        <h1>Who We Are</h1>\n        <hr />\n        <p>SCM solicitors were formed in January 2015 with the merger of Bridgend firms <strong>David Sedgwick Solicitors</strong>\n          and <strong>Chudleigh Solicitors</strong>. The merger brought together 2 specialist criminal practices to become\n          one of South Wales leading criminal law firms. We are a specialist criminal practice which services clients across\n          the length of South Wales. Our experienced team of solicitors offer our clients a tailored service to meet their\n          individual needs.\n        </p>\n        <button (click)=\"navigateToTeam()\">\n          Meet the team\n        </button>\n      </div>\n    </div>\n    <div class=\"whoweare--image\">\n      <div class=\"layer--grey\"></div>\n    </div>\n  </div>\n\n  <!---Where to find us-->\n  <div class=\"wheretofind\">\n    <div class=\"wheretofind--map\">\n      <google-maps></google-maps>\n    </div>\n    <div class=\"wheretofind--text\">\n      <div class=\"wheretofind--layer__grey\">\n        <h1>Where To Find Us</h1>\n        <hr />\n        <p>We are a specialist Criminal Practice which services clients across the length of South Wales. Our offices are\n          located in Swansea, Bridgend and Cardiff. To find contact information to any of our offices specifically, select\n          the 'find us' tab.</p>\n        <hr />\n        <h2>Click your preferred office in the map to your left, or if on mobile, go to <strong>'find us'</strong></h2>\n        <div class=\"wheretofind--buttons\">\n          <button (click)=\"navigateToFindUs('swansea')\">Swansea</button>\n          <button (click)=\"navigateToFindUs('bridgend')\">Bridgend</button>\n          <button (click)=\"navigateToFindUs('cardiff')\">Cardiff</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/_pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.home {\n  margin-top: 130px;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #888888; }\n\n.home-jumbotron {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/jumbotron-image.jpg")) + ");\n  background-size: cover;\n  height: 480px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  font-family: \"Helvetica Neue\";\n  font-weight: 400; }\n  .home-jumbotron--head {\n    text-align: center;\n    margin-top: 100px; }\n    .home-jumbotron--head h1 {\n      font-size: 50px;\n      color: white;\n      font-weight: 400; }\n    .home-jumbotron--head h2 {\n      font-size: 30px;\n      color: white;\n      font-weight: 300; }\n  .home-jumbotron .underline {\n    width: 50%;\n    height: 1px;\n    background: #3e7ee6;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    margin-left: 25%;\n    margin-bottom: 8vh; }\n  .home-jumbotron--button {\n    text-align: center;\n    border: 1px solid #3e7ee6;\n    font-size: 20px;\n    padding: 15px;\n    border-radius: 10px;\n    width: 200px;\n    color: white;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    background: none; }\n    .home-jumbotron--button:hover {\n      border: 1px solid white;\n      cursor: pointer; }\n\n.layer {\n  background-color: rgba(0, 46, 82, 0.7);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.layer--grey {\n  background-color: rgba(0, 0, 0, 0.6);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.whoweare {\n  color: #888888;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row; }\n  .whoweare--text {\n    font-family: \"Helvetica Neue\";\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    width: 45%;\n    background-color: white;\n    padding: 0 2.5% 0 2.5%;\n    height: 480px; }\n    .whoweare--text h1 {\n      margin-top: 50px;\n      font-weight: 400;\n      font-size: 36px;\n      text-align: center; }\n    .whoweare--text hr {\n      width: 50%;\n      height: 1px;\n      background: #3e7ee6;\n      border: none; }\n    .whoweare--text p {\n      font-size: 20px;\n      padding: 0 20px;\n      font-weight: 300;\n      text-align: justify;\n      font-size: 17px;\n      margin-top: 40px; }\n    .whoweare--text button {\n      margin-top: 20px;\n      margin-left: calc(50% - 100px);\n      border: 1px solid #888888;\n      font-size: 20px;\n      padding: 15px;\n      border-radius: 10px;\n      width: 200px;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      color: #3e7ee6;\n      background: none; }\n      .whoweare--text button:hover {\n        border-color: #3e7ee6;\n        cursor: pointer; }\n  .whoweare--image {\n    height: 480px;\n    width: 50%;\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/who-we-are.jpg")) + ");\n    background-size: cover; }\n    .whoweare--image p {\n      padding: 0 60px; }\n\n.wheretofind {\n  height: 480px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row; }\n  .wheretofind--map {\n    width: 50%;\n    height: 100%;\n    z-index: 5;\n    position: relative; }\n  .wheretofind--text {\n    width: 50%;\n    font-family: \"Helvetica Neue\";\n    color: black;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-item-align: center;\n        align-self: center;\n    float: right;\n    background-color: white;\n    height: 100%; }\n    .wheretofind--text h1 {\n      font-weight: 400;\n      font-size: 36px;\n      text-align: center;\n      margin-top: 40px; }\n    .wheretofind--text p {\n      font-weight: 300;\n      margin: 5%;\n      text-align: justify;\n      margin-top: 10%;\n      margin-bottom: 10%; }\n    .wheretofind--text h2 {\n      text-align: center;\n      font-size: 18px;\n      font-family: \"Helvetica Neue\";\n      font-weight: 300; }\n    .wheretofind--text hr {\n      width: 30%;\n      height: 1px;\n      background: #3e7ee6;\n      border: none; }\n  .wheretofind--buttons {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-item-align: center;\n        align-self: center;\n    margin: 5%; }\n  .wheretofind button {\n    margin-top: 40px;\n    border: 1px solid white;\n    font-size: 20px;\n    padding: 10px;\n    border-radius: 10px;\n    width: 26%;\n    color: white;\n    background: none; }\n    .wheretofind button:hover {\n      border: 2px solid white;\n      cursor: pointer; }\n\n@media screen and (max-width: 827px) {\n  .home-jumbotron--head h1 {\n    font-size: 36px; }\n  .home-jumbotron--head h2 {\n    font-size: 25px; }\n  .whoweare--text {\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/who-we-are.jpg")) + ");\n    background-size: cover;\n    width: 100%;\n    padding: 0; }\n  .whoweare button {\n    font-size: 15px;\n    margin-top: 30px; }\n  .whoweare--image {\n    display: none; }\n  .whoweare--layer__grey {\n    background-color: rgba(0, 0, 0, 0.7);\n    width: inherit;\n    height: inherit;\n    color: white; }\n  .layer--grey {\n    background-color: rgba(0, 0, 0, 0.8);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2; }\n  .wheretofind--text {\n    color: black;\n    padding: 0;\n    width: 100%;\n    background-color: #F1F1F1; }\n  .wheretofind button {\n    font-size: 15px; }\n  .wheretofind--map {\n    display: none; }\n  .wheretofind--layer__grey {\n    background-color: transparent;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n    .wheretofind--layer__grey .wheretofind--buttons {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n      .wheretofind--layer__grey .wheretofind--buttons button {\n        border-color: #3e7ee6;\n        color: black; } }\n\n@media screen and (max-width: 608px) {\n  .home {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content; }\n  .home-jumbotron {\n    height: 424px; }\n    .home-jumbotron--head {\n      margin: 134px 20px 0; }\n      .home-jumbotron--head h1 {\n        font-size: 36px; }\n      .home-jumbotron--head h2 {\n        font-size: 18px;\n        color: white;\n        font-weight: 100; }\n    .home-jumbotron--button {\n      font-size: 15px;\n      padding: 10px;\n      display: block; }\n  .whoweare {\n    height: 424px; }\n    .whoweare--text .whoweare--layer__grey h1 {\n      margin-top: 40px;\n      font-size: 36px; }\n    .whoweare--text .whoweare--layer__grey p {\n      font-size: 14px; }\n  .wheretofind {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content; }\n    .wheretofind--text .wheretofind--layer__grey h1 {\n      margin-top: 50px;\n      font-size: 36px; }\n    .wheretofind--text .wheretofind--layer__grey p, .wheretofind--text .wheretofind--layer__grey h2 {\n      font-size: 14px; }\n    .wheretofind--text .wheretofind--layer__grey h2 {\n      padding: 0 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
        template: __webpack_require__("../../../../../src/app/_pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_pages/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/_pages/notable-cases/notable-cases.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notable-cases\">\n  <div class=\"notable-cases__title\">\n    <h1>Notable Cases</h1>\n    <hr/>\n    <p>Below is a list of some of the most notable cases handled by SCM Law to date.</p>\n  </div>\n\n  <div class=\"notable-cases__main\">\n    <ul class=\"list\">\n      <li *ngFor=\"let notableCase of notableCases\" class=\"list__item\">\n        <h4 class=\"info info__title\">{{ notableCase.title }}</h4>\n        <hr class=\"info info__separator\">\n        <h2 class=\"info info__subtitle\">{{ notableCase.subtitle }}</h2>\n        <hr class=\"info info__separator\">\n        <p class=\"info info__desc\">{{ notableCase.description }}</p>\n        <hr class=\"info info__separator\">\n        <h4 class=\"info info__court\">{{ notableCase.court }}</h4>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/_pages/notable-cases/notable-cases.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.notable-cases {\n  margin-top: 130px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #F1F1F1;\n  font-family: \"Helvetica Neue\"; }\n  .notable-cases__title {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    text-align: center;\n    padding: 20px 0; }\n    .notable-cases__title h1 {\n      color: #002E52;\n      font-size: 36px; }\n    .notable-cases__title hr {\n      width: 140px;\n      height: 2px;\n      border: none;\n      background-color: #3e7ee6; }\n    .notable-cases__title p {\n      color: #888888;\n      padding: 0 40px;\n      text-align: center;\n      font-weight: 400; }\n  .notable-cases__main {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content; }\n    .notable-cases__main .list {\n      padding: 40px 20px;\n      width: calc(100vw - 40px);\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      list-style: none; }\n      .notable-cases__main .list__item {\n        border: 1px solid #D3D3D3;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: column;\n            flex-direction: column;\n        -ms-flex-pack: center;\n            justify-content: center;\n        padding: 20px;\n        -ms-flex: 1;\n            flex: 1;\n        min-width: 360px;\n        max-width: 360px;\n        margin-bottom: 20px;\n        background-color: white; }\n        .notable-cases__main .list__item .info {\n          text-align: center; }\n          .notable-cases__main .list__item .info__separator {\n            width: 40px;\n            height: 2px;\n            border: none;\n            background-color: #3e7ee6; }\n          .notable-cases__main .list__item .info__title, .notable-cases__main .list__item .info__court {\n            line-height: 20px;\n            color: #888888; }\n          .notable-cases__main .list__item .info__desc {\n            font-weight: 400; }\n\n@media screen and (max-width: 608px) {\n  .notable-cases {\n    margin-top: 180px; }\n    .notable-cases__main .list {\n      padding: 20px 0;\n      width: 100vw; }\n      .notable-cases__main .list__item {\n        min-width: 94vw;\n        max-width: 94vw;\n        padding: 0px; }\n        .notable-cases__main .list__item .info {\n          padding: 0 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/notable-cases/notable-cases.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotableCasesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotableCasesComponent = (function () {
    function NotableCasesComponent() {
        this.notableCases = [
            {
                title: 'R v B & OTHERS (2019)',
                subtitle: 'OPERATION RED DRAGON',
                description: 'Represented all 5 defendants in a conspiracy to supply half a million pounds of heroin',
                court: 'Cardiff Crown Court'
            },
            {
                title: 'R v A (2018)',
                subtitle: 'OPERATION BLUE KRCH',
                description: 'Widespread distribution of class A,B & C drugs with over 90,000 pages of served evidence',
                court: 'Cardiff Crown Court'
            },
            {
                title: 'R v A & OTHERS (2018)',
                subtitle: 'OPERATION JACKDAW',
                description: 'Represented one of 8 defendants in a conspiracy to supply up to 10 kilos of heroin',
                court: 'Cardiff Crown Court'
            },
            {
                title: 'R v M & others (2018)',
                subtitle: 'OPERATION CAVE',
                description: '10 defendant conspiracy to supply multiple kilos of class A drugs',
                court: 'Bristol Crown Court'
            },
            {
                title: 'R v Vu & others (2018)',
                subtitle: 'OPERATION VIOLET PANAMA',
                description: '22 defendant conspiracy to supply industrial quantities of cannabis with over 90,000 pages of evidence',
                court: 'Merthyr Tydfil Crown Court'
            },
            {
                title: 'R v G & P & others (2018)',
                subtitle: 'OPERATION REDWOOD',
                description: 'Conspiracy to contravene provisions of the Trade Marks Act – Widespread distribution of unauthorised vinyl records over 100, 000 pages of evidence.',
                court: 'Cardiff Crown Court'
            },
            {
                title: 'R v T & others (2017)',
                subtitle: 'OPERATION RED ALASKA',
                description: 'Multi handed life insurance fraud',
                court: 'Swansea Crown Court'
            },
            {
                title: 'R v T, P, G & others (2017)',
                subtitle: 'OPERATION BLUE MAGNET',
                description: 'Represented x3 defendants in a multi handed conspiracy to supply multiple kilos of Heroin and cocaine',
                court: 'Cardiff Crown Court'
            },
            {
                title: 'R v J & others (2017)',
                subtitle: 'OPERATION VIOLET ANVIL',
                description: 'Conspiracy to supply multiple kilos of cocaine and cannabis',
                court: 'Cardiff Crown Court'
            },
            {
                title: 'R V G & others (2017)',
                subtitle: 'OPERATION DINO II',
                description: 'Follow up to Operation DINO involving a further 80 defendants in a crash for cash Insurance scam',
                court: 'Newport Crown Court'
            },
            {
                title: 'R v H (2017)',
                subtitle: 'OPERATION BLUE CAPRI',
                description: 'Multiple rapes of children',
                court: 'Cardiff Crown Court'
            },
            {
                title: 'R V K & others (2016)',
                subtitle: 'OPERATION ORANGE GOBI',
                description: 'Multiple defendant conspiracy to supply cocaine and possessing a sawn-off shotgun',
                court: 'Cardiff Crown Court'
            },
            {
                title: 'R v T, C , S & others (2016',
                subtitle: 'OPERATION HALLET',
                description: 'Represented x3 defendants in a multi handed conspiracy to supply cocaine',
                court: 'Cardiff Crown Court'
            },
            {
                title: 'R v J & others (2016)',
                subtitle: 'N/A',
                description: 'Large scale 18 defendant conspiracy to produce large quantities of cannabis and money laundering',
                court: 'Merthyr Tydfil Crown Court'
            },
            {
                title: 'R v H & others (2016)',
                subtitle: 'OPERATION ASTORIA',
                description: 'People trafficking, large scale cannabis production',
                court: 'Bristol Crown Court'
            },
            {
                title: 'R v S (2016)',
                subtitle: 'N/A',
                description: 'Murder',
                court: 'Cardiff Crown Court'
            },
            {
                title: 'R v S (2016)',
                subtitle: 'N/A',
                description: 'Murder trial and retrial',
                court: 'Swansea Crown Court'
            },
            {
                title: 'R v A (2014)',
                subtitle: 'OPERATION DINO',
                description: 'Britain’s biggest crash for cash insurance scam involving in excess of 80 defendants. Conspiring to defraud the insurance industry of in excess of £763,000',
                court: 'Newport Crown Court'
            },
            {
                title: 'R v S (2014)',
                subtitle: 'N/A',
                description: 'Murder trial',
                court: 'Swansea Crown Court'
            },
            {
                title: 'R v S & Others (2014)',
                subtitle: 'OPERATION BUGS',
                description: 'Large scale 19 defendant £500,000 trading standards fraud',
                court: 'Swansea Crown Court'
            },
            {
                title: 'R v G & Others (2013)',
                subtitle: 'OPERATION WHITE HORSE',
                description: 'Multiple defendant money laundering £700,000',
                court: 'Bristol Crown Court'
            },
            {
                title: 'R v V & others (2011)',
                subtitle: 'OPERATION REGINA',
                description: 'Conspiracy to supply multiple kilos of cannabis',
                court: 'Bristol Crown Court'
            }
        ];
    }
    return NotableCasesComponent;
}());
NotableCasesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notable-cases',
        template: __webpack_require__("../../../../../src/app/_pages/notable-cases/notable-cases.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_pages/notable-cases/notable-cases.component.scss")]
    })
], NotableCasesComponent);

//# sourceMappingURL=notable-cases.component.js.map

/***/ }),

/***/ "../../../../../src/app/_pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/_shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find_us_find_us_component__ = __webpack_require__("../../../../../src/app/_pages/find-us/find-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services_component__ = __webpack_require__("../../../../../src/app/_pages/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/_pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__team_team_component__ = __webpack_require__("../../../../../src/app/_pages/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notable_cases_notable_cases_component__ = __webpack_require__("../../../../../src/app/_pages/notable-cases/notable-cases.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__site_management_policy_site_management_policy_component__ = __webpack_require__("../../../../../src/app/_pages/site-management-policy/site-management-policy.component.ts");
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
    { path: 'notable-cases', component: __WEBPACK_IMPORTED_MODULE_7__notable_cases_notable_cases_component__["a" /* NotableCasesComponent */] },
    { path: 'find-us', component: __WEBPACK_IMPORTED_MODULE_3__find_us_find_us_component__["a" /* FindUsComponent */] },
    { path: 'find-us/:location', component: __WEBPACK_IMPORTED_MODULE_3__find_us_find_us_component__["a" /* FindUsComponent */] },
    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_6__team_team_component__["a" /* TeamComponent */] },
    { path: 'site-management-policy', component: __WEBPACK_IMPORTED_MODULE_8__site_management_policy_site_management_policy_component__["a" /* SiteManagementPolicyComponent */] }
];
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* _SharedModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(companyRoutes)],
        exports: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_4__services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__notable_cases_notable_cases_component__["a" /* NotableCasesComponent */],
            __WEBPACK_IMPORTED_MODULE_3__find_us_find_us_component__["a" /* FindUsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__site_management_policy_site_management_policy_component__["a" /* SiteManagementPolicyComponent */]
        ],
        providers: []
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/_pages/services/data/data.storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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

/***/ "../../../../../src/app/_pages/services/services-detail/services-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"service-detail\">\n  <div class=\"service-detail--title\" [ngStyle]=\"{ 'background-image': service.imageUrl }\">\n  </div>\n  <div class=\"service-detail--content\">\n    <h2>{{ service.title }}</h2>\n\n    <!-- regular services -->\n    <ng-container *ngIf=\"service.title != 'Motoring Offences'\">\n      <p [innerHTML]=\"service.description\"></p>\n      <hr />\n      <ul class=\"service-detail--content__crime-list\">\n        <li *ngFor=\"let crime of service.crimes\">\n          <img src=\"/assets/services/list-arrow--icon.png\" alt=\"list-item-arrow\" /> {{ crime }}\n        </li>\n      </ul>\n      <hr />\n      <p>If you would like to discuss anything with us, please feel free to get in touch via our phone or email.\n        Alternatively,\n        specific contact information for each of our solicitors is available within the 'team' section of our website.\n      </p>\n    </ng-container>\n\n    <!-- motoring offences detail -->\n    <ng-container>\n      <iframe src=\"https://www.cpm21.consulting/scmlawmotoringoffencesfeepage051/\" width=\"100%\"\n        height=\"2000px\"></iframe>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/_pages/services/services-detail/services-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.service-detail {\n  margin-top: 130px; }\n  .service-detail--title {\n    width: 100%;\n    height: 200px;\n    background-position: center;\n    background-size: cover; }\n  .service-detail--content {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content; }\n    .service-detail--content h2 {\n      font-family: \"Helvetica Neue\";\n      background-color: #002E52;\n      color: #F1F1F1;\n      text-align: center;\n      font-size: 28px;\n      padding: 10px;\n      margin: 0; }\n    .service-detail--content p {\n      padding: 10px 40px;\n      font-family: \"Helvetica Neue\";\n      text-align: justify;\n      color: #888888;\n      font-weight: 400; }\n      .service-detail--content p:last-of-type {\n        color: black;\n        font-size: 12px;\n        font-weight: 400;\n        padding-top: 16px; }\n    .service-detail--content hr {\n      width: 140px;\n      height: 2px;\n      border: none;\n      color: #002E52;\n      background-color: #1B5DD1; }\n    .service-detail--content__crime-list {\n      list-style: none; }\n      .service-detail--content__crime-list li {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-align: center;\n            align-items: center;\n        font-family: \"Helvetica Neue\";\n        font-size: 20px;\n        color: #002E52;\n        padding: 4px 0; }\n        .service-detail--content__crime-list li img {\n          width: 24px;\n          height: 24px;\n          margin-right: 20px; }\n\n@media screen and (max-width: 608px) {\n  .service-detail {\n    margin-top: 180px; }\n    .service-detail--title h2 {\n      margin-top: 40px; }\n    .service-detail--content h2 {\n      font-size: 24px; }\n    .service-detail--content p {\n      font-size: 14px;\n      padding: 10px 14px; }\n    .service-detail li {\n      font-size: 12px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/services/services-detail/services-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_storage__ = __webpack_require__("../../../../../src/app/_pages/services/data/data.storage.ts");
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
        template: __webpack_require__("../../../../../src/app/_pages/services/services-detail/services-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_pages/services/services-detail/services-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */]) === "function" && _b || Object])
], ServicesDetailComponent);

var _a, _b;
//# sourceMappingURL=services-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/_pages/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"services\">\n  <div class=\"services--intro\">\n    <h1 class=\"services--intro__title\">Services</h1>\n    <hr class=\"services--intro__hr\" />\n    <p class=\"services--intro__description\">SCM prides itself on being able to offer a 24-hour service 365 days of the year\n      offering immediate expert legal advice and representation. The firm has a contract with the Legal Aid Agency enabling\n      us to offer free and independent legal advice at the police station, and representation through to the Magistrates\n      Court and Crown Court depending on your income. The firm also represents high net worth individuals throughout all\n      stages of the criminal justice process.\n      <a (click)=\"goToNotableCases()\">Notable Cases</a>\n    </p>\n    <br />\n    <p class=\"services--intro__description regular\">The firm delivers highly specialised services throughout the spectrum\n      of the Criminal Justice System including :-</p>\n  </div>\n  <div *ngFor=\"let service of services; let i = index;\" [ngStyle]=\"{ 'background-image': service.imageUrl }\" class=\"services--item\">\n    <div (mouseenter)=\"showLayer(i)\" (mouseleave)=\"hideLayer(i)\" class=\"layer\" [class.layer--clear]=\"i == selectedRow\">\n      <!--<p class=\"\">{{ service.title }}</p>-->\n      <ul class=\"services--item--content\">\n        <li (click)=\"goToServicesDetail(service.path, service.title, service.description, service.imageUrl, service.crimes)\" class=\"title\"\n          [class.title--hover]=\"i == selectedRow\">{{ service.title }}</li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/_pages/services/services.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.services {\n  margin-top: 130px;\n  width: 100%;\n  height: 100%;\n  background-color: #002E52; }\n  .services--intro {\n    padding-bottom: 20px;\n    background-color: #F1F1F1;\n    font-family: \"Helvetica Neue\";\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center; }\n    .services--intro__title {\n      color: #002E52;\n      font-size: 36px; }\n    .services--intro__hr {\n      width: 140px;\n      height: 2px;\n      border: none;\n      background-color: #3e7ee6; }\n    .services--intro__description {\n      color: #888888;\n      padding: 0 40px;\n      text-align: justify;\n      font-weight: 400; }\n    .services--intro a {\n      cursor: pointer;\n      color: #002E52;\n      font-weight: 600; }\n      .services--intro a:hover {\n        color: #3e7ee6; }\n    .services--intro .regular {\n      font-weight: 400;\n      padding: 0 20%; }\n  .services--item {\n    height: 140px;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover; }\n    .services--item .layer {\n      background-color: rgba(0, 46, 82, 0.7);\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      transition: background-color 0.6s; }\n      .services--item .layer--clear {\n        background: none;\n        transition: background 0.6s; }\n    .services--item--content {\n      width: 100%;\n      height: 100%;\n      margin: 0px;\n      padding: 0;\n      list-style: none; }\n      .services--item--content li {\n        height: 100%;\n        padding: 0 30px;\n        cursor: pointer;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n        -ms-flex-align: center;\n            align-items: center; }\n      .services--item--content .title {\n        color: white;\n        font-size: 22px;\n        font-family: \"Helvetica Neue\";\n        transition: font-size 0.6s; }\n        .services--item--content .title--hover {\n          font-size: 26px;\n          transition: font-size 0.6s; }\n\n@media screen and (max-width: 608px) {\n  .services {\n    margin-top: 200px; }\n    .services--intro__description {\n      font-size: 14px; }\n    .services--intro .regular {\n      padding: 0 10%; }\n    .services--item--content li {\n      -ms-flex-pack: center;\n          justify-content: center; }\n    .services--item--content .title {\n      font-size: 18px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_storage__ = __webpack_require__("../../../../../src/app/_pages/services/data/data.storage.ts");
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
                path: 'violent-crime-offences',
                title: 'Violent Crime Offences',
                description: "Violent crime offences range from a minor punch (common assault, a punch which leaves a minor cut or a bruise (Actual Bodily Harm), a serious injury casued by recklessness (Section 20 Grevious Bodily Harm), or a serious injury caused intentionally to seriously harm another person (Section 18 Grevious Bodily Harm). <br><br>Whatever type of allegation is made against you, our solicitors have the knowledge and expertise to defend you.We will scrutinise the evidence and chase witnesses or CCTV evidence if it is available.Furthermore, our Lawyers' creative minds will be working with you to find evidence or arguments which will increase your chances of an acquittal.",
                imageUrl: 'url("/assets/services/violent-crime.jpg")',
                crimes: [
                    'Murder',
                    'Section 18 grievous bodily harm with intent',
                    'Section 20 grievous bodily harm',
                    'Actual body harm',
                    'Common Assault'
                ]
            },
            {
                path: 'sexual-crime-offences',
                title: 'Sexual Crime Offences',
                description: "SCM's specialist sexual offence solicitors understand that an allegation of a sexual nature can be emotionally stressful and take its toll on those around you. We understand the need for you and your family to be advised and informed on how court proceedings work and that such procedures may be unfamiliar to you.<br><br>Often these offences are based purely on the issue of consent and presenting accurate and factual legal arguments to support this is key.<br><br>Below are some, but not all, offences that we cover here at SCM.",
                imageUrl: 'url("/assets/services/sexual-offences.jpg")',
                crimes: [
                    'Rape',
                    'Sexual Assault',
                    'Sexual Offences against children',
                    'Possessing indecent images of children',
                    'Child grooming',
                    'Exposure / Voyerism'
                ]
            },
            {
                path: 'drugs-offences',
                title: 'Drugs Offences',
                description: 'SCM Solicitors have defended those accused of importing, producing, distributing, supplying and possessing all classes of drugs for more than 30 years. Either you are uncontrollably addicted to the use of drugs, helpless due to the very real and painful physical effects of long term use; or you are engrossed in a vicious lifestyle cycle.<br><br>Wherever you fit, our solicitors at this firm will be able to assist you in the preparation of your case at every step of the way. Below is a list of just some of the alleged offences that we can assist you with.',
                imageUrl: 'url("/assets/services/drugs-offences.jpg")',
                crimes: [
                    'Conspiracy to supply',
                    'Possession with intent to supply',
                    'Production of controlled drugs',
                    'Permitting premises to be used',
                    'Possessing controlled drugs'
                ]
            },
            {
                path: 'fraud-offences',
                title: 'Fraud Offences',
                description: 'Whether you are a business or an individual, SCM will create a tailored strategy to meet your end-goals. Having handled a multitude of cases, we have the experience of dealing with a spectrum of offences under this legislation.<br><br>We are renowned for our commitment to taking early action in any investigation and advising on preventative steps which may be taken to resolve the case without the need for formal court proceedings.We will be responsible for pursuing all possible lines of enquiry which could yield that vital grain of evidence to prove your innocence or sway the jury in your favour.<br><br>We have excellent relationships with truly gifted Barristers and QCs who we will engage to support your team. We have access to forensic experts, to accountants, to mobile phone analysis experts who can all be called in to give evidence to bolster your defence.',
                imageUrl: 'url("/assets/services/fraud-offences.jpg")',
                crimes: ['Conspiracy to defraud', 'False representation', 'Bribery', 'Money Laundering', 'TAX / Benefit fraud']
            },
            {
                path: 'theft-and-dishonesty-offences',
                title: 'Theft & Dishonesty Offences',
                description: 'The solicitors at SCM have a wealth of experience in dealing with offences of theft. If you are accused of theft we can help you. If the police want to interview you we can advise you about that.<br><br>Theft is a crime of dishonesty and can have a significant impact on your employment, future employment and many applications to financial institutions.We understand the importance and the consequences of theft allegations, and specialise in, but are not limited to, the following:',
                imageUrl: 'url("/assets/services/theft-offences.jpg")',
                crimes: [
                    'Burglary',
                    'Shoplifting',
                    'Theft from employer',
                    'Handling stolen goods',
                    'Making off without payment'
                ]
            },
            // {
            //   path: 'cyber-offences',
            //   title: 'Cyber Offences',
            //   description:
            //     'Cyber crime is a relatively new and constantly developing field. Investigations with an online or digital element are invariably technically challenging and complex. Many cases have an international element and investigations in the UK are often merely one part of coordinated action by law enforcement bodies across the globe. These issues, together with the sheer volume of data that is invariably seized during a computer based investigation, pose real challenges to law enforcement agencies.<br><br>We at SCM are here as professionals to assist in fields such as:',
            //   imageUrl: 'url("/assets/services/cyber-offences.jpg")',
            //   crimes: ['Child pornography', 'Espionage', 'Copyright Infringement', 'Financial Theft']
            // },
            {
                path: 'regulatory-offences',
                title: 'Regulatory Offences',
                description: 'If you are in business, you will know that regulations have a huge impact on how you carry out day-to-day operations. Directors, partners and other staff can face individual criminal prosecutions for alleged breaches of certain rules. Our solicitors have the expertise and resources to assist individuals and companies under investigation by a regulatory body.<br><br>Below is a list of just some of the alleged offenses we here at SCM can assist you with:',
                imageUrl: 'url("/assets/services/regulatory-offences.jpg")',
                crimes: [
                    'Health and safety offences',
                    'Food hygiene offences',
                    'Trading Standards offences',
                    'Licensing offences',
                    'Environment offences'
                ]
            },
            {
                path: 'motoring-offences',
                title: 'Motoring Offences',
                description: 'Our specialist motor offence solicitors can advise you on all aspects of motoring and road traffic law throughout England and Wales.<br><br>We assist our clients in defending against an array of driving offences from the most minor motoring offence to those arising from fatal driving accidents. We pride ourselves on attention to detail and have specialist experience in the following areas:',
                imageUrl: 'url("/assets/services/motoring-offences.jpg")',
                crimes: [
                    'Dangerous and careless driving',
                    'Driving while under the influence of drink/drugs',
                    'Speeding',
                    'Driving without a license',
                    'Driving without insurance',
                    'Driving whilst disqualified'
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
    ServicesComponent.prototype.goToNotableCases = function () {
        this._router.navigateByUrl('/notable-cases');
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'services',
        template: __webpack_require__("../../../../../src/app/_pages/services/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_pages/services/services.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]) === "function" && _b || Object])
], ServicesComponent);

var _a, _b;
//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/_pages/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/_shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data_storage__ = __webpack_require__("../../../../../src/app/_pages/services/data/data.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_detail_services_detail_component__ = __webpack_require__("../../../../../src/app/_pages/services/services-detail/services-detail.component.ts");
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
    { path: "services/:name", component: __WEBPACK_IMPORTED_MODULE_4__services_detail_services_detail_component__["a" /* ServicesDetailComponent */] }
];
var ServicesModule = (function () {
    function ServicesModule() {
    }
    return ServicesModule;
}());
ServicesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* _SharedModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_4__services_detail_services_detail_component__["a" /* ServicesDetailComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__services_detail_services_detail_component__["a" /* ServicesDetailComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__data_data_storage__["a" /* DataStorageService */]]
    })
], ServicesModule);

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ "../../../../../src/app/_pages/site-management-policy/site-management-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-management-policy\">\n\n  <!-- title -->\n  <div class=\"header\">\n    <h2>SCM Law</h2>\n    <h2>Site Management Policy</h2>\n  </div>\n\n  <!-- content -->\n\n  <!-- 1. scope -->\n  <div class=\"section\">\n    <h4>Scope of this policy</h4>\n    <p class=\"content\">This policy covers this website: <a routerLink=\"/\">www.scmlaw.co.uk</a></p>\n  </div>\n\n  <!-- 2. responsibility -->\n  <div class=\"section\">\n    <h4>Responsibility</h4>\n    <p class=\"content\">Robert Chudleigh has responsibility for the management of the website including:</p>\n    <ul class=\"content__list\">\n      <li class=\"content__list__item\">Ensuring content is up to date;</li>\n      <li class=\"content__list__item\">Ensuring content does not infringe copyright;</li>\n      <li class=\"content__list__item\">Specifying conditions for downloading material;</li>\n      <li class=\"content__list__item\">Ensuring any publicity conforms to the Solicitors Code of Conduct 2011, chapter\n        8;</li>\n      <li class=\"content__list__item\">Ensuring compliance with the Disability and the Equality Act 2010;</li>\n      <li class=\"content__list__item\">Overseeing linking arrangements;</li>\n      <li class=\"content__list__item\">Ensuring posting of a privacy notice explaining how any data collected from\n        visitors will be managed by the practice.</li>\n    </ul>\n\n    <p class=\"content\">Mr Chudleigh may delegate responsibility for inputting and maintaining the website however\n      accountability for any content that is shown on the website remains with the partners.</p>\n  </div>\n\n  <!-- Copyright and trademark notices -->\n  <div class=\"section\">\n    <h4>Copyright and trademark notices</h4>\n    <p class=\"content\">The contents of this site are protected by copyright under international law. Users are\n      permitted to read the contents of our website and make copies of such content for their own personal use. They\n      may also give copies to colleagues for their personal use on terms that SCM Law is acknowledged as the source,\n      the text is not altered in any way and the attention of the recipients is drawn to this warning. All other use\n      and copying of any of the contents of this site is prohibited. Copying from websites of third parties is subject\n      to any requirements applicable to those sites.</p>\n  </div>\n\n  <!-- Linking to third party websites -->\n  <div class=\"section\">\n    <h4>Linking to third party websites</h4>\n    <p class=\"content\">We are not responsible for the content of third party websites to which we link but we must\n      ensure any links are:</p>\n\n    <ul class=\"content__list\">\n      <li class=\"content__list__item\">Relevant and appropriate;</li>\n      <li class=\"content__list__item\">Pperating effectively, and</li>\n      <li class=\"content__list__item\">Where appropriate, reciprocated</li>\n    </ul>\n\n    <p class=\"content\">The COLP will oversee all linking arrangements.</p>\n  </div>\n\n  <!-- Accessibility -->\n  <div class=\"section\">\n    <h4>Accessibility</h4>\n    <p class=\"content\">We are committed to making our website accessible for all our website visitors, including those\n      with disabilities.</p>\n    <p class=\"content\">We are committed to providing an accessible web service. If you experience problems or have any\n      suggestions for improvement, please contact Mr Robert Chudleigh on 01656 767766.</p>\n  </div>\n\n  <!-- Data protection and security -->\n  <div class=\"section\">\n    <h4>Data protection and security</h4>\n    <p class=\"content\">This website is owned and operated by SCM Law who is the data controller for the purposes of the\n      General Data Protection Regulation. Our [link to privacy policy] explains how we deal with personal data.</p>\n    <p class=\"content\">The security of the website is maintained by password protection which is known only to SCM Law\n      and our external website management company.</p>\n  </div>\n\n  <!-- Liability -->\n  <div class=\"section\">\n    <h4>Liability</h4>\n    <p class=\"content\">The material displayed on our site is provided without any guarantees, conditions or warranties\n      as to its accuracy. The content on our website is deemed to be for general information purposes only and should\n      not constitute legal or professional advice. SCM Law accepts no responsibility for any loss which may arise from\n      accessing or relying upon information contained in this website.</p>\n  </div>\n\n  <!-- Jurisdiction and applicable law -->\n  <div class=\"section\">\n    <h4>Jurisdiction and applicable law</h4>\n    <p class=\"content\">The website will specify that the jurisdiction and applicable law to be invoked as that of\n      England and Wales in the event of any dispute arising as a result of content posted on the firm’s website.</p>\n  </div>\n\n  <!-- Monitoring and review -->\n  <div class=\"section\">\n    <h4>Monitoring and review</h4>\n    <ul class=\"content__list\">\n      <li class=\"content__list__item\">Mr Robert Chudleigh is responsible for this policy.</li>\n      <li class=\"content__list__item\">We regularly monitor the effectiveness of this policy to ensure it is working in\n        practice and we will review and update this policy as and when necessary.</li>\n      <li class=\"content__list__item\">We will review this policy regularly (at least annually). We will provide\n        information and/or training on any changes we make.</li>\n    </ul>\n  </div>\n\n  <!-- Training -->\n  <div class=\"section\">\n    <h4>Training</h4>\n    <p class=\"content\">All staff will receive appropriate training on our Website management policy, including:</p>\n    <ul class=\"content__list\">\n      <li class=\"content__list__item\">Regular training for existing staff;</li>\n      <li class=\"content__list__item\">Training for new staff at induction; and</li>\n      <li class=\"content__list__item\">Updates following any changes to the policy that affect staff.</li>\n    </ul>\n  </div>\n\n  <!-- final statement -->\n  <div class=\"section\">\n    <p class=\"content\">If you require any further information regarding our site's management policy, please contact\n      Robert Chudleigh at <a href=\"mailto: robert@scmlaw.co.uk\">robert@scmlaw.co.uk</a></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/_pages/site-management-policy/site-management-policy.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.site-management-policy {\n  margin-top: 130px;\n  padding: 0 24px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #F1F1F1; }\n  .site-management-policy h2,\n  .site-management-policy h4,\n  .site-management-policy p,\n  .site-management-policy ul li {\n    font-family: \"Helvetica Neue\"; }\n  .site-management-policy .header,\n  .site-management-policy .section {\n    padding: 24px 12px; }\n  .site-management-policy .header {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center; }\n    .site-management-policy .header hr {\n      background-color: #D3D3D3; }\n  .site-management-policy .section {\n    border-top: 1px solid #D3D3D3; }\n    .site-management-policy .section .content,\n    .site-management-policy .section .content__list__item {\n      font-size: 14px; }\n    .site-management-policy .section:first-of-type {\n      border-top: 0 none; }\n    .site-management-policy .section:last-of-type {\n      border-bottom: 0 none; }\n      .site-management-policy .section:last-of-type .content {\n        text-align: center; }\n\n@media screen and (max-width: 608px) {\n  margin-top: 200px;\n  .section {\n    margin-left: 0;\n    margin-right: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/site-management-policy/site-management-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteManagementPolicyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteManagementPolicyComponent = (function () {
    function SiteManagementPolicyComponent() {
    }
    SiteManagementPolicyComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    return SiteManagementPolicyComponent;
}());
SiteManagementPolicyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-site-management-policy',
        template: __webpack_require__("../../../../../src/app/_pages/site-management-policy/site-management-policy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_pages/site-management-policy/site-management-policy.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SiteManagementPolicyComponent);

//# sourceMappingURL=site-management-policy.component.js.map

/***/ }),

/***/ "../../../../../src/app/_pages/team/data/data.storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
            position: null,
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
    DataStorageService.prototype.setTeamMember = function (urlPath, name, position, initials, imageUrl, shortDescription, fullDescription, emailAddress, phoneNumberString, phoneNumber) {
        this.teamMember = {
            path: urlPath,
            name: name,
            position: position,
            initials: initials,
            backgroundImageUrl: "url(" + imageUrl + ")",
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

/***/ }),

/***/ "../../../../../src/app/_pages/team/team-detail/team-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"team-detail\">\n  <div class=\"team-detail__content-box\">\n    <div class=\"team-detail__content-box--info\" [ngStyle]=\"{ 'background-image': teamMember.backgroundImageUrl }\">\n    </div>\n    <div class=\"team-detail__content-box--contact\">\n      <a [href]=\"'tel:' + teamMember.phoneNumber\"><strong>Call </strong>{{ teamMember.phoneNumberString }}</a>\n      <a [href]=\"'mailto:' + teamMember.emailAddress\"><strong>Email </strong>{{ teamMember.emailAddress }}</a>\n    </div>\n  </div>\n  <div class=\"team-detail__info-box\">\n    <div class=\"team-detail__info-box--border\">\n      <div class=\"image\" [ngStyle]=\"{'background-image':'url(' + teamMember.imageUrl + ')'}\"></div>\n      <!--<img [src]=\"teamMember.imageUrl\" alt=\"teamMember.name\" />-->\n      <h1>{{ teamMember.name }}</h1>\n      <h2 *ngIf=\"hasPosition\">{{ teamMember.position }}</h2>\n      <h4>Accreditations - LLB(Hons) Higher Court Advocate</h4>\n      <hr />\n      <p>{{ teamMember.fullDescription }}</p>\n      <a [href]=\"'tel:' + teamMember.phoneNumber\" class=\"contact-button\"><strong>Call </strong>{{ teamMember.phoneNumberString\n        }}\n      </a>\n      <a [href]=\"'mailto:' + teamMember.emailAddress\" class=\"contact-button\"><strong>Email </strong>{{ teamMember.emailAddress\n        }}\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/_pages/team/team-detail/team-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.team-detail {\n  width: 100%;\n  height: 600px;\n  margin-top: 130px;\n  background-color: lightgray;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-align: center;\n      align-items: center; }\n  .team-detail__content-box {\n    width: 25%;\n    height: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    .team-detail__content-box--info {\n      width: 100%;\n      height: 60%;\n      background-position: center center;\n      background-size: cover;\n      background-repeat: no-repeat;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-align: center;\n          align-items: center; }\n    .team-detail__content-box--contact {\n      width: 100%;\n      height: 40%;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-align: center;\n          align-items: center;\n      background-color: #888888; }\n      .team-detail__content-box--contact a {\n        margin: 10px 4px;\n        width: 90%;\n        line-height: 40px;\n        text-decoration: none;\n        font-size: 16px;\n        text-align: center;\n        font-family: \"Helvetica Neue\";\n        color: #F1F1F1;\n        background-color: #3d3d3d;\n        border-radius: 10px;\n        border: none; }\n        .team-detail__content-box--contact a:hover {\n          background-color: #002E52; }\n        .team-detail__content-box--contact a:first-of-type {\n          margin-top: 24px; }\n  .team-detail__info-box {\n    width: 75%;\n    height: 100%;\n    background-color: #F1F1F1;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    font-family: \"Helvetica Neue\"; }\n    .team-detail__info-box--border {\n      height: 94%;\n      width: 94%;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n      .team-detail__info-box--border img {\n        display: none; }\n      .team-detail__info-box--border h1,\n      .team-detail__info-box--border h4,\n      .team-detail__info-box--border hr,\n      .team-detail__info-box--border p {\n        margin: 0;\n        padding: 0; }\n      .team-detail__info-box--border h1 {\n        margin-top: 50px;\n        margin-left: 30px;\n        margin-bottom: 8px;\n        color: #3e7ee6; }\n      .team-detail__info-box--border h2 {\n        margin: 0 0 10px 30px; }\n      .team-detail__info-box--border h4 {\n        margin-left: 30px;\n        margin-bottom: 20px; }\n      .team-detail__info-box--border hr {\n        width: 100px;\n        margin-left: 30px;\n        border-color: #888888;\n        background-color: #888888; }\n      .team-detail__info-box--border p {\n        padding: 30px;\n        color: #888888;\n        font-weight: 400;\n        font-size: 20px;\n        text-align: justify; }\n      .team-detail__info-box--border a {\n        display: none; }\n\n@media screen and (max-width: 848px) {\n  .team-detail {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    height: 100%; }\n    .team-detail__content-box {\n      display: none; }\n    .team-detail__info-box {\n      width: 100%; }\n      .team-detail__info-box--border {\n        -ms-flex-align: center;\n            align-items: center; }\n        .team-detail__info-box--border .image {\n          height: 140px;\n          width: 140px;\n          margin-top: 50px;\n          border-radius: 50%;\n          border: 4px solid #002E52;\n          background-position: center;\n          background-size: cover;\n          background-repeat: no-repeat; }\n        .team-detail__info-box--border h1 {\n          margin: 30px 0 0 0; }\n        .team-detail__info-box--border h2 {\n          margin: 0 0 10px; }\n        .team-detail__info-box--border h4 {\n          margin: 4px 0 0 0; }\n        .team-detail__info-box--border hr {\n          margin: 24px 0 0 0; }\n        .team-detail__info-box--border p {\n          margin: 24px 0;\n          padding: 0 30px;\n          font-size: 14px;\n          text-align: center; }\n        .team-detail__info-box--border .contact-button {\n          display: block;\n          padding: 0;\n          margin: 10px 4px;\n          width: 90%;\n          line-height: 60px;\n          text-decoration: none;\n          text-align: center;\n          font-size: 16px;\n          font-family: \"Helvetica Neue\";\n          color: #F1F1F1;\n          background-color: #3d3d3d;\n          border-radius: 10px;\n          border: none; }\n          .team-detail__info-box--border .contact-button:hover {\n            background-color: #002E52; }\n          .team-detail__info-box--border .contact-button:last-of-type {\n            margin-bottom: 24px; } }\n\n@media screen and (max-width: 608px) {\n  .team-detail {\n    margin-top: 170px;\n    margin-bottom: 0;\n    padding-bottom: 0;\n    z-index: 0;\n    background-color: #F1F1F1;\n    width: 100%; }\n    .team-detail .contact-button {\n      line-height: 40px; }\n    .team-detail__info-box--border h1 {\n      font-size: 26px; }\n    .team-detail__info-box--border h2,\n    .team-detail__info-box--border h4 {\n      text-align: center; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/team/team-detail/team-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_storage__ = __webpack_require__("../../../../../src/app/_pages/team/data/data.storage.ts");
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
        this.hasPosition = this.teamMember.position != null ? true : false;
    };
    return TeamDetailComponent;
}());
TeamDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "team-detail",
        template: __webpack_require__("../../../../../src/app/_pages/team/team-detail/team-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_pages/team/team-detail/team-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_data_storage__["a" /* DataStorageService */]) === "function" && _a || Object])
], TeamDetailComponent);

var _a;
//# sourceMappingURL=team-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/_pages/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"team\">\n  <div class=\"team__intro\">\n    <h1>Meet Our Team</h1>\n    <hr />\n    <p>SCM prides itself on being able to offer a 24-hour service 365 days of the year offering immediate expert legal\n      advice\n      and representation. The firm has a contract with the Legal Aid Agency enabling us to offer free and independent\n      legal\n      advice at the police station, and representation through to the Magistrates Court and Crown Court depending on\n      your\n      income. The firm also represents high net worth individuals throughout all stages of the criminal justice\n      process.\n    </p>\n  </div>\n\n  <!-- partners -->\n  <div class=\"team__partners\">\n    <h2 class=\"team__partners__title\">Directors</h2>\n    <hr />\n    <ul class=\"team__partners__list\">\n      <li *ngFor=\"let person of partner\" class=\"team__partners__list__item\">\n        <div class=\"profile partners\" [ngStyle]=\"{'background-image': 'url(' + person.imageUrl + ')'}\" (click)=\"goToTeamDetail(person.path, person.name, person.position, person.initials, person.imageUrl, person.shortDescription, person.fullDescription, person.emailAddress, person.phoneNumberString, person.phoneNumber)\">\n          <h2 class=\"profile__name\">{{ person.name }}</h2>\n          <h4 *ngIf=\"person.position\" class=\"profile__position\">{{ person.position }}</h4>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!-- solicitors -->\n  <div class=\"team__partners\">\n    <h2 class=\"team__partners__title\">Senior Associates</h2>\n    <hr />\n    <ul class=\"team__partners__list\">\n      <li *ngFor=\"let associate of associates\" class=\"team__partners__list__item\">\n        <div class=\"profile partners\" [ngStyle]=\"{ 'background-image': 'url(' + associate.imageUrl + ')' }\" (click)=\"goToTeamDetail(associate.path, associate.name, associate.position, associate.initials, associate.imageUrl, associate.shortDescription, associate.fullDescription, associate.emailAddress, associate.phoneNumberString, associate.phoneNumber)\">\n          <h2 class=\"profile__name\">{{ associate.name }}</h2>\n          <h4 *ngIf=\"associate.position\" class=\"profile__position\">{{ associate.position }}</h4>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!-- consultants -->\n  <div class=\"team__partners\">\n    <h2 class=\"team__partners__title\">Consultants</h2>\n    <hr />\n    <h3 class=\"duty__info\">Accrediated Police Station representative Duty Solicitors.</h3>\n    <ul class=\"team__partners__list\">\n      <li *ngFor=\"let person of duty\" class=\"team__partners__list__item\">\n        <div class=\"profile partners\" [ngStyle]=\"{'background-image': 'url(' + person.imageUrl + ')'}\" (click)=\"goToTeamDetail(person.path, person.name, person.position, person.initials, person.imageUrl, person.shortDescription, person.fullDescription, person.emailAddress, person.phoneNumberString, person.phoneNumber)\">\n          <h2 class=\"profile__name\">{{ person.name }}</h2>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!-- admin -->\n  <div class=\"team__partners\">\n    <h2 class=\"team__partners__title\">Administration</h2>\n    <hr />\n    <ul class=\"team__partners__list\">\n      <li *ngFor=\"let person of admin\" class=\"team__partners__list__item\">\n        <div class=\"profile\" [ngStyle]=\"{'background-image': 'url(' + person.imageUrl + ')'}\">\n          <h2 class=\"profile__name\">{{ person.name }}</h2>\n          <h4 class=\"profile__position\">{{ person.position }}</h4>\n          <h4 class=\"profile__position profile__position--clickable\" (click)=\"openEmail(person.emailAddress)\">{{\n            person.emailAddress\n            }}\n          </h4>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/_pages/team/team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\nhr {\n  max-width: 400px; }\n\n.team {\n  width: 100%;\n  padding-bottom: 60px;\n  margin-top: 130px;\n  background-color: #F1F1F1; }\n  .team__intro {\n    padding: 20px 40px; }\n    .team__intro h1 {\n      font-family: \"Helvetica Neue\";\n      color: #3d3d3d;\n      text-align: center;\n      font-size: 40px; }\n    .team__intro hr {\n      margin-bottom: 30px; }\n    .team__intro p {\n      font-family: \"Helvetica Neue\";\n      color: #888888;\n      text-align: justify;\n      font-size: 18px; }\n  .team__partners {\n    padding-top: 70px; }\n    .team__partners__title {\n      padding: 0 0;\n      font-size: 32px;\n      font-family: \"Helvetica Neue\";\n      color: #3d3d3d;\n      text-align: center; }\n    .team__partners__list {\n      list-style: none;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      margin: 0 20px;\n      padding: 20px; }\n      .team__partners__list__item {\n        width: 23%;\n        height: 285px;\n        margin-right: 10px; }\n        .team__partners__list__item .profile {\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-direction: column;\n              flex-direction: column;\n          -ms-flex-align: center;\n              align-items: center;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n          background-position: center;\n          background-size: cover;\n          height: 100%;\n          padding-bottom: 20px; }\n          .team__partners__list__item .profile__name, .team__partners__list__item .profile__position {\n            text-align: center;\n            color: #F1F1F1;\n            font-family: \"Helvetica Neue\";\n            background-color: none;\n            text-shadow: 2px 2px 4px black;\n            margin: 0; }\n          .team__partners__list__item .profile__position--clickable {\n            cursor: pointer; }\n        .team__partners__list__item .partners:hover {\n          cursor: pointer; }\n    .team__partners .duty__info {\n      text-align: center;\n      font-family: \"Helvetica Neue\"; }\n\n@media screen and (max-width: 827px) {\n  .team__partners {\n    padding-top: 10px; }\n    .team__partners__list__item {\n      width: 40%;\n      height: 285px;\n      margin-bottom: 40px; } }\n\n@media screen and (max-width: 608px) {\n  .team {\n    margin-top: 180px; } }\n\n@media screen and (max-width: 558px) {\n  .team {\n    margin-top: 200px; }\n    .team__intro {\n      padding: 20px 10px 0; }\n      .team__intro h1 {\n        font-size: 28px; }\n      .team__intro hr {\n        display: none; }\n      .team__intro p {\n        font-size: 14px; }\n    .team__partners__title {\n      font-size: 26px; }\n    .team__partners hr {\n      display: none; }\n    .team__partners__list {\n      margin: 0;\n      padding: 0; }\n      .team__partners__list__item {\n        width: 90vw;\n        height: 90vw;\n        margin-right: 0; }\n    .team__partners .duty__info {\n      font-size: 12px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_storage__ = __webpack_require__("../../../../../src/app/_pages/team/data/data.storage.ts");
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
                path: 'david-sedgewick',
                name: 'David Sedgewick',
                position: 'Bridgend Office',
                initials: 'DS',
                backgroundImageUrl: '/assets/team/scm-placeholder.png',
                imageUrl: '/assets/team/scm-placeholder.png',
                shortDescription: 'David is a Senior Criminal Practitioner, having dealt with Criminal cases since the early 80’s. An extremely experienced advocate, he has conducted countless hearings in both the Magistrates and Crown Court. David has acted as an Advocate in cases from Drunk and Disorderly to Murder.',
                fullDescription: 'David is a Senior Criminal Practitioner, having dealt with Criminal cases since the early 80’s. An extremely experienced advocate, he has conducted countless hearings in both the Magistrates and Crown Court. David has acted as an Advocate in cases from Drunk and Disorderly to Murder. He has attended the police station since the 80’s, and has been a Duty Solicitor for 30 years. Founder and Director of the original firm which joined with Chudleighs Solicitors to form SCM Law. David has been involved in dealing with some of the biggest Drug Conspiracy cases in Wales over the last 25 years, together with large scale frauds and all other serious cases for example Murder or Serios Sexual Offences',
                emailAddress: 'david@scmlaw.co.uk',
                phoneNumberString: '07768736502',
                phoneNumber: +447768736502
            },
            {
                path: 'rhodri-chudleigh',
                name: 'Rhodri Chudleigh',
                position: 'Head of Cardiff Office',
                initials: 'RC',
                backgroundImageUrl: '/assets/team/rhod-profile.jpg',
                imageUrl: '/assets/team/rhod-profile.jpg',
                shortDescription: 'Rhodri was the founding partner of Chudleigh solicitors before the practice merged in 2015 to become SCM Solicitors.',
                fullDescription: 'Rhodri was the founding partner of Chudleigh solicitors before the practice merged in 2015 to become SCM Solicitors.  He has been practicing as a criminal solicitor for over 15 years, and has extensive experience in defending complex criminal cases including murder, serious violence, large scale drug conspiracies, serious sexual offences, fraud, money laundering and firearm offences. Rhodri is an experienced advocate whose practice is predominantly based in the Crown Court.  He has also successfully appeared before the Court of Appeal Criminal Division.  Rhodri has past experience of working in specialised Fraud Firm in Birmingham representing defendants prosecuted by the Serious fraud Office and H M Revenue and Customs.',
                emailAddress: 'rhodri@scmlaw.co.uk',
                phoneNumberString: '07554886380',
                phoneNumber: +447554886380
            },
            {
                path: 'robert-chudleigh',
                name: 'Robert Chudleigh',
                position: 'Bridgend Office',
                initials: 'RC',
                backgroundImageUrl: '/assets/team/rob-profile.jpg',
                imageUrl: '/assets/team/rob-profile.jpg',
                shortDescription: 'Robert is a specialist criminal defence lawyer experienced in representing individuals charged with the most serious of crimes including murder and manslaughter. His practice encompasses the representation of individuals following arrest at the police station through to the Magistrates’ Court and the Crown Court.',
                fullDescription: 'Robert is a specialist criminal defence lawyer experienced in representing individuals charged with the most serious of crimes including murder and manslaughter. His practice encompasses the representation of individuals following arrest at the police station through to the Magistrates’ Court and the Crown Court. Robert is a duty Solicitor and a Solicitor Advocate. He has experience of conducting Crown Court trials on behalf of defendants charged with such offences as robbery, burglary, theft and drug supply offences. Robert is a fluent Welsh speaker and is able to represent defendants in either English or Welsh. He is regarded as a highly approachable and skilled lawyer.',
                emailAddress: 'robert@scmlaw.co.uk',
                phoneNumberString: '07900560941',
                phoneNumber: +447900560941
            },
            {
                path: 'james-mckenna',
                name: 'James McKenna',
                position: 'Head of Swansea Office',
                initials: 'JM',
                backgroundImageUrl: '/assets/team/james-profile.jpg',
                imageUrl: '/assets/team/james-profile.jpg',
                shortDescription: 'James is a Solicitor Advocate and heads SCM Solicitors Swansea office. James is a duty solicitor and deals with a variety of cases in the police station, Magistrates Court and Crown Court on a day to day basis.',
                fullDescription: 'James is a Solicitor Advocate and heads SCM Solicitors Swansea office. James is a duty solicitor and deals with a variety of cases in the police station, Magistrates Court and Crown Court on a day to day basis. James has expertly prepared and successfully defended clients facing a full array of criminal charges including those who are charged with the most serious allegations including murder, armed robberies, fraud, drug trafficking and sexual offences.  ',
                emailAddress: 'james@scmlaw.co.uk',
                phoneNumberString: '07738703699',
                phoneNumber: +447738703699
            }
        ]; // needs bio // needs bio
        this.associates = [
            {
                path: 'lucas-edwards',
                name: 'Lucas Edwards',
                position: null,
                initials: 'LE',
                backgroundImageUrl: '/assets/team/lucas-profile.jpg',
                imageUrl: '/assets/team/lucas-profile.jpg',
                shortDescription: 'Lucas is a Qualified Higher Court Advocate and Duty Solicitor who specialises in all areas of Criminal Law. Before joining SCM, Lucas worked as an Assistant Solicitor for Lloyd and Rowe Solicitors in Cardiff and thereafter for JA Hughes in Barry.Lucas was later made a Partner at JA Hughes, where he took charge of their Criminal Department.',
                fullDescription: 'Lucas is a Qualified Higher Court Advocate and Duty Solicitor who specialises in all areas of Criminal Law. Before joining SCM, Lucas worked as an Assistant Solicitor for Lloyd and Rowe Solicitors in Cardiff and thereafter for JA Hughes in Barry. Lucas was later made a Partner at JA Hughes, where he took charge of their Criminal Department. Lucas represents clients at the Police Station, Youth Court, Magistrates Court and Crown Court. Lucas has represented clients for a wide range of offences such as Rape, Terrorism and Murder.',
                emailAddress: 'lucas@scmlaw.co.uk',
                phoneNumberString: '07813568339',
                phoneNumber: +447813568339
            }
        ];
        this.duty = [
            {
                path: 'phillip-thomas',
                name: 'Phillip Thomas LLB(Hons)',
                position: null,
                initials: 'PT',
                backgroundImageUrl: '/assets/team/phil-profile.jpg',
                imageUrl: '/assets/team/phil-profile.jpg',
                shortDescription: 'Phillip Thomas, a Specialist Qualified Criminal Lawyer, joined SCM as a Consultant Solicitor at it’s inception in 2016. Before moving to work at SCM, he had many years experience, formerly a Senior Partner and Consultant with Gwyn & Gwyn/Larby Williams (now JCP Solicitors), and also the Sole Principle of Phillip Thomas & Co, a criminal law firm in Bridgend.',
                fullDescription: 'Phillip Thomas, a Specialist Qualified Criminal Lawyer, joined SCM as a Consultant Solicitor at it’s inception in 2016. Before moving to work at SCM, he had many years experience, formerly a Senior Partner and Consultant with Gwyn & Gwyn/Larby Williams (now JCP Solicitors), and also the Sole Principle of Phillip Thomas & Co, a criminal law firm in Bridgend. He has also been a Chairman and Member of local and regional Duty Solicitor Committees. Outside of work, Phil is married, and has three daughters.',
                emailAddress: 'phil@scmlaw.co.uk',
                phoneNumberString: '07976720367',
                phoneNumber: +447976720367
            },
            {
                path: 'richard-adamec',
                name: 'Richard Adamec LLB(Hons)',
                position: null,
                initials: 'DM',
                backgroundImageUrl: '/assets/team/adamec-profile.jpg',
                imageUrl: '/assets/team/adamec-profile.jpg',
                shortDescription: 'Grays Inn Barrister, called 1988. Magistrates legal adviser until 2012 specialising in family and criminal law. Vice chairman Vale Cricket Club.',
                fullDescription: 'Grays Inn Barrister, called 1988. Magistrates legal adviser until 2012 specialising in family and criminal law. Vice chairman Vale Cricket Club.',
                emailAddress: 'richard@scmlaw.co.uk',
                phoneNumberString: '07912747112',
                phoneNumber: +447912747112
            },
            {
                path: 'denny-bryant',
                name: 'Denny Bryant LLB(Hons)',
                position: null,
                initials: 'DB',
                backgroundImageUrl: '/assets/team/denny-profile.jpg',
                imageUrl: '/assets/team/denny-profile.jpg',
                shortDescription: 'Born in the Cynon Valley, grew up in West Wales and now lives in Cardiff. Went to school in Christ College, Brecon then studied law at London University. Completed the Legal Practice course in Cardiff and has been a qualified solicitor since 1998.',
                fullDescription: 'Born in the Cynon Valley, Denny grew up in West Wales and now lives in Cardiff. He went to school in Christ College, Brecon then studied law at London University. Denny completed the Legal Practice course in Cardiff and has been a qualified solicitor since 1998. Denny practices exclusively in the field of Criminal Law. He has been a duty solicitor since 1999, and specialises in all matters of criminal law. He has represented clients in high profile murder cases, rape cases, drug and conspiracy offences, and he undertakes work in the Crown Court, Magistrates Court and the police station.',
                emailAddress: 'denny@scmlaw.co.uk',
                phoneNumberString: '07771234567',
                phoneNumber: +447771234567
            }
        ];
        this.admin = [
            {
                path: '',
                name: 'Jackie James',
                position: 'Bridgend Office',
                initials: 'JA',
                backgroundImageUrl: '/assets/team/jackie-profile.jpg',
                imageUrl: '/assets/team/jackie-profile.jpg',
                shortDescription: '',
                fullDescription: '',
                emailAddress: 'jackie@scmlaw.co.uk',
                phoneNumberString: '',
                phoneNumber: 0
            },
            {
                path: '',
                name: 'Mary Bourke',
                position: 'Bridgend Office',
                initials: 'MA',
                backgroundImageUrl: '/assets/team/mary-profile.jpg',
                imageUrl: '/assets/team/mary-profile.jpg',
                shortDescription: '',
                fullDescription: '',
                emailAddress: 'mary@scmlaw.co.uk',
                phoneNumberString: '',
                phoneNumber: 0
            },
            {
                path: '',
                name: 'Deborah Thomas',
                position: 'Cardiff Office',
                initials: 'DA',
                backgroundImageUrl: '/assets/team/deb-profile.jpg',
                imageUrl: '/assets/team/deb-profile.jpg',
                shortDescription: '',
                fullDescription: '',
                emailAddress: 'deb@scmlaw.co.uk',
                phoneNumberString: '',
                phoneNumber: 0
            }
        ]; // Don't need it // Don't need it // Don't need it // Don't need it // Don't need it // Don't need it // Don't need it // Don't need it // Don't need it
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
    TeamComponent.prototype.goToTeamDetail = function (_urlPath, _name, _position, _initials, _imageUrl, _shortDescription, _fullDescription, _emailAddress, _phoneNumberString, _phoneNumber) {
        // navigate to team detail.
        this._router.navigate(['/team', _urlPath]);
        // pass data to shared storage
        this._dataStorageService.setTeamMember(_urlPath, _name, _position, _initials, _imageUrl, _shortDescription, _fullDescription, _emailAddress, _phoneNumberString, _phoneNumber);
    };
    TeamComponent.prototype.openEmail = function (email) {
        window.location.href = "mailTo:" + email;
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'team',
        template: __webpack_require__("../../../../../src/app/_pages/team/team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_pages/team/team.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]) === "function" && _b || Object])
], TeamComponent);

var _a, _b;
//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ "../../../../../src/app/_pages/team/team.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/_shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data_storage__ = __webpack_require__("../../../../../src/app/_pages/team/data/data.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_detail_team_detail_component__ = __webpack_require__("../../../../../src/app/_pages/team/team-detail/team-detail.component.ts");
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

/***/ "../../../../../src/app/_shared/google-maps/google-maps.component.html":
/***/ (function(module, exports) {

module.exports = "<sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [scrollwheel]=\"false\">\n    <sebm-google-map-marker *ngFor=\"let office of offices\" [latitude]=\"office.latitude\" [longitude]=\"office.longitude\" [iconUrl]=\"'assets/gm-pin--blue.png'\">\n        <sebm-google-map-info-window [disableAutoPan]=\"true\">\n            <div class=\"gm-content\">\n                <div class=\"icon\">\n                    <div class=\"icon--text\">\n                        <p>{{ office.address1 }}</p>\n                        <p>{{ office.address2 }}</p>\n                        <p>{{ office.city }}</p>\n                        <p>{{ office.postcode }}</p>\n                    </div>\n                    <div class=\"icon--image\">\n                        <img src=\"http://www.newyorker.com/wp-content/uploads/2014/12/KONNIKOVA-Open-Office-1200.jpg\" />\n                    </div>\n                </div>\n                <div class=\"gm-content--button\">\n                    <button class=\"icon--button\" (click)=\"navigateToFindUs(office.city)\">More Info</button>\n                </div>\n            </div>\n        </sebm-google-map-info-window>\n    </sebm-google-map-marker>\n</sebm-google-map>"

/***/ }),

/***/ "../../../../../src/app/_shared/google-maps/google-maps.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*------------\nVariables:\n- For use throughout the app.\nTo use any of these you must import this stylesheet into the component stylesheet.\n------------*/\n/*-- typography --*/\n/*-- font family --*/\n.sebm-google-map-container {\n  height: 100%;\n  width: 100%; }\n\n.gm-content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 260px;\n  font-family: \"Helvetica Neue\";\n  margin: 0;\n  padding: 0; }\n  .gm-content .icon {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-pack: center;\n        justify-content: center; }\n    .gm-content .icon--text, .gm-content .icon--image {\n      height: 120px;\n      width: 50%;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center; }\n    .gm-content .icon--image img {\n      max-width: 100%;\n      max-height: 100%;\n      padding-top: 17px; }\n\n.icon--button {\n  width: 100%;\n  margin-top: 20px;\n  font-size: 15px;\n  border: none;\n  color: white;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  background: #3e7ee6;\n  height: 40px; }\n  .icon--button:hover {\n    background-color: #1B5DD1;\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_shared/google-maps/google-maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_storage__ = __webpack_require__("../../../../../src/app/data/data.storage.ts");
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
        template: __webpack_require__("../../../../../src/app/_shared/google-maps/google-maps.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_shared/google-maps/google-maps.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_data_storage__["a" /* DataStorageService */]) === "function" && _b || Object])
], GoogleMapsComponent);

var _a, _b;
//# sourceMappingURL=google-maps.component.js.map

/***/ }),

/***/ "../../../../../src/app/_shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__ = __webpack_require__("../../../../angular2-google-maps/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__google_maps_google_maps_component__ = __webpack_require__("../../../../../src/app/_shared/google-maps/google-maps.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBe--3uk1M3mNAsxPgeHI_RjbfjEvcclFg'
            })
        ],
        exports: [
            // angular
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <header></header>\n    <main>\n        <router-outlet>\n        </router-outlet>\n    </main>\n    <footer></footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
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
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/_shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_layout_module__ = __webpack_require__("../../../../../src/app/_layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pages_module__ = __webpack_require__("../../../../../src/app/_pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_services_services_module__ = __webpack_require__("../../../../../src/app/_pages/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_team_team_module__ = __webpack_require__("../../../../../src/app/_pages/team/team.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__404_not_found_component__ = __webpack_require__("../../../../../src/app/404/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home_component__ = __webpack_require__("../../../../../src/app/_pages/home/home.component.ts");
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

/***/ "../../../../../src/app/data/data.storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
            }, {
                latitude: 51.6187044,
                longitude: -3.939985,
                address1: 'Metropole Chambers',
                address2: 'Salubrious Passage',
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

/***/ "../../../../../src/assets/jumbotron-image.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jumbotron-image.0cd8a2f8db1f0e9180b9.jpg";

/***/ }),

/***/ "../../../../../src/assets/who-we-are.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "who-we-are.329ddedf3c7d1436b3fc.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map