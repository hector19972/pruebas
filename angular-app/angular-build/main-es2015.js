(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var _components_preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/preguntas/preguntas.component */ "./src/app/components/preguntas/preguntas.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_politicas_politicas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/politicas/politicas.component */ "./src/app/components/politicas/politicas.component.ts");
/* harmony import */ var _components_qrcodigo_qrcodigo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/qrcodigo/qrcodigo.component */ "./src/app/components/qrcodigo/qrcodigo.component.ts");
/* harmony import */ var _components_policy_list_policy_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/policy-list/policy-list.component */ "./src/app/components/policy-list/policy-list.component.ts");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/registro/registro.component */ "./src/app/components/registro/registro.component.ts");
/* harmony import */ var _components_libro_libro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/libro/libro.component */ "./src/app/components/libro/libro.component.ts");















const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'contacto', component: _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__["ContactoComponent"] },
    { path: 'preguntas', component: _components_preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_4__["PreguntasComponent"] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'reg', component: _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__["RegistroComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'politicas', component: _components_politicas_politicas_component__WEBPACK_IMPORTED_MODULE_8__["PoliticasComponent"] },
    { path: 'qrcodigo', component: _components_qrcodigo_qrcodigo_component__WEBPACK_IMPORTED_MODULE_9__["QrcodigoComponent"] },
    { path: 'CRUD', component: _components_policy_list_policy_list_component__WEBPACK_IMPORTED_MODULE_10__["PolicyListComponent"] },
    { path: 'libro/:id', component: _components_libro_libro_component__WEBPACK_IMPORTED_MODULE_12__["LibroComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");






class AppComponent {
    constructor(servUsrs) {
        this.servUsrs = servUsrs;
        this.title = 'angular-app';
        this.artistas = [];
        this.usuarioLogueado = {
            uid: '',
            nombre: '',
            ApPaterno: '',
            ApMaterno: '',
            correo: '',
            contraseña: '',
            rol: ''
        };
        this.usuario = {
            uid: '',
            nombre: '',
            ApPaterno: '',
            ApMaterno: '',
            correo: '',
            contraseña: '',
            rol: ''
        };
    }
    ngOnInit() {
        /*
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
            this.usuario = this.servUsrs.optenerDatos(uid);
            console.log('1  ', this.usuario);
            console.log('2  ', this.servUsrs.optenerDatos(uid));
            //return usuario;
            this.usuarioLogueado=this.usuario;
            console.log('inicio componentes', this.usuarioLogueado);
          } else {
            // User is signed out.
            // ...
          }
        });*/
    }
    ngOnChanges(changes) {
        // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        // Add '${implements OnChanges}' to the class.
        this.usuarioLogueado = this.servUsrs.optenerUsuario();
        console.log('cambios', this.servUsrs.optenerUsuario());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__["UsuariosService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 0, consts: [[1, "container", "mt-0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__["UsuariosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _pipes_domseguro_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/domseguro.pipe */ "./src/app/pipes/domseguro.pipe.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var _components_preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/preguntas/preguntas.component */ "./src/app/components/preguntas/preguntas.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_politicas_politicas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/politicas/politicas.component */ "./src/app/components/politicas/politicas.component.ts");
/* harmony import */ var _components_qrcodigo_qrcodigo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/qrcodigo/qrcodigo.component */ "./src/app/components/qrcodigo/qrcodigo.component.ts");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/registro/registro.component */ "./src/app/components/registro/registro.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_policy_list_policy_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/policy-list/policy-list.component */ "./src/app/components/policy-list/policy-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_libro_libro_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/libro/libro.component */ "./src/app/components/libro/libro.component.ts");


















// Material








// QrCode

// Firebase









// Mailer
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            // Material
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
            // QRCODE
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_26__["QRCodeModule"],
            // Firebase
            _angular_fire__WEBPACK_IMPORTED_MODULE_27__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_29__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_28__["AngularFireDatabaseModule"],
            // Mailer
            // Formularios
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pipes_domseguro_pipe__WEBPACK_IMPORTED_MODULE_5__["DomseguroPipe"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__["ContactoComponent"],
        _components_preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_11__["PreguntasComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
        _components_politicas_politicas_component__WEBPACK_IMPORTED_MODULE_15__["PoliticasComponent"],
        _components_qrcodigo_qrcodigo_component__WEBPACK_IMPORTED_MODULE_16__["QrcodigoComponent"],
        _components_policy_list_policy_list_component__WEBPACK_IMPORTED_MODULE_30__["PolicyListComponent"],
        _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_17__["RegistroComponent"],
        _components_libro_libro_component__WEBPACK_IMPORTED_MODULE_33__["LibroComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        // Material
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
        // QRCODE
        angularx_qrcode__WEBPACK_IMPORTED_MODULE_26__["QRCodeModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_27__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_28__["AngularFireDatabaseModule"],
        // Mailer
        // Formularios
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pipes_domseguro_pipe__WEBPACK_IMPORTED_MODULE_5__["DomseguroPipe"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__["ContactoComponent"],
                    _components_preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_11__["PreguntasComponent"],
                    _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                    _components_politicas_politicas_component__WEBPACK_IMPORTED_MODULE_15__["PoliticasComponent"],
                    _components_qrcodigo_qrcodigo_component__WEBPACK_IMPORTED_MODULE_16__["QrcodigoComponent"],
                    _components_policy_list_policy_list_component__WEBPACK_IMPORTED_MODULE_30__["PolicyListComponent"],
                    _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_17__["RegistroComponent"],
                    _components_libro_libro_component__WEBPACK_IMPORTED_MODULE_33__["LibroComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    // Material
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
                    // QRCODE
                    angularx_qrcode__WEBPACK_IMPORTED_MODULE_26__["QRCodeModule"],
                    // Firebase
                    _angular_fire__WEBPACK_IMPORTED_MODULE_27__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_29__["environment"].firebaseConfig),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_28__["AngularFireDatabaseModule"],
                    // Mailer
                    // Formularios
                    _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 7, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Somos una empresa sin fines de lucro con el opgetivo de fomentar la lectura de nuestros usuarios. Atraves de esta pagina podras encontrar Diversos libros disponibles en nuestras bibliotecas.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "El nombre de nuestra pagina web ace alucion a el ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Palanaeum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Una biblioteca uvicada en la fantasia literaria de el Archivo de las tormentas.\nEsta establecida como la mas grande de todo Roshar(Planeta donde acontecen los libros)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/contacto/contacto.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_correo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/correo.service */ "./src/app/services/correo.service.ts");





class ContactoComponent {
    constructor(correo) {
        this.correo = correo;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'mensaje': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            'asunto': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ngOnInit() {
    }
    enviarCorreo() {
        console.log('EnviadoCorreo');
        this.mensaje = this.forma.get('mensaje').value;
        this.asunto = this.forma.get('asunto').value;
        let urlapi = `https://api-palanaeum.herokuapp.com/enviar/${this.mensaje}/${this.asunto}`;
        this.correo.enviarCorreo(urlapi).subscribe((data) => {
            console.log(data);
            this.datos = data;
        });
    }
}
ContactoComponent.ɵfac = function ContactoComponent_Factory(t) { return new (t || ContactoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_correo_service__WEBPACK_IMPORTED_MODULE_2__["CorreoService"])); };
ContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoComponent, selectors: [["app-contacto"]], decls: 11, vars: 1, consts: [[1, "example-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "ExampleInput"], ["type", "text", "formControlName", "asunto", 1, "form-control"], ["for", "exampleFormControlTextarea1"], ["formControlName", "mensaje", "id", "exampleFormControlTextarea1", "rows", "5", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function ContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactoComponent_Template_form_ngSubmit_0_listener() { return ctx.enviarCorreo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Asunto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forma);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto',
                templateUrl: './contacto.component.html',
                styleUrls: ['./contacto.component.css']
            }]
    }], function () { return [{ type: _services_correo_service__WEBPACK_IMPORTED_MODULE_2__["CorreoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["politicas"]; };
const _c1 = function () { return ["about"]; };
const _c2 = function () { return ["contacto"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "footer-nav"], [1, "nav-link", 3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Copirigth @ 2020 Palanaeum.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Politicas de privacidad y aviso legal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sobre nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/policy.service */ "./src/app/services/policy.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HomeComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_li_3_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const almacen_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.verLibro(almacen_r1.codigoLibro); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const almacen_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", almacen_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class HomeComponent {
    constructor(policyService, router) {
        this.policyService = policyService;
        this.router = router;
        this.policiesguardar = {
            codigoLibro: '',
            nombre: '',
            autor: '',
            editor: '',
            url: '',
            copias: ''
        };
        this.bandera = true;
    }
    ngOnInit() {
        this.policyService.getPolicies().subscribe((data) => {
            this.policies = data.map((e) => {
                return {
                    codigoLibro: e.payload.doc.id,
                    nombre: e.payload.doc.data()['nombre'],
                    autor: e.payload.doc.data()['autor'],
                    editor: e.payload.doc.data()['editor'],
                    url: e.payload.doc.data()['url'],
                    copias: e.payload.doc.data()['copias'],
                };
            });
        });
    }
    verLibro(item) {
        let libroId;
        libroId = item;
        console.log(item);
        //console.log(this.router);
        this.router.navigate(['/libro', libroId]);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_1__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "row"], [4, "ngFor", "ngForOf"], ["alt", "Responsive image", 1, "img-fluid", "p-1", 3, "src", "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_li_3_Template, 2, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.policies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".root[_ngcontent-%COMP%] {\r\n  --columns: 4;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n  background-color: #182028;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n  display:grid;\r\n  grid-template-columns: repeat(var(--columns),0fr);\r\n  margin: 150px -40px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n  grid-column-end: span .2;\r\n  justify-self: center;\r\n  width: 71%;\r\n  padding-bottom: 71%;\r\n  transform: rotatez(45deg);\r\n  margin-top: -21%;\r\n}\r\n\r\nli[_ngcontent-%COMP%]::before, li[_ngcontent-%COMP%]::after {\r\n  display: block;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  content: '';\r\n}\r\n\r\nli[_ngcontent-%COMP%]::before {\r\n  z-index: -10;\r\n  clip-path: polygon(0 0, 100% 0, 100% 20%, 20% 20%, 20% 100%, 0 100%);\r\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 20%, 20% 20%, 20% 100%, 0 100%);\r\n}\r\n\r\nli[_ngcontent-%COMP%]::after {\r\n  z-index: 10;\r\n  clip-path: polygon(80% 20%, 100% 0, 100% 100%, 0% 100%, 20% 80%, 80% 80%);\r\n  -webkit-clip-path: polygon(80% 20%, 100% 0, 100% 100%, 0% 100%, 20% 80%, 80% 80%);\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(2n){\r\n  grid-column-start:2;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n  background-color: #EEBC1F;\r\n}\r\n\r\nli[_ngcontent-%COMP%]::before{\r\n  background-color: #068D7E;\r\n  background: conic-gradient(#EEBC1F 25%, #068D7E 0 50%, #EEBC1F 0) 100% 100% /180% 180%;\r\n}\r\n\r\nli[_ngcontent-%COMP%]::after{\r\n  background-color: #068D7E;\r\n  background: conic-gradient(#EEBC1F 75%, #068D7E 0) 0 0 /180% 180%;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(2n){\r\n  background-color: #FF5291;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(2n)::before{\r\n  background-color: #4062BB;\r\n  background: conic-gradient(#FF5291 25%, #4062BB 0 50%, #FF5291 0) 100% 100% /180% 180%;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(2n)::after{\r\n  background-color: #4062BB;\r\n  background: conic-gradient(#FF5291 75%, #4062BB 0) 0 0 /180% 180%;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(5n){\r\n  background-color: #068D7E;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(5n)::before{\r\n  background-color: #FF5291;\r\n  background: conic-gradient(#068D7E 25%, #FF5291 0 50%, #068D7E 0) 100% 100% /180% 180%;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(5n)::after{\r\n  background-color: #FF5291;\r\n  background: conic-gradient(#068D7E 75%, #FF5291 0) 0 0 /180% 180%;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(7n), li[_ngcontent-%COMP%]:nth-child(7n-4){\r\n  background-color: #4062BB;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(7n)::before, li[_ngcontent-%COMP%]:nth-child(7n-4)::before{\r\n  background-color: #F8FFE5;\r\n  background: conic-gradient(#4062BB 25%, #F8FFE5 0 50%, #4062BB 0) 100% 100% /180% 180%;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(7n)::after, li[_ngcontent-%COMP%]:nth-child(7n-4)::after{\r\n  background-color: #F8FFE5;\r\n  background: conic-gradient(#4062BB 75%, #F8FFE5 0) 0 0 /180% 180%;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(9n), li[_ngcontent-%COMP%]:nth-child(9n-5){\r\n  background-color: #F8FFE5;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(9n)::before, li[_ngcontent-%COMP%]:nth-child(9n-5)::before{\r\n  background-color: #068D7E;\r\n  background: conic-gradient(#F8FFE5 25%, #068D7E 0 50%, #F8FFE5 0) 100% 100% /180% 180%;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(9n)::after, li[_ngcontent-%COMP%]:nth-child(9n-5)::after{\r\n  background-color: #068D7E;\r\n  background: conic-gradient(#F8FFE5 75%, #068D7E 0) 0 0 /180% 180%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 60%;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translateX(-50%) translateY(-50%) rotatez(-45deg);\r\n  padding-bottom: 15%;\r\n  box-shadow: 5px -5px 10px rgba(0, 0, 0, 0.3);\r\n  transition-property: transform;\r\n  transition-duration: .3s;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]:hover{\r\n  transform: translateX(-60%) translateY(-60%) rotatez(-25deg);\r\n}\r\n\r\n@media (min-width:450px){\r\n  ul[_ngcontent-%COMP%]{\r\n    margin: 150px 40px;\r\n  }\r\n}\r\n\r\n@media (min-width:600px){\r\n  [_ngcontent-%COMP%]:root {\r\n    --columns: 5;\r\n  }\r\n  li[_ngcontent-%COMP%]:nth-child(2n){\r\n    grid-column-start:auto;\r\n  }\r\n  li[_ngcontent-%COMP%]:nth-child(4n-1){\r\n    grid-column-start:2;\r\n  }\r\n}\r\n\r\n@media (min-width:900px){\r\n  [_ngcontent-%COMP%]:root {\r\n    --columns: 7;\r\n  }\r\n  li[_ngcontent-%COMP%]:nth-child(4n-1){\r\n    grid-column-start:auto;\r\n  }\r\n  li[_ngcontent-%COMP%]:nth-child(6n-2){\r\n    grid-column-start:2;\r\n  }\r\n}\r\n\r\n@media (min-width:1200px){\r\n  [_ngcontent-%COMP%]:root {\r\n    --columns: 9;\r\n  }\r\n  li[_ngcontent-%COMP%]:nth-child(6n-2){\r\n    grid-column-start:auto;\r\n  }\r\n  li[_ngcontent-%COMP%]:nth-child(8n-3){\r\n    grid-column-start:2;\r\n  }\r\n}\r\n\r\n@media (min-width:1500px){\r\n  [_ngcontent-%COMP%]:root {\r\n    --columns: 11;\r\n  }\r\n  li[_ngcontent-%COMP%]:nth-child(8n-3){\r\n    grid-column-start:auto;\r\n  }\r\n  li[_ngcontent-%COMP%]:nth-child(10n-4){\r\n    grid-column-start:2;\r\n  }\r\n}\r\n\r\n@media (min-width:1800px){\r\n  [_ngcontent-%COMP%]:root {\r\n    --columns: 13;\r\n  }\r\n  li[_ngcontent-%COMP%]:nth-child(10n-4){\r\n    grid-column-start:auto;\r\n  }\r\n  li[_ngcontent-%COMP%]:nth-child(12n-5){\r\n    grid-column-start:2;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width:2100px){\r\n  [_ngcontent-%COMP%]:root {\r\n    --columns: 15;\r\n  }\r\n  li[_ngcontent-%COMP%]:nth-child(12n-5){\r\n    grid-column-start:auto;\r\n  }\r\n  li[_ngcontent-%COMP%]:nth-child(14n-6){\r\n    grid-column-start:2;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpREFBaUQ7RUFDakQsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9FQUFvRTtFQUNwRSw0RUFBNEU7QUFDOUU7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUVBQXlFO0VBQ3pFLGlGQUFpRjtBQUNuRjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixzRkFBc0Y7QUFDeEY7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUVBQWlFO0FBQ25FOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNGQUFzRjtBQUN4Rjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsc0ZBQXNGO0FBQ3hGOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlFQUFpRTtBQUNuRTs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixzRkFBc0Y7QUFDeEY7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUVBQWlFO0FBQ25FOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNGQUFzRjtBQUN4Rjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1IsNERBQTREO0VBQzVELG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsOEJBQThCO0VBQzlCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDREQUE0RDtBQUM5RDs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFRjs7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdCB7XHJcbiAgLS1jb2x1bW5zOiA0O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODIwMjg7XHJcbn1cclxuXHJcbnVse1xyXG4gIGRpc3BsYXk6Z3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1jb2x1bW5zKSwwZnIpO1xyXG4gIG1hcmdpbjogMTUwcHggLTQwcHg7XHJcbn1cclxuXHJcbmxpe1xyXG4gIGdyaWQtY29sdW1uLWVuZDogc3BhbiAuMjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICB3aWR0aDogNzElO1xyXG4gIHBhZGRpbmctYm90dG9tOiA3MSU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGV6KDQ1ZGVnKTtcclxuICBtYXJnaW4tdG9wOiAtMjElO1xyXG59XHJcblxyXG5saTo6YmVmb3JlLCBsaTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY29udGVudDogJyc7XHJcbn1cclxuXHJcbmxpOjpiZWZvcmUge1xyXG4gIHotaW5kZXg6IC0xMDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMjAlLCAyMCUgMjAlLCAyMCUgMTAwJSwgMCAxMDAlKTtcclxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAyMCUsIDIwJSAyMCUsIDIwJSAxMDAlLCAwIDEwMCUpO1xyXG59XHJcbmxpOjphZnRlciB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDgwJSAyMCUsIDEwMCUgMCwgMTAwJSAxMDAlLCAwJSAxMDAlLCAyMCUgODAlLCA4MCUgODAlKTtcclxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig4MCUgMjAlLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCUgMTAwJSwgMjAlIDgwJSwgODAlIDgwJSk7XHJcbn1cclxuXHJcbmxpOm50aC1jaGlsZCgybil7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6MjtcclxufVxyXG5cclxubGl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFQkMxRjtcclxufVxyXG5saTo6YmVmb3Jle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjhEN0U7XHJcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoI0VFQkMxRiAyNSUsICMwNjhEN0UgMCA1MCUsICNFRUJDMUYgMCkgMTAwJSAxMDAlIC8xODAlIDE4MCU7XHJcbn1cclxubGk6OmFmdGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjhEN0U7XHJcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoI0VFQkMxRiA3NSUsICMwNjhEN0UgMCkgMCAwIC8xODAlIDE4MCU7XHJcbn1cclxuXHJcbmxpOm50aC1jaGlsZCgybil7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNTI5MTtcclxufVxyXG5saTpudGgtY2hpbGQoMm4pOjpiZWZvcmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNjJCQjtcclxuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudCgjRkY1MjkxIDI1JSwgIzQwNjJCQiAwIDUwJSwgI0ZGNTI5MSAwKSAxMDAlIDEwMCUgLzE4MCUgMTgwJTtcclxufVxyXG5saTpudGgtY2hpbGQoMm4pOjphZnRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA2MkJCO1xyXG4gIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KCNGRjUyOTEgNzUlLCAjNDA2MkJCIDApIDAgMCAvMTgwJSAxODAlO1xyXG59XHJcblxyXG5saTpudGgtY2hpbGQoNW4pe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjhEN0U7XHJcbn1cclxubGk6bnRoLWNoaWxkKDVuKTo6YmVmb3Jle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjUyOTE7XHJcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoIzA2OEQ3RSAyNSUsICNGRjUyOTEgMCA1MCUsICMwNjhEN0UgMCkgMTAwJSAxMDAlIC8xODAlIDE4MCU7XHJcbn1cclxubGk6bnRoLWNoaWxkKDVuKTo6YWZ0ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNTI5MTtcclxuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudCgjMDY4RDdFIDc1JSwgI0ZGNTI5MSAwKSAwIDAgLzE4MCUgMTgwJTtcclxufVxyXG5cclxubGk6bnRoLWNoaWxkKDduKSxsaTpudGgtY2hpbGQoN24tNCl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNjJCQjtcclxufVxyXG5saTpudGgtY2hpbGQoN24pOjpiZWZvcmUsbGk6bnRoLWNoaWxkKDduLTQpOjpiZWZvcmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RkZFNTtcclxuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudCgjNDA2MkJCIDI1JSwgI0Y4RkZFNSAwIDUwJSwgIzQwNjJCQiAwKSAxMDAlIDEwMCUgLzE4MCUgMTgwJTtcclxufVxyXG5saTpudGgtY2hpbGQoN24pOjphZnRlcixsaTpudGgtY2hpbGQoN24tNCk6OmFmdGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEZGRTU7XHJcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoIzQwNjJCQiA3NSUsICNGOEZGRTUgMCkgMCAwIC8xODAlIDE4MCU7XHJcbn1cclxuXHJcbmxpOm50aC1jaGlsZCg5biksbGk6bnRoLWNoaWxkKDluLTUpe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEZGRTU7XHJcbn1cclxubGk6bnRoLWNoaWxkKDluKTo6YmVmb3JlLGxpOm50aC1jaGlsZCg5bi01KTo6YmVmb3Jle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjhEN0U7XHJcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoI0Y4RkZFNSAyNSUsICMwNjhEN0UgMCA1MCUsICNGOEZGRTUgMCkgMTAwJSAxMDAlIC8xODAlIDE4MCU7XHJcbn1cclxubGk6bnRoLWNoaWxkKDluKTo6YWZ0ZXIsbGk6bnRoLWNoaWxkKDluLTUpOjphZnRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY4RDdFO1xyXG4gIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KCNGOEZGRTUgNzUlLCAjMDY4RDdFIDApIDAgMCAvMTgwJSAxODAlO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZXooLTQ1ZGVnKTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTUlO1xyXG4gIGJveC1zaGFkb3c6IDVweCAtNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbn1cclxuXHJcbmltZzpob3ZlcntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYwJSkgdHJhbnNsYXRlWSgtNjAlKSByb3RhdGV6KC0yNWRlZyk7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NDUwcHgpe1xyXG4gIHVse1xyXG4gICAgbWFyZ2luOiAxNTBweCA0MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo2MDBweCl7XHJcbiAgOnJvb3Qge1xyXG4gICAgLS1jb2x1bW5zOiA1O1xyXG4gIH1cclxuICBsaTpudGgtY2hpbGQoMm4pe1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6YXV0bztcclxuICB9XHJcbiAgbGk6bnRoLWNoaWxkKDRuLTEpe1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6MjtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6OTAwcHgpe1xyXG4gIDpyb290IHtcclxuICAgIC0tY29sdW1uczogNztcclxuICB9XHJcbiAgbGk6bnRoLWNoaWxkKDRuLTEpe1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6YXV0bztcclxuICB9XHJcbiAgbGk6bnRoLWNoaWxkKDZuLTIpe1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6MjtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXtcclxuICA6cm9vdCB7XHJcbiAgICAtLWNvbHVtbnM6IDk7XHJcbiAgfVxyXG4gIGxpOm50aC1jaGlsZCg2bi0yKXtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OmF1dG87XHJcbiAgfVxyXG4gIGxpOm50aC1jaGlsZCg4bi0zKXtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OjI7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjE1MDBweCl7XHJcbiAgOnJvb3Qge1xyXG4gICAgLS1jb2x1bW5zOiAxMTtcclxuICB9XHJcbiAgbGk6bnRoLWNoaWxkKDhuLTMpe1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6YXV0bztcclxuICB9XHJcbiAgbGk6bnRoLWNoaWxkKDEwbi00KXtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OjI7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjE4MDBweCl7XHJcbiAgOnJvb3Qge1xyXG4gICAgLS1jb2x1bW5zOiAxMztcclxuICB9XHJcbiAgbGk6bnRoLWNoaWxkKDEwbi00KXtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OmF1dG87XHJcbiAgfVxyXG4gIGxpOm50aC1jaGlsZCgxMm4tNSl7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDoyO1xyXG4gIH1cclxuXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6MjEwMHB4KXtcclxuICA6cm9vdCB7XHJcbiAgICAtLWNvbHVtbnM6IDE1O1xyXG4gIH1cclxuICBsaTpudGgtY2hpbGQoMTJuLTUpe1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6YXV0bztcclxuICB9XHJcbiAgbGk6bnRoLWNoaWxkKDE0bi02KXtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OjI7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_1__["PolicyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/libro/libro.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/libro/libro.component.ts ***!
  \*****************************************************/
/*! exports provided: LibroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibroComponent", function() { return LibroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/policy.service */ "./src/app/services/policy.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");






function LibroComponent_mat_card_0_mat_card_header_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policy_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.autor);
} }
function LibroComponent_mat_card_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
} if (rf & 2) {
    const policy_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", policy_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function LibroComponent_mat_card_0_mat_card_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policy_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", policy_r1.editor, " ", policy_r1.copias, " ");
} }
function LibroComponent_mat_card_0_mat_card_actions_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Regresar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LibroComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LibroComponent_mat_card_0_mat_card_header_1_Template, 6, 2, "mat-card-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LibroComponent_mat_card_0_img_2_Template, 1, 1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LibroComponent_mat_card_0_mat_card_content_3_Template, 3, 2, "mat-card-content", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LibroComponent_mat_card_0_mat_card_actions_4_Template, 3, 0, "mat-card-actions", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policy_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", policy_r1.codigoLibro == ctx_r0.idLibro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", policy_r1.codigoLibro == ctx_r0.idLibro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", policy_r1.codigoLibro == ctx_r0.idLibro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", policy_r1.codigoLibro == ctx_r0.idLibro);
} }
class LibroComponent {
    constructor(policyService, router) {
        this.policyService = policyService;
        this.router = router;
        this.router.params.subscribe((params) => {
            this.buscarLibro(params['id']);
            console.log(params['id']);
        });
    }
    buscarLibro(id) {
        console.log("hola " + this.policyService.getLibro(id));
        this.idLibro = id;
        console.log('El primer id del que creo es el librocomponent ' + this.idLibro + " el otro id " + id);
        this.policyService.getPolicies().subscribe((data) => {
            this.policies = data.map((e) => {
                return {
                    codigoLibro: e.payload.doc.id,
                    nombre: e.payload.doc.data()['nombre'],
                    autor: e.payload.doc.data()['autor'],
                    editor: e.payload.doc.data()['editor'],
                    url: e.payload.doc.data()['url'],
                    copias: e.payload.doc.data()['copias'],
                };
            });
        });
        console.log(this.policies);
    }
    ngOnInit() { }
}
LibroComponent.ɵfac = function LibroComponent_Factory(t) { return new (t || LibroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_1__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LibroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LibroComponent, selectors: [["app-libro"]], decls: 1, vars: 1, consts: [["class", "example-card", 4, "ngFor", "ngForOf"], [1, "example-card"], [4, "ngIf"], ["mat-card-image", "", "class", "img-fluid p-1", "alt", "Libro", 3, "src", 4, "ngIf"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "alt", "Libro", 1, "img-fluid", "p-1", 3, "src"], ["mat-button", ""]], template: function LibroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LibroComponent_mat_card_0_Template, 5, 4, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.policies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"]], styles: ["img[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  left: 50%;\r\n  top: 50%;\r\n  padding-bottom: 15%;\r\n  box-shadow: 5px -5px 10px rgba(0, 0, 0, 0.3);\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyby9saWJyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLDRDQUE0Qzs7QUFFOUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpYnJvL2xpYnJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1JTtcclxuICBib3gtc2hhZG93OiA1cHggLTVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-libro',
                templateUrl: './libro.component.html',
                styleUrls: ['./libro.component.css']
            }]
    }], function () { return [{ type: src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_1__["PolicyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");








class LoginComponent {
    constructor(usuarioNuevo, router) {
        this.usuarioNuevo = usuarioNuevo;
        this.router = router;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            'contraseña': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ngOnInit() {
    }
    IngresarConUsuario() {
        this.contraseña = this.forma.get('contraseña').value;
        this.correo = this.forma.get('correo').value;
        this.Ingresar(this.correo, this.contraseña);
    }
    Ingresar(correo, contraseña) {
        console.log(correo);
        this.usuarioNuevo.IniciarSecion(correo, contraseña);
        this.router.navigate(['home']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 12, vars: 1, consts: [[1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-full-width", "basic-container"], ["matInput", "", "type", "text", "formControlName", "correo", 1, "form-control"], ["matInput", "", "type", "text", "formControlName", "contrase\u00F1a", 1, "form-control"], [1, "input-group", "col-md-8"], ["type", "submit", 1, "btn", "btn-outline-primary"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { return ctx.IngresarConUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Correo Electronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Ingresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forma);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".mat-badge-content[_ngcontent-%COMP%]{font-weight:600;font-size:12px;font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:9px}\r\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:24px}\r\n.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\r\n.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\r\n.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\r\n.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\r\n.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font:400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}\r\n.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}\r\n.mat-body-strong[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 12px}\r\n.mat-small[_ngcontent-%COMP%], .mat-caption[_ngcontent-%COMP%]{font:400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%]{font:300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.05em;margin:0 0 56px}\r\n.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]{font:400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.02em;margin:0 0 64px}\r\n.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%]{font:400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.005em;margin:0 0 64px}\r\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%]{font:400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 64px}\r\n.mat-bottom-sheet-container[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}\r\n.mat-button-toggle[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-card[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}\r\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:20px}\r\n.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%]{font-size:14px}\r\n.mat-checkbox[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{line-height:24px}\r\n.mat-chip[_ngcontent-%COMP%]{font-size:14px;font-weight:500}\r\n.mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%]{font-size:18px}\r\n.mat-table[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:500}\r\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}\r\n.mat-calendar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-calendar-body[_ngcontent-%COMP%]{font-size:13px}\r\n.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%]{font-size:14px;font-weight:500}\r\n.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}\r\n.mat-dialog-title[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-expansion-panel-header[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:15px;font-weight:400}\r\n.mat-expansion-panel-content[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-form-field[_ngcontent-%COMP%]{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.34375em}\r\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:150%;line-height:1.125}\r\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:1.5em;width:1.5em}\r\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:1.125em;line-height:1.125}\r\n.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid transparent}\r\n.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34375em) scale(0.75);width:133.3333333333%}\r\n.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34374em) scale(0.75);width:133.3333433333%}\r\n.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-0.84375em;padding-top:.84375em}\r\n.mat-form-field-label[_ngcontent-%COMP%]{top:1.34375em}\r\n.mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.34375em}\r\n.mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.7916666667em)}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}\r\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);-ms-transform:translateY(-1.28125em) scale(0.75);width:133.3333333333%}\r\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);-ms-transform:translateY(-1.28124em) scale(0.75);width:133.3333433333%}\r\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);-ms-transform:translateY(-1.28123em) scale(0.75);width:133.3333533333%}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.28125em}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{margin-top:.5416666667em;top:calc(100% - 1.6666666667em)}\r\n@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28122em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28121em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.2812em) scale(0.75)}}\r\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.25em 0 .75em 0}\r\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.09375em;margin-top:-0.5em}\r\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59375em) scale(0.75);width:133.3333333333%}\r\n.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59374em) scale(0.75);width:133.3333433333%}\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:1em 0 1em 0}\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.84375em;margin-top:-0.25em}\r\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59375em) scale(0.75);width:133.3333333333%}\r\n.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59374em) scale(0.75);width:133.3333433333%}\r\n.mat-grid-tile-header[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]{font-size:14px}\r\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\r\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}\r\ninput.mat-input-element[_ngcontent-%COMP%]{margin-top:-0.0625em}\r\n.mat-menu-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:400}\r\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px}\r\n.mat-radio-button[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-select[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-select-trigger[_ngcontent-%COMP%]{height:1.125em}\r\n.mat-slide-toggle-content[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}\r\n.mat-stepper-vertical[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-step-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}\r\n.mat-step-sub-label-error[_ngcontent-%COMP%]{font-weight:normal}\r\n.mat-step-label-error[_ngcontent-%COMP%]{font-size:14px}\r\n.mat-step-label-selected[_ngcontent-%COMP%]{font-size:14px;font-weight:500}\r\n.mat-tab-group[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}\r\n.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0}\r\n.mat-tooltip[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}\r\n.mat-tooltip-handset[_ngcontent-%COMP%]{font-size:14px;padding-top:8px;padding-bottom:8px}\r\n.mat-list-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-list-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:16px}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:16px}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:12px}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:12px}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}\r\n.mat-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:16px}\r\n.mat-optgroup-label[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-simple-snackbar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px}\r\n.mat-simple-snackbar-action[_ngcontent-%COMP%]{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}\r\n.mat-tree[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{font-weight:400;font-size:14px}\r\n.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}\r\n.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}\r\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}\r\n.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(0)}\r\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}\r\n.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}\r\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}\r\n.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}\r\n.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}\r\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}\r\n.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}\r\n.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);opacity:0}\r\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}\r\n@media screen and (-ms-high-contrast: active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}\r\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}\r\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}\r\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}\r\n.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}\r\n@-webkit-keyframes cdk-text-field-autofill-start{}\r\n@keyframes cdk-text-field-autofill-start{}\r\n@-webkit-keyframes cdk-text-field-autofill-end{}\r\n@keyframes cdk-text-field-autofill-end{}\r\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}\r\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}\r\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}\r\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}\r\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}\r\n.mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\r\n.mat-option[_ngcontent-%COMP%]{color:#fff}\r\n.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled){background:rgba(255,255,255,.04)}\r\n.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(255,255,255,.04)}\r\n.mat-option.mat-active[_ngcontent-%COMP%]{background:rgba(255,255,255,.04);color:#fff}\r\n.mat-option.mat-option-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.5)}\r\n.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#7b1fa2}\r\n.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#69f0ae}\r\n.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#f44336}\r\n.mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(255,255,255,.5)}\r\n.mat-pseudo-checkbox[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-pseudo-checkbox[_ngcontent-%COMP%]::after{color:#303030}\r\n.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{color:#686868}\r\n.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#7b1fa2}\r\n.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#69f0ae}\r\n.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#f44336}\r\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{background:#686868}\r\n.mat-elevation-z0[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z1[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z2[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z3[_ngcontent-%COMP%]{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z4[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z5[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z6[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z7[_ngcontent-%COMP%]{box-shadow:0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z9[_ngcontent-%COMP%]{box-shadow:0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z10[_ngcontent-%COMP%]{box-shadow:0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z11[_ngcontent-%COMP%]{box-shadow:0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z12[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z13[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z14[_ngcontent-%COMP%]{box-shadow:0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z15[_ngcontent-%COMP%]{box-shadow:0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z16[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z17[_ngcontent-%COMP%]{box-shadow:0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z18[_ngcontent-%COMP%]{box-shadow:0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z19[_ngcontent-%COMP%]{box-shadow:0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z20[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z21[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z22[_ngcontent-%COMP%]{box-shadow:0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z23[_ngcontent-%COMP%]{box-shadow:0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z24[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)}\r\n.mat-app-background[_ngcontent-%COMP%]{background-color:#303030;color:#fff}\r\n.mat-theme-loaded-marker[_ngcontent-%COMP%]{display:none}\r\n.mat-autocomplete-panel[_ngcontent-%COMP%]{background:#424242;color:#fff}\r\n.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover){background:#424242}\r\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled){color:#fff}\r\n.mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#7b1fa2}\r\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{outline:solid 1px;border-radius:0}\r\n.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#69f0ae;color:rgba(0,0,0,.87)}\r\n.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#f44336}\r\n.mat-badge[_ngcontent-%COMP%]{position:relative}\r\n.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{display:none}\r\n.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#6e6e6e;color:rgba(255,255,255,.5)}\r\n.mat-badge-content[_ngcontent-%COMP%]{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}\r\n.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%]{transition:none}\r\n.mat-badge-content.mat-badge-active[_ngcontent-%COMP%]{transform:none}\r\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:16px;height:16px;line-height:16px}\r\n.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-8px}\r\n.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-8px}\r\n.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-16px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-16px}\r\n.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-16px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-16px}\r\n.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-8px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-8px}\r\n.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-8px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-8px}\r\n.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:22px;height:22px;line-height:22px}\r\n.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-11px}\r\n.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-11px}\r\n.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-22px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-22px}\r\n.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-22px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-22px}\r\n.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-11px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-11px}\r\n.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-11px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-11px}\r\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:28px;height:28px;line-height:28px}\r\n.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-14px}\r\n.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-14px}\r\n.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-28px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-28px}\r\n.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-28px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-28px}\r\n.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-14px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-14px}\r\n.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-14px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-14px}\r\n.mat-bottom-sheet-container[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12);background:#424242;color:#fff}\r\n.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{color:inherit;background:transparent}\r\n.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]{color:#7b1fa2}\r\n.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]{color:#69f0ae}\r\n.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-button[disabled][disabled][_ngcontent-%COMP%], .mat-icon-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-icon-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-icon-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-icon-button[disabled][disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-stroked-button[disabled][disabled][_ngcontent-%COMP%]{color:rgba(255,255,255,.3)}\r\n.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#7b1fa2}\r\n.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#69f0ae}\r\n.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:transparent}\r\n.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{opacity:.1;background-color:currentColor}\r\n.mat-button-focus-overlay[_ngcontent-%COMP%]{background:#fff}\r\n.mat-stroked-button[_ngcontent-%COMP%]:not([disabled]){border-color:rgba(255,255,255,.12)}\r\n.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{color:#fff;background-color:#424242}\r\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{color:#fff}\r\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{color:#fff}\r\n.mat-flat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-flat-button[disabled][disabled][_ngcontent-%COMP%], .mat-raised-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-raised-button[disabled][disabled][_ngcontent-%COMP%], .mat-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-fab[disabled][disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-mini-fab[disabled][disabled][_ngcontent-%COMP%]{color:rgba(255,255,255,.3)}\r\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{background-color:#7b1fa2}\r\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{background-color:#69f0ae}\r\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-flat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-flat-button[disabled][disabled][_ngcontent-%COMP%], .mat-raised-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-raised-button[disabled][disabled][_ngcontent-%COMP%], .mat-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-fab[disabled][disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-mini-fab[disabled][disabled][_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}\r\n.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\r\n.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}\r\n.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\r\n.mat-stroked-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-flat-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-raised-button[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}\r\n.mat-raised-button[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-fab[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}\r\n.mat-fab[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{box-shadow:none}\r\n.mat-button-toggle[_ngcontent-%COMP%]{color:rgba(255,255,255,.5)}\r\n.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}\r\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:#fff;background:#424242}\r\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:#fff}\r\n.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:solid 1px rgba(255,255,255,.12)}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(255,255,255,.12)}\r\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:none;border-top:solid 1px rgba(255,255,255,.12)}\r\n.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#212121;color:rgba(255,255,255,.7)}\r\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:#fff}\r\n.mat-button-toggle-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.3);background-color:#000}\r\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{background:#424242}\r\n.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#424242}\r\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{border:solid 1px rgba(255,255,255,.12)}\r\n.mat-card[_ngcontent-%COMP%]{background:#424242;color:#fff}\r\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-card-subtitle[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-checkbox-frame[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.7)}\r\n.mat-checkbox-checkmark[_ngcontent-%COMP%]{fill:#303030}\r\n.mat-checkbox-checkmark-path[_ngcontent-%COMP%]{stroke:#303030 !important}\r\n.mat-checkbox-mixedmark[_ngcontent-%COMP%]{background-color:#303030}\r\n.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#7b1fa2}\r\n.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#69f0ae}\r\n.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#686868}\r\n.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%]{border-color:#686868}\r\n.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#fff}\r\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%]{background:#7b1fa2}\r\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%]{background:#69f0ae}\r\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%]{background:#f44336}\r\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]{background-color:#616161;color:#fff}\r\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}\r\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover{opacity:.54}\r\n.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%]{opacity:.4}\r\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after{background:#fff}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#7b1fa2;color:#fff}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]{background-color:#69f0ae;color:rgba(0,0,0,.87)}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);opacity:.4}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}\r\n.mat-table[_ngcontent-%COMP%]{background:#424242}\r\n.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%]{background:inherit}\r\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{border-bottom-color:rgba(255,255,255,.12)}\r\n.mat-header-cell[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{color:#fff}\r\n.mat-calendar-arrow[_ngcontent-%COMP%]{border-top-color:#fff}\r\n.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%]{color:#fff}\r\n.mat-calendar-table-header[_ngcontent-%COMP%]{color:rgba(255,255,255,.5)}\r\n.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after{background:rgba(255,255,255,.12)}\r\n.mat-calendar-body-label[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-calendar-body-cell-content[_ngcontent-%COMP%]{color:#fff;border-color:transparent}\r\n.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){color:rgba(255,255,255,.5)}\r\n.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){background-color:rgba(255,255,255,.04)}\r\n.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){border-color:rgba(255,255,255,.5)}\r\n.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){border-color:rgba(255,255,255,.3)}\r\n.mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#7b1fa2;color:#fff}\r\n.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(123,31,162,.4)}\r\n.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}\r\n.mat-datepicker-content[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);background-color:#424242;color:#fff}\r\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#69f0ae;color:rgba(0,0,0,.87)}\r\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(105,240,174,.4)}\r\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}\r\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}\r\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.4)}\r\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}\r\n.mat-datepicker-content-touch[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-datepicker-toggle-active[_ngcontent-%COMP%]{color:#7b1fa2}\r\n.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%]{color:#69f0ae}\r\n.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-dialog-container[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12);background:#424242;color:#fff}\r\n.mat-divider[_ngcontent-%COMP%]{border-top-color:rgba(255,255,255,.12)}\r\n.mat-divider-vertical[_ngcontent-%COMP%]{border-right-color:rgba(255,255,255,.12)}\r\n.mat-expansion-panel[_ngcontent-%COMP%]{background:#424242;color:#fff}\r\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-action-row[_ngcontent-%COMP%]{border-top-color:rgba(255,255,255,.12)}\r\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]){background:rgba(255,255,255,.04)}\r\n@media(hover: none){.mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#424242}}\r\n.mat-expansion-panel-header-title[_ngcontent-%COMP%]{color:#fff}\r\n.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after{color:rgba(255,255,255,.7)}\r\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:rgba(255,255,255,.3)}\r\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{color:inherit}\r\n.mat-form-field-label[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-hint[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#7b1fa2}\r\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%]{color:#69f0ae}\r\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#69f0ae}\r\n.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#fff}\r\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#7b1fa2}\r\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#69f0ae}\r\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#7b1fa2}\r\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#69f0ae}\r\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}\r\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-error[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.7)}\r\n.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}\r\n.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.7)}\r\n.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}\r\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\r\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.05)}\r\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:rgba(255,255,255,.5)}\r\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(255,255,255,.5)}\r\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:transparent}\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(255,255,255,.3)}\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#fff}\r\n.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#7b1fa2}\r\n.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#69f0ae}\r\n.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(255,255,255,.5)}\r\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(255,255,255,.15)}\r\n.mat-icon.mat-primary[_ngcontent-%COMP%]{color:#7b1fa2}\r\n.mat-icon.mat-accent[_ngcontent-%COMP%]{color:#69f0ae}\r\n.mat-icon.mat-warn[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(255,255,255,.7)}\r\n.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(255,255,255,.5)}\r\n.mat-input-element[_ngcontent-%COMP%]{caret-color:#7b1fa2}\r\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.5)}\r\n.mat-input-element[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.5)}\r\n.mat-input-element[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.5)}\r\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.5)}\r\n.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(255,255,255,.5)}\r\n.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.5)}\r\n.mat-input-element[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-input-element[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:disabled{color:rgba(0,0,0,.38)}\r\n.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#69f0ae}\r\n.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#f44336}\r\n.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{color:#fff}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{color:#fff}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-list-item-disabled[_ngcontent-%COMP%]{background-color:#000}\r\n.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus{background:rgba(255,255,255,.04)}\r\n.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus{background:rgba(255,255,255,.12)}\r\n.mat-menu-panel[_ngcontent-%COMP%]{background:#424242}\r\n.mat-menu-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-menu-item[_ngcontent-%COMP%]{background:transparent;color:#fff}\r\n.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]::after{color:rgba(255,255,255,.5)}\r\n.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-item-submenu-trigger[_ngcontent-%COMP%]::after{color:#fff}\r\n.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]){background:rgba(255,255,255,.04)}\r\n.mat-paginator[_ngcontent-%COMP%]{background:#424242}\r\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%]{border-top:2px solid #fff;border-right:2px solid #fff}\r\n.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%]{border-top:2px solid #fff}\r\n.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.5)}\r\n.mat-progress-bar-background[_ngcontent-%COMP%]{fill:#9c27b0}\r\n.mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#9c27b0}\r\n.mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#7b1fa2}\r\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#b9f6ca}\r\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#b9f6ca}\r\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#69f0ae}\r\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ffcdd2}\r\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ffcdd2}\r\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#f44336}\r\n.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#7b1fa2}\r\n.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#69f0ae}\r\n.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f44336}\r\n.mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.7)}\r\n.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#7b1fa2}\r\n.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#7b1fa2}\r\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#69f0ae}\r\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#69f0ae}\r\n.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#f44336}\r\n.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.5)}\r\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.5)}\r\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%]{color:rgba(255,255,255,.5)}\r\n.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#fff}\r\n.mat-select-value[_ngcontent-%COMP%]{color:#fff}\r\n.mat-select-placeholder[_ngcontent-%COMP%]{color:rgba(255,255,255,.5)}\r\n.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%]{color:rgba(255,255,255,.5)}\r\n.mat-select-arrow[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-select-panel[_ngcontent-%COMP%]{background:#424242}\r\n.mat-select-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple){background:rgba(255,255,255,.12)}\r\n.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#7b1fa2}\r\n.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#69f0ae}\r\n.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:rgba(255,255,255,.5)}\r\n.mat-drawer-container[_ngcontent-%COMP%]{background-color:#303030;color:#fff}\r\n.mat-drawer[_ngcontent-%COMP%]{background-color:#424242;color:#fff}\r\n.mat-drawer.mat-drawer-push[_ngcontent-%COMP%]{background-color:#424242}\r\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side){box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}\r\n.mat-drawer-side[_ngcontent-%COMP%]{border-right:solid 1px rgba(255,255,255,.12)}\r\n.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:solid 1px rgba(255,255,255,.12);border-right:none}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%]{border-left:solid 1px rgba(255,255,255,.12);border-right:none}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(255,255,255,.12)}\r\n.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%]{background-color:rgba(189,189,189,.6)}\r\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#69f0ae}\r\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(105,240,174,.54)}\r\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#69f0ae}\r\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#7b1fa2}\r\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(123,31,162,.54)}\r\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#7b1fa2}\r\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.54)}\r\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#fff}\r\n.mat-slide-toggle-thumb[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12);background-color:#bdbdbd}\r\n.mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.5)}\r\n.mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.3)}\r\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#7b1fa2}\r\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}\r\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#69f0ae}\r\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}\r\n.mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(105,240,174,.2)}\r\n.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.3)}\r\n.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.3)}\r\n.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.3)}\r\n.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}\r\n.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#fff}\r\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.3)}\r\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.3);background-color:transparent}\r\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.3)}\r\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.3)}\r\n.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after{border-color:rgba(255,255,255,.7)}\r\n.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent);background-image:-moz-repeating-linear-gradient(0.0001deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent)}\r\n.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent)}\r\n.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover{background-color:rgba(255,255,255,.04)}\r\n@media(hover: none){.mat-step-header[_ngcontent-%COMP%]:hover{background:none}}\r\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}\r\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.7);color:#fff}\r\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%]{background-color:#7b1fa2;color:#fff}\r\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%]{background-color:transparent;color:#f44336}\r\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%]{color:#fff}\r\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%]{background-color:#424242}\r\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before{border-left-color:rgba(255,255,255,.12)}\r\n.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%]{border-top-color:rgba(255,255,255,.12)}\r\n.mat-sort-header-arrow[_ngcontent-%COMP%]{color:#c6c6c6}\r\n.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%]{border-bottom:1px solid rgba(255,255,255,.12)}\r\n.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%]{border-top:1px solid rgba(255,255,255,.12);border-bottom:none}\r\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{color:#fff}\r\n.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.5)}\r\n.mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}\r\n.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.5)}\r\n.mat-tab-group[class*=mat-background-][_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*=mat-background-][_ngcontent-%COMP%]{border-bottom:none;border-top:none}\r\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(156,39,176,.3)}\r\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#7b1fa2}\r\n.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}\r\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(185,246,202,.3)}\r\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#69f0ae}\r\n.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}\r\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\r\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(156,39,176,.3)}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#7b1fa2}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(185,246,202,.3)}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#69f0ae}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.4)}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.87)}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.4)}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}\r\n.mat-toolbar[_ngcontent-%COMP%]{background:#212121;color:#fff}\r\n.mat-toolbar.mat-primary[_ngcontent-%COMP%]{background:#7b1fa2;color:#fff}\r\n.mat-toolbar.mat-accent[_ngcontent-%COMP%]{background:#69f0ae;color:rgba(0,0,0,.87)}\r\n.mat-toolbar.mat-warn[_ngcontent-%COMP%]{background:#f44336;color:#fff}\r\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:currentColor}\r\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:inherit}\r\n.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:currentColor}\r\n.mat-tooltip[_ngcontent-%COMP%]{background:rgba(97,97,97,.9)}\r\n.mat-tree[_ngcontent-%COMP%]{background:#424242}\r\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{color:#fff}\r\n.mat-snack-bar-container[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background:#fafafa;box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:inherit}\r\n.basic-container[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n\r\n}\r\n.version-info[_ngcontent-%COMP%] {\r\n  font-size: 8pt;\r\n  float: right;\r\n  margin: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwibm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3ByZWJ1aWx0LXRoZW1lcy9wdXJwbGUtZ3JlZW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFFQUFxRTtBQ0FyRSxtQkFBbUIsZUFBZSxDQUFDLGNBQWMsQ0FBQyxnREFBZ0Q7QUFBQyxvQ0FBb0MsYUFBYTtBQUFDLG9DQUFvQyxjQUFjO0FBQUMseUNBQXlDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWU7QUFBQyxzQ0FBc0MsdURBQXVELENBQUMscUJBQXFCLENBQUMsZUFBZTtBQUFDLDZDQUE2Qyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlO0FBQUMsNkNBQTZDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWU7QUFBQywyQkFBMkIsb0VBQW9FLENBQUMsZUFBZTtBQUFDLDJCQUEyQixvRUFBb0UsQ0FBQyxlQUFlO0FBQUMsNkJBQTZCLHVEQUF1RCxDQUFDLHFCQUFxQjtBQUFDLHNDQUFzQyx1REFBdUQsQ0FBQyxxQkFBcUI7QUFBQyw0Q0FBNEMsZUFBZTtBQUFDLHdCQUF3Qix1REFBdUQsQ0FBQyxxQkFBcUI7QUFBQyw4Q0FBOEMseURBQXlELENBQUMsc0JBQXNCLENBQUMsZUFBZTtBQUFDLDhDQUE4Qyx1REFBdUQsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlO0FBQUMsOENBQThDLHVEQUF1RCxDQUFDLHVCQUF1QixDQUFDLGVBQWU7QUFBQyw4Q0FBOEMsdURBQXVELENBQUMscUJBQXFCLENBQUMsZUFBZTtBQUFDLDRCQUE0Qix1REFBdUQsQ0FBQyxxQkFBcUI7QUFBQyw0R0FBNEcsZ0RBQWdELENBQUMsY0FBYyxDQUFDLGVBQWU7QUFBQyxtQkFBbUIsZ0RBQWdEO0FBQUMsVUFBVSxnREFBZ0Q7QUFBQyxnQkFBZ0IsY0FBYyxDQUFDLGVBQWU7QUFBQyxpQ0FBaUMsY0FBYztBQUFDLHFDQUFxQyxjQUFjO0FBQUMsY0FBYyxnREFBZ0Q7QUFBQyx5Q0FBeUMsZ0JBQWdCO0FBQUMsVUFBVSxjQUFjLENBQUMsZUFBZTtBQUFDLCtFQUErRSxjQUFjO0FBQUMsV0FBVyxnREFBZ0Q7QUFBQyxpQkFBaUIsY0FBYyxDQUFDLGVBQWU7QUFBQywyQkFBMkIsY0FBYztBQUFDLGNBQWMsZ0RBQWdEO0FBQUMsbUJBQW1CLGNBQWM7QUFBQyxxREFBcUQsY0FBYyxDQUFDLGVBQWU7QUFBQyw4QkFBOEIsY0FBYyxDQUFDLGVBQWU7QUFBQyxrQkFBa0IsdURBQXVELENBQUMscUJBQXFCO0FBQUMsNEJBQTRCLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlO0FBQUMsNkJBQTZCLHVEQUF1RCxDQUFDLHFCQUFxQjtBQUFDLGdCQUFnQixpQkFBaUIsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsZ0RBQWdELENBQUMscUJBQXFCO0FBQUMsd0JBQXdCLHdCQUF3QjtBQUFDLGtFQUFrRSxjQUFjLENBQUMsaUJBQWlCO0FBQUMsZ0ZBQWdGLFlBQVksQ0FBQyxXQUFXO0FBQUMsb0dBQW9HLGNBQWMsQ0FBQyxpQkFBaUI7QUFBQyxzQkFBc0IsY0FBYyxDQUFDLHFDQUFxQztBQUFDLGtMQUFrTCw0Q0FBNEMsQ0FBQyxxQkFBcUI7QUFBQyx5SEFBeUgsNENBQTRDLENBQUMscUJBQXFCO0FBQUMsOEJBQThCLGNBQWMsQ0FBQyxvQkFBb0I7QUFBQyxzQkFBc0IsYUFBYTtBQUFDLDBCQUEwQixnQkFBZ0I7QUFBQyxrQ0FBa0MsYUFBYSxDQUFDLHdCQUF3QixDQUFDLCtCQUErQjtBQUFDLDBEQUEwRCxxQkFBcUI7QUFBQyx3REFBd0QsaUJBQWlCO0FBQUMsb1BBQW9QLG1GQUFtRixDQUFDLGdEQUFnRCxDQUFDLHFCQUFxQjtBQUFDLGlLQUFpSyxxRkFBcUYsQ0FBQyxnREFBZ0QsQ0FBQyxxQkFBcUI7QUFBQywwSkFBMEoscUZBQXFGLENBQUMsZ0RBQWdELENBQUMscUJBQXFCO0FBQUMsd0RBQXdELGFBQWE7QUFBQyw0REFBNEQsYUFBYTtBQUFDLG9FQUFvRSx3QkFBd0IsQ0FBQywrQkFBK0I7QUFBQyxhQUFhLG9QQUFvUCw0Q0FBNEMsQ0FBQyxpS0FBaUssNENBQTRDLENBQUMsMEpBQTBKLDJDQUEyQyxDQUFDO0FBQUMsc0RBQXNELHVCQUF1QjtBQUFDLHNEQUFzRCxhQUFhLENBQUMsaUJBQWlCO0FBQUMsZ1BBQWdQLDRDQUE0QyxDQUFDLHFCQUFxQjtBQUFDLHdKQUF3Siw0Q0FBNEMsQ0FBQyxxQkFBcUI7QUFBQyx5REFBeUQsbUJBQW1CO0FBQUMseURBQXlELGFBQWEsQ0FBQyxrQkFBa0I7QUFBQyxzUEFBc1AsNENBQTRDLENBQUMscUJBQXFCO0FBQUMsMkpBQTJKLDRDQUE0QyxDQUFDLHFCQUFxQjtBQUFDLDRDQUE0QyxjQUFjO0FBQUMsZ0VBQWdFLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCO0FBQUMsOEZBQThGLGNBQWM7QUFBQyx3QkFBd0Isb0JBQW9CO0FBQUMsZUFBZSxnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZTtBQUFDLDREQUE0RCxnREFBZ0QsQ0FBQyxjQUFjO0FBQUMsa0JBQWtCLGdEQUFnRDtBQUFDLFlBQVksZ0RBQWdEO0FBQUMsb0JBQW9CLGNBQWM7QUFBQywwQkFBMEIsZ0RBQWdEO0FBQUMsNkJBQTZCLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlO0FBQUMsOENBQThDLGdEQUFnRDtBQUFDLGdCQUFnQixjQUFjLENBQUMsZUFBZTtBQUFDLDBCQUEwQixrQkFBa0I7QUFBQyxzQkFBc0IsY0FBYztBQUFDLHlCQUF5QixjQUFjLENBQUMsZUFBZTtBQUFDLGVBQWUsZ0RBQWdEO0FBQUMsNkJBQTZCLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlO0FBQUMsNkdBQTZHLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLFFBQVE7QUFBQyxhQUFhLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsa0JBQWtCO0FBQUMscUJBQXFCLGNBQWMsQ0FBQyxlQUFlLENBQUMsa0JBQWtCO0FBQUMsZUFBZSxnREFBZ0Q7QUFBQyxpQkFBaUIsZ0RBQWdEO0FBQUMsOEJBQThCLGNBQWM7QUFBQyx3Q0FBd0Msa0JBQWtCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUI7QUFBQyx1REFBdUQsY0FBYztBQUFDLGdDQUFnQyxjQUFjO0FBQUMsMENBQTBDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCO0FBQUMseURBQXlELGNBQWM7QUFBQyw4QkFBOEIsZ0RBQWdELENBQUMsY0FBYyxDQUFDLGVBQWU7QUFBQyxxQ0FBcUMsY0FBYztBQUFDLCtDQUErQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHFCQUFxQjtBQUFDLDhEQUE4RCxjQUFjO0FBQUMsdUNBQXVDLGNBQWM7QUFBQyxpREFBaUQsa0JBQWtCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUI7QUFBQyxnRUFBZ0UsY0FBYztBQUFDLHFDQUFxQyxnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZTtBQUFDLFlBQVksZ0RBQWdELENBQUMsY0FBYztBQUFDLG9CQUFvQix1REFBdUQsQ0FBQyxxQkFBcUI7QUFBQyxxQkFBcUIsZ0RBQWdELENBQUMsY0FBYztBQUFDLDRCQUE0QixhQUFhLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsZUFBZTtBQUFDLFVBQVUsZ0RBQWdEO0FBQUMscUNBQXFDLGVBQWUsQ0FBQyxjQUFjO0FBQUMsWUFBWSxlQUFlLENBQUMsaUJBQWlCO0FBQUMsd0JBQXdCLHVCQUF1QjtBQUFDLGlDQUFpQyxnQkFBZ0I7QUFBQyxvQkFBb0IsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsMkRBQTJELENBQUMsa0JBQWtCO0FBQUMsOENBQThDLFlBQVk7QUFBQyxxQkFBcUIsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQjtBQUFDLG1EQUFtRCxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO0FBQUMsdUJBQXVCLGNBQWMsQ0FBQyxZQUFZO0FBQUMsNkJBQTZCLFlBQVk7QUFBQyw0QkFBNEIsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFlBQVk7QUFBQyxrQkFBa0IsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsZUFBZTtBQUFDLHNCQUFzQixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLHlEQUF5RCxDQUFDLFNBQVM7QUFBQyxtREFBbUQsU0FBUztBQUFDLDhDQUE4QyxtREFBbUQsVUFBVSxDQUFDO0FBQUMsMkJBQTJCLDBCQUEwQjtBQUFDLGlHQUFpRyxTQUFTO0FBQUMsNkNBQTZDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLGNBQWM7QUFBQyx3QkFBd0IsY0FBYyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUI7QUFBQyxpREFBeUMsSUFBSSxDQUFDO0FBQTlDLHlDQUF5QyxJQUFJLENBQUM7QUFBQywrQ0FBdUMsSUFBSSxDQUFDO0FBQTVDLHVDQUF1QyxJQUFJLENBQUM7QUFBQyxvREFBb0Qsc0RBQTZDLENBQTdDLDhDQUE4QztBQUFDLDBEQUEwRCxvREFBMkMsQ0FBM0MsNENBQTRDO0FBQUMsK0JBQStCLFdBQVc7QUFBQyx5Q0FBeUMsd0JBQXdCLENBQUMsaUNBQWlDLENBQUMsc0JBQXNCLENBQUMsMEJBQTBCO0FBQUMsaURBQWlELHdCQUF3QixDQUFDLGlDQUFpQyxDQUFDLG1CQUFtQjtBQUFDLG9CQUFvQixxQ0FBcUM7QUFBQyxZQUFZLFVBQVU7QUFBQyx3RkFBd0YsZ0NBQWdDO0FBQUMsNkVBQTZFLGdDQUFnQztBQUFDLHVCQUF1QixnQ0FBZ0MsQ0FBQyxVQUFVO0FBQUMsZ0NBQWdDLDBCQUEwQjtBQUFDLGdFQUFnRSxhQUFhO0FBQUMsK0RBQStELGFBQWE7QUFBQyw2REFBNkQsYUFBYTtBQUFDLG9CQUFvQiwwQkFBMEI7QUFBQywyQ0FBMkMsMEJBQTBCO0FBQUMscUJBQXFCLDBCQUEwQjtBQUFDLDRCQUE0QixhQUFhO0FBQUMsOEJBQThCLGFBQWE7QUFBQywwRkFBMEYsa0JBQWtCO0FBQUMsd0pBQXdKLGtCQUFrQjtBQUFDLG9GQUFvRixrQkFBa0I7QUFBQywwSEFBMEgsa0JBQWtCO0FBQUMsa0JBQWtCLHFIQUFxSDtBQUFDLGtCQUFrQixzSEFBc0g7QUFBQyxrQkFBa0Isc0hBQXNIO0FBQUMsa0JBQWtCLHNIQUFzSDtBQUFDLGtCQUFrQix1SEFBdUg7QUFBQyxrQkFBa0IsdUhBQXVIO0FBQUMsa0JBQWtCLHdIQUF3SDtBQUFDLGtCQUFrQix3SEFBd0g7QUFBQyxrQkFBa0Isd0hBQXdIO0FBQUMsa0JBQWtCLHdIQUF3SDtBQUFDLG1CQUFtQix5SEFBeUg7QUFBQyxtQkFBbUIseUhBQXlIO0FBQUMsbUJBQW1CLHlIQUF5SDtBQUFDLG1CQUFtQix5SEFBeUg7QUFBQyxtQkFBbUIseUhBQXlIO0FBQUMsbUJBQW1CLHlIQUF5SDtBQUFDLG1CQUFtQiwwSEFBMEg7QUFBQyxtQkFBbUIsMEhBQTBIO0FBQUMsbUJBQW1CLDBIQUEwSDtBQUFDLG1CQUFtQiwwSEFBMEg7QUFBQyxtQkFBbUIsMkhBQTJIO0FBQUMsbUJBQW1CLDJIQUEySDtBQUFDLG1CQUFtQiwySEFBMkg7QUFBQyxtQkFBbUIsMkhBQTJIO0FBQUMsbUJBQW1CLDJIQUEySDtBQUFDLG9CQUFvQix3QkFBd0IsQ0FBQyxVQUFVO0FBQUMseUJBQXlCLFlBQVk7QUFBQyx3QkFBd0Isa0JBQWtCLENBQUMsVUFBVTtBQUFDLHNEQUFzRCx1SEFBdUg7QUFBQyw4RUFBOEUsa0JBQWtCO0FBQUMsd0dBQXdHLFVBQVU7QUFBQyxtQkFBbUIsVUFBVSxDQUFDLGtCQUFrQjtBQUFDLDZDQUE2QyxpQkFBaUIsQ0FBQyxlQUFlO0FBQUMscUNBQXFDLGtCQUFrQixDQUFDLHFCQUFxQjtBQUFDLG1DQUFtQyxVQUFVLENBQUMsa0JBQWtCO0FBQUMsV0FBVyxpQkFBaUI7QUFBQyxxQ0FBcUMsWUFBWTtBQUFDLHVDQUF1QyxrQkFBa0IsQ0FBQywwQkFBMEI7QUFBQyxtQkFBbUIsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsc0NBQXNDLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLG1CQUFtQjtBQUFDLG1GQUFtRixlQUFlO0FBQUMsb0NBQW9DLGNBQWM7QUFBQyxvQ0FBb0MsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0I7QUFBQyxvREFBb0QsUUFBUTtBQUFDLG9EQUFvRCxXQUFXO0FBQUMscURBQXFELFVBQVU7QUFBQywrREFBK0QsU0FBUyxDQUFDLFdBQVc7QUFBQyxvREFBb0QsV0FBVztBQUFDLDhEQUE4RCxVQUFVLENBQUMsVUFBVTtBQUFDLHVFQUF1RSxTQUFTO0FBQUMsaUZBQWlGLFNBQVMsQ0FBQyxVQUFVO0FBQUMsc0VBQXNFLFVBQVU7QUFBQyxnRkFBZ0YsVUFBVSxDQUFDLFNBQVM7QUFBQyxxQ0FBcUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0I7QUFBQyxxREFBcUQsU0FBUztBQUFDLHFEQUFxRCxZQUFZO0FBQUMsc0RBQXNELFVBQVU7QUFBQyxnRUFBZ0UsU0FBUyxDQUFDLFdBQVc7QUFBQyxxREFBcUQsV0FBVztBQUFDLCtEQUErRCxVQUFVLENBQUMsVUFBVTtBQUFDLHdFQUF3RSxVQUFVO0FBQUMsa0ZBQWtGLFNBQVMsQ0FBQyxXQUFXO0FBQUMsdUVBQXVFLFdBQVc7QUFBQyxpRkFBaUYsVUFBVSxDQUFDLFVBQVU7QUFBQyxvQ0FBb0MsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0I7QUFBQyxvREFBb0QsU0FBUztBQUFDLG9EQUFvRCxZQUFZO0FBQUMscURBQXFELFVBQVU7QUFBQywrREFBK0QsU0FBUyxDQUFDLFdBQVc7QUFBQyxvREFBb0QsV0FBVztBQUFDLDhEQUE4RCxVQUFVLENBQUMsVUFBVTtBQUFDLHVFQUF1RSxVQUFVO0FBQUMsaUZBQWlGLFNBQVMsQ0FBQyxXQUFXO0FBQUMsc0VBQXNFLFdBQVc7QUFBQyxnRkFBZ0YsVUFBVSxDQUFDLFVBQVU7QUFBQyw0QkFBNEIsMEhBQTBILENBQUMsa0JBQWtCLENBQUMsVUFBVTtBQUFDLGlEQUFpRCxhQUFhLENBQUMsc0JBQXNCO0FBQUMscUZBQXFGLGFBQWE7QUFBQyxrRkFBa0YsYUFBYTtBQUFDLDRFQUE0RSxhQUFhO0FBQUMsMGJBQTBiLDBCQUEwQjtBQUFDLG1LQUFtSyx3QkFBd0I7QUFBQyxnS0FBZ0ssd0JBQXdCO0FBQUMsMEpBQTBKLHdCQUF3QjtBQUFDLDZKQUE2Siw0QkFBNEI7QUFBQyw2R0FBNkcsVUFBVSxDQUFDLDZCQUE2QjtBQUFDLDBCQUEwQixlQUFlO0FBQUMsb0NBQW9DLGtDQUFrQztBQUFDLDJEQUEyRCxVQUFVLENBQUMsd0JBQXdCO0FBQUMsMkdBQTJHLFVBQVU7QUFBQyx1R0FBdUcscUJBQXFCO0FBQUMsK0ZBQStGLFVBQVU7QUFBQyxvakJBQW9qQiwwQkFBMEI7QUFBQywyR0FBMkcsd0JBQXdCO0FBQUMsdUdBQXVHLHdCQUF3QjtBQUFDLCtGQUErRix3QkFBd0I7QUFBQyxvakJBQW9qQixzQ0FBc0M7QUFBQywyTEFBMkwscUNBQXFDO0FBQUMsdUxBQXVMLCtCQUErQjtBQUFDLCtLQUErSyxxQ0FBcUM7QUFBQyxpR0FBaUcscUhBQXFIO0FBQUMsaURBQWlELHNIQUFzSDtBQUFDLHdFQUF3RSx3SEFBd0g7QUFBQywyREFBMkQscUhBQXFIO0FBQUMsbUZBQW1GLHdIQUF3SDtBQUFDLGlJQUFpSSx5SEFBeUg7QUFBQyx1R0FBdUcscUhBQXFIO0FBQUMsdURBQXVELHNIQUFzSDtBQUFDLGlIQUFpSCxlQUFlO0FBQUMsbUJBQW1CLDBCQUEwQjtBQUFDLG9EQUFvRCxzQ0FBc0M7QUFBQyx1Q0FBdUMsVUFBVSxDQUFDLGtCQUFrQjtBQUFDLHdFQUF3RSxxQkFBcUI7QUFBQyxtRkFBbUYsMkNBQTJDO0FBQUMsNkZBQTZGLGdCQUFnQixDQUFDLDRDQUE0QztBQUFDLDhHQUE4RyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQywwQ0FBMEM7QUFBQywyQkFBMkIsd0JBQXdCLENBQUMsMEJBQTBCO0FBQUMsaUVBQWlFLFVBQVU7QUFBQyw0QkFBNEIsMEJBQTBCLENBQUMscUJBQXFCO0FBQUMsa0VBQWtFLGtCQUFrQjtBQUFDLHNEQUFzRCx3QkFBd0I7QUFBQyxpSEFBaUgsc0NBQXNDO0FBQUMsVUFBVSxrQkFBa0IsQ0FBQyxVQUFVO0FBQUMsd0NBQXdDLHNIQUFzSDtBQUFDLHNEQUFzRCxxSEFBcUg7QUFBQyxtQkFBbUIsMEJBQTBCO0FBQUMsb0JBQW9CLGlDQUFpQztBQUFDLHdCQUF3QixZQUFZO0FBQUMsNkJBQTZCLHlCQUF5QjtBQUFDLHdCQUF3Qix3QkFBd0I7QUFBQyw0SEFBNEgsd0JBQXdCO0FBQUMsMEhBQTBILHdCQUF3QjtBQUFDLHNIQUFzSCx3QkFBd0I7QUFBQyxnSkFBZ0osd0JBQXdCO0FBQUMsc0VBQXNFLG9CQUFvQjtBQUFDLDJDQUEyQywwQkFBMEI7QUFBQyxrQ0FBa0MscUJBQXFCO0FBQUMsbUtBQW1LLGtCQUFrQjtBQUFDLGlLQUFpSyxrQkFBa0I7QUFBQyw2SkFBNkosa0JBQWtCO0FBQUMsNEJBQTRCLHdCQUF3QixDQUFDLFVBQVU7QUFBQyw2Q0FBNkMsVUFBVSxDQUFDLFVBQVU7QUFBQywyREFBMkQsc0hBQXNIO0FBQUMsMkVBQTJFLFdBQVc7QUFBQyw4Q0FBOEMsVUFBVTtBQUFDLG1DQUFtQyxlQUFlO0FBQUMsMERBQTBELHdCQUF3QixDQUFDLFVBQVU7QUFBQywyRUFBMkUsVUFBVSxDQUFDLFVBQVU7QUFBQyw4RUFBOEUscUNBQXFDO0FBQUMsdURBQXVELHdCQUF3QixDQUFDLFVBQVU7QUFBQyx3RUFBd0UsVUFBVSxDQUFDLFVBQVU7QUFBQywyRUFBMkUscUNBQXFDO0FBQUMseURBQXlELHdCQUF3QixDQUFDLHFCQUFxQjtBQUFDLDBFQUEwRSxxQkFBcUIsQ0FBQyxVQUFVO0FBQUMsNkVBQTZFLCtCQUErQjtBQUFDLFdBQVcsa0JBQWtCO0FBQUMsdUpBQXVKLGtCQUFrQjtBQUFDLHdGQUF3Rix5Q0FBeUM7QUFBQyxpQkFBaUIsMEJBQTBCO0FBQUMsMkJBQTJCLFVBQVU7QUFBQyxvQkFBb0IscUJBQXFCO0FBQUMsK0hBQStILFVBQVU7QUFBQywyQkFBMkIsMEJBQTBCO0FBQUMsMENBQTBDLGdDQUFnQztBQUFDLHlCQUF5QiwwQkFBMEI7QUFBQyxnQ0FBZ0MsVUFBVSxDQUFDLHdCQUF3QjtBQUFDLDZGQUE2RiwwQkFBMEI7QUFBQyxpV0FBaVcsc0NBQXNDO0FBQUMsMERBQTBELGlDQUFpQztBQUFDLHNGQUFzRixpQ0FBaUM7QUFBQyw0QkFBNEIsd0JBQXdCLENBQUMsVUFBVTtBQUFDLHdEQUF3RCxvQ0FBb0M7QUFBQyxvREFBb0QsK0JBQStCO0FBQUMsd0JBQXdCLHVIQUF1SCxDQUFDLHdCQUF3QixDQUFDLFVBQVU7QUFBQywrREFBK0Qsd0JBQXdCLENBQUMscUJBQXFCO0FBQUMsMkZBQTJGLHFDQUFxQztBQUFDLHVGQUF1RiwwQ0FBMEM7QUFBQyw2REFBNkQsd0JBQXdCLENBQUMsVUFBVTtBQUFDLHlGQUF5RixtQ0FBbUM7QUFBQyxxRkFBcUYsK0JBQStCO0FBQUMsOEJBQThCLHFIQUFxSDtBQUFDLDhCQUE4QixhQUFhO0FBQUMseUNBQXlDLGFBQWE7QUFBQyx1Q0FBdUMsYUFBYTtBQUFDLHNCQUFzQiwySEFBMkgsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVO0FBQUMsYUFBYSxzQ0FBc0M7QUFBQyxzQkFBc0Isd0NBQXdDO0FBQUMscUJBQXFCLGtCQUFrQixDQUFDLFVBQVU7QUFBQyxtREFBbUQsc0hBQXNIO0FBQUMsZ0JBQWdCLHNDQUFzQztBQUFDLG1TQUFtUyxnQ0FBZ0M7QUFBQyxvQkFBb0Isb0dBQW9HLGtCQUFrQixDQUFDO0FBQUMsa0NBQWtDLFVBQVU7QUFBQyx3RUFBd0UsMEJBQTBCO0FBQUMsZ0RBQWdELDBCQUEwQjtBQUFDLDBLQUEwSyxhQUFhO0FBQUMsc0JBQXNCLDBCQUEwQjtBQUFDLFVBQVUsMEJBQTBCO0FBQUMsa0RBQWtELGFBQWE7QUFBQyw2REFBNkQsYUFBYTtBQUFDLDJEQUEyRCxhQUFhO0FBQUMsNkNBQTZDLGFBQWE7QUFBQyx1QkFBdUIscUJBQXFCO0FBQUMsbURBQW1ELHdCQUF3QjtBQUFDLDhEQUE4RCx3QkFBd0I7QUFBQyw0REFBNEQsd0JBQXdCO0FBQUMsNkdBQTZHLGFBQWE7QUFBQyx3SEFBd0gsYUFBYTtBQUFDLHNIQUFzSCxhQUFhO0FBQUMsNkRBQTZELGFBQWE7QUFBQyxxS0FBcUssYUFBYTtBQUFDLHVJQUF1SSx3QkFBd0I7QUFBQyxXQUFXLGFBQWE7QUFBQyx3REFBd0QsMEJBQTBCO0FBQUMsNENBQTRDLDBCQUEwQjtBQUFDLDREQUE0RCxxQ0FBcUM7QUFBQyxvRkFBb0YscUhBQXFILENBQUMsd0JBQXdCLENBQUMsMEJBQTBCO0FBQUMsOERBQThELHFDQUFxQztBQUFDLHNGQUFzRixxSEFBcUgsQ0FBQyx3QkFBd0IsQ0FBQywwQkFBMEI7QUFBQyxxREFBcUQscUNBQXFDO0FBQUMsNkVBQTZFLHNDQUFzQztBQUFDLGtFQUFrRSxxQ0FBcUM7QUFBQyw4RUFBOEUsMEJBQTBCO0FBQUMsMEZBQTBGLDRCQUE0QjtBQUFDLDJEQUEyRCwwQkFBMEI7QUFBQyxpRUFBaUUsVUFBVTtBQUFDLDZFQUE2RSxhQUFhO0FBQUMsd0ZBQXdGLGFBQWE7QUFBQyxzRkFBc0YsYUFBYTtBQUFDLCtHQUErRyxhQUFhO0FBQUMsaUZBQWlGLDBCQUEwQjtBQUFDLG1GQUFtRiwyQkFBMkI7QUFBQyxzQkFBc0IsYUFBYTtBQUFDLHFCQUFxQixhQUFhO0FBQUMsbUJBQW1CLGFBQWE7QUFBQyxvRUFBb0UsMEJBQTBCO0FBQUMsd0hBQXdILDBCQUEwQjtBQUFDLG1CQUFtQixtQkFBbUI7QUFBQyxxQ0FBZ0MsMEJBQTBCO0FBQTFELDBDQUFnQywwQkFBMEI7QUFBMUQsZ0NBQWdDLDBCQUEwQjtBQUFDLHFDQUFxQywwQkFBMEI7QUFBQyw4Q0FBOEMsMEJBQTBCO0FBQUMseUNBQXlDLDBCQUEwQjtBQUFDLDBCQUEwQixxQkFBcUI7QUFBQyxtQ0FBbUMscUJBQXFCO0FBQUMsK0JBQStCLG1CQUFtQjtBQUFDLHdFQUF3RSxtQkFBbUI7QUFBQywyRkFBMkYsYUFBYTtBQUFDLDhCQUE4QixVQUFVO0FBQUMsZ0NBQWdDLFVBQVU7QUFBQyw4QkFBOEIsMEJBQTBCO0FBQUMsd0JBQXdCLHFCQUFxQjtBQUFDLGdNQUFnTSxnQ0FBZ0M7QUFBQywrR0FBK0csZ0NBQWdDO0FBQUMsZ0JBQWdCLGtCQUFrQjtBQUFDLDhDQUE4Qyx1SEFBdUg7QUFBQyxlQUFlLHNCQUFzQixDQUFDLFVBQVU7QUFBQyx5REFBeUQsMEJBQTBCO0FBQUMsd0VBQXdFLFVBQVU7QUFBQyx1TEFBdUwsZ0NBQWdDO0FBQUMsZUFBZSxrQkFBa0I7QUFBQyw0REFBNEQsMEJBQTBCO0FBQUMsa0RBQWtELHlCQUF5QixDQUFDLDJCQUEyQjtBQUFDLHlDQUF5Qyx5QkFBeUI7QUFBQyx1TUFBdU0saUNBQWlDO0FBQUMsNkJBQTZCLFlBQVk7QUFBQyx5QkFBeUIsd0JBQXdCO0FBQUMsOEJBQThCLHdCQUF3QjtBQUFDLDBEQUEwRCxZQUFZO0FBQUMsc0RBQXNELHdCQUF3QjtBQUFDLDJEQUEyRCx3QkFBd0I7QUFBQyx3REFBd0QsWUFBWTtBQUFDLG9EQUFvRCx3QkFBd0I7QUFBQyx5REFBeUQsd0JBQXdCO0FBQUMsaURBQWlELGNBQWM7QUFBQyx1RUFBdUUsY0FBYztBQUFDLG1FQUFtRSxjQUFjO0FBQUMsd0JBQXdCLGlDQUFpQztBQUFDLHdFQUF3RSxvQkFBb0I7QUFBQywyU0FBMlMsd0JBQXdCO0FBQUMsdUVBQXVFLG9CQUFvQjtBQUFDLHVTQUF1Uyx3QkFBd0I7QUFBQyxxRUFBcUUsb0JBQW9CO0FBQUMsK1JBQStSLHdCQUF3QjtBQUFDLDRJQUE0SSxpQ0FBaUM7QUFBQyx3SUFBd0kscUNBQXFDO0FBQUMsOERBQThELDBCQUEwQjtBQUFDLHNDQUFzQyxxQkFBcUI7QUFBQyxrQkFBa0IsVUFBVTtBQUFDLHdCQUF3QiwwQkFBMEI7QUFBQyx1Q0FBdUMsMEJBQTBCO0FBQUMsa0JBQWtCLDBCQUEwQjtBQUFDLGtCQUFrQixrQkFBa0I7QUFBQyxnREFBZ0QsdUhBQXVIO0FBQUMscUVBQXFFLGdDQUFnQztBQUFDLDBEQUEwRCxhQUFhO0FBQUMseURBQXlELGFBQWE7QUFBQyx1REFBdUQsYUFBYTtBQUFDLGlFQUFpRSxhQUFhO0FBQUMsa0VBQWtFLDBCQUEwQjtBQUFDLHNCQUFzQix3QkFBd0IsQ0FBQyxVQUFVO0FBQUMsWUFBWSx3QkFBd0IsQ0FBQyxVQUFVO0FBQUMsNEJBQTRCLHdCQUF3QjtBQUFDLGtDQUFrQywwSEFBMEg7QUFBQyxpQkFBaUIsNENBQTRDO0FBQUMsZ0NBQWdDLDJDQUEyQyxDQUFDLGlCQUFpQjtBQUFDLDJCQUEyQiwyQ0FBMkMsQ0FBQyxpQkFBaUI7QUFBQywwQ0FBMEMsZ0JBQWdCLENBQUMsNENBQTRDO0FBQUMsc0NBQXNDLHFDQUFxQztBQUFDLHNEQUFzRCx3QkFBd0I7QUFBQyxvREFBb0Qsc0NBQXNDO0FBQUMsa0RBQWtELHdCQUF3QjtBQUFDLGtFQUFrRSx3QkFBd0I7QUFBQyxnRUFBZ0UscUNBQXFDO0FBQUMsOERBQThELHdCQUF3QjtBQUFDLCtEQUErRCx3QkFBd0I7QUFBQyw2REFBNkQsb0NBQW9DO0FBQUMsMkRBQTJELHdCQUF3QjtBQUFDLHdEQUF3RCxxQkFBcUI7QUFBQyx3QkFBd0Isc0hBQXNILENBQUMsd0JBQXdCO0FBQUMsc0JBQXNCLHFDQUFxQztBQUFDLDZCQUE2QixxQ0FBcUM7QUFBQyx3R0FBd0csd0JBQXdCO0FBQUMsMENBQTBDLFVBQVU7QUFBQyxxR0FBcUcsd0JBQXdCO0FBQUMseUNBQXlDLHFCQUFxQjtBQUFDLCtGQUErRix3QkFBd0I7QUFBQyx1Q0FBdUMsVUFBVTtBQUFDLHVCQUF1QixxQ0FBcUM7QUFBQyx5RkFBeUYscUNBQXFDO0FBQUMscUlBQXFJLHFDQUFxQztBQUFDLHdEQUF3RCxxQ0FBcUM7QUFBQyw2Q0FBNkMsc0NBQXNDO0FBQUMsb0pBQW9KLHFCQUFxQjtBQUFDLDRLQUE0SyxxQ0FBcUM7QUFBQyw2RUFBNkUsaUNBQWlDLENBQUMsNEJBQTRCO0FBQUMsNEtBQTRLLGlDQUFpQztBQUFDLG9OQUFvTixpQ0FBaUM7QUFBQyxpREFBaUQsaUNBQWlDO0FBQUMseUNBQXlDLHdJQUF3SSxDQUFDLDhJQUE4STtBQUFDLHVDQUF1Qyx5SUFBeUk7QUFBQyxrR0FBa0csc0NBQXNDO0FBQUMsb0JBQW9CLHVCQUF1QixlQUFlLENBQUM7QUFBQyxxRUFBcUUsMEJBQTBCO0FBQUMsZ0NBQWdDLHFDQUFxQyxDQUFDLFVBQVU7QUFBQywrSEFBK0gsd0JBQXdCLENBQUMsVUFBVTtBQUFDLDRDQUE0Qyw0QkFBNEIsQ0FBQyxhQUFhO0FBQUMsdURBQXVELFVBQVU7QUFBQyxzREFBc0QsYUFBYTtBQUFDLDhDQUE4Qyx3QkFBd0I7QUFBQyxtQ0FBbUMsdUNBQXVDO0FBQUMsMEdBQTBHLHNDQUFzQztBQUFDLHVCQUF1QixhQUFhO0FBQUMsaUNBQWlDLDZDQUE2QztBQUFDLCtGQUErRiwwQ0FBMEMsQ0FBQyxrQkFBa0I7QUFBQyw2QkFBNkIsVUFBVTtBQUFDLCtEQUErRCwwQkFBMEI7QUFBQyxtQ0FBbUMsaUJBQWlCO0FBQUMsdUVBQXVFLGlDQUFpQztBQUFDLGdHQUFnRyxrQkFBa0IsQ0FBQyxlQUFlO0FBQUMsZ3JCQUFnckIsb0NBQW9DO0FBQUMsa0ZBQWtGLHdCQUF3QjtBQUFDLGdJQUFnSSxxQkFBcUI7QUFBQyx3cUJBQXdxQixxQ0FBcUM7QUFBQyxnRkFBZ0Ysd0JBQXdCO0FBQUMsNEhBQTRILGdDQUFnQztBQUFDLHdwQkFBd3BCLHFDQUFxQztBQUFDLDRFQUE0RSx3QkFBd0I7QUFBQyxvSEFBb0gscUJBQXFCO0FBQUMsd3dCQUF3d0Isb0NBQW9DO0FBQUMsOFZBQThWLHdCQUF3QjtBQUFDLHNOQUFzTixVQUFVO0FBQUMsMFJBQTBSLDBCQUEwQjtBQUFDLG9KQUFvSixpQkFBaUI7QUFBQyw0TkFBNE4saUNBQWlDO0FBQUMsc0hBQXNILHNDQUFzQztBQUFDLGd3QkFBZ3dCLHFDQUFxQztBQUFDLHdWQUF3Vix3QkFBd0I7QUFBQyxrTkFBa04scUJBQXFCO0FBQUMsc1JBQXNSLG9CQUFvQjtBQUFDLGtKQUFrSiw0QkFBNEI7QUFBQywwTkFBME4sMkJBQTJCO0FBQUMsb0hBQW9ILGdDQUFnQztBQUFDLGd2QkFBZ3ZCLHFDQUFxQztBQUFDLDRVQUE0VSx3QkFBd0I7QUFBQywwTUFBME0sVUFBVTtBQUFDLDhRQUE4USwwQkFBMEI7QUFBQyw4SUFBOEksaUJBQWlCO0FBQUMsc05BQXNOLGlDQUFpQztBQUFDLGdIQUFnSCxzQ0FBc0M7QUFBQyxhQUFhLGtCQUFrQixDQUFDLFVBQVU7QUFBQyx5QkFBeUIsa0JBQWtCLENBQUMsVUFBVTtBQUFDLHdCQUF3QixrQkFBa0IsQ0FBQyxxQkFBcUI7QUFBQyxzQkFBc0Isa0JBQWtCLENBQUMsVUFBVTtBQUFDLDRIQUE0SCw2QkFBNkI7QUFBQyw0TUFBNE0sYUFBYTtBQUFDLGdDQUFnQyx3QkFBd0I7QUFBQyxhQUFhLDRCQUE0QjtBQUFDLFVBQVUsa0JBQWtCO0FBQUMscUNBQXFDLFVBQVU7QUFBQyx5QkFBeUIscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsd0hBQXdIO0FBQUMsNEJBQTRCLGFBQWE7QURHbmtnRTtFQUNFLGFBQWE7O0FBRWY7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypAaW1wb3J0ICcvQGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2RlZXBwdXJwbGUtYW1iZXIuY3NzJzsqL1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL3B1cnBsZS1ncmVlbi5jc3MnO1xyXG5cclxuLmJhc2ljLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuXHJcbn1cclxuLnZlcnNpb24taW5mbyB7XHJcbiAgZm9udC1zaXplOiA4cHQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogOHB4O1xyXG59XHJcbiIsIi5tYXQtYmFkZ2UtY29udGVudHtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjlweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6MjRweH0ubWF0LWgxLC5tYXQtaGVhZGxpbmUsLm1hdC10eXBvZ3JhcGh5IGgxe2ZvbnQ6NDAwIDI0cHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDIsLm1hdC10aXRsZSwubWF0LXR5cG9ncmFwaHkgaDJ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oMywubWF0LXN1YmhlYWRpbmctMiwubWF0LXR5cG9ncmFwaHkgaDN7Zm9udDo0MDAgMTZweC8yOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNCwubWF0LXN1YmhlYWRpbmctMSwubWF0LXR5cG9ncmFwaHkgaDR7Zm9udDo0MDAgMTVweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNSwubWF0LXR5cG9ncmFwaHkgaDV7Zm9udDo0MDAgY2FsYygxNHB4ICogMC44MykvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1oNiwubWF0LXR5cG9ncmFwaHkgaDZ7Zm9udDo0MDAgY2FsYygxNHB4ICogMC42NykvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1ib2R5LXN0cm9uZywubWF0LWJvZHktMntmb250OjUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtYm9keSwubWF0LWJvZHktMSwubWF0LXR5cG9ncmFwaHl7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWJvZHkgcCwubWF0LWJvZHktMSBwLC5tYXQtdHlwb2dyYXBoeSBwe21hcmdpbjowIDAgMTJweH0ubWF0LXNtYWxsLC5tYXQtY2FwdGlvbntmb250OjQwMCAxMnB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZGlzcGxheS00LC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktNHtmb250OjMwMCAxMTJweC8xMTJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzotMC4wNWVtO21hcmdpbjowIDAgNTZweH0ubWF0LWRpc3BsYXktMywubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTN7Zm9udDo0MDAgNTZweC81NnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOi0wLjAyZW07bWFyZ2luOjAgMCA2NHB4fS5tYXQtZGlzcGxheS0yLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMntmb250OjQwMCA0NXB4LzQ4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6LTAuMDA1ZW07bWFyZ2luOjAgMCA2NHB4fS5tYXQtZGlzcGxheS0xLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtmb250OjQwMCAzNHB4LzQwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowIDAgNjRweH0ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXJ7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWJ1dHRvbiwubWF0LXJhaXNlZC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9uLC5tYXQtZmxhdC1idXR0b24sLm1hdC1mYWIsLm1hdC1taW5pLWZhYntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1idXR0b24tdG9nZ2xle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2FyZHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjI0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZToyMHB4fS5tYXQtY2FyZC1zdWJ0aXRsZSwubWF0LWNhcmQtY29udGVudHtmb250LXNpemU6MTRweH0ubWF0LWNoZWNrYm94e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWx7bGluZS1oZWlnaHQ6MjRweH0ubWF0LWNoaXB7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2hpcCAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbiwubWF0LWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbntmb250LXNpemU6MThweH0ubWF0LXRhYmxle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtaGVhZGVyLWNlbGx7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2ZvbnQtc2l6ZToxNHB4fS5tYXQtY2FsZW5kYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1jYWxlbmRhci1ib2R5e2ZvbnQtc2l6ZToxM3B4fS5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCwubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b257Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoe2ZvbnQtc2l6ZToxMXB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LWRpYWxvZy10aXRsZXtmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo0MDB9Lm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudHtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZm9ybS1maWVsZHtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS4xMjU7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbntmb250LXNpemU6MTUwJTtsaW5lLWhlaWdodDoxLjEyNX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9ue2hlaWdodDoxLjVlbTt3aWR0aDoxLjVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb257aGVpZ2h0OjEuMTI1ZW07bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjVlbSAwO2JvcmRlci10b3A6Ljg0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc1ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzMzMzMzMzJX0ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMzQzNzRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye3RvcDotMC44NDM3NWVtO3BhZGRpbmctdG9wOi44NDM3NWVtfS5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7Zm9udC1zaXplOjc1JTttYXJnaW4tdG9wOi42NjY2NjY2NjY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNzkxNjY2NjY2N2VtKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouNDM3NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxMDJweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIzZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzNTMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjI4MTI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye21hcmdpbi10b3A6LjU0MTY2NjY2NjdlbTt0b3A6Y2FsYygxMDAlIC0gMS42NjY2NjY2NjY3ZW0pfUBtZWRpYSBwcmludHsubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjJlbSkgc2NhbGUoMC43NSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyMWVtKSBzY2FsZSgwLjc1KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMmVtKSBzY2FsZSgwLjc1KX19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouMjVlbSAwIC43NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMDkzNzVlbTttYXJnaW4tdG9wOi0wLjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC41OTM3NWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC41OTM3NGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzoxZW0gMCAxZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS44NDM3NWVtO21hcmdpbi10b3A6LTAuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1ncmlkLXRpbGUtaGVhZGVyLC5tYXQtZ3JpZC10aWxlLWZvb3Rlcntmb250LXNpemU6MTRweH0ubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lLC5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksLm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH1pbnB1dC5tYXQtaW5wdXQtZWxlbWVudHttYXJnaW4tdG9wOi0wLjA2MjVlbX0ubWF0LW1lbnUtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9Lm1hdC1wYWdpbmF0b3IsLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHh9Lm1hdC1yYWRpby1idXR0b257Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3R7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3QtdHJpZ2dlcntoZWlnaHQ6MS4xMjVlbX0ubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtc3RlcHBlci12ZXJ0aWNhbCwubWF0LXN0ZXBwZXItaG9yaXpvbnRhbHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXN0ZXAtbGFiZWx7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3J7Zm9udC13ZWlnaHQ6bm9ybWFsfS5tYXQtc3RlcC1sYWJlbC1lcnJvcntmb250LXNpemU6MTRweH0ubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWR7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdGFiLWdyb3Vwe2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWxpbmt7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdG9vbGJhciwubWF0LXRvb2xiYXIgaDEsLm1hdC10b29sYmFyIGgyLC5tYXQtdG9vbGJhciBoMywubWF0LXRvb2xiYXIgaDQsLm1hdC10b29sYmFyIGg1LC5tYXQtdG9vbGJhciBoNntmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowfS5tYXQtdG9vbHRpcHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTBweDtwYWRkaW5nLXRvcDo2cHg7cGFkZGluZy1ib3R0b206NnB4fS5tYXQtdG9vbHRpcC1oYW5kc2V0e2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHh9Lm1hdC1saXN0LWl0ZW17Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1saXN0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTZweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxNnB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb257Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtc3ViaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTZweH0ubWF0LW9wdGdyb3VwLWxhYmVse2ZvbnQ6NTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1zaW1wbGUtc25hY2tiYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2xpbmUtaGVpZ2h0OjE7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo1MDB9Lm1hdC10cmVle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtdHJlZS1ub2RlLC5tYXQtbmVzdGVkLXRyZWUtbm9kZXtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjE0cHh9Lm1hdC1yaXBwbGV7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXQtcmlwcGxlOm5vdCg6ZW1wdHkpe3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfS5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVke292ZXJmbG93OnZpc2libGV9Lm1hdC1yaXBwbGUtZWxlbWVudHtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246b3BhY2l0eSx0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO3RyYW5zZm9ybTpzY2FsZSgwKX0uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtcmlwcGxlLWVsZW1lbnR7ZGlzcGxheTpub25lfS5jZGstdmlzdWFsbHktaGlkZGVue2JvcmRlcjowO2NsaXA6cmVjdCgwIDAgMCAwKTtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O291dGxpbmU6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX0uY2RrLW92ZXJsYXktY29udGFpbmVyLC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHl7ZGlzcGxheTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5jZGstb3ZlcmxheS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO29wYWNpdHk6MH0uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjF9QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpey5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjZ9fS5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMzIpfS5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjB9LmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjFweDttaW4taGVpZ2h0OjFweH0uY2RrLWdsb2JhbC1zY3JvbGxibG9ja3twb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnR7LyohKi99QGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR7LyohKi99LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxse2FuaW1hdGlvbjpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXN9LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpe2FuaW1hdGlvbjpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZXtyZXNpemU6bm9uZX10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5ne3BhZGRpbmc6MnB4IDAgIWltcG9ydGFudDtib3gtc2l6aW5nOmNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG8gIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW4gIWltcG9ydGFudH10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3h7cGFkZGluZzoycHggMCAhaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ggIWltcG9ydGFudDtoZWlnaHQ6MCAhaW1wb3J0YW50fS5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LW9wdGlvbntjb2xvcjojZmZmfS5tYXQtb3B0aW9uOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksLm1hdC1vcHRpb246Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjA0KX0ubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMDQpfS5tYXQtb3B0aW9uLm1hdC1hY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC4wNCk7Y29sb3I6I2ZmZn0ubWF0LW9wdGlvbi5tYXQtb3B0aW9uLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpfS5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojN2IxZmEyfS5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiM2OWYwYWV9Lm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiNmNDQzMzZ9Lm1hdC1vcHRncm91cC1sYWJlbHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KX0ubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSl9Lm1hdC1wc2V1ZG8tY2hlY2tib3h7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyl9Lm1hdC1wc2V1ZG8tY2hlY2tib3g6OmFmdGVye2NvbG9yOiMzMDMwMzB9Lm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWR7Y29sb3I6IzY4Njg2OH0ubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiM3YjFmYTJ9Lm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiM2OWYwYWV9Lm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCwubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWR7YmFja2dyb3VuZDojNjg2ODY4fS5tYXQtZWxldmF0aW9uLXowe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MXtib3gtc2hhZG93OjBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoye2JveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejN7Ym94LXNoYWRvdzowcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16NHtib3gtc2hhZG93OjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16NXtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA1cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16Nntib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejd7Ym94LXNoYWRvdzowcHggNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggN3B4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo4e2JveC1zaGFkb3c6MHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16OXtib3gtc2hhZG93OjBweCA1cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA5cHggMTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggM3B4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejEwe2JveC1zaGFkb3c6MHB4IDZweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDEwcHggMTRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejExe2JveC1zaGFkb3c6MHB4IDZweCA3cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDExcHggMTVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNHB4IDIwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejEye2JveC1zaGFkb3c6MHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDEycHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejEze2JveC1zaGFkb3c6MHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNXB4IDI0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE0e2JveC1zaGFkb3c6MHB4IDdweCA5cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE0cHggMjFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNXB4IDI2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE1e2JveC1zaGFkb3c6MHB4IDhweCA5cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE1cHggMjJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNnB4IDI4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE2e2JveC1zaGFkb3c6MHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxN3tib3gtc2hhZG93OjBweCA4cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTdweCAyNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMzJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTh7Ym94LXNoYWRvdzowcHggOXB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE4cHggMjhweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggN3B4IDM0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE5e2JveC1zaGFkb3c6MHB4IDlweCAxMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxOXB4IDI5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDdweCAzNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoyMHtib3gtc2hhZG93OjBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDIwcHggMzFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOHB4IDM4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIxe2JveC1zaGFkb3c6MHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjFweCAzM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA4cHggNDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjJ7Ym94LXNoYWRvdzowcHggMTBweCAxNHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyMnB4IDM1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDhweCA0MnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoyM3tib3gtc2hhZG93OjBweCAxMXB4IDE0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDIzcHggMzZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOXB4IDQ0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejI0e2JveC1zaGFkb3c6MHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWFwcC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6IzMwMzAzMDtjb2xvcjojZmZmfS5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlcntkaXNwbGF5Om5vbmV9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWx7YmFja2dyb3VuZDojNDI0MjQyO2NvbG9yOiNmZmZ9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcil7YmFja2dyb3VuZDojNDI0MjQyfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2ZmZn0ubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiM3YjFmYTJ9LmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAubWF0LWJhZGdlLWNvbnRlbnR7b3V0bGluZTpzb2xpZCAxcHg7Ym9yZGVyLXJhZGl1czowfS5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiM2OWYwYWU7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYmFkZ2Utd2FybiAubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1iYWRnZXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LWJhZGdlLWhpZGRlbiAubWF0LWJhZGdlLWNvbnRlbnR7ZGlzcGxheTpub25lfS5tYXQtYmFkZ2UtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50e2JhY2tncm91bmQ6IzZlNmU2ZTtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KX0ubWF0LWJhZGdlLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czo1MCU7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7dHJhbnNmb3JtOnNjYWxlKDAuNik7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3BvaW50ZXItZXZlbnRzOm5vbmV9Lm5nLWFuaW1hdGUtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50LC5tYXQtYmFkZ2UtY29udGVudC5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZXt0cmFuc2l0aW9uOm5vbmV9Lm1hdC1iYWRnZS1jb250ZW50Lm1hdC1iYWRnZS1hY3RpdmV7dHJhbnNmb3JtOm5vbmV9Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtsaW5lLWhlaWdodDoxNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xNnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTE2cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi04cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi04cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LThweH0ubWF0LWJhZGdlLW1lZGl1bSAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MjJweDtoZWlnaHQ6MjJweDtsaW5lLWhlaWdodDoyMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTIycHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0yMnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xMXB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTFweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTExcHh9Lm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MjhweDtoZWlnaHQ6MjhweDtsaW5lLWhlaWdodDoyOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTI4cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTE0cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTRweH0ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXJ7Ym94LXNoYWRvdzowcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZDojNDI0MjQyO2NvbG9yOiNmZmZ9Lm1hdC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9ue2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnl7Y29sb3I6IzdiMWZhMn0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnR7Y29sb3I6IzY5ZjBhZX0ubWF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF17Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMyl9Lm1hdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IzdiMWZhMn0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojNjlmMGFlfS5tYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWljb24tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1zdHJva2VkLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50e29wYWNpdHk6LjE7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSl7Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LWZsYXQtYnV0dG9uLC5tYXQtcmFpc2VkLWJ1dHRvbiwubWF0LWZhYiwubWF0LW1pbmktZmFie2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNDI0MjQyfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtZmFiLm1hdC1wcmltYXJ5LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7Y29sb3I6I2ZmZn0ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1mYWIubWF0LWFjY2VudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnR7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLC5tYXQtZmFiLm1hdC13YXJuLC5tYXQtbWluaS1mYWIubWF0LXdhcm57Y29sb3I6I2ZmZn0ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXXtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4zKX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWZhYi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzdiMWZhMn0ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1mYWIubWF0LWFjY2VudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojNjlmMGFlfS5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLC5tYXQtZmFiLm1hdC13YXJuLC5tYXQtbWluaS1mYWIubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSl9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LWZsYXQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXJhaXNlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXJhaXNlZC1idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cHtib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmR7Ym94LXNoYWRvdzpub25lfS5tYXQtYnV0dG9uLXRvZ2dsZXtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KX0ubWF0LWJ1dHRvbi10b2dnbGUgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiM0MjQyNDJ9Lm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjEyKX1bZGlyPXJ0bF0gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1idXR0b24tdG9nZ2xlLXZlcnRpY2FsIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6bm9uZTtib3JkZXItdG9wOnNvbGlkIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWR7YmFja2dyb3VuZC1jb2xvcjojMjEyMTIxO2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6I2ZmZn0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMyk7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2JhY2tncm91bmQ6IzQyNDI0Mn0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiM0MjQyNDJ9Lm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCwubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZHtib3JkZXI6c29saWQgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LWNhcmR7YmFja2dyb3VuZDojNDI0MjQyO2NvbG9yOiNmZmZ9Lm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1jYXJkLm1hdC1jYXJkLWZsYXQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtY2FyZC1zdWJ0aXRsZXtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KX0ubWF0LWNoZWNrYm94LWZyYW1le2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KX0ubWF0LWNoZWNrYm94LWNoZWNrbWFya3tmaWxsOiMzMDMwMzB9Lm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aHtzdHJva2U6IzMwMzAzMCAhaW1wb3J0YW50fS5tYXQtY2hlY2tib3gtbWl4ZWRtYXJre2JhY2tncm91bmQtY29sb3I6IzMwMzAzMH0ubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojN2IxZmEyfS5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojNjlmMGFlfS5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtY2hlY2tlZCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojNjg2ODY4fS5tYXQtY2hlY2tib3gtZGlzYWJsZWQ6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkgLm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6IzY4Njg2OH0ubWF0LWNoZWNrYm94LWRpc2FibGVkIC5tYXQtY2hlY2tib3gtbGFiZWx7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyl9Lm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojN2IxZmEyfS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojNjlmMGFlfS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwe2JhY2tncm91bmQtY29sb3I6IzYxNjE2MTtjb2xvcjojZmZmfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCk6YWN0aXZle2JveC1zaGFkb3c6MHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXJ7b3BhY2l0eTouNTR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLWRpc2FibGVke29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOjphZnRlcntiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzdiMWZhMjtjb2xvcjojZmZmfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiM2OWYwYWU7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5tYXQtdGFibGV7YmFja2dyb3VuZDojNDI0MjQyfS5tYXQtdGFibGUgdGhlYWQsLm1hdC10YWJsZSB0Ym9keSwubWF0LXRhYmxlIHRmb290LG1hdC1oZWFkZXItcm93LG1hdC1yb3csbWF0LWZvb3Rlci1yb3csW21hdC1oZWFkZXItcm93XSxbbWF0LXJvd10sW21hdC1mb290ZXItcm93XSwubWF0LXRhYmxlLXN0aWNreXtiYWNrZ3JvdW5kOmluaGVyaXR9bWF0LXJvdyxtYXQtaGVhZGVyLXJvdyxtYXQtZm9vdGVyLXJvdyx0aC5tYXQtaGVhZGVyLWNlbGwsdGQubWF0LWNlbGwsdGQubWF0LWZvb3Rlci1jZWxse2JvcmRlci1ib3R0b20tY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtaGVhZGVyLWNlbGx7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyl9Lm1hdC1jZWxsLC5tYXQtZm9vdGVyLWNlbGx7Y29sb3I6I2ZmZn0ubWF0LWNhbGVuZGFyLWFycm93e2JvcmRlci10b3AtY29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b257Y29sb3I6I2ZmZn0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlcntjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KX0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlcntiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWx7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyl9Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudHtjb2xvcjojZmZmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KX0ubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3Zlcj4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLC5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCksLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDQpfS5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSl9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMyl9Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6IzdiMWZhMjtjb2xvcjojZmZmfS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEyMywzMSwxNjIsLjQpfS5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50e2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JhY2tncm91bmQtY29sb3I6IzQyNDI0Mjtjb2xvcjojZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6IzY5ZjBhZTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgxMDUsMjQwLDE3NCwuNCl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggcmdiYSgwLDAsMCwuODcpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZXtjb2xvcjojN2IxZmEyfS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC1hY2NlbnR7Y29sb3I6IzY5ZjBhZX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZGlhbG9nLWNvbnRhaW5lcntib3gtc2hhZG93OjBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZDojNDI0MjQyO2NvbG9yOiNmZmZ9Lm1hdC1kaXZpZGVye2JvcmRlci10b3AtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtZGl2aWRlci12ZXJ0aWNhbHtib3JkZXItcmlnaHQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtZXhwYW5zaW9uLXBhbmVse2JhY2tncm91bmQ6IzQyNDI0Mjtjb2xvcjojZmZmfS5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1hY3Rpb24tcm93e2JvcmRlci10b3AtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLC5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSksLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3Zlcjpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pe2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMDQpfUBtZWRpYShob3Zlcjogbm9uZSl7Lm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVye2JhY2tncm91bmQ6IzQyNDI0Mn19Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxle2NvbG9yOiNmZmZ9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXJ7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyl9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV17Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMyl9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbntjb2xvcjppbmhlcml0fS5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KX0ubWF0LWhpbnR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyl9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojN2IxZmEyfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudHtjb2xvcjojNjlmMGFlfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlcntjb2xvcjojNjlmMGFlfS5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6IzdiMWZhMn0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50e2JhY2tncm91bmQtY29sb3I6IzY5ZjBhZX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKSAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiM3YjFmYTJ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6IzY5ZjBhZX0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudCwubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWVycm9ye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1oaW50e2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgMzMlLCB0cmFuc3BhcmVudCAwJSk7YmFja2dyb3VuZC1zaXplOjRweCAxMDAlO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDUpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjMpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2ZmZn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiM3YjFmYTJ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiM2OWYwYWV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xNSl9Lm1hdC1pY29uLm1hdC1wcmltYXJ5e2NvbG9yOiM3YjFmYTJ9Lm1hdC1pY29uLm1hdC1hY2NlbnR7Y29sb3I6IzY5ZjBhZX0ubWF0LWljb24ubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpfS5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCwubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpfS5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojN2IxZmEyfS5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSl9Lm1hdC1pbnB1dC1lbGVtZW50OjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpfS5tYXQtaW5wdXQtZWxlbWVudDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KX0ubWF0LWlucHV0LWVsZW1lbnQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpfS5tYXQtaW5wdXQtZWxlbWVudCBvcHRpb257Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtaW5wdXQtZWxlbWVudCBvcHRpb246ZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojNjlmMGFlfS5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQsLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmNDQzMzZ9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW17Y29sb3I6I2ZmZn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2NvbG9yOiNmZmZ9Lm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXJ7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyl9Lm1hdC1saXN0LWl0ZW0tZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtbGlzdC1vcHRpb246aG92ZXIsLm1hdC1saXN0LW9wdGlvbjpmb2N1cywubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMsLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlciwubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3Vze2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMDQpfS5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uLC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uOmhvdmVyLC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uOmZvY3Vze2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtbWVudS1wYW5lbHtiYWNrZ3JvdW5kOiM0MjQyNDJ9Lm1hdC1tZW51LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtbWVudS1pdGVte2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0ubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF0sLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdOjphZnRlcntjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KX0ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlcntjb2xvcjojZmZmfS5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQ6bm90KFtkaXNhYmxlZF0pe2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMDQpfS5tYXQtcGFnaW5hdG9ye2JhY2tncm91bmQ6IzQyNDI0Mn0ubWF0LXBhZ2luYXRvciwubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlcntjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KX0ubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50e2JvcmRlci10b3A6MnB4IHNvbGlkICNmZmY7Ym9yZGVyLXJpZ2h0OjJweCBzb2xpZCAjZmZmfS5tYXQtcGFnaW5hdG9yLWZpcnN0LC5tYXQtcGFnaW5hdG9yLWxhc3R7Ym9yZGVyLXRvcDoycHggc29saWQgI2ZmZn0ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWZpcnN0LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWxhc3R7Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpfS5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojOWMyN2IwfS5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiM5YzI3YjB9Lm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojN2IxZmEyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNiOWY2Y2F9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojYjlmNmNhfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNjlmMGFlfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZmZjZGQyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmNkZDJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsLm1hdC1zcGlubmVyIGNpcmNsZXtzdHJva2U6IzdiMWZhMn0ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGUsLm1hdC1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xle3N0cm9rZTojNjlmMGFlfS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGUsLm1hdC1zcGlubmVyLm1hdC13YXJuIGNpcmNsZXtzdHJva2U6I2Y0NDMzNn0ubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiM3YjFmYTJ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeTphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiM3YjFmYTJ9Lm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6IzY5ZjBhZX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQ6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojNjlmMGFlfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojZjQ0MzM2fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm46YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSl9Lm1hdC1yYWRpby1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6I2ZmZn0ubWF0LXNlbGVjdC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KX0ubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KX0ubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KX0ubWF0LXNlbGVjdC1wYW5lbHtiYWNrZ3JvdW5kOiM0MjQyNDJ9Lm1hdC1zZWxlY3QtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1zZWxlY3QtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSl7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiM3YjFmYTJ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6IzY5ZjBhZX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSl9Lm1hdC1kcmF3ZXItY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6IzMwMzAzMDtjb2xvcjojZmZmfS5tYXQtZHJhd2Vye2JhY2tncm91bmQtY29sb3I6IzQyNDI0Mjtjb2xvcjojZmZmfS5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItcHVzaHtiYWNrZ3JvdW5kLWNvbG9yOiM0MjQyNDJ9Lm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpe2JveC1zaGFkb3c6MHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZHJhd2VyLXNpZGV7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZHtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMTIpO2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4xMik7Ym9yZGVyLXJpZ2h0Om5vbmV9W2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmR7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3due2JhY2tncm91bmQtY29sb3I6cmdiYSgxODksMTg5LDE4OSwuNil9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojNjlmMGFlfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTA1LDI0MCwxNzQsLjU0KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzY5ZjBhZX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiM3YjFmYTJ9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgxMjMsMzEsMTYyLC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiM3YjFmYTJ9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ0LDY3LDU0LC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1zbGlkZS10b2dnbGU6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7Ym94LXNoYWRvdzowcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtiYWNrZ3JvdW5kLWNvbG9yOiNiZGJkYmR9Lm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSl9Lm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjMpfS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYiwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojN2IxZmEyfS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYiwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOiM2OWYwYWV9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC13YXJuIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6I2ZmZn0ubWF0LXNsaWRlci1mb2N1cy1yaW5ne2JhY2tncm91bmQtY29sb3I6cmdiYSgxMDUsMjQwLDE3NCwuMil9Lm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjMpfS5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCwubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjMpfS5tYXQtc2xpZGVyLWRpc2FibGVkOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4zKX0ubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjMpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjMpO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKTpob3ZlciAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4zKX0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4zKX0ubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpfS5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3N7YmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc3RlcC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4wNCl9QG1lZGlhKGhvdmVyOiBub25lKXsubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQ6bm9uZX19Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtb3B0aW9uYWx7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyl9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpO2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0e2JhY2tncm91bmQtY29sb3I6IzdiMWZhMjtjb2xvcjojZmZmfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3J7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZXtjb2xvcjojZmZmfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9ye2NvbG9yOiNmNDQzMzZ9Lm1hdC1zdGVwcGVyLWhvcml6b250YWwsLm1hdC1zdGVwcGVyLXZlcnRpY2Fse2JhY2tncm91bmQtY29sb3I6IzQyNDI0Mn0ubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3Jle2JvcmRlci1sZWZ0LWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSwubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmV7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC1zb3J0LWhlYWRlci1hcnJvd3tjb2xvcjojYzZjNmM2fS5tYXQtdGFiLW5hdi1iYXIsLm1hdC10YWItaGVhZGVye2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItbmF2LWJhciwubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItaGVhZGVye2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjEyKTtib3JkZXItYm90dG9tOm5vbmV9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSl9Lm1hdC10YWItZ3JvdXBbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV0gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV17Ym9yZGVyLWJvdHRvbTpub25lO2JvcmRlci10b3A6bm9uZX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1NiwzOSwxNzYsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiM3YjFmYTJ9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTg1LDI0NiwyMDIsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojNjlmMGFlfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMDUsMjEwLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtdGFiLWdyb3VwLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1NiwzOSwxNzYsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3MsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb257YmFja2dyb3VuZC1jb2xvcjojN2IxZmEyfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTg1LDI0NiwyMDIsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb257YmFja2dyb3VuZC1jb2xvcjojNjlmMGFlfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5re2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMDUsMjEwLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9ue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmt7Y29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10b29sYmFye2JhY2tncm91bmQ6IzIxMjEyMTtjb2xvcjojZmZmfS5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kOiM3YjFmYTI7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIubWF0LWFjY2VudHtiYWNrZ3JvdW5kOiM2OWYwYWU7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdG9vbGJhci5tYXQtd2FybntiYWNrZ3JvdW5kOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtdmFsdWUsLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LWFycm93LC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6aW5oZXJpdH0ubWF0LXRvb2xiYXIgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LXRvb2x0aXB7YmFja2dyb3VuZDpyZ2JhKDk3LDk3LDk3LC45KX0ubWF0LXRyZWV7YmFja2dyb3VuZDojNDI0MjQyfS5tYXQtdHJlZS1ub2RlLC5tYXQtbmVzdGVkLXRyZWUtbm9kZXtjb2xvcjojZmZmfS5tYXQtc25hY2stYmFyLWNvbnRhaW5lcntjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7YmFja2dyb3VuZDojZmFmYWZhO2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb257Y29sb3I6aW5oZXJpdH1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function () { return ["CRUD"]; };
function NavbarComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Firebase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function NavbarComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_27_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.CerrarSecion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cerrar secion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Hola ", ctx_r1.usuarioLogueado.nombre, "");
} }
const _c1 = function () { return ["login"]; };
const _c2 = function () { return ["reg"]; };
function NavbarComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Iniciar secion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registrate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
} }
const _c3 = function () { return ["home"]; };
const _c4 = function () { return ["contacto"]; };
const _c5 = function () { return ["preguntas"]; };
const _c6 = function () { return ["search"]; };
const _c7 = function () { return ["qrcodigo"]; };
//import { SpotifyService } from 'src/app/services/spotify.service';
class NavbarComponent {
    constructor(router, servUsrs) {
        this.router = router;
        this.servUsrs = servUsrs;
        this.artistas = [];
        this.usuarioLogueado = {
            uid: '',
            nombre: '',
            rol: '',
            ApPaterno: '',
            ApMaterno: '',
            correo: '',
            contraseña: '',
        };
        this.banderaNombre = false;
    }
    ngOnInit() {
        //this.usuarioLogueado = this.servUsrs.optenerUsuario();
        //console.log('inicio', this.servUsrs.optenerUsuario());
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                // ...
                this.usuarioLogueado = this.servUsrs.optenerDatos(uid);
                console.log('1  ', this.usuarioLogueado);
                console.log('2  ', this.servUsrs.optenerDatos(uid));
                //return usuario;
                console.log('inicio componentes', this.usuarioLogueado);
            }
            else {
                // User is signed out.
                // ...
            }
        });
    }
    ngOnChanges(changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.usuarioLogueado = this.servUsrs.optenerUsuario();
        console.log('cambios', this.servUsrs.optenerUsuario());
    }
    buscarArtista(termino) {
        this.router.navigate(['/buscador', termino]);
    }
    CerrarSecion() {
        // tslint:disable-next-line: no-unused-expression
        this.servUsrs.CerrarSecion();
        this.usuarioLogueado = {
            uid: '',
            nombre: '',
            ApPaterno: '',
            ApMaterno: '',
            correo: '',
            contraseña: '',
            rol: ''
        };
        console.log('Cerrando secion los valores deverian ser ...', this.usuarioLogueado);
        // tslint:disable-next-line: no-unused-expression
        this.router.navigate(['home']);
    }
    buscar(termino) {
        this.bandera = true;
        console.log(termino);
        /*
        this.spotify.getArtistas(termino).subscribe((data: any) => {
          //console.log(data);
          this.artistas = data;
          this.bandera = false;
          console.log(this.artistas[0].name);
          console.log(this.artistas[0].id);
          if (termino === this.artistas[0].name) {
            console.log("Todo bien");
            this.router.navigate(['/artist',this.artistas[0].id]);
            this.banderaNombre=false;
          }else {
            //alert("Escribiste bien el nombre?");
            this.banderaNombre=true;
            setTimeout(() => this.banderaNombre=false, 2000);
          }
        });
        */
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 30, vars: 13, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["href", "#", 1, "navbar-brand"], ["src", "assets/img/cosmere_symbol-2.png", "width", "50", "height", "50", "alt", ""], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", 3, "routerLink"], [4, "ngIf"], [1, "form-inline", "my-2"], [4, "ngIf", "ngIfElse"], ["Registrarse", ""], [1, "nav-link", "btn", "btn-outline-danger", "my-2", "my-sm-0", "fas", "fa-user-alt-slash", 3, "click"], [1, "nav-link", "btn", "btn-outline-success", "my-2", "my-sm-0", "fas", "fa-user-circle", 3, "routerLink"], [1, "nav-link", "btn", "btn-outline-info", "my-2", "my-sm-0", "far", "fa-user-circle", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Palanaeum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Recomendaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Preguntas frecuentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Buscar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CodigoQr ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavbarComponent_div_24_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_div_27_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NavbarComponent_ng_template_28_Template, 4, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuarioLogueado.rol == "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuarioLogueado.nombre != "")("ngIfElse", _r2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/policy-list/policy-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/policy-list/policy-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PolicyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyListComponent", function() { return PolicyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_policy_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/policy.model */ "./src/app/models/policy.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_policy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/policy.service */ "./src/app/services/policy.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function PolicyListComponent_tr_72_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PolicyListComponent_tr_72_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const policy_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.delete(policy_r2.codigoLibro); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policy_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r2.codigoLibro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r2.autor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r2.editor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r2.copias);
} }
class PolicyListComponent {
    constructor(policyService) {
        this.policyService = policyService;
        this.policiesguardar = {
            codigoLibro: '',
            nombre: '',
            autor: '',
            editor: '',
            url: '',
            copias: ''
        };
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'codigoLibro': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            'autor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            'editor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            'url': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            'copias': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    ngOnInit() {
        this.policyService.getPolicies().subscribe((data) => {
            this.policies = data.map((e) => {
                return {
                    codigoLibro: e.payload.doc.id,
                    nombre: e.payload.doc.data()['nombre'],
                    autor: e.payload.doc.data()['autor'],
                    editor: e.payload.doc.data()['editor'],
                    url: e.payload.doc.data()['url'],
                    copias: e.payload.doc.data()['copias'],
                };
            });
        });
    }
    create(policy) {
        this.policyService.createPolicy(policy);
    }
    update(policy) {
        this.policyService.updatePolicy(policy);
    }
    delete(id) {
        this.policyService.deletePolicy(id);
    }
    guardarCambios() {
        //console.log(this.forma.value);
        //console.log(this.forma.get('policyNumber').value);
        //this.policiesguardar=this.forma.value as Policy;
        crear: _models_policy_model__WEBPACK_IMPORTED_MODULE_1__["Policy"];
        /*this.policyService.getPolicies().subscribe((data) => {
          this.policiesguardar = data.map((e) => {
            return {
              id: null,
              policyNumber: this.forma.value('policyNumber'),
              creationDate: this.forma.value('creationDate'),
              effectiveDate:null,
              expireDate:this.forma.value('expireDate'),
              paymentOption:null,
              policyAmount:this.forma.value('policyAmount'),
              extraInfo:null
            } as Policy;
          });
        });*/
        //this.policiesguardar.id=this.forma.get('policyNumber').value;//this.forma.value('policyNumber');
        this.policiesguardar.nombre = this.forma.get('nombre').value;
        this.policiesguardar.autor = this.forma.get('autor').value;
        this.policiesguardar.editor = this.forma.get('editor').value;
        this.policiesguardar.url = this.forma.get('url').value;
        this.policiesguardar.copias = this.forma.get('copias').value;
        this.create(this.policiesguardar);
    }
}
PolicyListComponent.ɵfac = function PolicyListComponent_Factory(t) { return new (t || PolicyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_policy_service__WEBPACK_IMPORTED_MODULE_3__["PolicyService"])); };
PolicyListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PolicyListComponent, selectors: [["app-policy-list"]], decls: 73, vars: 3, consts: [[3, "formGroup", "ngSubmit"], ["f", "ngForm"], [1, "container"], [1, "form-group", "row"], [1, "col-2", "col-form-label"], [1, "col-8"], ["matInput", "", "type", "text", "placeholder", "Nombre", "formControlName", "nombre", "ngModel", "", "required", "", 1, "form-control"], ["matInput", "", "type", "text", "placeholder", "Autor", "formControlName", "autor", "ngModel", "", "required", "", 1, "form-control"], ["matInput", "", "type", "text", "placeholder", "Editor", "formControlName", "editor", "ngModel", "", "required", "", 1, "form-control"], ["type", "text", "placeholder", "copias", "formControlName", "copias", "required", "", 1, "custom-select", "mr-sm-2", "form-control"], ["selected", ""], ["matInput", "", "type", "text", "placeholder", "ingresa la url de la imagen", "formControlName", "url", "ngModel", "", "required", "", 1, "form-control"], [1, "input-group", "col-md-8"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], [1, "table", "table-striped", "table-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function PolicyListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Biblioteca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PolicyListComponent_Template_form_ngSubmit_5_listener() { return ctx.guardarCambios(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nombre del libro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Autor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Copias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "URL imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Codigo Libro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Nombre libro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Autor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Copias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, PolicyListComponent_tr_72_Template, 14, 5, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forma);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.policies);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9saWN5LWxpc3QvcG9saWN5LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolicyListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-policy-list',
                templateUrl: './policy-list.component.html',
                styleUrls: ['./policy-list.component.css'],
            }]
    }], function () { return [{ type: _services_policy_service__WEBPACK_IMPORTED_MODULE_3__["PolicyService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/politicas/politicas.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/politicas/politicas.component.ts ***!
  \*************************************************************/
/*! exports provided: PoliticasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticasComponent", function() { return PoliticasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PoliticasComponent {
    constructor() { }
    ngOnInit() {
    }
}
PoliticasComponent.ɵfac = function PoliticasComponent_Factory(t) { return new (t || PoliticasComponent)(); };
PoliticasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PoliticasComponent, selectors: [["app-politicas"]], decls: 43, vars: 0, template: function PoliticasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "1. Aceptaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ponemos este sitio web a disposici\u00F3n de cualquier usuario, para su propio consumo y uso, con las condiciones legales que encontrar\u00E1s en este texto m\u00E1s el de cookies. Te recomendamos que los leas con atenci\u00F3n porque al usar esta web los estar\u00E1s aceptando. Todos ellos. El uso de la web por tu parte implica un compromiso de no usarla para fines ilegales, il\u00EDcitos, o que supongan una infracci\u00F3n de normas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1.1 Edad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Declaras que eres mayor de 16 a\u00F1os y que dispones de la capacidad legal necesaria para vincularte por este acuerdo y utilizar la web de conformidad con estas normas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2. Qu\u00E9 datos personales recogemos y por qu\u00E9 los recogemos 2.1. Comentarios, datos de registro y foro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Al facilitarnos tu correo electr\u00F3nico, declaras y reconoces que eres el titular de la misma y en caso de que sea de otra persona reconoces y garantizas su autorizaci\u00F3n. Si recibimos alguna reclamaci\u00F3n denunciando el uso de una cuenta de correo por una persona no titular, y comprobamos que la denuncia es cierta, eliminamos el perfil registrado con esa cuenta. Cuando los visitantes dejan comentarios en la web, recopilamos los datos que se muestran en el formulario de comentarios, as\u00ED como la direcci\u00F3n IP del visitante y la cadena de agentes de usuario del navegador para ayudar a la detecci\u00F3n de spam. Una cadena an\u00F3nima creada a partir de tu direcci\u00F3n de correo electr\u00F3nico (tambi\u00E9n llamada hash) puede ser proporcionada al servicio de Gravatar para ver si la est\u00E1s usando. La pol\u00EDtica de privacidad del servicio Gravatar est\u00E1 disponible aqu\u00ED: https://automattic.com/privacy/. Despu\u00E9s de la aprobaci\u00F3n de tu comentario, la imagen de tu perfil es visible para el p\u00FAblico en el contexto de su comentario. Al registrarte y participar en la web y/o foro accedes al almacenamiento y gesti\u00F3n de tus datos por parte de esta web. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2.2. Medios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Si subes im\u00E1genes a la web deber\u00EDas evitar subir im\u00E1genes con datos de ubicaci\u00F3n (GPS EXIF) incluidos. Los visitantes de la web pueden descargar y extraer cualquier dato de localizaci\u00F3n de las im\u00E1genes de la web. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2.3. Formularios de contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " En cosmere.es tratamos la informaci\u00F3n que nos facilita por v\u00EDa electr\u00F3nica mediante el formulario de contacto de esta p\u00E1gina web para atender a su solicitud. Los datos proporcionados se conservar\u00E1n mientras no solicite el cese de la actividad. Los datos no se ceder\u00E1n a terceros salvo en los casos en que exista una obligaci\u00F3n legal. Usted tiene derecho a obtener confirmaci\u00F3n sobre si en cosmere.es estamos tratando sus datos personales, por tanto tiene derecho a acceder a sus datos personales, rectificar los datos inexactos o solicitar su supresi\u00F3n cuando los datos ya no sean necesarios para los fines que fueron recogidos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2.4. Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Si dejas un comentario en nuestro sitio puedes elegir guardar tu nombre, direcci\u00F3n de correo electr\u00F3nico y web en cookies. Esto es para tu comodidad, para que no tengas que volver a rellenar tus datos cuando dejes otro comentario. Estas cookies tendr\u00E1n una duraci\u00F3n de un a\u00F1o. Si tienes una cuenta y te conectas a este sitio, instalaremos una cookie temporal para determinar si tu navegador acepta cookies. Esta cookie no contiene datos personales y se elimina al cerrar el navegador. Cuando inicias sesi\u00F3n, tambi\u00E9n instalaremos varias cookies para guardar tu informaci\u00F3n de inicio de sesi\u00F3n y tus opciones de visualizaci\u00F3n de pantalla. Las cookies de inicio de sesi\u00F3n duran dos d\u00EDas, y las cookies de opciones de pantalla duran un a\u00F1o. Si seleccionas \u201CRecordarme\u201D, tu inicio de sesi\u00F3n perdurar\u00E1 durante dos semanas. Si sales de tu cuenta, las cookies de inicio de sesi\u00F3n se eliminar\u00E1n. Si editas o publicas un art\u00EDculo se guardar\u00E1 una cookie adicional en tu navegador. Esta cookie no incluye datos personales y simplemente indica el ID del art\u00EDculo que acabas de editar. Caduca despu\u00E9s de 1 d\u00EDa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2.5 Contenido incrustado de otros sitios web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Los art\u00EDculos de este sitio pueden incluir contenido incrustado (por ejemplo, v\u00EDdeos, im\u00E1genes, art\u00EDculos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si el visitante hubiera visitado la otra web. Estas web pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento adicional de terceros, y supervisar tu interacci\u00F3n con ese contenido incrustado, incluido el seguimiento de su interacci\u00F3n con el contenido incrustado si tienes una cuenta y est\u00E1s conectado a esa web. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "3. Con qui\u00E9n compartimos tus datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Dado que nuestra web est\u00E1 alojada en un servidor externo, compartimos tus datos con la empresa proveedora, 1and1.es. Para la ejecuci\u00F3n de las prestaciones derivadas del cumplimiento del objeto de este encargo, cosmere.es, pone a disposici\u00F3n de la entidad 1and1 la informaci\u00F3n disponible en los equipos inform\u00E1ticos que dan soporte a los tratamientos de datos realizados por el responsable. El presente acuerdo tiene una duraci\u00F3n de un mes, renovable. Una vez finalice el presente contrato, el encargado del tratamiento debe devolver al responsable los datos personales, y suprimir cualquier copia que mantenga en su poder. No obstante, podr\u00E1 mantener bloqueados los datos para atender posibles responsabilidades administrativas o jurisdiccionales. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "3.1. Obligaciones del encargado del tratamiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " El encargado del tratamiento y todo su personal se obliga a: Utilizar los datos personales a los que tenga acceso s\u00F3lo para la finalidad objeto de este encargo. En ning\u00FAn caso podr\u00E1 utilizar los datos para fines propios. Tratar los datos de acuerdo con las instrucciones del responsable del tratamiento. Si el encargado del tratamiento considera que alguna de las instrucciones infringe el RGPD o cualquier otra disposici\u00F3n en materia de protecci\u00F3n de datos, el encargado informar\u00E1 inmediatamente al responsable. No comunicar los datos a terceras personas, salvo que cuente con la autorizaci\u00F3n expresa del responsable del tratamiento, en los supuestos legalmente admisibles. Mantener el deber de secreto respecto a los datos de car\u00E1cter personal a los que haya tenido acceso en virtud del presente encargo, incluso despu\u00E9s de que finalice el contrato. Garantizar que las personas autorizadas para tratar datos personales se comprometan, de forma expresa y por escrito, a respetar la confidencialidad y a cumplir las medidas de seguridad correspondientes, de las que hay que informarles convenientemente. Mantener a disposici\u00F3n del responsable la documentaci\u00F3n acreditativa del cumplimiento de la obligaci\u00F3n establecida en el apartado anterior. Garantizar la formaci\u00F3n necesaria en materia de protecci\u00F3n de datos personales de las personas autorizadas para tratar datos personales. Notificaci\u00F3n de violaciones de la seguridad de los datos El encargado del tratamiento notificar\u00E1 al responsable del tratamiento, sin dilaci\u00F3n indebida y a trav\u00E9s de la direcci\u00F3n de correo electr\u00F3nico que le indique el responsable, las violaciones de la seguridad de los datos personales a su cargo de las que tenga conocimiento, juntamente con toda la informaci\u00F3n relevante para la documentaci\u00F3n y comunicaci\u00F3n de la incidencia. Se facilitar\u00E1, como m\u00EDnimo, la informaci\u00F3n siguiente: Descripci\u00F3n de la naturaleza de la violaci\u00F3n de la seguridad de los datos personales, inclusive, cuando sea posible, las categor\u00EDas y el n\u00FAmero aproximado de interesados afectados, y las categor\u00EDas y el n\u00FAmero aproximado de registros de datos personales afectados. Datos de la persona de contacto para obtener m\u00E1s informaci\u00F3n. Descripci\u00F3n de las posibles consecuencias de la violaci\u00F3n de la seguridad de los datos personales. Descripci\u00F3n de las medidas adoptadas o propuestas para poner remedio a la violaci\u00F3n de la seguridad de los datos personales, incluyendo, si procede, las medidas adoptadas para mitigar los posibles efectos negativos. Si no es posible facilitar la informaci\u00F3n simult\u00E1neamente, y en la medida en que no lo sea, la informaci\u00F3n se facilitar\u00E1 de manera gradual sin dilaci\u00F3n indebida. Poner disposici\u00F3n del responsable toda la informaci\u00F3n necesaria para demostrar el cumplimiento de sus obligaciones, as\u00ED como para la realizaci\u00F3n de las auditor\u00EDas o las inspecciones que realicen el responsable u otro auditor autorizado por \u00E9l. Auxiliar al responsable de tratamiento a implantar las medidas de seguridad necesarias para: a) Garantizar la confidencialidad, integridad, disponibilidad y resiliencia permanentes de los sistemas y servicios de tratamiento. b) Restaurar la disponibilidad y el acceso a los datos personales de forma r\u00E1pida, en caso de incidente f\u00EDsico o t\u00E9cnico. c) Verificar, evaluar y valorar, de forma regular, la eficacia de las medidas t\u00E9cnicas y organizativas implantadas para garantizar la seguridad del tratamiento. Destino de los datos El responsable del tratamiento no conservar\u00E1 datos de car\u00E1cter personal relativos a los tratamientos del encargado salvo que sea estrictamente necesario para la prestaci\u00F3n del servicio, y solo durante el tiempo estrictamente necesario para su prestaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "3.2. Obligaciones del responsable del tratamiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Corresponde al responsable del tratamiento: Facilitar al encargado el acceso a los equipos a fin de prestar el servicio contratado. Velar, de forma previa y durante todo el tratamiento, por el cumplimiento del RGPD por parte del encargado. Supervisar el tratamiento. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Cu\u00E1nto tiempo conservamos tus datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Si dejas un comentario, el comentario y sus metadatos se conservan indefinidamente. Esto es para que podamos reconocer y aprobar comentarios sucesivos autom\u00E1ticamente en lugar de mantenerlos en una cola de moderaci\u00F3n. De los usuarios que se registran en nuestra web (si los hay), tambi\u00E9n almacenamos la informaci\u00F3n personal que proporcionan en su perfil de usuario. Todos los usuarios pueden ver, editar o eliminar su informaci\u00F3n personal en cualquier momento (excepto que no pueden cambiar su nombre de usuario). Los administradores de la web tambi\u00E9n pueden ver y editar esa informaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Qu\u00E9 derechos tienes sobre tus datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Si tienes una cuenta o has dejado comentarios en esta web, puedes solicitar recibir un archivo de exportaci\u00F3n de los datos personales que tenemos sobre ti, incluyendo cualquier dato que nos hayas proporcionado. Tambi\u00E9n puedes solicitar que eliminemos cualquier dato personal que tengamos sobre ti. Esto no incluye ning\u00FAn dato que estemos obligados a conservar con fines administrativos, legales o de seguridad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " D\u00F3nde enviamos tus datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Los comentarios de los visitantes podr\u00EDan ser revisados un servicio de detecci\u00F3n autom\u00E1tica de spam. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "7. Registro de actividades en tratamiento Potenciales Clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Finalidad del tratamiento: Gesti\u00F3n de la relaci\u00F3n con los potenciales clientes. Potenciales clientes: Personas con las que se busca mantener una relaci\u00F3n comercial como clientes. Categor\u00EDas de datos personales: Los necesarios para la promoci\u00F3n comercial de la empresa De identificaci\u00F3n: nombre y apellidos y direcci\u00F3n postal, tel\u00E9fonos, e-mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9saXRpY2FzL3BvbGl0aWNhcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoliticasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-politicas',
                templateUrl: './politicas.component.html',
                styleUrls: ['./politicas.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/preguntas/preguntas.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/preguntas/preguntas.component.ts ***!
  \*************************************************************/
/*! exports provided: PreguntasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasComponent", function() { return PreguntasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PreguntasComponent {
    constructor() { }
    ngOnInit() {
    }
}
PreguntasComponent.ɵfac = function PreguntasComponent_Factory(t) { return new (t || PreguntasComponent)(); };
PreguntasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreguntasComponent, selectors: [["app-preguntas"]], decls: 20, vars: 0, template: function PreguntasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00BFQuienes Somos?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Somos una biblioteca cuyo opgetivo es el facilitar a nuestros usuarios la busqueda de libros asi como el gestionar los libros que se han solicitado asi como exterder los prestamos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00BFPorque Palanaeum?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Es simplemente una biblioteca que se encuentra en mi saga de libros favorita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00BFComo puedo extender el palaso de entrega?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tienes que iniciar secion con los datos de tu cuenta asociada al prestamo e ir a la secion de prestamos y si tienes disponible una extencion le podras dar a \"aplasar entrega\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00BFQue puedo hacer si olvide mi contrase\u00F1a??!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ve a inisiar cecion y \"olvide mi contrase\u00F1a\" si tienes problemas puedes comunicarte a \"Insertar correo random\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00BFPorque tan poquitas preguntas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Se me fue el internet desde el martes y tengo que trabajar rapido :'v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZ3VudGFzL3ByZWd1bnRhcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreguntasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preguntas',
                templateUrl: './preguntas.component.html',
                styleUrls: ['./preguntas.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/qrcodigo/qrcodigo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/qrcodigo/qrcodigo.component.ts ***!
  \***********************************************************/
/*! exports provided: QrcodigoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrcodigoComponent", function() { return QrcodigoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js");



class QrcodigoComponent {
    constructor() { }
    ngOnInit() {
    }
}
QrcodigoComponent.ɵfac = function QrcodigoComponent_Factory(t) { return new (t || QrcodigoComponent)(); };
QrcodigoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QrcodigoComponent, selectors: [["app-qrcodigo"]], decls: 6, vars: 6, consts: [[3, "qrdata", "width", "errorCorrectionLevel"]], template: function QrcodigoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Te interesa saver mas Sobre el Palanaeum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "qrcode", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Te interesa saver mas Sobre el Cosmere:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "qrcode", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qrdata", "https://coppermind.net/wiki/Palanaeum")("width", 256)("errorCorrectionLevel", "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qrdata", "https://cosmere.es/")("width", 256)("errorCorrectionLevel", "M");
    } }, directives: [angularx_qrcode__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXJjb2RpZ28vcXJjb2RpZ28uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QrcodigoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qrcodigo',
                templateUrl: './qrcodigo.component.html',
                styleUrls: ['./qrcodigo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/registro/registro.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/registro/registro.component.ts ***!
  \***********************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function RegistroComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Las contrase\u00F1as no coinciden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegistroComponent {
    constructor(usuarioNuevo, router, fb) {
        this.usuarioNuevo = usuarioNuevo;
        this.router = router;
        this.fb = fb;
        this.auxUsuario = {
            uid: '',
            nombre: '',
            ApPaterno: '',
            ApMaterno: '',
            correo: '',
            contraseña: '',
            rol: ''
        };
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            'apPaterno': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            'apMaterno': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            'contraseña': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            'contraseñaR': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            'terminos': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ngOnInit() {
    }
    cambioss() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.bandera = this.checarSiSonIguales();
    }
    create(usuario) {
        this.usuarioNuevo.RegistrarUsuario(usuario);
        this.router.navigate(['home']);
    }
    registrarUsuario() {
        console.log('Formulario enviado');
        this.auxUsuario.nombre = this.forma.get('nombre').value;
        this.auxUsuario.ApPaterno = this.forma.get('apPaterno').value;
        this.auxUsuario.ApMaterno = this.forma.get('apMaterno').value;
        this.auxUsuario.correo = this.forma.get('correo').value;
        this.auxUsuario.contraseña = this.forma.get('contraseña').value;
        this.forma.setValue({ nombre: '', apPaterno: '', apMaterno: '', correo: '', contraseña: '', contraseñaR: '' });
        this.create(this.auxUsuario);
    }
    checarSiSonIguales() {
        if (this.forma.get('contraseña') === this.forma.get('contraseñaR')) {
            return false;
        }
        else {
            return true;
        }
    }
}
RegistroComponent.ɵfac = function RegistroComponent_Factory(t) { return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistroComponent, selectors: [["app-registro"]], decls: 41, vars: 3, consts: [[1, "contact-card"], [1, "example-form", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], [1, "example-full-width", "basic-container"], ["matInput", "", "type", "text", "formControlName", "nombre", "ngModel", "", "required", "", 1, "form-control"], ["matInput", "", "type", "text", "formControlName", "apPaterno", "ngModel", "", "required", "", 1, "form-control"], ["matInput", "", "type", "text", "formControlName", "apMaterno", "ngModel", "", "required", "", 1, "form-control"], ["matInput", "", "type", "text", "formControlName", "correo", "ngModel", "", "required", "", 1, "form-control"], ["matInput", "", "type", "password", "formControlName", "contrase\u00F1a", "ngModel", "", "required", "", 1, "form-control", 3, "chang"], ["matInput", "", "type", "password", "formControlName", "contrase\u00F1aR", "ngModel", "", "required", "", 1, "form-control", 3, "change"], ["matInput", "", "formControlName", "terminos", "ngModel", "", "required", "", 1, "form-control"], ["class", "mat-error", 4, "ngIf"], [1, "input-group", "col-md-8"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], [1, "mat-error"]], template: function RegistroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registro de nuevo Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistroComponent_Template_form_ngSubmit_5_listener() { return ctx.registrarUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nombre/s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Apellido Paterno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Apellido Materno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Correo Electronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chang", function RegistroComponent_Template_input_chang_28_listener() { return ctx.cambioss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Repite la Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegistroComponent_Template_input_change_32_listener() { return ctx.cambioss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Aceptar Terminos y condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RegistroComponent_mat_error_37_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forma);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bandera);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid && !ctx.bandera);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxRequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registro',
                templateUrl: './registro.component.html',
                styleUrls: ['./registro.component.css']
            }]
    }], function () { return [{ type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");






function SearchComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tag_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r2.viewValue, " ");
} }
class SearchComponent {
    constructor() {
        this.tags = [
            { value: '0', viewValue: 'Autor' },
            { value: '1', viewValue: 'Editorial' },
            { value: '3', viewValue: 'Nombre' },
        ];
    }
    ngOnInit() { }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 9, vars: 1, consts: [[1, "row"], [1, "col"], ["type", "text", "placeholder", "Buscar por autor.", 1, "form-control"], ["termino", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Buscar por...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchComponent_mat_option_8_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/models/policy.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/policy.model.ts ***!
  \****************************************/
/*! exports provided: Policy, Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Policy", function() { return Policy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Policy {
}
class Usuario {
}


/***/ }),

/***/ "./src/app/pipes/domseguro.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/domseguro.pipe.ts ***!
  \*****************************************/
/*! exports provided: DomseguroPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomseguroPipe", function() { return DomseguroPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DomseguroPipe {
    transform(value, ...args) {
        return null;
    }
}
DomseguroPipe.ɵfac = function DomseguroPipe_Factory(t) { return new (t || DomseguroPipe)(); };
DomseguroPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "domseguro", type: DomseguroPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomseguroPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'domseguro'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/correo.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/correo.service.ts ***!
  \********************************************/
/*! exports provided: CorreoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorreoService", function() { return CorreoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CorreoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    enviarCorreo(url) {
        return this.httpClient.get(url);
        //console.log(url);
        //return null;
    }
}
CorreoService.ɵfac = function CorreoService_Factory(t) { return new (t || CorreoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CorreoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CorreoService, factory: CorreoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CorreoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/policy.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/policy.service.ts ***!
  \********************************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class PolicyService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getPolicies() {
        return this.firestore.collection('biblioteca').snapshotChanges();
    }
    createPolicy(policy) {
        return this.firestore.collection('biblioteca').add(policy);
    }
    getLibro(libroID) {
        return this.firestore.collection('biblioteca').doc(libroID).snapshotChanges();
    }
    updatePolicy(policy) {
        delete policy.codigoLibro;
        this.firestore.doc('biblioteca/' + policy.codigoLibro).update(policy);
    }
    deletePolicy(policyId) {
        this.firestore.doc('biblioteca/' + policyId).delete();
    }
}
PolicyService.ɵfac = function PolicyService_Factory(t) { return new (t || PolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
PolicyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PolicyService, factory: PolicyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolicyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/usuarios.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");




class UsuariosService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    RegistrarUsuario(usuarioR) {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(usuarioR.correo, usuarioR.contraseña).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
        });
        /*
        firebase.auth().signInWithEmailLink(usuarioR.correo, usuarioR.contraseña).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          console.log(usuarioR.correo, usuarioR.contraseña);
        });
        */
        console.log('Hola');
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                // User is signed in.
                // tslint:disable-next-line: prefer-const
                let usuario = {
                    uid: '',
                    nombre: '',
                    ApPaterno: '',
                    ApMaterno: '',
                    correo: '',
                    contraseña: '',
                    rol: ''
                };
                let displayName = user.displayName;
                let email = user.email;
                let emailVerified = user.emailVerified;
                let photoURL = user.photoURL;
                let isAnonymous = user.isAnonymous;
                let providerData = user.providerData;
                // ...
                console.log(user.uid);
                usuario.uid = user.uid;
                usuario.nombre = usuarioR.nombre;
                usuario.ApPaterno = usuarioR.ApPaterno;
                usuario.ApMaterno = usuarioR.ApMaterno;
                usuario.correo = usuarioR.correo;
                this.firestore.collection('Usuarios').doc(usuario.uid).set(usuario);
            }
            else {
                // User is signed out.
                // ...
            }
        });
    }
    optenerUsuario() {
        let usuario = {
            uid: '',
            nombre: '',
            ApPaterno: '',
            ApMaterno: '',
            correo: '',
            contraseña: '',
            rol: ''
        };
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                // ...
                usuario = this.optenerDatos(uid);
                console.log('1  ', usuario);
                console.log('2  ', this.optenerDatos(uid));
                //return usuario;
            }
            else {
                // User is signed out.
                // ...
            }
        });
        return usuario;
    }
    CerrarSecion() {
        console.log('Cerrando cesion');
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut().catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
        });
    }
    IniciarSecion(correo, contraseña) {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(correo, contraseña).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            console.log(correo, contraseña);
        });
    }
    optenerDatos(uid) {
        let usuario = {
            uid: '',
            nombre: '',
            ApPaterno: '',
            ApMaterno: '',
            correo: '',
            contraseña: '',
            rol: ''
        };
        let usrRef = this.firestore.collection('Usuarios').doc(uid);
        let getDoc = usrRef.get()
            .subscribe((doc) => {
            if (doc.exists) {
                console.log('Document data:', doc.data());
                usuario.uid = doc.data().uid;
                usuario.nombre = doc.data().nombre;
                usuario.ApPaterno = doc.data().ApPaterno;
                usuario.ApMaterno = doc.data().ApMaterno;
                usuario.correo = doc.data().correo;
                usuario.contraseña = 'saludos';
                usuario.rol = doc.data().rol;
                //console.log(doc.data().uid as string, usuario);
                return usuario;
            }
            else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }); /* .(function (error) {
        console.log("Error getting document:", error);
      });*/
        return usuario;
    }
}
UsuariosService.ɵfac = function UsuariosService_Factory(t) { return new (t || UsuariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
UsuariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuariosService, factory: UsuariosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/loading/loading.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/loading/loading.component.ts ***!
  \*****************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 3, vars: 0, consts: [[1, "row", "text-center", "animated", "fadeIn"], [1, "col"], [1, "fas", "fa-sync", "fa-spin", "fa-5x"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBY3hmzVJSSKYPrtVOK3lqRip6wt8pZOyU",
        authDomain: "palanaeumproyectouaa.firebaseapp.com",
        databaseURL: "https://palanaeumproyectouaa.firebaseio.com",
        projectId: "palanaeumproyectouaa",
        storageBucket: "palanaeumproyectouaa.appspot.com",
        messagingSenderId: "904432413605",
        appId: "1:904432413605:web:30b6c9111dd5e5f138564c",
        measurementId: "G-VR655LE9LE"
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! T:\hecto\Desktop\pruebas\angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map