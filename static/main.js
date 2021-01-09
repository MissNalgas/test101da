(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\cleaning\angular\cleaning\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 0, consts: [[1, "footer"], [1, "socials"], [1, "social", "facebook"], [1, "social", "twitter"], [1, "social", "instagram"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Copyright 2021\u00A9 MssnApps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 500px;\n  background-image: url(\"/assets/footer/images/fondo-footer.png\");\n  background-size: cover;\n  background-position: bottom;\n  position: relative;\n}\n\n.socials[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 30px;\n  right: 30px;\n  display: flex;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 30px;\n  left: 30px;\n}\n\n.social[_ngcontent-%COMP%] {\n  border: 1px whitesmoke solid;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin: 10px;\n  background-position: center;\n  background-size: 30px;\n  background-repeat: no-repeat;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n}\n\n.social[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.facebook[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/footer/images/facebook-logo.png\");\n}\n\n.twitter[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/footer/images/twitter-logo.png\");\n}\n\n.instagram[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/footer/images/instagram-logo.svg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwrREFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFFQTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFFQTtFQUVJLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUVJLDBDQUFBO0FBREo7O0FBR0E7RUFFSSxnRUFBQTtBQURKOztBQUdBO0VBRUksK0RBQUE7QUFESjs7QUFHQTtFQUVJLGlFQUFBO0FBREoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlclxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9mb290ZXIvaW1hZ2VzL2ZvbmRvLWZvb3Rlci5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zb2NpYWxzXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY29weXJpZ2h0XHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbn1cclxuLnNvY2lhbFxyXG57XHJcbiAgICBib3JkZXI6IDFweCB3aGl0ZXNtb2tlIHNvbGlkO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxufVxyXG4uc29jaWFsOmhvdmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjIpO1xyXG59XHJcbi5mYWNlYm9va1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2Zvb3Rlci9pbWFnZXMvZmFjZWJvb2stbG9nby5wbmdcIik7XHJcbn1cclxuLnR3aXR0ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9mb290ZXIvaW1hZ2VzL3R3aXR0ZXItbG9nby5wbmdcIik7XHJcbn1cclxuLmluc3RhZ3JhbVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2Zvb3Rlci9pbWFnZXMvaW5zdGFncmFtLWxvZ28uc3ZnXCIpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");





class AppComponent {
    constructor() {
        this.title = 'cleaning';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_landpage_landpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/landpage/landpage.component */ "ggTi");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/form/form.component */ "x83m");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");










/* PrimeNG */





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_11__["CalendarModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__["InputTextareaModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_landpage_landpage_component__WEBPACK_IMPORTED_MODULE_3__["LandpageComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _components_form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_11__["CalendarModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__["InputTextareaModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _pages_landpage_landpage_component__WEBPACK_IMPORTED_MODULE_3__["LandpageComponent"],
                    _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _components_form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    primeng_calendar__WEBPACK_IMPORTED_MODULE_11__["CalendarModule"],
                    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__["InputTextareaModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ggTi":
/*!******************************************************!*\
  !*** ./src/app/pages/landpage/landpage.component.ts ***!
  \******************************************************/
/*! exports provided: LandpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandpageComponent", function() { return LandpageComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/form/form.component */ "x83m");




class LandpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandpageComponent.ɵfac = function LandpageComponent_Factory(t) { return new (t || LandpageComponent)(); };
LandpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LandpageComponent, selectors: [["app-landpage"]], decls: 15, vars: 1, consts: [[1, "cleaning"], [1, "circle"], ["alt", "broom", "src", "/assets/landpage/images/broom.png"], [1, "cln-img"], ["href", "#booking"], [1, "booking"], ["src", "/assets/landpage/images/down-arrow.svg", "alt", "arrow", 1, "down-arrow"]], template: function LandpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Sydney Cleaning Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cleaning Sydney a house at a time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Booking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-form");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@broom", "anything");
    } }, directives: [_components_form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Redressed&display=swap\");\n.cleaning[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 800px;\n  background: #0d3465;\n  background: linear-gradient(90deg, #031122 0%, #0e0752 52%, #0e071b 100%);\n  background: #54358a;\n  background: radial-gradient(circle, #231c63 0%, #1b1550 100%);\n  position: relative;\n  border-bottom-left-radius: 190px;\n  border-bottom-right-radius: 190px;\n  box-shadow: 0px 0px 10px #000;\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rotate-from-top {\n  from {\n    transform-origin: top;\n    transform: rotate(-30deg);\n  }\n  to {\n    transform-origin: top;\n    transform: rotate(28deg);\n  }\n}\n.broom[_ngcontent-%COMP%] {\n  animation: rotate-from-top;\n  animation-duration: 0.8s;\n}\n.circle[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 80px;\n  display: inline-block;\n  animation-name: fade-in;\n  animation-duration: 2s;\n}\n.circle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Pacifico\", cursive;\n  font-family: \"Varela Round\", sans-serif;\n  font-family: \"Redressed\", cursive;\n  color: whitesmoke;\n  text-align: center;\n  font-size: 80px;\n}\n.circle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n.booking[_ngcontent-%COMP%] {\n  background-color: #eb4034;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  position: absolute;\n  top: 100%;\n  margin-top: -75px;\n  margin-left: -75px;\n  border: none;\n  left: 50%;\n  font-size: 25px;\n  box-shadow: #250502 0px 0px 30px;\n  transition: all 0.2s ease-in-out;\n  color: whitesmoke;\n  cursor: pointer;\n}\n.cln-img[_ngcontent-%COMP%] {\n  position: absolute;\n  background-image: url(\"/assets/landpage/images/cleaning.jpg\");\n  width: 400px;\n  height: 450px;\n  bottom: -225px;\n  right: 10%;\n  border: solid whitesmoke 15px;\n  box-shadow: 0px 0px 10px black;\n  transform: rotate(3deg);\n}\n.booking[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.booking[_ngcontent-%COMP%]:hover {\n  background-color: #e7665d;\n}\n.down-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 13px;\n  left: 50%;\n  width: 30px;\n  margin-left: -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYW5kcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2RUFBQTtBQUNBLGlGQUFBO0FBQ0EsOEVBQUE7QUFDUjtFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5RUFBQTtFQUVBLG1CQUFBO0VBQ0EsNkRBQUE7RUFFQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtBQUZKO0FBSUE7RUFDSTtJQUFNLFVBQUE7RUFBUjtFQUNFO0lBQUssVUFBQTtFQUVQO0FBQ0Y7QUFEQTtFQUNJO0lBQ0kscUJBQUE7SUFDQSx5QkFBQTtFQUdOO0VBREU7SUFDSSxxQkFBQTtJQUNBLHdCQUFBO0VBR047QUFDRjtBQURBO0VBRUksMEJBQUE7RUFDQSx3QkFBQTtBQUVKO0FBQUE7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUVKO0FBQUE7RUFFSSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQUE7RUFFSSxpQkFBQTtBQUVKO0FBQUE7RUFFSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQUE7RUFFSSxrQkFBQTtFQUNBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUVKO0FBQUE7RUFFSSxhQUFBO0FBRUo7QUFBQTtFQUVJLHlCQUFBO0FBRUo7QUFBQTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJsYW5kcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1WYXJlbGErUm91bmQmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJlZHJlc3NlZCZkaXNwbGF5PXN3YXAnKTtcclxuLmNsZWFuaW5nXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMyw1MiwxMDEpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMywgMTcsIDM0KSAwJSwgcmdiKDE0LCA3LCA4MikgNTIlLCByZ2IoMTQsIDcsIDI3KSAxMDAlKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODQsNTMsMTM4KTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMzUsMjgsOTksMSkgMCUsICByZ2IoMjcsIDIxLCA4MCkgMTAwJSk7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTkwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTkwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDtcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgZnJvbSB7b3BhY2l0eTogMDt9XHJcbiAgICB0byB7IG9wYWNpdHk6IDE7fVxyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlLWZyb20tdG9wIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC0zMGRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMjhkZWcpO1xyXG4gICAgfVxyXG59XHJcbi5icm9vbVxyXG57XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZS1mcm9tLXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcclxufVxyXG4uY2lyY2xlXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLWluO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxufVxyXG4uY2lyY2xlIGgxXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSZWRyZXNzZWQnLCBjdXJzaXZlO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbn1cclxuLmNpcmNsZSBoM1xyXG57XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4uYm9va2luZ1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI0MDM0O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTc1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTc1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAjMjUwNTAyIDBweCAwcHggMzBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNsbi1pbWdcclxue1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2xhbmRwYWdlL2ltYWdlcy9jbGVhbmluZy5qcGdcIik7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYm90dG9tOiAtMjI1cHg7XHJcbiAgICByaWdodDogMTAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZXNtb2tlIDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggYmxhY2s7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcclxufVxyXG4uYm9va2luZzpmb2N1c1xyXG57XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5ib29raW5nOmhvdmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzY2NWQ7XHJcbn1cclxuLmRvd24tYXJyb3dcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxM3B4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("broom", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => *", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transformOrigin: "top",
                            transform: "rotate(-30deg)"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.4s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transformOrigin: "top",
                            transform: "rotate(28deg)"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.2s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transformOrigin: "top",
                            transform: "rotate(0deg)"
                        })),
                    ])
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LandpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-landpage',
                templateUrl: './landpage.component.html',
                styleUrls: ['./landpage.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("broom", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => *", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    transformOrigin: "top",
                                    transform: "rotate(-30deg)"
                                })),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.4s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    transformOrigin: "top",
                                    transform: "rotate(28deg)"
                                })),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.2s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    transformOrigin: "top",
                                    transform: "rotate(0deg)"
                                })),
                            ])
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class NavbarComponent {
    constructor() {
        this.isShown = false;
        this.onScroll = () => {
            if (window.scrollY > 0) {
                this.isShown = true;
            }
            else {
                this.isShown = false;
            }
        };
    }
    ngOnInit() {
        addEventListener("scroll", this.onScroll);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 5, vars: 1, consts: [[1, "navbar"], ["href", "/about"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@navBar", ctx.isShown ? "show" : "hide");
    } }, styles: [".navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  background-color: #040011;\n  position: fixed;\n  left: 0px;\n  top: -80px;\n  z-index: 999;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  font-size: 25px;\n  text-decoration: none;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 50px;\n  bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVBO0VBRUksaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFFQTtFQUVJLDBCQUFBO0FBQUo7O0FBRUE7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhclxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCAwLCAxNyk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IC04MHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcbi5uYXZiYXIgYVxyXG57XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubmF2YmFyIGE6aG92ZXJcclxue1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLm5hdmJhciB1bFxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNTBweDtcclxuICAgIGJvdHRvbTogMTBweDtcclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("navBar", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("show", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    top: "0px"
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("hide", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    top: "-80px"
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => *", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.2s")
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("navBar", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("show", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            top: "0px"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("hide", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            top: "-80px"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => *", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.2s")
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_landpage_landpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/landpage/landpage.component */ "ggTi");






const routes = [
    { path: "", component: _pages_landpage_landpage_component__WEBPACK_IMPORTED_MODULE_3__["LandpageComponent"] },
    { path: "about", component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x83m":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








class FormComponent {
    constructor() {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.onSubmit = () => {
            console.log(this.contactForm.value);
        };
    }
    ngOnInit() {
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 46, vars: 6, consts: [["id", "booking", 1, "contact-form"], [3, "formGroup", "ngSubmit"], ["for", "firstname"], ["required", "", "id", "firstname", "formControlName", "firstname", "type", "text", "pInputText", ""], ["for", "lastname"], ["required", "", "id", "lastname", "formControlName", "lastname", "type", "text", "pInputText", ""], ["for", "address"], ["required", "", "id", "address", "formControlName", "address", "type", "address", "pInputText", ""], ["for", "phone"], ["required", "", "id", "phone", "formControlName", "phone", "type", "phone", "pInputText", ""], ["for", "date"], ["required", "", "id", "date", "formControlName", "date"], ["for", "time"], ["required", "", "id", "time", "formControlName", "time", "timeOnly", "true"], ["for", "comments"], ["id", "comments", "pInputTextarea", "", "formControlName", "comments", 3, "cols", "rows"], ["type", "submit", 1, "sbmt-button"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Book your appointment right now! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Fill in the formulary to verify availability. Don't worry! We'll call you and make everything easy for you! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "*Firstname:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*Lastname:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "*Pick a date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "p-calendar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*Select a time(24h):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "p-calendar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Comments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", 100)("rows", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 4, ctx.contactForm.value));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__["InputText"], primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["Calendar"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__["InputTextarea"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: [".contact-form[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 300px auto;\n  border: solid 1px #d6d6d6;\n  padding: 60px;\n  border-radius: 10px;\n  color: #333333;\n}\n\n.contact-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.sbmt-button[_ngcontent-%COMP%] {\n  border: 1px gray solid;\n  padding: 8px 15px;\n  font-size: 17px;\n  border-radius: 20px;\n  background-color: transparent;\n  transition: all 0.2s ease-in-out;\n  display: block;\n  margin: 15px auto;\n}\n\n.sbmt-button[_ngcontent-%COMP%]:hover {\n  background-color: #2b2b2b;\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBRUksWUFBQTtBQUFKOztBQUVBO0VBRUksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUVJLHlCQUFBO0VBQ0EsaUJBQUE7QUFBSiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtZm9ybVxyXG57XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgbWFyZ2luOiAzMDBweCBhdXRvO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG59XHJcbi5jb250YWN0LWZvcm0gaDJcclxue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5zYm10LWJ1dHRvblxyXG57XHJcbiAgICBib3JkZXI6IDFweCBncmF5IHNvbGlkO1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbn1cclxuLnNibXQtYnV0dG9uOmhvdmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDMsIDQzKTtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map