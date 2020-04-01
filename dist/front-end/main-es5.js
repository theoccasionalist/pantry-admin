function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./auth.config.ts":
  /*!************************!*\
    !*** ./auth.config.ts ***!
    \************************/

  /*! exports provided: default */

  /***/
  function authConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = {
      domain: 'young-cell-9742.auth0.com',
      client_id: 'baw80wc6kObTX8PwZQTfcqaExteejyaS',
      redirect_uri: "".concat(window.location.origin, "/callback")
    };
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_pantry_overview_pantry_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/pantry-overview/pantry-overview.component */
    "./src/app/components/pantry-overview/pantry-overview.component.ts");
    /* harmony import */


    var _components_order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/order-overview/order-overview.component */
    "./src/app/components/order-overview/order-overview.component.ts");
    /* harmony import */


    var _components_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/product-edit/product-edit.component */
    "./src/app/components/product-edit/product-edit.component.ts");
    /* harmony import */


    var _components_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/product-add/product-add.component */
    "./src/app/components/product-add/product-add.component.ts");
    /* harmony import */


    var _components_type_add_type_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/type-add/type-add.component */
    "./src/app/components/type-add/type-add.component.ts");
    /* harmony import */


    var _components_type_edit_type_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/type-edit/type-edit.component */
    "./src/app/components/type-edit/type-edit.component.ts");
    /* harmony import */


    var _components_sub_type_edit_sub_type_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/sub-type-edit/sub-type-edit.component */
    "./src/app/components/sub-type-edit/sub-type-edit.component.ts");
    /* harmony import */


    var _components_shop_edit_shop_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/shop-edit/shop-edit.component */
    "./src/app/components/shop-edit/shop-edit.component.ts");
    /* harmony import */


    var _components_order_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/order/order.component */
    "./src/app/components/order/order.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/callback/callback.component */
    "./src/app/components/callback/callback.component.ts");
    /* harmony import */


    var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/log-in/log-in.component */
    "./src/app/components/log-in/log-in.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/interceptor.service */
    "./src/app/services/interceptor.service.ts");

    var routes = [{
      path: 'callback',
      component: _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_12__["CallbackComponent"]
    }, {
      path: 'log-in',
      component: _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_13__["LogInComponent"]
    }, {
      path: 'orders',
      component: _components_order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_3__["OrderOverviewComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'order/:id',
      component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_10__["OrderComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'pantry',
      component: _components_pantry_overview_pantry_overview_component__WEBPACK_IMPORTED_MODULE_2__["PantryOverviewComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'product',
      component: _components_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_5__["ProductAddComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'product/:id',
      component: _components_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_4__["ProductEditComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'shop',
      component: _components_shop_edit_shop_edit_component__WEBPACK_IMPORTED_MODULE_9__["ShopEditComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'sub-types',
      component: _components_sub_type_edit_sub_type_edit_component__WEBPACK_IMPORTED_MODULE_8__["SubTypeEditComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'type',
      component: _components_type_add_type_add_component__WEBPACK_IMPORTED_MODULE_6__["TypeAddComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'type/:id',
      component: _components_type_edit_type_edit_component__WEBPACK_IMPORTED_MODULE_7__["TypeEditComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: '',
      redirectTo: 'log-in',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
        useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["InterceptorService"],
        multi: true
      }],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["InterceptorService"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'front-end';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/main.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_print__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-print */
    "./node_modules/ngx-print/__ivy_ngcc__/fesm2015/ngx-print.js");
    /* harmony import */


    var _components_types_types_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/types/types.component */
    "./src/app/components/types/types.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/order-overview/order-overview.component */
    "./src/app/components/order-overview/order-overview.component.ts");
    /* harmony import */


    var _components_pantry_overview_pantry_overview_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/pantry-overview/pantry-overview.component */
    "./src/app/components/pantry-overview/pantry-overview.component.ts");
    /* harmony import */


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _components_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/product-edit/product-edit.component */
    "./src/app/components/product-edit/product-edit.component.ts");
    /* harmony import */


    var _components_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/product-add/product-add.component */
    "./src/app/components/product-add/product-add.component.ts");
    /* harmony import */


    var _components_type_add_type_add_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/type-add/type-add.component */
    "./src/app/components/type-add/type-add.component.ts");
    /* harmony import */


    var _components_type_edit_type_edit_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/type-edit/type-edit.component */
    "./src/app/components/type-edit/type-edit.component.ts");
    /* harmony import */


    var _components_sub_type_edit_sub_type_edit_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/sub-type-edit/sub-type-edit.component */
    "./src/app/components/sub-type-edit/sub-type-edit.component.ts");
    /* harmony import */


    var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/shop/shop.component */
    "./src/app/components/shop/shop.component.ts");
    /* harmony import */


    var _components_shop_edit_shop_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/shop-edit/shop-edit.component */
    "./src/app/components/shop-edit/shop-edit.component.ts");
    /* harmony import */


    var _components_product_grid_buttons_product_grid_buttons_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/product-grid-buttons/product-grid-buttons.component */
    "./src/app/components/product-grid-buttons/product-grid-buttons.component.ts");
    /* harmony import */


    var _components_type_grid_buttons_type_grid_buttons_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/type-grid-buttons/type-grid-buttons.component */
    "./src/app/components/type-grid-buttons/type-grid-buttons.component.ts");
    /* harmony import */


    var _components_product_delete_modal_product_delete_modal_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/product-delete-modal/product-delete-modal.component */
    "./src/app/components/product-delete-modal/product-delete-modal.component.ts");
    /* harmony import */


    var _components_type_delete_modal_type_delete_modal_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/type-delete-modal/type-delete-modal.component */
    "./src/app/components/type-delete-modal/type-delete-modal.component.ts");
    /* harmony import */


    var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/orders/orders.component */
    "./src/app/components/orders/orders.component.ts");
    /* harmony import */


    var _components_order_grid_buttons_order_grid_buttons_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/order-grid-buttons/order-grid-buttons.component */
    "./src/app/components/order-grid-buttons/order-grid-buttons.component.ts");
    /* harmony import */


    var _components_order_order_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/order/order.component */
    "./src/app/components/order/order.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_family_family_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./components/family/family.component */
    "./src/app/components/family/family.component.ts");
    /* harmony import */


    var _components_family_print_family_print_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./components/family-print/family-print.component */
    "./src/app/components/family-print/family-print.component.ts");
    /* harmony import */


    var _components_cart_print_cart_print_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./components/cart-print/cart-print.component */
    "./src/app/components/cart-print/cart-print.component.ts");
    /* harmony import */


    var _components_order_delete_modal_order_delete_modal_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./components/order-delete-modal/order-delete-modal.component */
    "./src/app/components/order-delete-modal/order-delete-modal.component.ts");
    /* harmony import */


    var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./components/log-in/log-in.component */
    "./src/app/components/log-in/log-in.component.ts");
    /* harmony import */


    var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./components/callback/callback.component */
    "./src/app/components/callback/callback.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_50__["APP_BASE_HREF"],
        useValue: 'https://modern-volunteer-test.herokuapp.com'
      }, {
        provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MAT_SNACK_BAR_DEFAULT_OPTIONS"],
        useValue: {
          duration: 2000
        }
      }],
      imports: [[ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"], ngx_print__WEBPACK_IMPORTED_MODULE_23__["NgxPrintModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"], _components_types_types_component__WEBPACK_IMPORTED_MODULE_24__["TypesComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__["NavbarComponent"], _components_order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_26__["OrderOverviewComponent"], _components_pantry_overview_pantry_overview_component__WEBPACK_IMPORTED_MODULE_27__["PantryOverviewComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_28__["ProductsComponent"], _components_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_29__["ProductEditComponent"], _components_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_30__["ProductAddComponent"], _components_type_add_type_add_component__WEBPACK_IMPORTED_MODULE_31__["TypeAddComponent"], _components_type_edit_type_edit_component__WEBPACK_IMPORTED_MODULE_32__["TypeEditComponent"], _components_sub_type_edit_sub_type_edit_component__WEBPACK_IMPORTED_MODULE_33__["SubTypeEditComponent"], _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_34__["ShopComponent"], _components_shop_edit_shop_edit_component__WEBPACK_IMPORTED_MODULE_35__["ShopEditComponent"], _components_product_grid_buttons_product_grid_buttons_component__WEBPACK_IMPORTED_MODULE_36__["ProductGridButtonsComponent"], _components_type_grid_buttons_type_grid_buttons_component__WEBPACK_IMPORTED_MODULE_37__["TypeGridButtonsComponent"], _components_product_delete_modal_product_delete_modal_component__WEBPACK_IMPORTED_MODULE_38__["ProductDeleteModalComponent"], _components_type_delete_modal_type_delete_modal_component__WEBPACK_IMPORTED_MODULE_39__["TypeDeleteModalComponent"], _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_40__["OrdersComponent"], _components_order_grid_buttons_order_grid_buttons_component__WEBPACK_IMPORTED_MODULE_41__["OrderGridButtonsComponent"], _components_order_order_component__WEBPACK_IMPORTED_MODULE_42__["OrderComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_43__["CartComponent"], _components_family_family_component__WEBPACK_IMPORTED_MODULE_44__["FamilyComponent"], _components_family_print_family_print_component__WEBPACK_IMPORTED_MODULE_45__["FamilyPrintComponent"], _components_cart_print_cart_print_component__WEBPACK_IMPORTED_MODULE_46__["CartPrintComponent"], _components_order_delete_modal_order_delete_modal_component__WEBPACK_IMPORTED_MODULE_47__["OrderDeleteModalComponent"], _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_48__["LogInComponent"], _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_49__["CallbackComponent"]],
        imports: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"], ngx_print__WEBPACK_IMPORTED_MODULE_23__["NgxPrintModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"], _components_types_types_component__WEBPACK_IMPORTED_MODULE_24__["TypesComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__["NavbarComponent"], _components_order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_26__["OrderOverviewComponent"], _components_pantry_overview_pantry_overview_component__WEBPACK_IMPORTED_MODULE_27__["PantryOverviewComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_28__["ProductsComponent"], _components_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_29__["ProductEditComponent"], _components_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_30__["ProductAddComponent"], _components_type_add_type_add_component__WEBPACK_IMPORTED_MODULE_31__["TypeAddComponent"], _components_type_edit_type_edit_component__WEBPACK_IMPORTED_MODULE_32__["TypeEditComponent"], _components_sub_type_edit_sub_type_edit_component__WEBPACK_IMPORTED_MODULE_33__["SubTypeEditComponent"], _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_34__["ShopComponent"], _components_shop_edit_shop_edit_component__WEBPACK_IMPORTED_MODULE_35__["ShopEditComponent"], _components_product_grid_buttons_product_grid_buttons_component__WEBPACK_IMPORTED_MODULE_36__["ProductGridButtonsComponent"], _components_type_grid_buttons_type_grid_buttons_component__WEBPACK_IMPORTED_MODULE_37__["TypeGridButtonsComponent"], _components_product_delete_modal_product_delete_modal_component__WEBPACK_IMPORTED_MODULE_38__["ProductDeleteModalComponent"], _components_type_delete_modal_type_delete_modal_component__WEBPACK_IMPORTED_MODULE_39__["TypeDeleteModalComponent"], _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_40__["OrdersComponent"], _components_order_grid_buttons_order_grid_buttons_component__WEBPACK_IMPORTED_MODULE_41__["OrderGridButtonsComponent"], _components_order_order_component__WEBPACK_IMPORTED_MODULE_42__["OrderComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_43__["CartComponent"], _components_family_family_component__WEBPACK_IMPORTED_MODULE_44__["FamilyComponent"], _components_family_print_family_print_component__WEBPACK_IMPORTED_MODULE_45__["FamilyPrintComponent"], _components_cart_print_cart_print_component__WEBPACK_IMPORTED_MODULE_46__["CartPrintComponent"], _components_order_delete_modal_order_delete_modal_component__WEBPACK_IMPORTED_MODULE_47__["OrderDeleteModalComponent"], _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_48__["LogInComponent"], _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_49__["CallbackComponent"]],
          imports: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"], ngx_print__WEBPACK_IMPORTED_MODULE_23__["NgxPrintModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]],
          entryComponents: [_components_order_delete_modal_order_delete_modal_component__WEBPACK_IMPORTED_MODULE_47__["OrderDeleteModalComponent"], _components_order_grid_buttons_order_grid_buttons_component__WEBPACK_IMPORTED_MODULE_41__["OrderGridButtonsComponent"], _components_product_delete_modal_product_delete_modal_component__WEBPACK_IMPORTED_MODULE_38__["ProductDeleteModalComponent"], _components_product_grid_buttons_product_grid_buttons_component__WEBPACK_IMPORTED_MODULE_36__["ProductGridButtonsComponent"], _components_type_delete_modal_type_delete_modal_component__WEBPACK_IMPORTED_MODULE_39__["TypeDeleteModalComponent"], _components_type_grid_buttons_type_grid_buttons_component__WEBPACK_IMPORTED_MODULE_37__["TypeGridButtonsComponent"]],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_50__["APP_BASE_HREF"],
            useValue: 'https://modern-volunteer-test.herokuapp.com'
          }, {
            provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MAT_SNACK_BAR_DEFAULT_OPTIONS"],
            useValue: {
              duration: 2000
            }
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/callback/callback.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/callback/callback.component.ts ***!
    \***********************************************************/

  /*! exports provided: CallbackComponent */

  /***/
  function srcAppComponentsCallbackCallbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallbackComponent", function () {
      return CallbackComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    var CallbackComponent =
    /*#__PURE__*/
    function () {
      function CallbackComponent(authService) {
        _classCallCheck(this, CallbackComponent);

        this.authService = authService;
      }

      _createClass(CallbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.handleAuthCallback();
        }
      }]);

      return CallbackComponent;
    }();

    CallbackComponent.ɵfac = function CallbackComponent_Factory(t) {
      return new (t || CallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    CallbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CallbackComponent,
      selectors: [["app-callback"]],
      decls: 1,
      vars: 0,
      template: function CallbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
        }
      },
      directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"]],
      styles: [".mat-spinner[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    height: 2em;\r\n    width: 2em;\r\n    overflow: visible;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0VBQ1YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXNwaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-callback',
          templateUrl: './callback.component.html',
          styleUrls: ['./callback.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/cart-print/cart-print.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/cart-print/cart-print.component.ts ***!
    \***************************************************************/

  /*! exports provided: CartPrintComponent */

  /***/
  function srcAppComponentsCartPrintCartPrintComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPrintComponent", function () {
      return CartPrintComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    function CartPrintComponent_div_1_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartPrintComponent_div_1_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r222 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r222.productName);
      }
    }

    function CartPrintComponent_div_1_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartPrintComponent_div_1_td_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r223 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r223.amount);
      }
    }

    function CartPrintComponent_div_1_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
      }
    }

    function CartPrintComponent_div_1_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
      }
    }

    function CartPrintComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartPrintComponent_div_1_th_8_Template, 2, 0, "th", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartPrintComponent_div_1_td_9_Template, 3, 1, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CartPrintComponent_div_1_th_11_Template, 3, 0, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CartPrintComponent_div_1_td_12_Template, 3, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CartPrintComponent_div_1_tr_13_Template, 1, 0, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartPrintComponent_div_1_tr_14_Template, 1, 0, "tr", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r215 = ctx.$implicit;

        var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r215.typeName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", type_r215.products);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r214.columns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r214.columns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Family: " + ctx_r214.order.family.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](" Order Id: " + ctx_r214.sliceId);
      }
    }

    var CartPrintComponent =
    /*#__PURE__*/
    function () {
      function CartPrintComponent() {
        _classCallCheck(this, CartPrintComponent);

        this.columns = ['column1', 'column2'];
      }

      _createClass(CartPrintComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CartPrintComponent;
    }();

    CartPrintComponent.ɵfac = function CartPrintComponent_Factory(t) {
      return new (t || CartPrintComponent)();
    };

    CartPrintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartPrintComponent,
      selectors: [["app-cart-print"]],
      inputs: {
        order: "order",
        sliceId: "sliceId"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "flex-container"], [4, "ngFor", "ngForOf"], [1, "no-border"], [1, "items-toolbar", "top-table"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "column1"], ["class", "half", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "half", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "column2"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "items-toolbar", "bottom-table"], ["mat-header-cell", "", 1, "half"], ["mat-cell", "", 1, "half"], ["mat-header-cell", ""], [1, "margin-left"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function CartPrintComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartPrintComponent_div_1_Template, 20, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.order.cart);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
      styles: ["header[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n}\r\n#order-header[_ngcontent-%COMP%] {\r\n    border-bottom: solid black 5px;\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-template-rows: auto auto;\r\n    font-style: bolder;\r\n    font-size: x-large;\r\n}\r\n.order-header-center[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    justify-content: center;\r\n}\r\n#order-id[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    margin-bottom: 3%;\r\n}\r\n.flex-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    gap: 3%;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(auto-fill, auto);\r\n    margin-top: 3%;\r\n    width: 100%;\r\n}\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    color: black;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.items-toolbar[_ngcontent-%COMP%] {\r\n    background-color: rgb(43, 126, 235);\r\n    background-image: url('buried.png');\r\n    border: solid black 2px;\r\n    height: 2rem;\r\n    width: 100%;\r\n}\r\n.top-table[_ngcontent-%COMP%] {\r\n    border-bottom: none;\r\n}\r\n.bottom-table[_ngcontent-%COMP%] {\r\n    border-top: 1px;\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n    display: flex;\r\n    font-size: small;\r\n    height: 1rem;\r\n    justify-content: space-around;\r\n}\r\n.mat-table[_ngcontent-%COMP%] {\r\n    border: solid black .25x;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    page-break-inside: avoid; \r\n    width: 100%; \r\n}\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    color: black;\r\n    border: solid black .5px;\r\n}\r\ntr[_ngcontent-%COMP%] { \r\n    page-break-inside:avoid; \r\n    page-break-after:auto \r\n}\r\n.no-border[_ngcontent-%COMP%] {\r\n    border: none\r\n}\r\n.margin-left[_ngcontent-%COMP%] {\r\n    margin-left: 20%;\r\n}\r\n.half[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LXByaW50L2NhcnQtcHJpbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0FBQ1Y7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLHFDQUFxQztJQUNyQywyQ0FBMkM7SUFDM0MsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLG1DQUF3RDtJQUN4RCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LXByaW50L2NhcnQtcHJpbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuI29yZGVyLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjayA1cHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxuICAgIGZvbnQtc3R5bGU6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4ub3JkZXItaGVhZGVyLWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI29yZGVyLWlkIHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDMlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgYXV0byk7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLml0ZW1zLXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCAxMjYsIDIzNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9idXJpZWQucG5nKTtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMnB4O1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRvcC10YWJsZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi5ib3R0b20tdGFibGUge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4ubWF0LXRhYmxlIHtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgLjI1eDtcclxufVxyXG50YWJsZSB7XHJcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7IFxyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG59XHJcbnRkLCB0aCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIC41cHg7XHJcbn1cclxudHIgeyBcclxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOmF2b2lkOyBcclxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6YXV0byBcclxufVxyXG4ubm8tYm9yZGVyIHtcclxuICAgIGJvcmRlcjogbm9uZVxyXG59XHJcbi5tYXJnaW4tbGVmdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcbi5oYWxmIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartPrintComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart-print',
          templateUrl: './cart-print.component.html',
          styleUrls: ['./cart-print.component.css']
        }]
      }], function () {
        return [];
      }, {
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sliceId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/cart/cart.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/cart/cart.component.ts ***!
    \***************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    function CartComponent_div_7_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_7_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r211 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r211.productName);
      }
    }

    function CartComponent_div_7_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_7_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r212 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r212.amount);
      }
    }

    function CartComponent_div_7_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
      }
    }

    function CartComponent_div_7_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
      }
    }

    function CartComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_div_7_th_6_Template, 2, 0, "th", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CartComponent_div_7_td_7_Template, 2, 1, "td", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartComponent_div_7_th_9_Template, 2, 0, "th", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CartComponent_div_7_td_10_Template, 2, 1, "td", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CartComponent_div_7_tr_11_Template, 1, 0, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CartComponent_div_7_tr_12_Template, 1, 0, "tr", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r204 = ctx.$implicit;

        var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r204.typeName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", type_r204.products);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r203.columns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r203.columns);
      }
    }

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent() {
        _classCallCheck(this, CartComponent);

        this.columns = ['column1', 'column2'];
        this.panelOpenState = true;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cart = this.order.cart;
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)();
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      inputs: {
        order: "order"
      },
      decls: 9,
      vars: 3,
      consts: [[3, "expanded", "opened", "closed"], [1, "flex-container"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "margin-left"], [1, "items-toolbar"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "column1"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "column2"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "items-toolbar", "bottom-table"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CartComponent_Template_mat_expansion_panel_opened_0_listener($event) {
            return ctx.panelOpenState = true;
          })("closed", function CartComponent_Template_mat_expansion_panel_closed_0_listener($event) {
            return ctx.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CartComponent_div_7_Template, 14, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-action-row", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_mat_action_row_click_8_listener($event) {
            return ctx.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.panelOpenState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.panelOpenState ? "close" : "open");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cart);
        }
      },
      directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelDescription"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelActionRow"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
      styles: [".mat-expansion-panel[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    background-image: url('buried.png');\r\n    border: solid black 1px;\r\n}\r\n.flex-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(auto-fill, auto);\r\n    gap: 1rem;\r\n}\r\n.margin-left[_ngcontent-%COMP%] {\r\n    margin-left: 2em;\r\n}\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    border-bottom: solid black .5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    color: white;\r\n    \r\n}\r\n.items-toolbar[_ngcontent-%COMP%] {\r\n    background-color: rgb(43, 126, 235);\r\n    background-image: url('buried.png');\r\n    border: solid black .5px;\r\n    height: 2rem;\r\n    width: 100%;\r\n}\r\n.bottom-table[_ngcontent-%COMP%] {\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n    height: 1rem;\r\n}\r\n.mat-table[_ngcontent-%COMP%] {\r\n    background: rgb(24, 21, 21);\r\n    width: 100%;\r\n}\r\n.mat-action-row[_ngcontent-%COMP%] {\r\n    border-top: 0;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixtQ0FBd0Q7SUFDeEQsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFDQUFxQztJQUNyQywyQ0FBMkM7SUFDM0MsU0FBUztBQUNiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxtQ0FBd0Q7SUFDeEQsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NTc3NztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIGF1dG8pO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcbi5tYXJnaW4tbGVmdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG59XHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjayAuNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbn1cclxuLml0ZW1zLXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCAxMjYsIDIzNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9idXJpZWQucG5nKTtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgLjVweDtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5ib3R0b20tdGFibGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG59XHJcbi5tYXQtdGFibGUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0LCAyMSwgMjEpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC1hY3Rpb24tcm93IHtcclxuICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.css']
        }]
      }], function () {
        return [];
      }, {
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/family-print/family-print.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/family-print/family-print.component.ts ***!
    \*******************************************************************/

  /*! exports provided: FamilyPrintComponent */

  /***/
  function srcAppComponentsFamilyPrintFamilyPrintComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FamilyPrintComponent", function () {
      return FamilyPrintComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var FamilyPrintComponent =
    /*#__PURE__*/
    function () {
      function FamilyPrintComponent() {
        _classCallCheck(this, FamilyPrintComponent);
      }

      _createClass(FamilyPrintComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FamilyPrintComponent;
    }();

    FamilyPrintComponent.ɵfac = function FamilyPrintComponent_Factory(t) {
      return new (t || FamilyPrintComponent)();
    };

    FamilyPrintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FamilyPrintComponent,
      selectors: [["app-family-print"]],
      inputs: {
        order: "order",
        sliceId: "sliceId"
      },
      decls: 65,
      vars: 11,
      consts: [[1, "info-header"], ["id", "contact-inner-grid"], [1, "info", "info-label"], [1, "info"], ["id", "house-pick-up-grid"], ["id", "household-inner-grid"], ["id", "pick-up-inner-grid"]],
      template: function FamilyPrintComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Last Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Zip Code:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Phone Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Household");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Family Size:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "School Children:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Infants:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Pick Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Order Id:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.family.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.family.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.family.zipCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.family.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.family.emailAddress ? ctx.order.family.emailAddress : "Not Provided");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.family.familySize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.family.schoolChildren ? ctx.order.family.schoolChildren : "None");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.family.infants ? "Yes" : "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.pickUpDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.family.referral ? "CELC" : "Broad St.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sliceId);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"]],
      styles: [".info-header[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    font-style: bolder;\r\n}\r\n#info-outer-grid[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n.info[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n.mat-card[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n    width: auto;\r\n}\r\n#contact-inner-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 20% 70%;  \r\n}\r\n#house-pick-up-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 45% 45%;\r\n    gap: 10%;\r\n    margin-top: 5%;\r\n}\r\n#household-inner-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n}\r\n#pick-up-inner-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 30% 70%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYW1pbHktcHJpbnQvZmFtaWx5LXByaW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFFBQVE7SUFDUixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYW1pbHktcHJpbnQvZmFtaWx5LXByaW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGRlcjtcclxufVxyXG4jaW5mby1vdXRlci1ncmlkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbiNjb250YWN0LWlubmVyLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDcwJTsgIFxyXG59XHJcbiNob3VzZS1waWNrLXVwLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDUlIDQ1JTtcclxuICAgIGdhcDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuI2hvdXNlaG9sZC1pbm5lci1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbn1cclxuI3BpY2stdXAtaW5uZXItZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNzAlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamilyPrintComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-family-print',
          templateUrl: './family-print.component.html',
          styleUrls: ['./family-print.component.css']
        }]
      }], function () {
        return [];
      }, {
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sliceId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/family/family.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/family/family.component.ts ***!
    \*******************************************************/

  /*! exports provided: FamilyComponent */

  /***/
  function srcAppComponentsFamilyFamilyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FamilyComponent", function () {
      return FamilyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var FamilyComponent =
    /*#__PURE__*/
    function () {
      function FamilyComponent() {
        _classCallCheck(this, FamilyComponent);

        this.panelOpenState = true;
      }

      _createClass(FamilyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.family = this.order.family;
          this.pickUpDate = this.order.pickUpDate;
        }
      }]);

      return FamilyComponent;
    }();

    FamilyComponent.ɵfac = function FamilyComponent_Factory(t) {
      return new (t || FamilyComponent)();
    };

    FamilyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FamilyComponent,
      selectors: [["app-family"]],
      inputs: {
        order: "order",
        sliceId: "sliceId"
      },
      decls: 72,
      vars: 13,
      consts: [[3, "expanded", "opened", "closed"], ["id", "info-outer-grid"], [1, "info-header"], [1, "info-card"], ["id", "contact-inner-grid"], [1, "info", "info-label"], [1, "info"], ["id", "household-inner-grid"], ["id", "pick-up-inner-grid"]],
      template: function FamilyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FamilyComponent_Template_mat_expansion_panel_opened_0_listener($event) {
            return ctx.panelOpenState = true;
          })("closed", function FamilyComponent_Template_mat_expansion_panel_closed_0_listener($event) {
            return ctx.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Guest and Pick Up Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Zip Code:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Phone Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Household");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Family Size:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "School Children:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Infants:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Pick Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Order Id:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.panelOpenState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.panelOpenState ? "close" : "open");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.family.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.family.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.family.zipCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.family.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.family.emailAddress ? ctx.family.emailAddress : "Not Provided");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.family.familySize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.family.schoolChildren ? ctx.family.schoolChildren : "None");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.family.infants ? "Yes" : "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pickUpDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.family.referral ? "CELC" : "Broad St.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sliceId);
        }
      },
      directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelDescription"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"]],
      styles: [".mat-card[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n.margin-bottom[_ngcontent-%COMP%] {\r\n    margin-bottom: 1%;\r\n}\r\n.margin-top[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    vertical-align: center;\r\n}\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    background-image: url('buried.png');\r\n    border: solid black 1px;\r\n}\r\n#info-outer-grid[_ngcontent-%COMP%] {\r\n    background-image: url('buried.png');\r\n    display: grid;\r\n    grid-template-columns: 50% 20% 20%;\r\n    gap: 3%;\r\n}\r\n.info-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n    margin-left: .5rem;\r\n}\r\n.info-card[_ngcontent-%COMP%] {\r\n    background-color: #03354b;\r\n}\r\n#contact-inner-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 30% 70%;\r\n}\r\n#household-inner-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 70% 30%;\r\n}\r\n#pick-up-inner-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n}\r\n.info[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n    word-wrap: break-word;\r\n}\r\n.info-label[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYW1pbHkvZmFtaWx5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1DQUF3RDtJQUN4RCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1DQUF3RDtJQUN4RCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLE9BQU87QUFDWDtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZhbWlseS9mYW1pbHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuLm1hcmdpbi1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuLm1hcmdpbi10b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY1Nzc3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVyaWVkLnBuZyk7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG4jaW5mby1vdXRlci1ncmlkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDIwJSAyMCU7XHJcbiAgICBnYXA6IDMlO1xyXG59XHJcbi5pbmZvLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG59XHJcbi5pbmZvLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMzU0YjtcclxufVxyXG4jY29udGFjdC1pbm5lci1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA3MCU7XHJcbn1cclxuI2hvdXNlaG9sZC1pbm5lci1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XHJcbn1cclxuI3BpY2stdXAtaW5uZXItZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG59XHJcbi5pbmZvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuLmluZm8tbGFiZWwge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamilyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-family',
          templateUrl: './family.component.html',
          styleUrls: ['./family.component.css']
        }]
      }], function () {
        return [];
      }, {
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sliceId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/log-in/log-in.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/log-in/log-in.component.ts ***!
    \*******************************************************/

  /*! exports provided: LogInComponent */

  /***/
  function srcAppComponentsLogInLogInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogInComponent", function () {
      return LogInComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function LogInComponent_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInComponent_button_8_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178);

          var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r177.authService.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LogInComponent_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInComponent_button_9_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r179.toOrders();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "To Family");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LogInComponent =
    /*#__PURE__*/
    function () {
      function LogInComponent(authService, router) {
        _classCallCheck(this, LogInComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(LogInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('hello?');
        }
      }, {
        key: "toOrders",
        value: function toOrders() {
          this.router.navigate(["/orders"]);
        }
      }]);

      return LogInComponent;
    }();

    LogInComponent.ɵfac = function LogInComponent_Factory(t) {
      return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LogInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogInComponent,
      selectors: [["app-log-in"]],
      decls: 10,
      vars: 2,
      consts: [["id", "grid-container"], ["id", "logo", "src", "../../../assets/images/bsfp-logo-login.png", "alt", "bsfp-logo-login"], ["id", "message-button-container"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 3, "click"]],
      template: function LogInComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Pantry Manager! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LogInComponent_button_8_Template, 2, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LogInComponent_button_9_Template, 2, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nLWluL2xvZy1pbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-log-in',
          templateUrl: './log-in.component.html',
          styleUrls: ['./log-in.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(authService, router) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onOrderClick",
        value: function onOrderClick() {
          this.router.navigate(["/orders"]);
        }
      }, {
        key: "onPantryClick",
        value: function onPantryClick() {
          this.router.navigate(["/pantry"]);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 10,
      vars: 0,
      consts: [["mat-raised-button", "", 1, "order-button-margin", 3, "click"], ["mat-raised-button", "", 3, "click"], ["id", "title"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_1_listener($event) {
            return ctx.onOrderClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener($event) {
            return ctx.onPantryClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pantry Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Online Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_8_listener($event) {
            return ctx.authService.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: [".mat-toolbar[_ngcontent-%COMP%] {\r\n    background: #065777;\r\n    background-image: url('black-paper.png');\r\n\r\n    border-bottom: solid black 2px;\r\n    display: grid;\r\n    grid-template-columns: 10% 2% 10% 68% 10%;\r\n    min-width: 1200px;\r\n}\r\n#title[_ngcontent-%COMP%] {\r\n    padding-left: 35%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsd0NBQTZEOztJQUU3RCw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwNjU3Nzc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ibGFjay1wYXBlci5wbmcpO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrIDJweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSAyJSAxMCUgNjglIDEwJTtcclxuICAgIG1pbi13aWR0aDogMTIwMHB4O1xyXG59XHJcbiN0aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1JTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/order-delete-modal/order-delete-modal.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/order-delete-modal/order-delete-modal.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: OrderDeleteModalComponent */

  /***/
  function srcAppComponentsOrderDeleteModalOrderDeleteModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDeleteModalComponent", function () {
      return OrderDeleteModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var src_app_models_order_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/order.model */
    "./src/app/models/order.model.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var OrderDeleteModalComponent =
    /*#__PURE__*/
    function () {
      function OrderDeleteModalComponent(dataService, dialogRef, order, orderService, router, snackBar) {
        _classCallCheck(this, OrderDeleteModalComponent);

        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.order = order;
        this.orderService = orderService;
        this.router = router;
        this.snackBar = snackBar;
      }

      _createClass(OrderDeleteModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.sliceId = this.order._id.slice(-5);
        }
      }, {
        key: "onProceedClick",
        value: function onProceedClick() {
          var _this = this;

          this.orderService.deleteOrder(this.order._id).subscribe(function (response) {
            _this.showResponseStatus(response.status);

            _this.dialogRef.close();

            _this.router.navigate(['/orders']);
          });
        }
      }, {
        key: "onCancelClick",
        value: function onCancelClick() {
          this.dialogRef.close();
          this.router.navigate(["/orders"]);
        }
      }, {
        key: "showResponseStatus",
        value: function showResponseStatus(status) {
          if (status === 200) {
            this.snackBar.open("Order Id ".concat(this.sliceId, " successfully deleted."), 'Dismiss', {
              panelClass: ['green-snackbar']
            });
          } else {
            this.snackBar.open("Order Id ".concat(this.sliceId, " failed to delete."), 'Dismiss', {
              panelClass: ['red-snackbar']
            });
          }

          this.dataService.updateOrders();
        }
      }]);

      return OrderDeleteModalComponent;
    }();

    OrderDeleteModalComponent.ɵfac = function OrderDeleteModalComponent_Factory(t) {
      return new (t || OrderDeleteModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
    };

    OrderDeleteModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderDeleteModalComponent,
      selectors: [["app-order-delete-modal"]],
      decls: 10,
      vars: 1,
      consts: [["id", "proceed-prompt"], ["mat-raised-button", "", 3, "click"]],
      template: function OrderDeleteModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Do you wish to proceed?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDeleteModalComponent_Template_button_click_6_listener($event) {
            return ctx.onCancelClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDeleteModalComponent_Template_button_click_8_listener($event) {
            return ctx.onProceedClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Proceed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This will permanently delete order i.d. ", ctx.sliceId, ". Please assure that this order has been accommodated.");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: [".mat-card[_ngcontent-%COMP%] {\r\n    background-color: rgb(155, 23, 23);\r\n    border: solid black 1px;\r\n    margin-top: 2%;\r\n}\r\n#proceed-prompt[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nspan[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1kZWxldGUtbW9kYWwvb3JkZXItZGVsZXRlLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yZGVyLWRlbGV0ZS1tb2RhbC9vcmRlci1kZWxldGUtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1LCAyMywgMjMpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4jcHJvY2VlZC1wcm9tcHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbnNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDeleteModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-delete-modal',
          templateUrl: './order-delete-modal.component.html',
          styleUrls: ['./order-delete-modal.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: src_app_models_order_model__WEBPACK_IMPORTED_MODULE_6__["Order"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/order-grid-buttons/order-grid-buttons.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/order-grid-buttons/order-grid-buttons.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: OrderGridButtonsComponent */

  /***/
  function srcAppComponentsOrderGridButtonsOrderGridButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderGridButtonsComponent", function () {
      return OrderGridButtonsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _order_delete_modal_order_delete_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../order-delete-modal/order-delete-modal.component */
    "./src/app/components/order-delete-modal/order-delete-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var OrderGridButtonsComponent =
    /*#__PURE__*/
    function () {
      function OrderGridButtonsComponent(dialog, router, snackBar) {
        _classCallCheck(this, OrderGridButtonsComponent);

        this.dialog = dialog;
        this.router = router;
        this.snackBar = snackBar;
      }

      _createClass(OrderGridButtonsComponent, [{
        key: "agInit",
        value: function agInit(params) {
          this.data = params.data;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onDeleteClick",
        value: function onDeleteClick() {
          this.data.received === 'Yes' ? this.dialog.open(_order_delete_modal_order_delete_modal_component__WEBPACK_IMPORTED_MODULE_1__["OrderDeleteModalComponent"], {
            data: this.data,
            disableClose: true,
            panelClass: ['delete-dialog-container'],
            width: '34rem'
          }) : this.snackBar.open('Orders must be marked as received before deleting.', 'Dismiss', {
            panelClass: ['red-snackbar']
          });
        }
      }, {
        key: "onViewClick",
        value: function onViewClick() {
          this.router.navigate(['/order', this.data._id]);
        }
      }]);

      return OrderGridButtonsComponent;
    }();

    OrderGridButtonsComponent.ɵfac = function OrderGridButtonsComponent_Factory(t) {
      return new (t || OrderGridButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
    };

    OrderGridButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderGridButtonsComponent,
      selectors: [["app-order-grid-buttons"]],
      decls: 4,
      vars: 0,
      consts: [["id", "view-button", 3, "click"], ["id", "delete-button", 3, "click"]],
      template: function OrderGridButtonsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderGridButtonsComponent_Template_button_click_0_listener($event) {
            return ctx.onViewClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderGridButtonsComponent_Template_button_click_2_listener($event) {
            return ctx.onDeleteClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["button[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n}\r\n#view-button[_ngcontent-%COMP%] {\r\n    background: rgb(55, 221, 188);\r\n}\r\n#delete-button[_ngcontent-%COMP%] {\r\n    background: orangered;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1ncmlkLWJ1dHRvbnMvb3JkZXItZ3JpZC1idXR0b25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItZ3JpZC1idXR0b25zL29yZGVyLWdyaWQtYnV0dG9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG4jdmlldy1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU1LCAyMjEsIDE4OCk7XHJcbn1cclxuI2RlbGV0ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderGridButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-grid-buttons',
          templateUrl: './order-grid-buttons.component.html',
          styleUrls: ['./order-grid-buttons.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/order-overview/order-overview.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/order-overview/order-overview.component.ts ***!
    \***********************************************************************/

  /*! exports provided: OrderOverviewComponent */

  /***/
  function srcAppComponentsOrderOverviewOrderOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderOverviewComponent", function () {
      return OrderOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../orders/orders.component */
    "./src/app/components/orders/orders.component.ts");

    var OrderOverviewComponent =
    /*#__PURE__*/
    function () {
      function OrderOverviewComponent() {
        _classCallCheck(this, OrderOverviewComponent);
      }

      _createClass(OrderOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderOverviewComponent;
    }();

    OrderOverviewComponent.ɵfac = function OrderOverviewComponent_Factory(t) {
      return new (t || OrderOverviewComponent)();
    };

    OrderOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderOverviewComponent,
      selectors: [["app-order-overview"]],
      decls: 2,
      vars: 0,
      consts: [["id", "top-container"]],
      template: function OrderOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"]],
      styles: ["#top-container[_ngcontent-%COMP%] {\r\n    align-items: center;  \r\n    background: #603A17;\r\n    background-image: url('buried.png');\r\n    border: solid black 1px;\r\n    display: grid;\r\n    justify-items: center;\r\n    margin: 3%;\r\n    margin-top: 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1vdmVydmlldy9vcmRlci1vdmVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQ0FBd0Q7SUFDeEQsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yZGVyLW92ZXJ2aWV3L29yZGVyLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdG9wLWNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjNjAzQTE3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVyaWVkLnBuZyk7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-overview',
          templateUrl: './order-overview.component.html',
          styleUrls: ['./order-overview.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/order/order.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/order/order.component.ts ***!
    \*****************************************************/

  /*! exports provided: OrderComponent */

  /***/
  function srcAppComponentsOrderOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
      return OrderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var ngx_print__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-print */
    "./node_modules/ngx-print/__ivy_ngcc__/fesm2015/ngx-print.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _family_family_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../family/family.component */
    "./src/app/components/family/family.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _family_print_family_print_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../family-print/family-print.component */
    "./src/app/components/family-print/family-print.component.ts");
    /* harmony import */


    var _cart_print_cart_print_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../cart-print/cart-print.component */
    "./src/app/components/cart-print/cart-print.component.ts");

    function OrderComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "unreceived": a0
      };
    };

    function OrderComponent_mat_card_1_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_mat_card_1_button_8_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170);

          var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r169.onReceivedClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mark Received");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, !ctx_r167.order.received));
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "received": a0
      };
    };

    function OrderComponent_mat_card_1_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_mat_card_1_button_9_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172);

          var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r171.onReceivedClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mark Unreceived");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r168.order.received));
      }
    }

    function OrderComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_mat_card_1_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r174);

          var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r173.onBackClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Print");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrderComponent_mat_card_1_button_8_Template, 2, 3, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrderComponent_mat_card_1_button_9_Template, 2, 3, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "cdk-virtual-scroll-viewport", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-family", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-cart", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("useExistingCss", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r165.order.received);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r165.order.received);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", ctx_r165.order)("sliceId", ctx_r165.sliceId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", ctx_r165.order);
      }
    }

    function OrderComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Broad St. Food Pantry Online Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Guest and Pick Up Information");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-family-print", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-cart-print", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", ctx_r166.order)("sliceId", ctx_r166.sliceId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", ctx_r166.order)("sliceId", ctx_r166.sliceId);
      }
    }

    var OrderComponent =
    /*#__PURE__*/
    function () {
      function OrderComponent(activatedRoute, dataService, router, orderService, snackBar) {
        _classCallCheck(this, OrderComponent);

        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.router = router;
        this.orderService = orderService;
        this.snackBar = snackBar;
        this.loading = true;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
      }

      _createClass(OrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.subscription.add(this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            return _this2.dataService.getOrderById(params.id);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (order) {
            _this2.rerouteOnEmptyOrder(order);

            _this2.order = order;
            _this2.sliceId = order._id.slice(-5);

            _this2.sortProductsByName();

            _this2.sortTypesByName();

            _this2.loading = false;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "onBackClick",
        value: function onBackClick() {
          this.router.navigate(['/orders']);
        }
      }, {
        key: "onReceivedClick",
        value: function onReceivedClick() {
          var _this3 = this;

          var received = {
            received: !this.order.received
          };
          this.orderService.updateOrderReceived(this.order._id, received).subscribe(function (response) {
            _this3.showResponseStatus(response.status);
          });
        }
      }, {
        key: "rerouteOnEmptyOrder",
        value: function rerouteOnEmptyOrder(order) {
          if (order === undefined || Object.entries(order).length === 0 && order.constructor === Object) {
            this.snackBar.open('Order not found. Please try again.', 'Dismiss', {
              panelClass: ['red-snackbar']
            });
            this.router.navigate(["/orders"]);
          }
        }
      }, {
        key: "showResponseStatus",
        value: function showResponseStatus(status) {
          if (status === 200) {
            var update;
            this.order.received ? update = 'unreceived' : update = 'received';
            this.snackBar.open("Order marked as ".concat(update, "."), 'Dismiss', {
              panelClass: ['green-snackbar']
            });
            this.order.received = !this.order.received;
          } else {
            this.snackBar.open('Order failed to update.', 'Dismiss', {
              panelClass: ['red-snackbar']
            });
          }

          this.dataService.updateOrders();
        }
      }, {
        key: "sortProductsByName",
        value: function sortProductsByName() {
          this.order.cart.forEach(function (typeInCart) {
            typeInCart.products.sort(function (before, after) {
              return before.productName.trim().toLowerCase() > after.productName.trim().toLowerCase() ? 1 : -1;
            });
          });
        }
      }, {
        key: "sortTypesByName",
        value: function sortTypesByName() {
          this.order.cart.sort(function (before, after) {
            return before.typeName.trim().toLowerCase() > after.typeName.trim().toLowerCase() ? 1 : -1;
          });
        }
      }]);

      return OrderComponent;
    }();

    OrderComponent.ɵfac = function OrderComponent_Factory(t) {
      return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
    };

    OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderComponent,
      selectors: [["app-order-view"]],
      decls: 3,
      vars: 3,
      consts: [["id", "spinner", 4, "ngIf"], ["id", "top-container", 4, "ngIf"], ["id", "print-section", 4, "ngIf"], ["id", "spinner"], ["id", "top-container"], ["id", "top-buttons", 1, "margin-bottom"], ["id", "title"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "printSectionId", "print-section", "ngxPrint", "", 3, "useExistingCss"], ["mat-raised-button", "", 3, "ngClass", "click", 4, "ngIf"], ["itemSize", ""], ["id", "expand-grid"], [3, "order", "sliceId"], [3, "order"], ["mat-raised-button", "", 3, "ngClass", "click"], ["id", "print-section"], [1, "header-content"], [1, "seperator"]],
      template: function OrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderComponent_mat_card_1_Template, 14, 6, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderComponent_div_2_Template, 10, 4, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], ngx_print__WEBPACK_IMPORTED_MODULE_11__["NgxPrintDirective"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["CdkFixedSizeVirtualScroll"], _family_family_component__WEBPACK_IMPORTED_MODULE_13__["FamilyComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _family_print_family_print_component__WEBPACK_IMPORTED_MODULE_15__["FamilyPrintComponent"], _cart_print_cart_print_component__WEBPACK_IMPORTED_MODULE_16__["CartPrintComponent"]],
      styles: [".mat-card[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n.margin-bottom[_ngcontent-%COMP%] {\r\n    margin-bottom: 1%;\r\n}\r\n#title[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n#top-container[_ngcontent-%COMP%] {\r\n    background: #603A17;\r\n    background-image: url('buried.png');\r\n    border: solid black 1px;\r\n    margin: 3%;\r\n    margin-top: 2%;\r\n    min-width: 1200px;\r\n}\r\n#top-buttons[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 55% 15% 15% 15%;\r\n}\r\n#top-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: 10%\r\n}\r\n.unreceived[_ngcontent-%COMP%] {\r\n    background-color: rgb(112, 219, 153);\r\n}\r\n.received[_ngcontent-%COMP%] {\r\n    background-color: rgb(252, 116, 116);\r\n}\r\n.cdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\r\n    height: 65vh;    \r\n}\r\n#expand-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    gap: 1rem;\r\n}\r\n#print-section[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.header-content[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    font-size: x-large;\r\n    font-style: bolder;\r\n    justify-content: center;\r\n    margin-bottom: 2%;\r\n}\r\n.seperator[_ngcontent-%COMP%] {\r\n    border-bottom: solid black 1px;\r\n    border-top: solid black 1px;\r\n    display: grid;\r\n    font-size: large;\r\n    justify-content: center;\r\n    margin-bottom: 2%;\r\n    margin-top: 3%;\r\n    padding-bottom: 1%;\r\n    padding-top: 1%;\r\n}\r\n#spinner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 80vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUNBQXdEO0lBQ3hELHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztBQUMxQztBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuLm1hcmdpbi1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuI3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4jdG9wLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjAzQTE3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVyaWVkLnBuZyk7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIG1hcmdpbjogMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1pbi13aWR0aDogMTIwMHB4O1xyXG59XHJcbiN0b3AtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1NSUgMTUlIDE1JSAxNSU7XHJcbn1cclxuI3RvcC1idXR0b25zIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlXHJcbn1cclxuLnVucmVjZWl2ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMjE5LCAxNTMpO1xyXG59XHJcbi5yZWNlaXZlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAxMTYsIDExNik7XHJcbn1cclxuLmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XHJcbiAgICBoZWlnaHQ6IDY1dmg7ICAgIFxyXG59XHJcbiNleHBhbmQtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcbiNwcmludC1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmhlYWRlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LXN0eWxlOiBib2xkZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi5zZXBlcmF0b3Ige1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMSU7XHJcbn1cclxuI3NwaW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-view',
          templateUrl: './order.component.html',
          styleUrls: ['./order.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/orders/orders.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/orders/orders.component.ts ***!
    \*******************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppComponentsOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _order_grid_buttons_order_grid_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../order-grid-buttons/order-grid-buttons.component */
    "./src/app/components/order-grid-buttons/order-grid-buttons.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/main.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__);

    function OrdersComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrdersComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Orders");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_mat_card_1_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r202);

          var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r201.updateOrders();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Refresh Orders");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "cdk-virtual-scroll-viewport", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ag-grid-angular", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx_r200.columnDefs)("defaultColDef", ctx_r200.defaultColDef)("suppressCellSelection", true)("pagination", true)("paginationAutoPageSize", true)("rowData", ctx_r200.rowData);
      }
    }

    var OrdersComponent =
    /*#__PURE__*/
    function () {
      function OrdersComponent(dataService) {
        var _this4 = this;

        _classCallCheck(this, OrdersComponent);

        this.dataService = dataService;
        this.columnDefs = [{
          headerName: 'First Name',
          field: 'firstName'
        }, {
          headerName: 'Last Name',
          field: 'lastName'
        }, {
          headerName: 'Family Size',
          field: 'familySize'
        }, {
          headerName: 'Children',
          field: 'schoolChildren',
          comparator: function comparator(firstSchool, secondSchool) {
            return _this4.schoolComparator(firstSchool, secondSchool);
          }
        }, {
          headerName: 'Infants',
          field: 'infants'
        }, {
          headerName: 'Phone',
          field: 'phoneNumber'
        }, {
          headerName: 'Email',
          field: 'emailAddress'
        }, {
          headerName: 'Location',
          field: 'location'
        }, {
          headerName: 'Pick Up',
          field: 'pickUpDate',
          width: 90
        }, {
          headerName: 'Received',
          field: 'received',
          width: 90
        }, {
          headerName: '',
          field: 'action',
          filter: false,
          sortable: false,
          width: 150,
          cellRendererFramework: _order_grid_buttons_order_grid_buttons_component__WEBPACK_IMPORTED_MODULE_1__["OrderGridButtonsComponent"]
        }];
        this.defaultColDef = {
          filter: true,
          filterParams: {
            suppressAndOrCondition: true
          },
          resizable: true,
          sortable: true,
          width: 100
        };
        this.loading = true;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.rowData = [];
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.subscription.add(this.dataService.getOrders().subscribe(function (orders) {
            _this5.orders = orders;
            _this5.rowData = _this5.getFormattedFields();
            _this5.loading = false;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "getFormattedFields",
        value: function getFormattedFields() {
          var rowData = [];
          this.orders.forEach(function (order) {
            var rowEntry = {};
            var family = order.family;
            Object.defineProperty(rowEntry, '_id', {
              value: order._id
            });
            Object.defineProperty(rowEntry, 'firstName', {
              value: family.firstName
            });
            Object.defineProperty(rowEntry, 'lastName', {
              value: family.lastName
            });
            Object.defineProperty(rowEntry, 'familySize', {
              value: order.family.familySize
            });
            family.schoolChildren ? Object.defineProperty(rowEntry, 'schoolChildren', {
              value: family.schoolChildren
            }) : Object.defineProperty(rowEntry, 'schoolChildren', {
              value: 'None'
            });
            family.infants ? Object.defineProperty(rowEntry, 'infants', {
              value: 'Yes'
            }) : Object.defineProperty(rowEntry, 'infants', {
              value: 'No'
            });
            Object.defineProperty(rowEntry, 'phoneNumber', {
              value: family.phoneNumber
            });
            family.emailAddress ? Object.defineProperty(rowEntry, 'emailAddress', {
              value: family.emailAddress
            }) : Object.defineProperty(rowEntry, 'emailAddress', {
              value: '-'
            });
            family.referral ? Object.defineProperty(rowEntry, 'location', {
              value: 'CELC'
            }) : Object.defineProperty(rowEntry, 'location', {
              value: 'Broad St.'
            });
            Object.defineProperty(rowEntry, 'pickUpDate', {
              value: order.pickUpDate
            });
            order.received ? Object.defineProperty(rowEntry, 'received', {
              value: 'Yes'
            }) : Object.defineProperty(rowEntry, 'received', {
              value: 'No'
            });
            rowData.push(rowEntry);
          });
          return rowData;
        }
      }, {
        key: "schoolComparator",
        value: function schoolComparator(firstPoints, secondPoints) {
          if (isNaN(firstPoints)) {
            firstPoints = 0;
          }

          if (isNaN(secondPoints)) {
            secondPoints = 0;
          }

          return firstPoints > secondPoints ? 1 : -1;
        }
      }, {
        key: "updateOrders",
        value: function updateOrders() {
          this.dataService.updateOrders();
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
      return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
    };

    OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrdersComponent,
      selectors: [["app-orders"]],
      decls: 2,
      vars: 2,
      consts: [["id", "spinner", 4, "ngIf"], ["id", "ag-grid-container", 4, "ngIf"], ["id", "spinner"], ["id", "ag-grid-container"], ["id", "button-grid-container"], ["id", "orders-title"], ["mat-raised-button", "", 3, "click"], ["itemSize", ""], [1, "ag-theme-balham", 2, "width", "1140px", "height", "500px", 3, "columnDefs", "defaultColDef", "suppressCellSelection", "pagination", "paginationAutoPageSize", "rowData"]],
      template: function OrdersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrdersComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrdersComponent_mat_card_1_Template, 8, 6, "mat-card", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkFixedSizeVirtualScroll"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__["AgGridAngular"]],
      styles: ["#order-title[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    margin-bottom: 1%;\r\n}\r\n.cdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\r\n    height: 60vh;\r\n    width: 1160px;\r\n}\r\n#ag-grid-container[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    background-image: url('black-paper.png');\r\n    border: solid black 1px;\r\n    display: grid;\r\n    justify-content: center;\r\n    max-width: 1200px;\r\n}\r\n#button-grid-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 85% 15%;\r\n    margin-bottom: 3%;\r\n}\r\n#orders-title[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n#spinner[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    min-height: 80vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHdDQUE2RDtJQUM3RCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvcmRlci10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG4uY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIHdpZHRoOiAxMTYwcHg7XHJcbn1cclxuI2FnLWdyaWQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjU3Nzc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ibGFjay1wYXBlci5wbmcpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxufVxyXG4jYnV0dG9uLWdyaWQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg1JSAxNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG4jb3JkZXJzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4jc3Bpbm5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-orders',
          templateUrl: './orders.component.html',
          styleUrls: ['./orders.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pantry-overview/pantry-overview.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/pantry-overview/pantry-overview.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PantryOverviewComponent */

  /***/
  function srcAppComponentsPantryOverviewPantryOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PantryOverviewComponent", function () {
      return PantryOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_pantry_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/pantry-panel.service */
    "./src/app/services/pantry-panel.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shop/shop.component */
    "./src/app/components/shop/shop.component.ts");
    /* harmony import */


    var _types_types_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../types/types.component */
    "./src/app/components/types/types.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../products/products.component */
    "./src/app/components/products/products.component.ts");

    function PantryOverviewComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PantryOverviewComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cdk-virtual-scroll-viewport", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function PantryOverviewComponent_mat_card_1_Template_mat_expansion_panel_opened_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.pantryPanelService.setPanelOpenStates("shop", true);
        })("closed", function PantryOverviewComponent_mat_card_1_Template_mat_expansion_panel_closed_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.pantryPanelService.setPanelOpenStates("shop", false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Shop Manager ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-shop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-expansion-panel", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function PantryOverviewComponent_mat_card_1_Template_mat_expansion_panel_opened_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.pantryPanelService.setPanelOpenStates("type", true);
        })("closed", function PantryOverviewComponent_mat_card_1_Template_mat_expansion_panel_closed_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.pantryPanelService.setPanelOpenStates("type", false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Type Manager ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-types");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-expansion-panel", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function PantryOverviewComponent_mat_card_1_Template_mat_expansion_panel_opened_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.pantryPanelService.setPanelOpenStates("product", true);
        })("closed", function PantryOverviewComponent_mat_card_1_Template_mat_expansion_panel_closed_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.pantryPanelService.setPanelOpenStates("product", false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Product Manager ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-products");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx_r1.shopPanelOpenState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.shopPanelOpenState ? "close" : "open", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx_r1.typePanelOpenState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.typePanelOpenState ? "close" : "open", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx_r1.productPanelOpenState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.productPanelOpenState ? "close" : "open", " ");
      }
    }

    var PantryOverviewComponent =
    /*#__PURE__*/
    function () {
      function PantryOverviewComponent(pantryPanelService) {
        _classCallCheck(this, PantryOverviewComponent);

        this.pantryPanelService = pantryPanelService;
        this.loading = true;
        this.productPanelOpenState = false;
        this.shopPanelOpenState = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.typePanelOpenState = false;
      }

      _createClass(PantryOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.subscription.add(this.pantryPanelService.getPanelOpenStates().subscribe(function (panelOpenStates) {
            _this6.productPanelOpenState = panelOpenStates.get('product');
            _this6.typePanelOpenState = panelOpenStates.get('type');
            _this6.shopPanelOpenState = panelOpenStates.get('shop');
            _this6.loading = false;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return PantryOverviewComponent;
    }();

    PantryOverviewComponent.ɵfac = function PantryOverviewComponent_Factory(t) {
      return new (t || PantryOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pantry_panel_service__WEBPACK_IMPORTED_MODULE_2__["PantryPanelService"]));
    };

    PantryOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PantryOverviewComponent,
      selectors: [["app-pantry-overview"]],
      decls: 2,
      vars: 2,
      consts: [["id", "spinner", 4, "ngIf"], ["id", "top-container", 4, "ngIf"], ["id", "spinner"], ["id", "top-container"], ["itemSize", ""], [3, "expanded", "opened", "closed"]],
      template: function PantryOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PantryOverviewComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PantryOverviewComponent_mat_card_1_Template, 23, 6, "mat-card", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkFixedSizeVirtualScroll"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelDescription"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["ShopComponent"], _types_types_component__WEBPACK_IMPORTED_MODULE_9__["TypesComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"]],
      styles: ["#top-container[_ngcontent-%COMP%] {\r\n    background: #603A17;\r\n    background-image: url('buried.png');\r\n    border: solid black 1px;\r\n    margin: 3%;\r\n    margin-top: 2%;\r\n    margin-bottom: 0;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.cdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 73vh;\r\n    width: 100%;\r\n}\r\n.cdk-virtual-scroll-content-wrapper[_ngcontent-%COMP%] {\r\n    height: 70vh;\r\n}\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n    background-color:#71a040;\r\n    margin-bottom: 2%;\r\n    border: solid black 1px;\r\n}\r\n#spinner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 80vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYW50cnktb3ZlcnZpZXcvcGFudHJ5LW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUNBQXdEO0lBQ3hELHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhbnRyeS1vdmVydmlldy9wYW50cnktb3ZlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b3AtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM2MDNBMTc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9idXJpZWQucG5nKTtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA3M3ZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNkay12aXJ0dWFsLXNjcm9sbC1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzcxYTA0MDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuI3NwaW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PantryOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pantry-overview',
          templateUrl: './pantry-overview.component.html',
          styleUrls: ['./pantry-overview.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_pantry_panel_service__WEBPACK_IMPORTED_MODULE_2__["PantryPanelService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/product-add/product-add.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/product-add/product-add.component.ts ***!
    \*****************************************************************/

  /*! exports provided: minMaxValidator, ProductAddComponent */

  /***/
  function srcAppComponentsProductAddProductAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "minMaxValidator", function () {
      return minMaxValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function () {
      return ProductAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/product.model */
    "./src/app/models/product.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");

    function ProductAddComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductAddComponent_mat_card_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product Create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductAddComponent_mat_card_1_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.requiredError);
      }
    }

    function ProductAddComponent_mat_card_1_mat_error_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.requiredError);
      }
    }

    function ProductAddComponent_mat_card_1_mat_error_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.requiredError);
      }
    }

    function ProductAddComponent_mat_card_1_mat_error_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.requiredError);
      }
    }

    function ProductAddComponent_mat_card_1_mat_card_54_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This product does not currently have family size limits.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_mat_card_1_mat_card_54_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.initSizeAmount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Limits");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductAddComponent_mat_card_1_span_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Product Limits per Range of Family Size:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_mat_card_1_span_55_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.addSizeAmount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Another Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductAddComponent_mat_card_1_cdk_virtual_scroll_viewport_56_mat_card_1_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.requiredError);
      }
    }

    function ProductAddComponent_mat_card_1_cdk_virtual_scroll_viewport_56_mat_card_1_mat_error_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.requiredError);
      }
    }

    function ProductAddComponent_mat_card_1_cdk_virtual_scroll_viewport_56_mat_card_1_mat_error_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.requiredError);
      }
    }

    function ProductAddComponent_mat_card_1_cdk_virtual_scroll_viewport_56_mat_card_1_mat_error_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum size must be equal to or smaller than maximum size.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductAddComponent_mat_card_1_cdk_virtual_scroll_viewport_56_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Minimum Family Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProductAddComponent_mat_card_1_cdk_virtual_scroll_viewport_56_mat_card_1_mat_error_25_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Maximum Family Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ProductAddComponent_mat_card_1_cdk_virtual_scroll_viewport_56_mat_card_1_mat_error_48_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Product Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-select", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ProductAddComponent_mat_card_1_cdk_virtual_scroll_viewport_56_mat_card_1_mat_error_71_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_mat_card_1_cdk_virtual_scroll_viewport_56_mat_card_1_Template_button_click_73_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var i_r25 = ctx.index;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r30.deleteSizeAmount(i_r25);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Delete Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ProductAddComponent_mat_card_1_cdk_virtual_scroll_viewport_56_mat_card_1_mat_error_75_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r25 = ctx.index;

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.productForm.get("prodSizeAmount")["controls"][i_r25].get("minFamSize").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.productForm.get("prodSizeAmount")["controls"][i_r25].get("maxFamSize").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.productForm.get("prodSizeAmount")["controls"][i_r25].get("maxAmount").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.productForm.get("prodSizeAmount")["controls"][i_r25].hasError("minMax"));
      }
    }

    function ProductAddComponent_mat_card_1_cdk_virtual_scroll_viewport_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductAddComponent_mat_card_1_cdk_virtual_scroll_viewport_56_mat_card_1_Template, 76, 32, "mat-card", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.productForm.get("prodSizeAmount")["controls"]);
      }
    }

    function ProductAddComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductAddComponent_mat_card_1_span_2_Template, 2, 0, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_mat_card_1_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.onCancelClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_mat_card_1_Template_button_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.onAddClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Save Product and Exit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductAddComponent_mat_card_1_mat_error_14_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Points");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "None");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProductAddComponent_mat_card_1_mat_error_32_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "After School?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProductAddComponent_mat_card_1_mat_error_42_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Infant?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ProductAddComponent_mat_card_1_mat_error_52_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ProductAddComponent_mat_card_1_mat_card_54_Template, 5, 0, "mat-card", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ProductAddComponent_mat_card_1_span_55_Template, 5, 0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ProductAddComponent_mat_card_1_cdk_virtual_scroll_viewport_56_Template, 2, 1, "cdk-virtual-scroll-viewport", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.product.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r10.productForm.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r10.productForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.productForm.get("productName").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.productForm.get("points").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.productForm.get("school").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.productForm.get("infant").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r10.productForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.productForm.get("prodSizeAmount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.productForm.get("prodSizeAmount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.productForm.get("prodSizeAmount"));
      }
    }

    var minMaxValidator = function minMaxValidator(formGroup) {
      var minFamSize = formGroup.get('minFamSize').value;
      var maxFamSize = formGroup.get('maxFamSize').value;

      if (minFamSize !== '' && maxFamSize !== '') {
        return minFamSize > maxFamSize ? {
          minMax: true
        } : null;
      }
    };

    var ProductAddComponent =
    /*#__PURE__*/
    function () {
      function ProductAddComponent(dataService, formBuilder, productService, snackBar, router) {
        _classCallCheck(this, ProductAddComponent);

        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.snackBar = snackBar;
        this.router = router;
        this.limitDeleted = false;
        this.loading = true;
        this.product = new src_app_models_product_model__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          points: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          school: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          infant: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.requiredError = 'This field is required.';
      }

      _createClass(ProductAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = !this.loading;
        }
      }, {
        key: "addSizeAmount",
        value: function addSizeAmount() {
          this.prodSizeAmount.push(this.formBuilder.group({
            minFamSize: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maxFamSize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            maxAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: minMaxValidator
          }));
        }
      }, {
        key: "deleteSizeAmount",
        value: function deleteSizeAmount(index) {
          this.limitDeleted = true;
          this.prodSizeAmount.removeAt(index);

          if (!this.prodSizeAmount.length) {
            this.productForm.removeControl('prodSizeAmount');
          }
        }
      }, {
        key: "initSizeAmount",
        value: function initSizeAmount() {
          this.prodSizeAmount = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
          this.addSizeAmount();
          this.productForm.addControl('prodSizeAmount', this.prodSizeAmount);
        }
      }, {
        key: "onAddClick",
        value: function onAddClick() {
          var _this7 = this;

          if (this.productForm.valid) {
            this.setProductValues();
            this.productService.addProduct(this.product).subscribe(function (response) {
              _this7.showResponseStatus(response.status);

              _this7.router.navigate(["/pantry"]);
            });
          }
        }
      }, {
        key: "onCancelClick",
        value: function onCancelClick() {
          this.router.navigate(["/pantry"]);
        }
      }, {
        key: "setProductValues",
        value: function setProductValues() {
          this.product.productName = this.productForm.get('productName').value;
          this.productForm.get('prodSizeAmount') && this.prodSizeAmount.length ? this.product.prodSizeAmount = this.productForm.get('prodSizeAmount').value : this.product.prodSizeAmount = undefined;
          this.productForm.get('points') && this.productForm.get('points').value ? this.product.points = this.productForm.get('points').value : this.product.points = undefined;
          this.productForm.get('school') && this.productForm.get('school').value ? this.product.school = this.productForm.get('school').value : this.product.school = undefined;
          this.productForm.get('infant') && this.productForm.get('infant').value ? this.product.infant = this.productForm.get('infant').value : this.product.infant = undefined;
        }
      }, {
        key: "showResponseStatus",
        value: function showResponseStatus(status) {
          if (status === 200) {
            this.snackBar.open("".concat(this.product.productName, " successfully updated."), 'Dismiss', {
              panelClass: ['green-snackbar']
            });
          } else {
            this.snackBar.open("".concat(this.product.productName, " failed to update."), 'Dismiss', {
              panelClass: ['red-snackbar']
            });
          }

          this.dataService.updateProducts();
          this.dataService.updateShop();
          this.dataService.updateTypes();
        }
      }]);

      return ProductAddComponent;
    }();

    ProductAddComponent.ɵfac = function ProductAddComponent_Factory(t) {
      return new (t || ProductAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    ProductAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductAddComponent,
      selectors: [["app-product-add"]],
      decls: 2,
      vars: 2,
      consts: [["id", "spinner", 4, "ngIf"], ["id", "top-container", 4, "ngIf"], ["id", "spinner"], ["id", "top-container"], ["id", "top-buttons"], ["class", "product-title", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", 3, "disabled", "click"], ["id", "grid-container"], [1, "left-form", 3, "formGroup"], ["matInput", "", "formControlName", "productName"], [4, "ngIf"], ["matInput", "", "formControlName", "points"], [3, "value"], ["matInput", "", "formControlName", "school"], ["matInput", "", "formControlName", "infant"], ["id", "right-form", 3, "formGroup"], ["id", "init-size-amount", 4, "ngIf"], ["id", "add-limit", 4, "ngIf"], ["itemSize", "", 4, "ngIf"], [1, "product-title"], ["id", "init-size-amount"], ["id", "add-limit"], ["itemSize", ""], ["class", "prod-size-amount-card", "formArrayName", "prodSizeAmount", 4, "ngFor", "ngForOf"], ["formArrayName", "prodSizeAmount", 1, "prod-size-amount-card"], [3, "formGroupName"], [1, "prod-size-amount-form"], ["matInput", "", "formControlName", "minFamSize"], ["matInput", "", "formControlName", "maxFamSize"], ["matInput", "", "formControlName", "maxAmount"]],
      template: function ProductAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductAddComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductAddComponent_mat_card_1_Template, 57, 21, "mat-card", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["CdkFixedSizeVirtualScroll"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"]],
      styles: ["button[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n.product-title[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n    font-weight: normal;\r\n}\r\n#top-container[_ngcontent-%COMP%] {\r\n    background: #603A17;\r\n    background-image: url('buried.png');\r\n    border: solid black 1px;\r\n    margin: 3%;\r\n    margin-top: 2%;\r\n    min-width: 1200px;\r\n}\r\n#top-buttons[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 70% 15% 15%;\r\n}\r\n#top-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: 10%\r\n}\r\n#grid-container[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n    display: grid;\r\n    grid-template-columns: 20% 80%;\r\n}\r\n#grid-container[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    border: solid black 1px;\r\n}\r\n.left-form[_ngcontent-%COMP%] {\r\n    height: 45vh;\r\n    display: grid;\r\n    vertical-align: center;\r\n    justify-content: center;\r\n}\r\n.in-shop-left-form[_ngcontent-%COMP%] {\r\n    height: 53vh;\r\n    display: grid;\r\n    vertical-align: center;\r\n    justify-content: center;\r\n}\r\n#shop[_ngcontent-%COMP%] {\r\n    background-color: rgb(161, 103, 103);\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center; \r\n}\r\n#right-form[_ngcontent-%COMP%] {\r\n    background-image: url('buried.png');\r\n    margin-left: 1%;\r\n}\r\n#init-size-amount[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 80% 20%;\r\n}\r\n#init-size-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    padding-top: 1%;\r\n}\r\n#add-limit[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 80% 20%;\r\n}\r\n#add-limit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n.cdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\r\n    height: 39vh;\r\n    width: 100%;\r\n}\r\n.prod-size-amount-card[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n}\r\n.prod-size-amount-form[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 24% 24% 24% 10%;\r\n    grid-gap: 5%;\r\n    vertical-align: center;\r\n}\r\n.prod-size-amount-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 13%;\r\n}\r\n#spinner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 80vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWFkZC9wcm9kdWN0LWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUNBQXdEO0lBQ3hELHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztBQUN0QztBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUNBQXdEO0lBQ3hELGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1hZGQvcHJvZHVjdC1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG4ucHJvZHVjdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4jdG9wLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjAzQTE3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVyaWVkLnBuZyk7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIG1hcmdpbjogMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1pbi13aWR0aDogMTIwMHB4O1xyXG59XHJcbiN0b3AtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMTUlIDE1JTtcclxufVxyXG4jdG9wLWJ1dHRvbnMgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCVcclxufVxyXG4jZ3JpZC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xyXG59XHJcbiNncmlkLWNvbnRhaW5lciAubWF0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NTc3NztcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG59XHJcbi5sZWZ0LWZvcm0ge1xyXG4gICAgaGVpZ2h0OiA0NXZoO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaW4tc2hvcC1sZWZ0LWZvcm0ge1xyXG4gICAgaGVpZ2h0OiA1M3ZoO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jc2hvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxMDMsIDEwMyk7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG59XHJcbiNyaWdodC1mb3JtIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcbiNpbml0LXNpemUtYW1vdW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAyMCU7XHJcbn1cclxuI2luaXQtc2l6ZS1hbW91bnQgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgcGFkZGluZy10b3A6IDElO1xyXG59XHJcbiNhZGQtbGltaXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDIwJTtcclxufVxyXG4jYWRkLWxpbWl0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcbi5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xyXG4gICAgaGVpZ2h0OiAzOXZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnByb2Qtc2l6ZS1hbW91bnQtY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4ucHJvZC1zaXplLWFtb3VudC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0JSAyNCUgMjQlIDEwJTtcclxuICAgIGdyaWQtZ2FwOiA1JTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb2Qtc2l6ZS1hbW91bnQtZm9ybSBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTMlO1xyXG59XHJcbiNzcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-add',
          templateUrl: './product-add.component.html',
          styleUrls: ['./product-add.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/product-delete-modal/product-delete-modal.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/product-delete-modal/product-delete-modal.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProductDeleteModalComponent */

  /***/
  function srcAppComponentsProductDeleteModalProductDeleteModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDeleteModalComponent", function () {
      return ProductDeleteModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var src_app_models_product_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/product.model */
    "./src/app/models/product.model.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var ProductDeleteModalComponent =
    /*#__PURE__*/
    function () {
      function ProductDeleteModalComponent(dataService, dialogRef, product, productService, router, snackBar) {
        _classCallCheck(this, ProductDeleteModalComponent);

        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.product = product;
        this.productService = productService;
        this.router = router;
        this.snackBar = snackBar;
      }

      _createClass(ProductDeleteModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteProduct",
        value: function deleteProduct() {
          var _this8 = this;

          this.productService.deleteProduct(this.product._id).subscribe(function (response) {
            _this8.showResponseStatus(response.status);
          });
        }
      }, {
        key: "onCancelClick",
        value: function onCancelClick() {
          this.dialogRef.close();
          this.router.navigate(["/pantry"]);
        }
      }, {
        key: "onProceedClick",
        value: function onProceedClick() {
          this.deleteProduct();
          this.dialogRef.close();
          this.router.navigate(["/pantry"]);
        }
      }, {
        key: "showResponseStatus",
        value: function showResponseStatus(status) {
          if (status === 200) {
            this.snackBar.open("".concat(this.product.productName, " successfully deleted."), 'Dismiss', {
              panelClass: ['green-snackbar']
            });
          } else {
            this.snackBar.open("".concat(this.product.productName, " failed to delete."), 'Dismiss', {
              panelClass: ['red-snackbar']
            });
          }

          this.dataService.updateProducts();
          this.dataService.updateTypes();
          this.dataService.updateShop();
        }
      }]);

      return ProductDeleteModalComponent;
    }();

    ProductDeleteModalComponent.ɵfac = function ProductDeleteModalComponent_Factory(t) {
      return new (t || ProductDeleteModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
    };

    ProductDeleteModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductDeleteModalComponent,
      selectors: [["app-product-delete-modal"]],
      decls: 10,
      vars: 1,
      consts: [["id", "proceed-prompt"], ["mat-raised-button", "", 3, "click"]],
      template: function ProductDeleteModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Do you wish to proceed?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDeleteModalComponent_Template_button_click_6_listener($event) {
            return ctx.onCancelClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDeleteModalComponent_Template_button_click_8_listener($event) {
            return ctx.onProceedClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Proceed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This action will permanently delete ", ctx.product.productName, ". Permanently deleting a product removes it from the shop and from types that contain it.");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: [".mat-card[_ngcontent-%COMP%] {\r\n    background-color: rgb(155, 23, 23);\r\n    border: solid black 1px;\r\n    margin-top: 2%;\r\n}\r\n#proceed-prompt[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nspan[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRlbGV0ZS1tb2RhbC9wcm9kdWN0LWRlbGV0ZS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRlbGV0ZS1tb2RhbC9wcm9kdWN0LWRlbGV0ZS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTUsIDIzLCAyMyk7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcbiNwcm9jZWVkLXByb21wdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDeleteModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-delete-modal',
          templateUrl: './product-delete-modal.component.html',
          styleUrls: ['./product-delete-modal.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: src_app_models_product_model__WEBPACK_IMPORTED_MODULE_6__["Product"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/product-edit/product-edit.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/product-edit/product-edit.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProductEditComponent */

  /***/
  function srcAppComponentsProductEditProductEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function () {
      return ProductEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../product-add/product-add.component */
    "./src/app/components/product-add/product-add.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");

    function ProductEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductEditComponent_mat_card_1_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductEditComponent_mat_card_1_button_6_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r46.onUpdateClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save Update and Exit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r37.productForm.pristine && !ctx_r37.limitDeleted || !ctx_r37.productForm.valid);
      }
    }

    function ProductEditComponent_mat_card_1_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.requiredError);
      }
    }

    function ProductEditComponent_mat_card_1_mat_error_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.requiredError);
      }
    }

    function ProductEditComponent_mat_card_1_mat_error_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r40.requiredError);
      }
    }

    function ProductEditComponent_mat_card_1_mat_error_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r41.requiredError);
      }
    }

    function ProductEditComponent_mat_card_1_div_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Currently in the Shop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductEditComponent_mat_card_1_mat_card_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This product does not currently have family size limits.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductEditComponent_mat_card_1_mat_card_55_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r48.initSizeAmount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Limits");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductEditComponent_mat_card_1_span_56_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Product Limits per Range of Family Size:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductEditComponent_mat_card_1_span_56_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r50.addSizeAmount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Another Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductEditComponent_mat_card_1_cdk_virtual_scroll_viewport_57_mat_card_1_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r55.requiredError);
      }
    }

    function ProductEditComponent_mat_card_1_cdk_virtual_scroll_viewport_57_mat_card_1_mat_error_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r56.requiredError);
      }
    }

    function ProductEditComponent_mat_card_1_cdk_virtual_scroll_viewport_57_mat_card_1_mat_error_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r57.requiredError);
      }
    }

    function ProductEditComponent_mat_card_1_cdk_virtual_scroll_viewport_57_mat_card_1_mat_error_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum size must be equal to or smaller than maximum size.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductEditComponent_mat_card_1_cdk_virtual_scroll_viewport_57_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Minimum Family Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProductEditComponent_mat_card_1_cdk_virtual_scroll_viewport_57_mat_card_1_mat_error_25_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Maximum Family Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ProductEditComponent_mat_card_1_cdk_virtual_scroll_viewport_57_mat_card_1_mat_error_48_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Product Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-select", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ProductEditComponent_mat_card_1_cdk_virtual_scroll_viewport_57_mat_card_1_mat_error_71_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductEditComponent_mat_card_1_cdk_virtual_scroll_viewport_57_mat_card_1_Template_button_click_73_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var i_r54 = ctx.index;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r59.deleteSizeAmount(i_r54);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Delete Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ProductEditComponent_mat_card_1_cdk_virtual_scroll_viewport_57_mat_card_1_mat_error_75_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r54 = ctx.index;

        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.productForm.get("prodSizeAmount")["controls"][i_r54].get("minFamSize").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.productForm.get("prodSizeAmount")["controls"][i_r54].get("maxFamSize").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.productForm.get("prodSizeAmount")["controls"][i_r54].get("maxAmount").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.productForm.get("prodSizeAmount")["controls"][i_r54].hasError("minMax"));
      }
    }

    function ProductEditComponent_mat_card_1_cdk_virtual_scroll_viewport_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductEditComponent_mat_card_1_cdk_virtual_scroll_viewport_57_mat_card_1_Template, 76, 32, "mat-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.productForm.get("prodSizeAmount")["controls"]);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "in-shop-left-form": a0
      };
    };

    function ProductEditComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Product Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductEditComponent_mat_card_1_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r61.onCancelClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductEditComponent_mat_card_1_button_6_Template, 2, 1, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductEditComponent_mat_card_1_mat_error_14_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Points");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "None");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProductEditComponent_mat_card_1_mat_error_32_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "After School?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProductEditComponent_mat_card_1_mat_error_42_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Infant?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ProductEditComponent_mat_card_1_mat_error_52_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ProductEditComponent_mat_card_1_div_53_Template, 2, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ProductEditComponent_mat_card_1_mat_card_55_Template, 5, 0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ProductEditComponent_mat_card_1_span_56_Template, 5, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ProductEditComponent_mat_card_1_cdk_virtual_scroll_viewport_57_Template, 2, 1, "cdk-virtual-scroll-viewport", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.product.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx_r36.inShop))("formGroup", ctx_r36.productForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.productForm.get("productName").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.productForm.get("points").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.productForm.get("school").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.productForm.get("infant").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.inShop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r36.productForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r36.productForm.get("prodSizeAmount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.productForm.get("prodSizeAmount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.productForm.get("prodSizeAmount"));
      }
    }

    var ProductEditComponent =
    /*#__PURE__*/
    function (_product_add_product_) {
      _inherits(ProductEditComponent, _product_add_product_);

      var _super = _createSuper(ProductEditComponent);

      function ProductEditComponent(activatedRoute, dataService, formBuilder, productService, snackBar, router) {
        var _this9;

        _classCallCheck(this, ProductEditComponent);

        _this9 = _super.call(this, dataService, formBuilder, productService, snackBar, router);
        _this9.activatedRoute = activatedRoute;
        _this9.dataService = dataService;
        _this9.formBuilder = formBuilder;
        _this9.productService = productService;
        _this9.snackBar = snackBar;
        _this9.router = router;
        _this9.inShop = false;
        _this9.loading = true;
        _this9.requiredError = 'This field is required';
        return _this9;
      }

      _createClass(ProductEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            return _this10.dataService.getProductById(params.id);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)), this.dataService.getShop()]).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                product = _ref2[0],
                shop = _ref2[1];

            _this10.rerouteOnEmptyProduct(product);

            _this10.product = product;
            _this10.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.product.productName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              points: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.product.points ? _this10.product.points : false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              school: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.product.school ? _this10.product.school : false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              infant: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.product.infant ? _this10.product.infant : false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });

            _this10.setProdSizeAmountForm();

            _this10.shop = shop;

            _this10.setInShop();

            _this10.loading = !_this10.loading;
          });
        }
      }, {
        key: "onUpdateClick",
        value: function onUpdateClick() {
          var _this11 = this;

          if (this.productForm.valid) {
            this.setProductValues();
            this.productService.updateProduct(this.product._id, this.product).subscribe(function (response) {
              if (response.status === 200) {
                _this11.snackBar.open("".concat(_this11.product.productName, " updated successfully."), 'Dismiss', {
                  panelClass: ['green-snackbar']
                });

                _this11.router.navigate(["/pantry"]);
              } else {
                _this11.snackBar.open("".concat(_this11.product.productName, " failed to update."), 'Dismiss', {
                  panelClass: ['red-snackbar']
                });

                _this11.router.navigate(["/pantry"]);
              }

              _this11.dataService.updateProducts();

              _this11.dataService.updateShop();

              _this11.dataService.updateTypes();
            });
          }
        }
      }, {
        key: "rerouteOnEmptyProduct",
        value: function rerouteOnEmptyProduct(product) {
          if (product === undefined || Object.entries(product).length === 0 && product.constructor === Object) {
            this.snackBar.open('Product not found. Please try again.', 'Dismiss', {
              panelClass: ['red-snackbar']
            });
            this.router.navigate(["/pantry"]);
          }
        }
      }, {
        key: "setInShop",
        value: function setInShop() {
          var _this12 = this;

          this.shop.shop.forEach(function (type) {
            type.products.forEach(function (product) {
              if (_this12.product._id === product._id) {
                _this12.inShop = true;
              }
            });
          });
        }
      }, {
        key: "setProdSizeAmountForm",
        value: function setProdSizeAmountForm() {
          var _this13 = this;

          if (this.product.prodSizeAmount) {
            this.prodSizeAmount = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
            this.product.prodSizeAmount.forEach(function (element) {
              _this13.prodSizeAmount.push(_this13.formBuilder.group({
                minFamSize: [element.minFamSize, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                maxFamSize: [element.maxFamSize, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                maxAmount: [element.maxAmount, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              }, {
                validator: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_3__["minMaxValidator"]
              }));

              _this13.productForm.addControl('prodSizeAmount', _this13.prodSizeAmount);
            });
          }
        }
      }]);

      return ProductEditComponent;
    }(_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_3__["ProductAddComponent"]);

    ProductEditComponent.ɵfac = function ProductEditComponent_Factory(t) {
      return new (t || ProductEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    ProductEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductEditComponent,
      selectors: [["app-product-edit"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 2,
      consts: [["id", "spinner", 4, "ngIf"], ["id", "top-container", 4, "ngIf"], ["id", "spinner"], ["id", "top-container"], ["id", "top-buttons"], [1, "product-title"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", 3, "disabled", "click", 4, "ngIf"], ["id", "grid-container"], [1, "left-form", 3, "ngClass", "formGroup"], ["matInput", "", "formControlName", "productName"], [4, "ngIf"], ["matInput", "", "formControlName", "points"], [3, "value"], ["matInput", "", "formControlName", "school"], ["matInput", "", "formControlName", "infant"], ["id", "shop", 4, "ngIf"], ["id", "right-form", 3, "formGroup"], ["id", "init-size-amount", 4, "ngIf"], ["id", "add-limit", 4, "ngIf"], ["itemSize", "", 4, "ngIf"], ["mat-raised-button", "", 3, "disabled", "click"], ["id", "shop"], ["id", "init-size-amount"], ["id", "add-limit"], ["itemSize", ""], ["class", "prod-size-amount-card", "formArrayName", "prodSizeAmount", 4, "ngFor", "ngForOf"], ["formArrayName", "prodSizeAmount", 1, "prod-size-amount-card"], [3, "formGroupName"], [1, "prod-size-amount-form"], ["matInput", "", "formControlName", "minFamSize"], ["matInput", "", "formControlName", "maxFamSize"], ["matInput", "", "formControlName", "maxAmount"]],
      template: function ProductEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductEditComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductEditComponent_mat_card_1_Template, 58, 24, "mat-card", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["CdkFixedSizeVirtualScroll"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"]],
      styles: ["button[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n.product-title[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n    font-weight: normal;\r\n}\r\n#top-container[_ngcontent-%COMP%] {\r\n    background: #603A17;\r\n    background-image: url('buried.png');\r\n    border: solid black 1px;\r\n    margin: 3%;\r\n    margin-top: 2%;\r\n    min-width: 1200px;\r\n}\r\n#top-buttons[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 70% 15% 15%;\r\n}\r\n#top-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: 10%\r\n}\r\n#grid-container[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n    display: grid;\r\n    grid-template-columns: 20% 80%;\r\n}\r\n#grid-container[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    border: solid black 1px;\r\n}\r\n.left-form[_ngcontent-%COMP%] {\r\n    height: 45vh;\r\n    display: grid;\r\n    vertical-align: center;\r\n    justify-content: center;\r\n}\r\n.in-shop-left-form[_ngcontent-%COMP%] {\r\n    height: 53vh;\r\n    display: grid;\r\n    vertical-align: center;\r\n    justify-content: center;\r\n}\r\n#shop[_ngcontent-%COMP%] {\r\n    background-color: rgb(161, 103, 103);\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center; \r\n}\r\n#right-form[_ngcontent-%COMP%] {\r\n    background-image: url('buried.png');\r\n    margin-left: 1%;\r\n}\r\n#init-size-amount[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 80% 20%;\r\n}\r\n#init-size-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    padding-top: 1%;\r\n}\r\n#add-limit[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 80% 20%;\r\n}\r\n#add-limit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n.cdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\r\n    height: 39vh;\r\n    width: 100%;\r\n}\r\n.prod-size-amount-card[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n}\r\n.prod-size-amount-form[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 24% 24% 24% 10%;\r\n    grid-gap: 5%;\r\n    vertical-align: center;\r\n}\r\n.prod-size-amount-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 13%;\r\n}\r\n#spinner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 80vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWFkZC9wcm9kdWN0LWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUNBQXdEO0lBQ3hELHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztBQUN0QztBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUNBQXdEO0lBQ3hELGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1hZGQvcHJvZHVjdC1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG4ucHJvZHVjdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4jdG9wLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjAzQTE3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVyaWVkLnBuZyk7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIG1hcmdpbjogMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1pbi13aWR0aDogMTIwMHB4O1xyXG59XHJcbiN0b3AtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMTUlIDE1JTtcclxufVxyXG4jdG9wLWJ1dHRvbnMgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCVcclxufVxyXG4jZ3JpZC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xyXG59XHJcbiNncmlkLWNvbnRhaW5lciAubWF0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NTc3NztcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG59XHJcbi5sZWZ0LWZvcm0ge1xyXG4gICAgaGVpZ2h0OiA0NXZoO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaW4tc2hvcC1sZWZ0LWZvcm0ge1xyXG4gICAgaGVpZ2h0OiA1M3ZoO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jc2hvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxMDMsIDEwMyk7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG59XHJcbiNyaWdodC1mb3JtIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcbiNpbml0LXNpemUtYW1vdW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAyMCU7XHJcbn1cclxuI2luaXQtc2l6ZS1hbW91bnQgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgcGFkZGluZy10b3A6IDElO1xyXG59XHJcbiNhZGQtbGltaXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDIwJTtcclxufVxyXG4jYWRkLWxpbWl0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcbi5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xyXG4gICAgaGVpZ2h0OiAzOXZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnByb2Qtc2l6ZS1hbW91bnQtY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4ucHJvZC1zaXplLWFtb3VudC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0JSAyNCUgMjQlIDEwJTtcclxuICAgIGdyaWQtZ2FwOiA1JTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb2Qtc2l6ZS1hbW91bnQtZm9ybSBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTMlO1xyXG59XHJcbiNzcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-edit',
          templateUrl: '../product-edit/product-edit.component.html',
          styleUrls: ['../product-add/product-add.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/product-grid-buttons/product-grid-buttons.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/product-grid-buttons/product-grid-buttons.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProductGridButtonsComponent */

  /***/
  function srcAppComponentsProductGridButtonsProductGridButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductGridButtonsComponent", function () {
      return ProductGridButtonsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _product_delete_modal_product_delete_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../product-delete-modal/product-delete-modal.component */
    "./src/app/components/product-delete-modal/product-delete-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProductGridButtonsComponent =
    /*#__PURE__*/
    function () {
      function ProductGridButtonsComponent(dialog, router) {
        _classCallCheck(this, ProductGridButtonsComponent);

        this.dialog = dialog;
        this.router = router;
      }

      _createClass(ProductGridButtonsComponent, [{
        key: "agInit",
        value: function agInit(params) {
          this.data = params.data;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onDeleteClick",
        value: function onDeleteClick() {
          this.dialog.open(_product_delete_modal_product_delete_modal_component__WEBPACK_IMPORTED_MODULE_1__["ProductDeleteModalComponent"], {
            data: this.data,
            disableClose: true,
            panelClass: ['delete-dialog-container'],
            width: '34rem'
          });
        }
      }, {
        key: "onEditClick",
        value: function onEditClick() {
          this.router.navigate(['/product', this.data._id]);
        }
      }]);

      return ProductGridButtonsComponent;
    }();

    ProductGridButtonsComponent.ɵfac = function ProductGridButtonsComponent_Factory(t) {
      return new (t || ProductGridButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ProductGridButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductGridButtonsComponent,
      selectors: [["app-product-grid-buttons"]],
      decls: 4,
      vars: 0,
      consts: [["id", "edit-button", 3, "click"], ["id", "delete-button", 3, "click"]],
      template: function ProductGridButtonsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductGridButtonsComponent_Template_button_click_0_listener($event) {
            return ctx.onEditClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductGridButtonsComponent_Template_button_click_2_listener($event) {
            return ctx.onDeleteClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["button[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n}\r\n#edit-button[_ngcontent-%COMP%] {\r\n    background: yellow;\r\n}\r\n#delete-button[_ngcontent-%COMP%] {\r\n    background: orangered;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWdyaWQtYnV0dG9ucy9wcm9kdWN0LWdyaWQtYnV0dG9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtZ3JpZC1idXR0b25zL3Byb2R1Y3QtZ3JpZC1idXR0b25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbiNlZGl0LWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbn1cclxuI2RlbGV0ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductGridButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-grid-buttons',
          templateUrl: './product-grid-buttons.component.html',
          styleUrls: ['./product-grid-buttons.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/products.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/products/products.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppComponentsProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _product_grid_buttons_product_grid_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../product-grid-buttons/product-grid-buttons.component */
    "./src/app/components/product-grid-buttons/product-grid-buttons.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/main.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__);

    function ProductsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductsComponent_mat_card_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Products");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_mat_card_2_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190);

          var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r189.onCreateProductClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ag-grid-angular", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx_r188.columnDefs)("defaultColDef", ctx_r188.defaultColDef)("suppressCellSelection", true)("pagination", true)("paginationAutoPageSize", true)("rowData", ctx_r188.rowData);
      }
    }

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(dataService, router) {
        var _this14 = this;

        _classCallCheck(this, ProductsComponent);

        this.dataService = dataService;
        this.router = router;
        this.columnDefs = [{
          headerName: 'Name',
          field: 'productName'
        }, {
          headerName: 'Points',
          field: 'points',
          comparator: function comparator(firstPoints, secondPoints) {
            return _this14.pointsComparator(firstPoints, secondPoints);
          }
        }, {
          headerName: 'After School',
          field: 'school',
          width: 120
        }, {
          headerName: 'Infant',
          field: 'infant'
        }, {
          headerName: 'Product Limit',
          field: 'productLimit',
          width: 120
        }, {
          headerName: 'Type',
          field: 'type'
        }, {
          headerName: 'Super Type',
          field: 'superType',
          width: 120
        }, {
          headerName: 'Type Limit',
          field: 'typeLimit'
        }, {
          headerName: 'In Shop',
          field: 'inShop'
        }, {
          headerName: '',
          field: 'action',
          filter: false,
          sortable: false,
          width: 150,
          cellRendererFramework: _product_grid_buttons_product_grid_buttons_component__WEBPACK_IMPORTED_MODULE_1__["ProductGridButtonsComponent"]
        }];
        this.defaultColDef = {
          filter: true,
          filterParams: {
            suppressAndOrCondition: true
          },
          resizable: true,
          sortable: true,
          width: 100
        };
        this.loading = true;
        this.rowData = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.dataService.getShop(), this.dataService.getTypes(), this.dataService.getProducts()]).subscribe(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 3),
                shop = _ref4[0],
                types = _ref4[1],
                products = _ref4[2];

            _this15.shop = shop;
            _this15.types = types;
            _this15.products = products;
            _this15.rowData = _this15.getFormattedFields();
            _this15.loading = false;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "getInShopStatus",
        value: function getInShopStatus(productToCheck) {
          var inShop = false;
          this.shop.shop.forEach(function (type) {
            type.products.forEach(function (product) {
              if (product._id === productToCheck._id) {
                inShop = true;
              }
            });
          });
          return inShop;
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.gridApi.setRowData(this.rowData);
        }
      }, {
        key: "getProductTypeName",
        value: function getProductTypeName(productToCheck) {
          var typeName = 'None';
          this.types.forEach(function (type) {
            type.products.forEach(function (product) {
              if (product._id === productToCheck._id) {
                typeName = type.typeName;
              }
            });
          });
          return typeName;
        }
      }, {
        key: "getProductSuperTypeName",
        value: function getProductSuperTypeName(productToCheck) {
          var _this16 = this;

          var superTypeName = 'None';
          this.types.forEach(function (type) {
            type.products.forEach(function (product) {
              if (product._id === productToCheck._id) {
                if (type.superTypeId) {
                  _this16.types.forEach(function (superType) {
                    if (type.superTypeId === superType._id) {
                      superTypeName = superType.typeName;
                    }
                  });
                }
              }
            });
          });
          return superTypeName;
        }
      }, {
        key: "getTypeLimitStatus",
        value: function getTypeLimitStatus(productToCheck) {
          var hasTypeLimit = false;
          this.types.forEach(function (type) {
            type.products.forEach(function (product) {
              if (product._id === productToCheck._id) {
                if (type.typeSizeAmount) {
                  hasTypeLimit = true;
                }
              }
            });
          });
          return hasTypeLimit;
        }
      }, {
        key: "getFormattedFields",
        value: function getFormattedFields() {
          var _this17 = this;

          var rowData = [];
          this.products.forEach(function (product) {
            var rowEntry = {};
            Object.defineProperty(rowEntry, '_id', {
              value: product._id
            });
            Object.defineProperty(rowEntry, 'productName', {
              value: product.productName
            });
            product.points ? Object.defineProperty(rowEntry, 'points', {
              value: product.points
            }) : Object.defineProperty(rowEntry, 'points', {
              value: 'None'
            });
            product.school ? Object.defineProperty(rowEntry, 'school', {
              value: 'Yes'
            }) : Object.defineProperty(rowEntry, 'school', {
              value: 'No'
            });
            product.infant ? Object.defineProperty(rowEntry, 'infant', {
              value: 'Yes'
            }) : Object.defineProperty(rowEntry, 'infant', {
              value: 'No'
            });
            product.prodSizeAmount ? Object.defineProperty(rowEntry, 'productLimit', {
              value: 'Yes'
            }) : Object.defineProperty(rowEntry, 'productLimit', {
              value: 'No'
            });
            Object.defineProperty(rowEntry, 'type', {
              value: _this17.getProductTypeName(product)
            });
            Object.defineProperty(rowEntry, 'superType', {
              value: _this17.getProductSuperTypeName(product)
            });
            _this17.getTypeLimitStatus(product) ? Object.defineProperty(rowEntry, 'typeLimit', {
              value: 'Yes'
            }) : Object.defineProperty(rowEntry, 'typeLimit', {
              value: 'No'
            });
            _this17.getInShopStatus(product) ? Object.defineProperty(rowEntry, 'inShop', {
              value: 'Yes'
            }) : Object.defineProperty(rowEntry, 'inShop', {
              value: 'No'
            });
            rowData.push(rowEntry);
          });
          return rowData;
        }
      }, {
        key: "onCreateProductClick",
        value: function onCreateProductClick() {
          this.router.navigate(['/product']);
        }
      }, {
        key: "pointsComparator",
        value: function pointsComparator(firstPoints, secondPoints) {
          if (isNaN(firstPoints)) {
            firstPoints = 0;
          }

          if (isNaN(secondPoints)) {
            secondPoints = 0;
          }

          return firstPoints > secondPoints ? 1 : -1;
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 3,
      vars: 2,
      consts: [["id", "spinner", 4, "ngIf"], ["id", "ag-grid-super-container"], ["id", "ag-grid-sub-container", 4, "ngIf"], ["id", "spinner"], ["id", "ag-grid-sub-container"], ["id", "button-grid-container"], ["id", "products-title"], ["mat-raised-button", "", 3, "click"], [1, "ag-theme-balham", 2, "width", "1120px", "height", "500px", 3, "columnDefs", "defaultColDef", "suppressCellSelection", "pagination", "paginationAutoPageSize", "rowData"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductsComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_mat_card_2_Template, 7, 6, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__["AgGridAngular"]],
      styles: ["#ag-grid-sub-container[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    background-image: url('black-paper.png');\r\n    border: solid black 1px;\r\n    display: grid;\r\n    grid-template-rows: 10% 90%;\r\n    max-width: 1200px;\r\n}\r\n#ag-grid-super-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n#button-grid-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 85% 15%;\r\n    margin-bottom: 3%;\r\n}\r\n#products-title[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n#spinner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    background-color:#71a040;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHdDQUE2RDtJQUM3RCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZy1ncmlkLXN1Yi1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NTc3NztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JsYWNrLXBhcGVyLnBuZyk7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxufVxyXG4jYWctZ3JpZC1zdXBlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG4jYnV0dG9uLWdyaWQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg1JSAxNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG4jcHJvZHVjdHMtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcbiNzcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3MWEwNDA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/shop-edit/shop-edit.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/shop-edit/shop-edit.component.ts ***!
    \*************************************************************/

  /*! exports provided: ShopEditComponent */

  /***/
  function srcAppComponentsShopEditShopEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopEditComponent", function () {
      return ShopEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/shop.service */
    "./src/app/services/shop.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");

    function ShopEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShopEditComponent_mat_card_1_mat_card_16_ng_container_2_mat_card_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subType_r152 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subType_r152.typeName);
      }
    }

    function ShopEditComponent_mat_card_1_mat_card_16_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopEditComponent_mat_card_1_mat_card_16_ng_container_2_mat_card_2_Template, 2, 1, "mat-card", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var availableType_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", availableType_r149.subTypes);
      }
    }

    function ShopEditComponent_mat_card_1_mat_card_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopEditComponent_mat_card_1_mat_card_16_ng_container_2_Template, 3, 1, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var availableType_r149 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", availableType_r149.typeName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", availableType_r149.subTypes);
      }
    }

    function ShopEditComponent_mat_card_1_mat_card_20_ng_container_2_mat_card_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subType_r157 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subType_r157.typeName);
      }
    }

    function ShopEditComponent_mat_card_1_mat_card_20_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopEditComponent_mat_card_1_mat_card_20_ng_container_2_mat_card_2_Template, 2, 1, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var typeInShop_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", typeInShop_r154.subTypes);
      }
    }

    function ShopEditComponent_mat_card_1_mat_card_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopEditComponent_mat_card_1_mat_card_20_ng_container_2_Template, 3, 1, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var typeInShop_r154 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", typeInShop_r154.typeName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", typeInShop_r154.subTypes);
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function ShopEditComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Shop Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopEditComponent_mat_card_1_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160);

          var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r159.onCancelClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopEditComponent_mat_card_1_Template_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160);

          var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r161.onSaveClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save and Exit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Available Types");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Types in Shop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "cdk-virtual-scroll-viewport", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ShopEditComponent_mat_card_1_Template_mat_card_cdkDropListDropped_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160);

          var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r162.dropType($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ShopEditComponent_mat_card_1_mat_card_16_Template, 3, 2, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "cdk-virtual-scroll-viewport", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 10, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ShopEditComponent_mat_card_1_Template_mat_card_cdkDropListDropped_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160);

          var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r163.dropType($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ShopEditComponent_mat_card_1_mat_card_20_Template, 3, 2, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

        var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r144.availableTypes)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, _r147));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r144.availableTypes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r144.typesInShop)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, _r145));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r144.typesInShop);
      }
    }

    var ShopEditComponent =
    /*#__PURE__*/
    function () {
      function ShopEditComponent(dataService, snackBar, router, shopService) {
        _classCallCheck(this, ShopEditComponent);

        this.dataService = dataService;
        this.snackBar = snackBar;
        this.router = router;
        this.shopService = shopService;
        this.loading = true;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      }

      _createClass(ShopEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.dataService.getShop(), this.dataService.getTypes()]).subscribe(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                shop = _ref6[0],
                types = _ref6[1];

            _this18.initShop(shop, types);

            _this18.setInShopSubTypes();

            _this18.setAvailableSuperTypes();

            _this18.setAvailableSubTypes();

            _this18.removeProductLessType();

            _this18.sortTypesByName(_this18.availableTypes);

            _this18.sortTypesByName(_this18.typesInShop);

            _this18.loading = false;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "dropType",
        value: function dropType(event) {
          event.previousContainer === event.container ? Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex) : Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
          this.sortTypesByName(this.availableTypes);
          this.sortTypesByName(this.typesInShop);
        }
      }, {
        key: "initShop",
        value: function initShop(shop, types) {
          this.availableTypes = [];
          this.shop = null;
          this.types = [];
          this.typesInShop = [];
          var shopClone = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(shop);
          var typesClone = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(types);
          this.shop = shopClone;
          this.typesInShop = this.shop.shop;
          this.types = typesClone;
        }
      }, {
        key: "onCancelClick",
        value: function onCancelClick() {
          this.router.navigate(['/pantry']);
        }
      }, {
        key: "onSaveClick",
        value: function onSaveClick() {
          var _this19 = this;

          this.unwrapSubTypes();
          this.shop.shop = this.typesInShop;
          this.shopService.updateShop(this.shop._id, this.shop).subscribe(function (response) {
            _this19.showResponseStatus(response.status);

            _this19.router.navigate(["/pantry"]);
          });
        }
      }, {
        key: "removeProductLessType",
        value: function removeProductLessType() {
          var _this20 = this;

          this.availableTypes.forEach(function (availableType) {
            if (!availableType.products.length && !availableType.subTypes) {
              _this20.availableTypes = _this20.availableTypes.filter(function (productLessType) {
                return availableType._id !== productLessType._id;
              });
            }
          });
        }
      }, {
        key: "setAvailableSubTypes",
        value: function setAvailableSubTypes() {
          var _this21 = this;

          this.types.forEach(function (type) {
            _this21.availableTypes.forEach(function (availableType) {
              if (availableType._id === type.superTypeId) {
                if (!availableType.subTypes) {
                  availableType.subTypes = [];
                }

                availableType.subTypes.push(type);
              }
            });
          });
        }
      }, {
        key: "setAvailableSuperTypes",
        value: function setAvailableSuperTypes() {
          var _this22 = this;

          this.types.forEach(function (type) {
            if (!_this22.typesInShop.some(function (typeInShop) {
              return typeInShop._id === type._id;
            }) && !type.superTypeId) {
              _this22.availableTypes.push(type);
            }
          });
        }
      }, {
        key: "setInShopSubTypes",
        value: function setInShopSubTypes() {
          var _this23 = this;

          var subTypesInShop = [];
          this.typesInShop.forEach(function (typeInShop) {
            if (typeInShop.superTypeId) {
              subTypesInShop.push(typeInShop);
              _this23.typesInShop = _this23.typesInShop.filter(function (type) {
                return type._id !== typeInShop._id;
              });
            }
          });
          this.setInShopSubTypesHelper(subTypesInShop);
        }
      }, {
        key: "setInShopSubTypesHelper",
        value: function setInShopSubTypesHelper(subTypesInShop) {
          var _this24 = this;

          subTypesInShop.forEach(function (subType) {
            var superType = _this24.typesInShop.find(function (typeInShop) {
              return typeInShop._id === subType.superTypeId;
            });

            if (!superType.subTypes) {
              superType.subTypes = [];
            }

            superType.subTypes.push(subType);
          });
        }
      }, {
        key: "showResponseStatus",
        value: function showResponseStatus(status) {
          if (status === 200) {
            this.snackBar.open("Shop successfully updated.", 'Dismiss', {
              duration: 2000,
              panelClass: ['green-snackbar']
            });
          } else {
            this.snackBar.open("Shop failed to update.", 'Dismiss', {
              duration: 2000,
              panelClass: ['red-snackbar']
            });
          }

          this.dataService.updateShop();
          this.dataService.updateTypes();
          this.dataService.updateProducts();
        }
      }, {
        key: "sortTypesByName",
        value: function sortTypesByName(shopTypes) {
          shopTypes.sort(function (beforeType, afterType) {
            return beforeType.typeName > afterType.typeName ? 1 : -1;
          });
          shopTypes.forEach(function (shopType) {
            if (shopType.subTypes) {
              shopType.subTypes.sort(function (beforeSubType, afterSubType) {
                return beforeSubType.typeName > afterSubType.typeName ? 1 : -1;
              });
            }
          });
        }
      }, {
        key: "unwrapSubTypes",
        value: function unwrapSubTypes() {
          var _this25 = this;

          this.typesInShop.forEach(function (typeInShop) {
            if (typeInShop.subTypes) {
              typeInShop.subTypes.forEach(function (subType) {
                _this25.typesInShop.push(subType);
              });
              typeInShop.subTypes = undefined;
            }
          });
        }
      }]);

      return ShopEditComponent;
    }();

    ShopEditComponent.ɵfac = function ShopEditComponent_Factory(t) {
      return new (t || ShopEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"]));
    };

    ShopEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShopEditComponent,
      selectors: [["app-shop-edit"]],
      decls: 2,
      vars: 2,
      consts: [["id", "spinner", 4, "ngIf"], ["id", "top-container", 4, "ngIf"], ["id", "spinner"], ["id", "top-container"], ["id", "top-buttons"], ["mat-raised-button", "", 3, "click"], ["id", "grid-container"], ["id", "left-header", 1, "drag-drop-header"], [1, "drag-drop-header"], ["itemSize", "", 1, "viewport"], ["cdkDropList", "", 1, "type-container", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["availableTypesList", "cdkDropList"], ["class", "margin-top", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["typesInShopList", "cdkDropList"], ["cdkDrag", "", 1, "margin-top"], [4, "ngIf"], ["class", "margin-top", "id", "available-sub-type-card", 4, "ngFor", "ngForOf"], ["id", "available-sub-type-card", 1, "margin-top"], ["class", "margin-top", 4, "ngFor", "ngForOf"], [1, "margin-top"]],
      template: function ShopEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShopEditComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShopEditComponent_mat_card_1_Template, 21, 10, "mat-card", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["CdkFixedSizeVirtualScroll"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]],
      styles: [".mat-card[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n#top-container[_ngcontent-%COMP%] {\r\n    background: #603A17;\r\n    background-image: url('buried.png');\r\n    margin: 3%;\r\n    margin-top: 2%;\r\n    min-width: 1200px;\r\n}\r\n#top-buttons[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    font-size: x-large;\r\n    grid-template-columns: 70% 15% 15%;\r\n}\r\n#top-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: 10%\r\n}\r\n#grid-container[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    grid-template-rows: 10% 90%;\r\n}\r\n.drag-drop-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #03354b;\r\n    background-image: url('buried.png');\r\n    justify-content: center;\r\n    font-size: large;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n#left-header[_ngcontent-%COMP%] {\r\n    margin-right: 5%;\r\n}\r\n.viewport[_ngcontent-%COMP%] {\r\n    height: 54vh;\r\n}\r\n.type-container[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    background-image: url('buried.png');\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    font-size: large;\r\n    margin-right: 5%;\r\n}\r\n.margin-top[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n}\r\n#spinner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 80vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wLWVkaXQvc2hvcC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUNBQXdEO0lBQ3hELFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQ0FBd0Q7SUFDeEQsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQ0FBd0Q7SUFDeEQseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG9wLWVkaXQvc2hvcC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC1jYXJkIHtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG59XHJcbiN0b3AtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM2MDNBMTc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9idXJpZWQucG5nKTtcclxuICAgIG1hcmdpbjogMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1pbi13aWR0aDogMTIwMHB4O1xyXG59XHJcbiN0b3AtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMTUlIDE1JTtcclxufVxyXG4jdG9wLWJ1dHRvbnMgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCVcclxufVxyXG4jZ3JpZC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgOTAlO1xyXG59XHJcbi5kcmFnLWRyb3AtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMzU0YjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcbiNsZWZ0LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbi52aWV3cG9ydCB7XHJcbiAgICBoZWlnaHQ6IDU0dmg7XHJcbn1cclxuLnR5cGUtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjU3Nzc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9idXJpZWQucG5nKTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbi5tYXJnaW4tdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcbiNzcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shop-edit',
          templateUrl: './shop-edit.component.html',
          styleUrls: ['./shop-edit.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/shop/shop.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/shop/shop.component.ts ***!
    \***************************************************/

  /*! exports provided: ShopComponent */

  /***/
  function srcAppComponentsShopShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopComponent", function () {
      return ShopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");

    function ShopComponent_mat_expansion_panel_7_mat_card_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r195 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r195.productName);
      }
    }

    function ShopComponent_mat_expansion_panel_7_mat_card_7_mat_card_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subProduct_r198 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subProduct_r198.productName);
      }
    }

    function ShopComponent_mat_expansion_panel_7_mat_card_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShopComponent_mat_expansion_panel_7_mat_card_7_mat_card_3_Template, 2, 1, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subType_r196 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subType_r196.typeName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", subType_r196.products);
      }
    }

    function ShopComponent_mat_expansion_panel_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Click Here ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShopComponent_mat_expansion_panel_7_mat_card_6_Template, 2, 1, "mat-card", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShopComponent_mat_expansion_panel_7_mat_card_7_Template, 4, 2, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r192 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r192.typeName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", type_r192.products);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", type_r192.subTypes);
      }
    }

    var ShopComponent =
    /*#__PURE__*/
    function () {
      function ShopComponent(dataService, router) {
        _classCallCheck(this, ShopComponent);

        this.dataService = dataService;
        this.router = router;
        this.loading = true;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      }

      _createClass(ShopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.subscription.add(this.dataService.getShop().subscribe(function (shop) {
            _this26.loading = true;

            _this26.initShop(shop);

            _this26.setSubTypes();

            _this26.sortShop();

            _this26.loading = false;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "initShop",
        value: function initShop(shop) {
          this.currentTypes = [];
          this.typesInShop = [];
          this.shopTypes = [];
          var shopClone = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(shop);
          this.currentTypes = shopClone.shop;
        }
      }, {
        key: "onEditClick",
        value: function onEditClick() {
          this.router.navigate(['/shop']);
        }
      }, {
        key: "setSubTypes",
        value: function setSubTypes() {
          var _this27 = this;

          this.currentTypes.forEach(function (currentType) {
            if (!currentType.superTypeId) {
              _this27.shopTypes.push(currentType);
            }
          });
          this.shopTypes.forEach(function (shopType) {
            _this27.currentTypes.forEach(function (currentType) {
              if (currentType.superTypeId === shopType._id) {
                if (!shopType.subTypes) {
                  shopType.subTypes = [];
                }

                shopType.subTypes.push(currentType);
              }
            });
          });
        }
      }, {
        key: "sortShop",
        value: function sortShop() {
          this.shopTypes.forEach(function (shopType) {
            shopType.products.sort(function (beforeProduct, afterProduct) {
              return beforeProduct.productName > afterProduct.productName ? 1 : -1;
            });

            if (shopType.subTypes) {
              shopType.subTypes.forEach(function (subType) {
                subType.products.sort(function (beforeSubProduct, afterSubProduct) {
                  return beforeSubProduct.productName > afterSubProduct.productName ? 1 : -1;
                });
              });
              shopType.subTypes.sort(function (beforeSubType, afterSubType) {
                return beforeSubType.typeName > afterSubType.typeName ? 1 : -1;
              });
            }
          });
        }
      }]);

      return ShopComponent;
    }();

    ShopComponent.ɵfac = function ShopComponent_Factory(t) {
      return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShopComponent,
      selectors: [["app-shop"]],
      decls: 8,
      vars: 1,
      consts: [["id", "top-container"], ["id", "top-button", 1, "margin-bottom"], ["id", "shop-title"], ["mat-raised-button", "", 3, "click"], ["id", "shop-container", 1, "margin-bottom"], ["class", "type-card margin-bottom", 4, "ngFor", "ngForOf"], [1, "type-card", "margin-bottom"], ["class", "product-card margin-bottom", 4, "ngFor", "ngForOf"], ["class", "sub-type-card margin-bottom", 4, "ngFor", "ngForOf"], [1, "product-card", "margin-bottom"], [1, "sub-type-card", "margin-bottom"], [1, "margin-bottom"], ["class", "sub-product-card margin-bottom", 4, "ngFor", "ngForOf"], [1, "sub-product-card", "margin-bottom"]],
      template: function ShopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Current Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_Template_button_click_4_listener($event) {
            return ctx.onEditClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShopComponent_mat_expansion_panel_7_Template, 8, 3, "mat-expansion-panel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shopTypes);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelDescription"]],
      styles: [".margin-bottom[_ngcontent-%COMP%] {\r\n    margin-bottom: 1%;\r\n}\r\n.margin-top[_ngcontent-%COMP%] {\r\n    margin-top: 1%;\r\n}\r\n.mat-card[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n#shop-title[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n#top-container[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    background-image: url('buried.png');\r\n    margin: 3%;\r\n}\r\n#top-button[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 85% 15%;\r\n}\r\n#shop-container[_ngcontent-%COMP%] {\r\n    background-image: url('buried.png');\r\n    font-size: large;\r\n}\r\n.type-card[_ngcontent-%COMP%] {\r\n    background-color: #03354b;\r\n    background-image: url('buried.png');\r\n}\r\n.product-card[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n}\r\n.sub-type-card[_ngcontent-%COMP%] {\r\n    background-image: url('buried.png');\r\n}\r\n.sub-product-card[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1DQUF3RDtJQUN4RCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLG1DQUF3RDtJQUN4RCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQ0FBd0Q7QUFDNUQ7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksbUNBQXdEO0FBQzVEO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuLm1hcmdpbi10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG59XHJcbiNzaG9wLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG4jdG9wLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY1Nzc3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVyaWVkLnBuZyk7XHJcbiAgICBtYXJnaW46IDMlO1xyXG59XHJcbiN0b3AtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg1JSAxNSU7XHJcbn1cclxuI3Nob3AtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4udHlwZS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzM1NGI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9idXJpZWQucG5nKTtcclxufVxyXG4ucHJvZHVjdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjU3Nzc7XHJcbn1cclxuLnN1Yi10eXBlLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVyaWVkLnBuZyk7XHJcbn1cclxuLnN1Yi1wcm9kdWN0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NTc3NztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shop',
          templateUrl: './shop.component.html',
          styleUrls: ['./shop.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/sub-type-edit/sub-type-edit.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/sub-type-edit/sub-type-edit.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SubTypeEditComponent */

  /***/
  function srcAppComponentsSubTypeEditSubTypeEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubTypeEditComponent", function () {
      return SubTypeEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var src_app_services_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/type.service */
    "./src/app/services/type.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");

    function SubTypeEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SubTypeEditComponent_mat_card_1_mat_card_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In Shop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SubTypeEditComponent_mat_card_1_mat_card_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubTypeEditComponent_mat_card_1_mat_card_15_div_2_Template, 2, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subType_r131 = ctx.$implicit;

        var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subType_r131.typeName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r129.getInShopStatus(subType_r131));
      }
    }

    function SubTypeEditComponent_mat_card_1_ng_container_18_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In Shop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SubTypeEditComponent_mat_card_1_ng_container_18_mat_card_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subType_r136 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subType_r136.typeName, " ");
      }
    }

    function SubTypeEditComponent_mat_card_1_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function SubTypeEditComponent_mat_card_1_ng_container_18_Template_mat_card_cdkDropListDropped_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r138);

          var superType_r133 = ctx.$implicit;

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r137.dropIntoSupers($event, superType_r133);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubTypeEditComponent_mat_card_1_ng_container_18_div_4_Template, 2, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SubTypeEditComponent_mat_card_1_ng_container_18_mat_card_5_Template, 2, 1, "mat-card", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var superType_r133 = ctx.$implicit;

        var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", superType_r133.subTypes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](superType_r133.typeName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r130.getInShopStatus(superType_r133));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", superType_r133.subTypes);
      }
    }

    function SubTypeEditComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Set Sub-Types");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubTypeEditComponent_mat_card_1_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r140);

          var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r139.onCancelClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubTypeEditComponent_mat_card_1_Template_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r140);

          var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r141.onSaveClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save and Exit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Available Sub-Types");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Available Super-Types");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "cdk-virtual-scroll-viewport", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function SubTypeEditComponent_mat_card_1_Template_mat_card_cdkDropListDropped_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r140);

          var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r142.dropIntoSubs($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SubTypeEditComponent_mat_card_1_mat_card_15_Template, 3, 2, "mat-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "cdk-virtual-scroll-viewport", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SubTypeEditComponent_mat_card_1_ng_container_18_Template, 6, 4, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r128.possibleSubs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r128.possibleSubs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r128.possibleSupers);
      }
    }

    var SubTypeEditComponent =
    /*#__PURE__*/
    function () {
      function SubTypeEditComponent(dataService, router, snackBar, typeService) {
        _classCallCheck(this, SubTypeEditComponent);

        this.dataService = dataService;
        this.router = router;
        this.snackBar = snackBar;
        this.typeService = typeService;
        this.loading = true;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
      }

      _createClass(SubTypeEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.dataService.getShop(), this.dataService.getTypes()]).subscribe(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                shop = _ref8[0],
                types = _ref8[1];

            _this28.shop = shop;

            _this28.initComponentVariables(shop);

            _this28.types = types;

            _this28.initDragDropArrays();

            _this28.initDragDropValues();

            _this28.sortTypesByName(_this28.possibleSubs);

            _this28.sortTypesByName(_this28.possibleSupers);

            _this28.possibleSupers.forEach(function (superType) {
              _this28.sortTypesByName(superType.subTypes);
            });

            _this28.loading = false;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "dropIntoSubs",
        value: function dropIntoSubs(event) {
          var superTypeToAdd = event.previousContainer.data[event.previousIndex];

          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            this.dropIntoSubsSetArrayValues(superTypeToAdd);
          }

          this.sortTypesByName(this.possibleSubs);
          this.sortTypesByName(this.possibleSupers);
        }
      }, {
        key: "dropIntoSubsSetArrayValues",
        value: function dropIntoSubsSetArrayValues(superTypeToAdd) {
          var _this29 = this;

          this.possibleSupers.push(superTypeToAdd);
          this.possibleSupers.forEach(function (superType) {
            if (!superType.subTypes.length && !_this29.possibleSubs.some(function (subType) {
              return subType._id === superType._id;
            }) && superType.products.length) {
              _this29.possibleSubs.push(superType);
            }
          });
        }
      }, {
        key: "dropIntoSupers",
        value: function dropIntoSupers(event, newSuperType) {
          var _this30 = this;

          var typeToMove = event.previousContainer.data[event.previousIndex];

          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          } else if (typeToMove._id !== newSuperType._id && (this.getInShopStatus(typeToMove) && this.getInShopStatus(newSuperType) || !this.getInShopStatus(typeToMove) && !this.getInShopStatus(newSuperType))) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            this.dropIntoSupersSetArrayValues(typeToMove);
          } else if (typeToMove._id === newSuperType._id) {
            this.snackBar.open('Cannot put a type within itself.', "Dismiss", {
              panelClass: ['red-snackbar']
            });
          } else {
            this.snackBar.open('Both the super-type and sub-type must currently be in the shop.', "Dismiss", {
              duration: 4000,
              panelClass: ['red-snackbar']
            });
          }

          this.sortTypesByName(this.possibleSupers);
          this.possibleSupers.forEach(function (superType) {
            _this30.sortTypesByName(superType.subTypes);
          });
        }
      }, {
        key: "dropIntoSupersSetArrayValues",
        value: function dropIntoSupersSetArrayValues(typeToMove) {
          var _this31 = this;

          this.possibleSupers = this.possibleSupers.filter(function (superTypeToRemove) {
            return superTypeToRemove._id !== typeToMove._id;
          });
          this.possibleSupers.forEach(function (superType) {
            if (superType.subTypes.length || !superType.products.length) {
              _this31.possibleSubs = _this31.possibleSubs.filter(function (subType) {
                return subType._id !== superType._id;
              });
            }

            if (!superType.subTypes.length && !_this31.possibleSubs.some(function (subType) {
              return subType._id === superType._id;
            }) && superType.products.length) {
              _this31.possibleSubs.push(superType);
            }
          });
        }
      }, {
        key: "getInShopStatus",
        value: function getInShopStatus(typeToCheck) {
          var inShop = false;
          this.shop.shop.forEach(function (type) {
            if (type._id === typeToCheck._id) {
              inShop = true;
            }
          });
          return inShop;
        }
      }, {
        key: "initComponentVariables",
        value: function initComponentVariables(shop) {
          this.possibleSubs = [];
          this.possibleSupers = [];
          var shopClone = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(shop);
          this.shop = shopClone;
        }
      }, {
        key: "initDragDropArrays",
        value: function initDragDropArrays() {
          var _this32 = this;

          this.types.forEach(function (type) {
            var emptyArray = [];

            _this32.possibleSubs.push({
              _id: type._id,
              typeName: type.typeName,
              subTypes: emptyArray,
              products: type.products
            });

            _this32.possibleSupers.push({
              _id: type._id,
              typeName: type.typeName,
              subTypes: emptyArray,
              products: type.products
            });
          });
        }
      }, {
        key: "initDragDropValues",
        value: function initDragDropValues() {
          var _this33 = this;

          this.types.forEach(function (type) {
            if (!type.products.length) {
              _this33.possibleSubs = _this33.possibleSubs.filter(function (emptyType) {
                return type._id !== emptyType._id;
              });
            }
          });
          this.possibleSupers.forEach(function (superType) {
            _this33.types.forEach(function (type) {
              if (type.superTypeId === superType._id) {
                var newSubType = _this33.possibleSubs.find(function (subType) {
                  return subType._id === type._id;
                });

                superType.subTypes.push(newSubType);
                _this33.possibleSubs = _this33.possibleSubs.filter(function (subType) {
                  return subType._id !== newSubType._id;
                });
                _this33.possibleSubs = _this33.possibleSubs.filter(function (subType) {
                  return subType._id !== superType._id;
                });
                _this33.possibleSupers = _this33.possibleSupers.filter(function (superTypeRemove) {
                  return superTypeRemove._id !== newSubType._id;
                });
              }
            });
          });
        }
      }, {
        key: "showResponseStatus",
        value: function showResponseStatus(status) {
          if (status === 200) {
            this.snackBar.open('Types updated successfully', 'Dismiss', {
              duration: 2000,
              panelClass: ['green-snackbar']
            });
          } else {
            this.snackBar.open('Types update failed.', 'Dismiss', {
              duration: 2000,
              panelClass: ['red-snackbar']
            });
          }

          this.dataService.updateTypes();
          this.dataService.updateShop();
          this.dataService.updateProducts();
        }
      }, {
        key: "sortTypesByName",
        value: function sortTypesByName(dragDropArray) {
          dragDropArray.sort(function (before, after) {
            return before.typeName.trim().toLowerCase() > after.typeName.trim().toLowerCase() ? 1 : -1;
          });
        }
      }, {
        key: "onCancelClick",
        value: function onCancelClick() {
          this.router.navigate(["/pantry"]);
        }
      }, {
        key: "onSaveClick",
        value: function onSaveClick() {
          var _this34 = this;

          this.loading = true;

          if (this.getTypeIdsToUpdate().length) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([this.typeService.removeSuperTypeIdMany(this.getTypeIdsToRemove()), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.getTypeIdsToUpdate()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (update) {
              return _this34.typeService.updateSuperTypeIdMany(update.superTypeId, update.updateIds);
            }))]).subscribe(function (_ref9) {
              var _ref10 = _slicedToArray(_ref9, 2),
                  remove = _ref10[0],
                  update = _ref10[1];

              var response;
              var typedRemove = remove;
              var typedUpdate = update;
              typedRemove.status === 200 && typedUpdate.status === 200 ? response = 200 : response = 400;

              _this34.showResponseStatus(response);

              _this34.router.navigate(["/pantry"]);
            });
          } else {
            this.typeService.removeSuperTypeIdMany(this.getTypeIdsToRemove()).subscribe(function (response) {
              _this34.showResponseStatus(response.status);

              _this34.router.navigate(["/pantry"]);
            });
          }
        }
      }, {
        key: "getTypeIdsToRemove",
        value: function getTypeIdsToRemove() {
          var typeIdsToRemove = [];
          this.possibleSupers.forEach(function (superType) {
            typeIdsToRemove.push(superType._id);
          });
          return typeIdsToRemove;
        }
      }, {
        key: "getTypeIdsToUpdate",
        value: function getTypeIdsToUpdate() {
          var updateObjects = [];
          this.possibleSupers.forEach(function (superType) {
            if (superType.subTypes.length) {
              var idsToUpdate = [];
              superType.subTypes.forEach(function (subType) {
                idsToUpdate.push(subType._id);
              });
              updateObjects.push({
                superTypeId: superType._id,
                updateIds: idsToUpdate
              });
            }
          });
          return updateObjects;
        }
      }]);

      return SubTypeEditComponent;
    }();

    SubTypeEditComponent.ɵfac = function SubTypeEditComponent_Factory(t) {
      return new (t || SubTypeEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_service__WEBPACK_IMPORTED_MODULE_8__["TypeService"]));
    };

    SubTypeEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubTypeEditComponent,
      selectors: [["app-sub-type-edit"]],
      decls: 2,
      vars: 2,
      consts: [["id", "spinner", 4, "ngIf"], ["id", "top-container", 4, "ngIf"], ["id", "spinner"], ["id", "top-container"], ["id", "top-buttons"], ["mat-raised-button", "", 3, "click"], ["id", "grid-container", "cdkDropListGroup", ""], ["id", "left-header", 1, "drag-drop-header"], [1, "drag-drop-header"], ["id", "sub-type-viewport", "itemSize", ""], ["id", "sub-type-container", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "sub-type-card type-name", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["id", "super-type-viewport", "itemSize", ""], ["id", "super-type-container"], [4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "sub-type-card", "type-name"], ["class", "in-shop", 4, "ngIf"], [1, "in-shop"], ["cdkDropList", "", 1, "super-type-card-container", 3, "cdkDropListData", "cdkDropListDropped"], [1, "type-name"], ["class", "super-type-card type-name", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "super-type-card", "type-name"]],
      template: function SubTypeEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SubTypeEditComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubTypeEditComponent_mat_card_1_Template, 19, 3, "mat-card", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropListGroup"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkFixedSizeVirtualScroll"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]],
      styles: [".mat-card[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n#top-container[_ngcontent-%COMP%] {\r\n    background: #603A17;\r\n    background-image: url('buried.png');\r\n    margin: 3%;\r\n    margin-top: 2%;\r\n    min-width: 1200px;\r\n}\r\n#top-buttons[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    font-size: x-large;\r\n    grid-template-columns: 70% 15% 15%;\r\n}\r\n#top-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: 10%\r\n}\r\n#grid-container[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    grid-template-rows: 10% 90%;\r\n}\r\n.drag-drop-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #03354b;\r\n    background-image: url('buried.png');\r\n    justify-content: center;\r\n    font-size: large;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n#left-header[_ngcontent-%COMP%] {\r\n    margin-right: 5%;\r\n}\r\n#sub-type-viewport[_ngcontent-%COMP%] {\r\n    height: 53vh;\r\n}\r\n.sub-type-card[_ngcontent-%COMP%] {\r\n    margin-bottom: 2%;\r\n}\r\n#sub-type-container[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    background-image: url('buried.png');\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    font-size: large;\r\n    margin-right: 5%;\r\n}\r\n#super-type-container[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    background-image: url('buried.png');\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    font-size: large;\r\n}\r\n.super-type-card-container[_ngcontent-%COMP%] {\r\n    background-image: url('buried.png');\r\n    margin-bottom: 2%;\r\n}\r\n.super-type-card[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n}\r\n.type-name[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.in-shop[_ngcontent-%COMP%] {\r\n    background-color: rgb(194, 27, 27);\r\n    border: 1px black solid;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin-left: 22rem;\r\n    padding: 5px;\r\n}\r\n#super-type-viewport[_ngcontent-%COMP%] {\r\n    height: 54vh;\r\n}\r\n#spinner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 80vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWItdHlwZS1lZGl0L3N1Yi10eXBlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG1DQUF3RDtJQUN4RCxVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUNBQXdEO0lBQ3hELHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQ0FBd0Q7SUFDeEQseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUNBQXdEO0lBQ3hELHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQ0FBd0Q7SUFDeEQsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ViLXR5cGUtZWRpdC9zdWItdHlwZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuI3RvcC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzYwM0ExNztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWluLXdpZHRoOiAxMjAwcHg7XHJcbn1cclxuI3RvcC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAxNSUgMTUlO1xyXG59XHJcbiN0b3AtYnV0dG9ucyBidXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJVxyXG59XHJcbiNncmlkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA5MCU7XHJcbn1cclxuLmRyYWctZHJvcC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMzNTRiO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVyaWVkLnBuZyk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuI2xlZnQtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuI3N1Yi10eXBlLXZpZXdwb3J0IHtcclxuICAgIGhlaWdodDogNTN2aDtcclxufVxyXG4uc3ViLXR5cGUtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4jc3ViLXR5cGUtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjU3Nzc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9idXJpZWQucG5nKTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbiNzdXBlci10eXBlLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY1Nzc3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVyaWVkLnBuZyk7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbi5zdXBlci10eXBlLWNhcmQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuLnN1cGVyLXR5cGUtY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4udHlwZS1uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmluLXNob3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMjcsIDI3KTtcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMnJlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4jc3VwZXItdHlwZS12aWV3cG9ydCB7XHJcbiAgICBoZWlnaHQ6IDU0dmg7XHJcbn1cclxuI3NwaW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubTypeEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sub-type-edit',
          templateUrl: './sub-type-edit.component.html',
          styleUrls: ['./sub-type-edit.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
        }, {
          type: src_app_services_type_service__WEBPACK_IMPORTED_MODULE_8__["TypeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/type-add/type-add.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/type-add/type-add.component.ts ***!
    \***********************************************************/

  /*! exports provided: TypeAddComponent */

  /***/
  function srcAppComponentsTypeAddTypeAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeAddComponent", function () {
      return TypeAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product-add/product-add.component */
    "./src/app/components/product-add/product-add.component.ts");
    /* harmony import */


    var _models_type_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/type.model */
    "./src/app/models/type.model.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var src_app_services_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/type.service */
    "./src/app/services/type.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function TypeAddComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypeAddComponent_mat_card_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Type Create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypeAddComponent_mat_card_1_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r66.requiredError);
      }
    }

    function TypeAddComponent_mat_card_1_mat_card_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This type does not currently have family size limits.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeAddComponent_mat_card_1_mat_card_16_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r74.initSizeAmount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Limits");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypeAddComponent_mat_card_1_span_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type Limits per Range of Family Size:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeAddComponent_mat_card_1_span_17_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r76.addSizeAmount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Another Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypeAddComponent_mat_card_1_cdk_virtual_scroll_viewport_18_mat_card_1_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r81.requiredError);
      }
    }

    function TypeAddComponent_mat_card_1_cdk_virtual_scroll_viewport_18_mat_card_1_mat_error_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r82.requiredError);
      }
    }

    function TypeAddComponent_mat_card_1_cdk_virtual_scroll_viewport_18_mat_card_1_mat_error_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r83.requiredError);
      }
    }

    function TypeAddComponent_mat_card_1_cdk_virtual_scroll_viewport_18_mat_card_1_mat_error_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum size must be equal to or smaller than maximum size.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypeAddComponent_mat_card_1_cdk_virtual_scroll_viewport_18_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Minimum Family Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TypeAddComponent_mat_card_1_cdk_virtual_scroll_viewport_18_mat_card_1_mat_error_25_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Maximum Family Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TypeAddComponent_mat_card_1_cdk_virtual_scroll_viewport_18_mat_card_1_mat_error_48_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Type Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-select", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, TypeAddComponent_mat_card_1_cdk_virtual_scroll_viewport_18_mat_card_1_mat_error_71_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeAddComponent_mat_card_1_cdk_virtual_scroll_viewport_18_mat_card_1_Template_button_click_73_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var i_r80 = ctx.index;

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r85.deleteSizeAmount(i_r80);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Delete Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, TypeAddComponent_mat_card_1_cdk_virtual_scroll_viewport_18_mat_card_1_mat_error_75_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r80 = ctx.index;

        var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r78.typeForm.get("typeSizeAmount")["controls"][i_r80].get("minFamSize").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r78.typeForm.get("typeSizeAmount")["controls"][i_r80].get("maxFamSize").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r78.typeForm.get("typeSizeAmount")["controls"][i_r80].get("maxAmount").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r78.typeForm.get("typeSizeAmount")["controls"][i_r80].hasError("minMax"));
      }
    }

    function TypeAddComponent_mat_card_1_cdk_virtual_scroll_viewport_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TypeAddComponent_mat_card_1_cdk_virtual_scroll_viewport_18_mat_card_1_Template, 76, 32, "mat-card", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r69.typeForm.get("typeSizeAmount")["controls"]);
      }
    }

    function TypeAddComponent_mat_card_1_mat_card_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r87 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r87.productName);
      }
    }

    function TypeAddComponent_mat_card_1_mat_card_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r88 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r88.productName);
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function TypeAddComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TypeAddComponent_mat_card_1_span_2_Template, 2, 0, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeAddComponent_mat_card_1_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.onCancelClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeAddComponent_mat_card_1_Template_button_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.onAddClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Save Type and Exit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Type Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TypeAddComponent_mat_card_1_Template_input_change_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r92.onChangeTypeName();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TypeAddComponent_mat_card_1_mat_error_14_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TypeAddComponent_mat_card_1_mat_card_16_Template, 5, 0, "mat-card", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TypeAddComponent_mat_card_1_span_17_Template, 5, 0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TypeAddComponent_mat_card_1_cdk_virtual_scroll_viewport_18_Template, 2, 1, "cdk-virtual-scroll-viewport", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Available Products ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "cdk-virtual-scroll-viewport", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TypeAddComponent_mat_card_1_Template_cdk_virtual_scroll_viewport_cdkDropListDropped_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r93.dropProduct($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TypeAddComponent_mat_card_1_mat_card_24_Template, 2, 1, "mat-card", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Products in this Type ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "cdk-virtual-scroll-viewport", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TypeAddComponent_mat_card_1_Template_cdk_virtual_scroll_viewport_cdkDropListDropped_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r94.dropProduct($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TypeAddComponent_mat_card_1_mat_card_29_Template, 2, 1, "mat-card", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r64.type.typeName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r64.typeForm.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r64.typeForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r64.typeForm.get("typeName").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r64.typeForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r64.typeForm.get("typeSizeAmount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r64.typeForm.get("typeSizeAmount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r64.typeForm.get("typeSizeAmount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r64.availableProducts)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, _r72));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r64.availableProducts);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r64.productsInType)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, _r70));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r64.productsInType);
      }
    }

    var TypeAddComponent =
    /*#__PURE__*/
    function () {
      function TypeAddComponent(dataService, formBuilder, snackBar, typeService, router) {
        _classCallCheck(this, TypeAddComponent);

        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.typeService = typeService;
        this.router = router;
        this.availableProducts = [];
        this.availableSubTypes = [];
        this.deletedOrMoved = false;
        this.loading = true;
        this.newSubTypes = [];
        this.productsInType = [];
        this.requiredError = 'This field is required.';
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.superTypeOptions = [];
        this.type = new _models_type_model__WEBPACK_IMPORTED_MODULE_3__["Type"]();
        this.typeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          typeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          superType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(TypeAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.dataService.getProducts(), this.dataService.getTypes()]).subscribe(function (_ref11) {
            var _ref12 = _slicedToArray(_ref11, 2),
                products = _ref12[0],
                types = _ref12[1];

            _this35.products = products;
            _this35.types = types;

            _this35.initAvailableProducts();

            _this35.loading = !_this35.loading;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "addSizeAmount",
        value: function addSizeAmount() {
          this.typeSizeAmount.push(this.formBuilder.group({
            minFamSize: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            maxFamSize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            maxAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validator: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_2__["minMaxValidator"]
          }));
        }
      }, {
        key: "deleteSizeAmount",
        value: function deleteSizeAmount(index) {
          this.deletedOrMoved = true;
          this.typeSizeAmount.removeAt(index);

          if (!this.typeSizeAmount.length) {
            this.typeForm.removeControl('typeSizeAmount');
          }
        }
      }, {
        key: "dropProduct",
        value: function dropProduct(event) {
          this.deletedOrMoved = true;
          event.previousContainer === event.container ? Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex) : Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
          this.sortProductsByName(this.availableProducts);
          this.sortProductsByName(this.productsInType);
        }
      }, {
        key: "initSizeAmount",
        value: function initSizeAmount() {
          this.typeSizeAmount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
          this.addSizeAmount();
          this.typeForm.addControl('typeSizeAmount', this.typeSizeAmount);
        }
      }, {
        key: "onChangeTypeName",
        value: function onChangeTypeName() {
          this.currentTypeName = this.typeForm.get('typeName').value;
        }
      }, {
        key: "onAddClick",
        value: function onAddClick() {
          var _this36 = this;

          if (this.typeForm.valid) {
            this.setTypeValues();
            this.typeService.addType(this.type).subscribe(function (response) {
              return _this36.showResponseStatus(response.status);
            });
          }

          this.router.navigate(["/pantry"]);
        }
      }, {
        key: "onCancelClick",
        value: function onCancelClick() {
          this.router.navigate(["/pantry"]);
        }
      }, {
        key: "initAvailableProducts",
        value: function initAvailableProducts() {
          var _this37 = this;

          var unavailableProducts = [];
          this.types.forEach(function (type) {
            return type.products.forEach(function (product) {
              return unavailableProducts.push(product);
            });
          });
          this.products.forEach(function (product) {
            if (!unavailableProducts.some(function (unavailable) {
              return unavailable._id === product._id;
            })) {
              _this37.availableProducts.push(product);
            }
          });
          this.sortProductsByName(this.availableProducts);
        }
      }, {
        key: "setTypeValues",
        value: function setTypeValues() {
          this.type.typeName = this.typeForm.get('typeName').value;

          if (this.typeForm.get('typeSizeAmount') && this.typeSizeAmount.length) {
            this.type.typeSizeAmount = this.typeForm.get('typeSizeAmount').value;
          }

          this.productsInType.length ? this.type.products = this.productsInType : this.type.products = [];

          if (this.typeForm.get('superType').value) {
            this.type.superTypeId = this.typeForm.get('superType').value;
          }
        }
      }, {
        key: "showResponseStatus",
        value: function showResponseStatus(status) {
          if (status === 200) {
            this.snackBar.open("".concat(this.type.typeName, " successfully updated."), 'Dismiss', {
              panelClass: ['green-snackbar']
            });
          } else {
            this.snackBar.open("".concat(this.type.typeName, " failed to update."), 'Dismiss', {
              panelClass: ['red-snackbar']
            });
          }

          this.dataService.updateTypes();
          this.dataService.updateProducts();
          this.dataService.updateShop();
        }
      }, {
        key: "sortProductsByName",
        value: function sortProductsByName(dragDropCard) {
          dragDropCard.sort(function (before, after) {
            return before.productName.trim().toLowerCase() > after.productName.trim().toLowerCase() ? 1 : -1;
          });
        }
      }]);

      return TypeAddComponent;
    }();

    TypeAddComponent.ɵfac = function TypeAddComponent_Factory(t) {
      return new (t || TypeAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_service__WEBPACK_IMPORTED_MODULE_8__["TypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]));
    };

    TypeAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TypeAddComponent,
      selectors: [["app-type-add"]],
      decls: 2,
      vars: 2,
      consts: [["id", "spinner", 4, "ngIf"], ["id", "top-container", 4, "ngIf"], ["id", "spinner"], ["id", "top-container"], ["id", "top-buttons"], ["class", "type-title", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", 3, "disabled", "click"], ["id", "grid-container"], [1, "left-form", 3, "formGroup"], ["matInput", "", "formControlName", "typeName", 3, "change"], [4, "ngIf"], ["id", "right-form", 3, "formGroup"], ["id", "init-size-amount", 4, "ngIf"], ["id", "add-limit", 4, "ngIf"], ["id", "limit-viewport", "itemSize", "", 4, "ngIf"], ["id", "add-product-container"], ["id", "available-container"], ["id", "available-products-viewport", "itemSize", "", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["productList", "cdkDropList"], ["class", "available-card", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["id", "in-type-container"], ["id", "in-type-products-viewport", "itemSize", "", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["productTypeList", "cdkDropList"], ["class", "in-type-card", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "type-title"], ["id", "init-size-amount"], ["id", "add-limit"], ["id", "limit-viewport", "itemSize", ""], ["class", "type-size-amount-card", "formArrayName", "typeSizeAmount", 4, "ngFor", "ngForOf"], ["formArrayName", "typeSizeAmount", 1, "type-size-amount-card"], [3, "formGroupName"], [1, "type-size-amount-form"], ["matInput", "", "formControlName", "minFamSize"], [3, "value"], ["matInput", "", "formControlName", "maxFamSize"], ["matInput", "", "formControlName", "maxAmount"], ["cdkDrag", "", 1, "available-card"], ["cdkDrag", "", 1, "in-type-card"]],
      template: function TypeAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TypeAddComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TypeAddComponent_mat_card_1_Template, 30, 18, "mat-card", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["CdkFixedSizeVirtualScroll"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDrag"]],
      styles: ["button[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n.mat-card[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n#grid-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 30% 70%;\r\n}\r\n.type-title[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n    font-weight: normal;\r\n}\r\n#top-container[_ngcontent-%COMP%] {\r\n    background: #603A17;\r\n    background-image: url('buried.png');\r\n    margin: 3%;\r\n    margin-top: 2%;\r\n    min-width: 1200px;\r\n}\r\n#top-buttons[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 70% 15% 15%;\r\n}\r\n#top-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: 10%\r\n}\r\n#grid-container[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n    display: grid;\r\n    grid-template-columns: 20% 80%;\r\n}\r\n#grid-container[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n}\r\n.left-form[_ngcontent-%COMP%] {\r\n    height: 15vh;\r\n    display: grid;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n.in-shop-left-form[_ngcontent-%COMP%] {\r\n    height: 18vh;\r\n    display: grid;\r\n    grid-template-rows: 70% 30%;\r\n    vertical-align: center;\r\n    justify-content: center;\r\n}\r\n#shop[_ngcontent-%COMP%] {\r\n    background-color: rgb(161, 103, 103);\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center; \r\n}\r\n#right-form[_ngcontent-%COMP%] {\r\n    background-image: url('buried.png');\r\n    margin-left: 1%;\r\n}\r\n#init-size-amount[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 80% 20%;\r\n}\r\n#init-size-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    padding-top: 1%;\r\n}\r\n#add-limit[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 80% 20%;\r\n    margin-bottom: 2%;\r\n}\r\n#add-limit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n#limit-viewport[_ngcontent-%COMP%] {\r\n    height: 45vh;\r\n    width: 100%;\r\n}\r\n.type-size-amount-card[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n}\r\n.type-size-amount-form[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 24% 24% 24% 10%;\r\n    grid-gap: 5%;\r\n    vertical-align: center;\r\n}\r\n.type-size-amount-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 13%;\r\n}\r\n#spinner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 80vh;\r\n}\r\n#add-product-container[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    background-image: url('buried.png');\r\n    border: solid black 1px;\r\n    font-size: large;\r\n    height: 45vh;\r\n    margin-top: 1%;\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n}\r\n#available-container[_ngcontent-%COMP%] {\r\n    background-image: url('buried.png');\r\n    margin-right: 5%;\r\n}\r\n#available-products-viewport[_ngcontent-%COMP%] {\r\n    height: 30vh;\r\n    margin-top: 2%;\r\n    width: 100%;\r\n}\r\n.available-card[_ngcontent-%COMP%] {\r\n    background-color: #0a2f4d;\r\n    margin-top: 1%;\r\n    width: 90%;\r\n}\r\n#in-type-container[_ngcontent-%COMP%] {\r\n    background-image: url('buried.png');\r\n}\r\n#in-type-products-viewport[_ngcontent-%COMP%] {\r\n    height: 30vh;\r\n    margin-top: 2%;\r\n    width: 100%;\r\n}\r\n.in-type-card[_ngcontent-%COMP%] {\r\n    background-color: #0a2f4d;\r\n    margin-top: 1%;\r\n    width: 90%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90eXBlLWFkZC90eXBlLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQ0FBd0Q7SUFDeEQsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1DQUF3RDtJQUN4RCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUNBQXdEO0lBQ3hELHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxtQ0FBd0Q7SUFDeEQsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1DQUF3RDtBQUM1RDtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90eXBlLWFkZC90eXBlLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG4jZ3JpZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDcwJTtcclxufVxyXG4udHlwZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4jdG9wLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjAzQTE3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVyaWVkLnBuZyk7XHJcbiAgICBtYXJnaW46IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtaW4td2lkdGg6IDEyMDBweDtcclxufVxyXG4jdG9wLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDE1JSAxNSU7XHJcbn1cclxuI3RvcC1idXR0b25zIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlXHJcbn1cclxuI2dyaWQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcclxufVxyXG4jZ3JpZC1jb250YWluZXIgLm1hdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjU3Nzc7XHJcbn1cclxuLmxlZnQtZm9ybSB7XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmluLXNob3AtbGVmdC1mb3JtIHtcclxuICAgIGhlaWdodDogMTh2aDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwJSAzMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI3Nob3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTAzLCAxMDMpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxufVxyXG4jcmlnaHQtZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9idXJpZWQucG5nKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG4jaW5pdC1zaXplLWFtb3VudCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCUgMjAlO1xyXG59XHJcbiNpbml0LXNpemUtYW1vdW50IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxufVxyXG4jYWRkLWxpbWl0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAyMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4jYWRkLWxpbWl0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcbiNsaW1pdC12aWV3cG9ydCB7XHJcbiAgICBoZWlnaHQ6IDQ1dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udHlwZS1zaXplLWFtb3VudC1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcbi50eXBlLXNpemUtYW1vdW50LWZvcm0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQlIDI0JSAyNCUgMTAlO1xyXG4gICAgZ3JpZC1nYXA6IDUlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udHlwZS1zaXplLWFtb3VudC1mb3JtIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMyU7XHJcbn1cclxuI3NwaW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59XHJcbiNhZGQtcHJvZHVjdC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NTc3NztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgaGVpZ2h0OiA0NXZoO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG59XHJcbiNhdmFpbGFibGUtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG4jYXZhaWxhYmxlLXByb2R1Y3RzLXZpZXdwb3J0IHtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmF2YWlsYWJsZS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTJmNGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuI2luLXR5cGUtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG59XHJcbiNpbi10eXBlLXByb2R1Y3RzLXZpZXdwb3J0IHtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmluLXR5cGUtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEyZjRkO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-type-add',
          templateUrl: './type-add.component.html',
          styleUrls: ['./type-add.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
        }, {
          type: src_app_services_type_service__WEBPACK_IMPORTED_MODULE_8__["TypeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/type-delete-modal/type-delete-modal.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/type-delete-modal/type-delete-modal.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: TypeDeleteModalComponent */

  /***/
  function srcAppComponentsTypeDeleteModalTypeDeleteModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeDeleteModalComponent", function () {
      return TypeDeleteModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var src_app_services_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/type.service */
    "./src/app/services/type.service.ts");
    /* harmony import */


    var src_app_models_type_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/type.model */
    "./src/app/models/type.model.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var TypeDeleteModalComponent =
    /*#__PURE__*/
    function () {
      function TypeDeleteModalComponent(dialogRef, type, dataService, router, snackBar, typeService) {
        _classCallCheck(this, TypeDeleteModalComponent);

        this.dialogRef = dialogRef;
        this.type = type;
        this.dataService = dataService;
        this.router = router;
        this.snackBar = snackBar;
        this.typeService = typeService;
      }

      _createClass(TypeDeleteModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteType",
        value: function deleteType() {
          var _this38 = this;

          this.typeService.deleteType(this.type._id).subscribe(function (response) {
            return _this38.showResponseStatus(response.status);
          });
        }
      }, {
        key: "onCancelClick",
        value: function onCancelClick() {
          this.dialogRef.close();
          this.router.navigate(["/pantry"]);
        }
      }, {
        key: "onProceedClick",
        value: function onProceedClick() {
          this.deleteType();
          this.dialogRef.close();
          this.router.navigate(["/pantry"]);
        }
      }, {
        key: "showResponseStatus",
        value: function showResponseStatus(status) {
          if (status === 200) {
            this.snackBar.open("".concat(this.type.typeName, " successfully deleted."), 'Dismiss', {
              panelClass: ['green-snackbar']
            });
          } else {
            this.snackBar.open("".concat(this.type.typeName, " failed to delete."), 'Dismiss', {
              panelClass: ['red-snackbar']
            });
          }

          this.dataService.updateTypes();
          this.dataService.updateShop();
          this.dataService.updateProducts();
        }
      }]);

      return TypeDeleteModalComponent;
    }();

    TypeDeleteModalComponent.ɵfac = function TypeDeleteModalComponent_Factory(t) {
      return new (t || TypeDeleteModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_service__WEBPACK_IMPORTED_MODULE_5__["TypeService"]));
    };

    TypeDeleteModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TypeDeleteModalComponent,
      selectors: [["app-type-delete-modal"]],
      decls: 10,
      vars: 1,
      consts: [["id", "proceed-prompt"], ["mat-raised-button", "", 3, "click"]],
      template: function TypeDeleteModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Do you wish to proceed?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeDeleteModalComponent_Template_button_click_6_listener($event) {
            return ctx.onCancelClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeDeleteModalComponent_Template_button_click_8_listener($event) {
            return ctx.onProceedClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Proceed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This action will permanently delete ", ctx.type.typeName, ". Permanently deleting a type removes it from the shop and unassigns\u2014but does not delete\u2014any products currently assigned to it.");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: [".mat-card[_ngcontent-%COMP%] {\r\n    background-color: rgb(163, 59, 59);\r\n    border: solid black 1px;\r\n    margin-top: 2%;\r\n}\r\n#proceed-prompt[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nspan[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90eXBlLWRlbGV0ZS1tb2RhbC90eXBlLWRlbGV0ZS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90eXBlLWRlbGV0ZS1tb2RhbC90eXBlLWRlbGV0ZS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjMsIDU5LCA1OSk7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcbiNwcm9jZWVkLXByb21wdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeDeleteModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-type-delete-modal',
          templateUrl: './type-delete-modal.component.html',
          styleUrls: ['./type-delete-modal.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: src_app_models_type_model__WEBPACK_IMPORTED_MODULE_6__["Type"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: src_app_services_type_service__WEBPACK_IMPORTED_MODULE_5__["TypeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/type-edit/type-edit.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/type-edit/type-edit.component.ts ***!
    \*************************************************************/

  /*! exports provided: TypeEditComponent */

  /***/
  function srcAppComponentsTypeEditTypeEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeEditComponent", function () {
      return TypeEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _type_add_type_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../type-add/type-add.component */
    "./src/app/components/type-add/type-add.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product-add/product-add.component */
    "./src/app/components/product-add/product-add.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/type.service */
    "./src/app/services/type.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function TypeEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypeEditComponent_mat_card_1_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r97.requiredError);
      }
    }

    function TypeEditComponent_mat_card_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Currently in the Shop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypeEditComponent_mat_card_1_mat_card_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This type does not currently have family size limits.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeEditComponent_mat_card_1_mat_card_18_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r106.initSizeAmount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Limits");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypeEditComponent_mat_card_1_span_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type Limits per Range of Family Size:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeEditComponent_mat_card_1_span_19_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r108.addSizeAmount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Another Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypeEditComponent_mat_card_1_cdk_virtual_scroll_viewport_20_mat_card_1_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r113.requiredError);
      }
    }

    function TypeEditComponent_mat_card_1_cdk_virtual_scroll_viewport_20_mat_card_1_mat_error_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r114.requiredError);
      }
    }

    function TypeEditComponent_mat_card_1_cdk_virtual_scroll_viewport_20_mat_card_1_mat_error_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r115.requiredError);
      }
    }

    function TypeEditComponent_mat_card_1_cdk_virtual_scroll_viewport_20_mat_card_1_mat_error_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum size must be equal to or smaller than maximum size.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypeEditComponent_mat_card_1_cdk_virtual_scroll_viewport_20_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Minimum Family Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TypeEditComponent_mat_card_1_cdk_virtual_scroll_viewport_20_mat_card_1_mat_error_25_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Maximum Family Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TypeEditComponent_mat_card_1_cdk_virtual_scroll_viewport_20_mat_card_1_mat_error_48_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Type Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-select", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, TypeEditComponent_mat_card_1_cdk_virtual_scroll_viewport_20_mat_card_1_mat_error_71_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeEditComponent_mat_card_1_cdk_virtual_scroll_viewport_20_mat_card_1_Template_button_click_73_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118);

          var i_r112 = ctx.index;

          var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r117.deleteSizeAmount(i_r112);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Delete Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, TypeEditComponent_mat_card_1_cdk_virtual_scroll_viewport_20_mat_card_1_mat_error_75_Template, 2, 0, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r112 = ctx.index;

        var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r110.typeForm.get("typeSizeAmount")["controls"][i_r112].get("minFamSize").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r110.typeForm.get("typeSizeAmount")["controls"][i_r112].get("maxFamSize").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r110.typeForm.get("typeSizeAmount")["controls"][i_r112].get("maxAmount").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r110.typeForm.get("typeSizeAmount")["controls"][i_r112].hasError("minMax"));
      }
    }

    function TypeEditComponent_mat_card_1_cdk_virtual_scroll_viewport_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TypeEditComponent_mat_card_1_cdk_virtual_scroll_viewport_20_mat_card_1_Template, 76, 32, "mat-card", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r101.typeForm.get("typeSizeAmount")["controls"]);
      }
    }

    function TypeEditComponent_mat_card_1_mat_card_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r119 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r119.productName);
      }
    }

    function TypeEditComponent_mat_card_1_mat_card_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r120 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r120.productName);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "in-shop-left-form": a0
      };
    };

    var _c1 = function _c1(a0) {
      return [a0];
    };

    function TypeEditComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeEditComponent_mat_card_1_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

          var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r121.onCancelClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeEditComponent_mat_card_1_Template_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r123.onUpdateClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save Update and Exit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Type Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TypeEditComponent_mat_card_1_Template_input_change_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r124.onChangeTypeName();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TypeEditComponent_mat_card_1_mat_error_15_Template, 2, 1, "mat-error", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TypeEditComponent_mat_card_1_div_16_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TypeEditComponent_mat_card_1_mat_card_18_Template, 5, 0, "mat-card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TypeEditComponent_mat_card_1_span_19_Template, 5, 0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TypeEditComponent_mat_card_1_cdk_virtual_scroll_viewport_20_Template, 2, 1, "cdk-virtual-scroll-viewport", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Available Products ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "cdk-virtual-scroll-viewport", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TypeEditComponent_mat_card_1_Template_cdk_virtual_scroll_viewport_cdkDropListDropped_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r125.dropProduct($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TypeEditComponent_mat_card_1_mat_card_26_Template, 2, 1, "mat-card", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Products in this Type ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "cdk-virtual-scroll-viewport", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TypeEditComponent_mat_card_1_Template_cdk_virtual_scroll_viewport_cdkDropListDropped_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r126.dropProduct($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TypeEditComponent_mat_card_1_mat_card_31_Template, 2, 1, "mat-card", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

        var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r96.typeForm.pristine && !ctx_r96.deletedOrMoved || !ctx_r96.typeForm.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r96.inShop))("formGroup", ctx_r96.typeForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r96.typeForm.get("typeName").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r96.inShop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r96.typeForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r96.typeForm.get("typeSizeAmount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r96.typeForm.get("typeSizeAmount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r96.typeForm.get("typeSizeAmount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r96.availableProducts)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, _r104));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r96.availableProducts);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r96.productsInType)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, _r102));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r96.productsInType);
      }
    }

    var TypeEditComponent =
    /*#__PURE__*/
    function (_type_add_type_add_co) {
      _inherits(TypeEditComponent, _type_add_type_add_co);

      var _super2 = _createSuper(TypeEditComponent);

      function TypeEditComponent(activatedRoute, dataService, formBuilder, typeService, snackBar, router) {
        var _this39;

        _classCallCheck(this, TypeEditComponent);

        _this39 = _super2.call(this, dataService, formBuilder, snackBar, typeService, router);
        _this39.activatedRoute = activatedRoute;
        _this39.dataService = dataService;
        _this39.formBuilder = formBuilder;
        _this39.typeService = typeService;
        _this39.snackBar = snackBar;
        _this39.router = router;
        _this39.inShop = false;
        return _this39;
      }

      _createClass(TypeEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this40 = this;

          this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.dataService.getShop(), this.dataService.getTypes(), this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this40.dataService.getTypeById(params.id);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), this.dataService.getProducts()]).subscribe(function (_ref13) {
            var _ref14 = _slicedToArray(_ref13, 4),
                shop = _ref14[0],
                types = _ref14[1],
                type = _ref14[2],
                products = _ref14[3];

            _this40.rerouteOnEmptyType(type);

            _this40.shop = shop;
            _this40.types = types;
            _this40.type = type;
            _this40.products = products;
            _this40.typeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              typeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this40.type.typeName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              superType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this40.type.superTypeId)
            });

            _this40.initAvailableProducts();

            _this40.initProductsInType();

            _this40.setTypeSizeAmountForm();

            _this40.setInShop();

            _this40.loading = !_this40.loading;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "initProductsInType",
        value: function initProductsInType() {
          this.productsInType = this.type.products;
        }
      }, {
        key: "onUpdateClick",
        value: function onUpdateClick() {
          var _this41 = this;

          if (this.typeForm.valid) {
            this.setTypeValues();
            this.typeService.updateType(this.type._id, this.type).subscribe(function (response) {
              _this41.showResponseStatus(response.status);

              _this41.dataService.updateTypes();

              _this41.dataService.updateShop();

              _this41.dataService.updateProducts();
            });
          }

          this.router.navigate(['/pantry']);
        }
      }, {
        key: "rerouteOnEmptyType",
        value: function rerouteOnEmptyType(type) {
          if (type === undefined || Object.entries(type).length === 0 && type.constructor === Object) {
            this.snackBar.open('Type not found. Please try again.', 'Dismiss', {
              panelClass: ['red-snackbar']
            });
            this.router.navigate(["/pantry"]);
          }
        }
      }, {
        key: "setInShop",
        value: function setInShop() {
          var _this42 = this;

          this.shop.shop.forEach(function (type) {
            if (type._id === _this42.type._id) {
              _this42.inShop = true;
            }
          });
        }
      }, {
        key: "setTypeSizeAmountForm",
        value: function setTypeSizeAmountForm() {
          var _this43 = this;

          if (this.type.typeSizeAmount) {
            this.typeSizeAmount = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
            this.type.typeSizeAmount.forEach(function (element) {
              _this43.typeSizeAmount.push(_this43.formBuilder.group({
                minFamSize: [element.minFamSize, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                maxFamSize: [element.maxFamSize, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                maxAmount: [element.maxAmount, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              }, {
                validator: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_4__["minMaxValidator"]
              }));

              _this43.typeForm.addControl('typeSizeAmount', _this43.typeSizeAmount);
            });
          }
        }
      }]);

      return TypeEditComponent;
    }(_type_add_type_add_component__WEBPACK_IMPORTED_MODULE_1__["TypeAddComponent"]);

    TypeEditComponent.ɵfac = function TypeEditComponent_Factory(t) {
      return new (t || TypeEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_service__WEBPACK_IMPORTED_MODULE_8__["TypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    TypeEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TypeEditComponent,
      selectors: [["app-type-edit"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 2,
      consts: [["id", "spinner", 4, "ngIf"], ["id", "top-container", 4, "ngIf"], ["id", "spinner"], ["id", "top-container"], ["id", "top-buttons"], [1, "type-title"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", 3, "disabled", "click"], ["id", "grid-container"], [1, "left-form", 3, "ngClass", "formGroup"], ["matInput", "", "formControlName", "typeName", 3, "change"], [4, "ngIf"], ["id", "shop", 4, "ngIf"], ["id", "right-form", 3, "formGroup"], ["id", "init-size-amount", 4, "ngIf"], ["id", "add-limit", 4, "ngIf"], ["id", "limit-viewport", "itemSize", "", 4, "ngIf"], ["id", "add-product-container"], ["id", "available-container"], ["id", "available-products-viewport", "itemSize", "", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["productList", "cdkDropList"], ["class", "available-card", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["id", "in-type-container"], ["id", "in-type-products-viewport", "itemSize", "", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["productTypeList", "cdkDropList"], ["class", "in-type-card", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["id", "shop"], ["id", "init-size-amount"], ["id", "add-limit"], ["id", "limit-viewport", "itemSize", ""], ["class", "type-size-amount-card", "formArrayName", "typeSizeAmount", 4, "ngFor", "ngForOf"], ["formArrayName", "typeSizeAmount", 1, "type-size-amount-card"], [3, "formGroupName"], [1, "type-size-amount-form"], ["matInput", "", "formControlName", "minFamSize"], [3, "value"], ["matInput", "", "formControlName", "maxFamSize"], ["matInput", "", "formControlName", "maxAmount"], ["cdkDrag", "", 1, "available-card"], ["cdkDrag", "", 1, "in-type-card"]],
      template: function TypeEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TypeEditComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TypeEditComponent_mat_card_1_Template, 32, 21, "mat-card", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["CdkFixedSizeVirtualScroll"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__["CdkDrag"]],
      styles: ["button[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n.mat-card[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n#grid-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 30% 70%;\r\n}\r\n.type-title[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n    font-weight: normal;\r\n}\r\n#top-container[_ngcontent-%COMP%] {\r\n    background: #603A17;\r\n    background-image: url('buried.png');\r\n    margin: 3%;\r\n    margin-top: 2%;\r\n    min-width: 1200px;\r\n}\r\n#top-buttons[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 70% 15% 15%;\r\n}\r\n#top-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: 10%\r\n}\r\n#grid-container[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n    display: grid;\r\n    grid-template-columns: 20% 80%;\r\n}\r\n#grid-container[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n}\r\n.left-form[_ngcontent-%COMP%] {\r\n    height: 15vh;\r\n    display: grid;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n.in-shop-left-form[_ngcontent-%COMP%] {\r\n    height: 18vh;\r\n    display: grid;\r\n    grid-template-rows: 70% 30%;\r\n    vertical-align: center;\r\n    justify-content: center;\r\n}\r\n#shop[_ngcontent-%COMP%] {\r\n    background-color: rgb(161, 103, 103);\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center; \r\n}\r\n#right-form[_ngcontent-%COMP%] {\r\n    background-image: url('buried.png');\r\n    margin-left: 1%;\r\n}\r\n#init-size-amount[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 80% 20%;\r\n}\r\n#init-size-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    padding-top: 1%;\r\n}\r\n#add-limit[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 80% 20%;\r\n    margin-bottom: 2%;\r\n}\r\n#add-limit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n#limit-viewport[_ngcontent-%COMP%] {\r\n    height: 45vh;\r\n    width: 100%;\r\n}\r\n.type-size-amount-card[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n}\r\n.type-size-amount-form[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 24% 24% 24% 10%;\r\n    grid-gap: 5%;\r\n    vertical-align: center;\r\n}\r\n.type-size-amount-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 13%;\r\n}\r\n#spinner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 80vh;\r\n}\r\n#add-product-container[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    background-image: url('buried.png');\r\n    border: solid black 1px;\r\n    font-size: large;\r\n    height: 45vh;\r\n    margin-top: 1%;\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n}\r\n#available-container[_ngcontent-%COMP%] {\r\n    background-image: url('buried.png');\r\n    margin-right: 5%;\r\n}\r\n#available-products-viewport[_ngcontent-%COMP%] {\r\n    height: 30vh;\r\n    margin-top: 2%;\r\n    width: 100%;\r\n}\r\n.available-card[_ngcontent-%COMP%] {\r\n    background-color: #0a2f4d;\r\n    margin-top: 1%;\r\n    width: 90%;\r\n}\r\n#in-type-container[_ngcontent-%COMP%] {\r\n    background-image: url('buried.png');\r\n}\r\n#in-type-products-viewport[_ngcontent-%COMP%] {\r\n    height: 30vh;\r\n    margin-top: 2%;\r\n    width: 100%;\r\n}\r\n.in-type-card[_ngcontent-%COMP%] {\r\n    background-color: #0a2f4d;\r\n    margin-top: 1%;\r\n    width: 90%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90eXBlLWFkZC90eXBlLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQ0FBd0Q7SUFDeEQsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1DQUF3RDtJQUN4RCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUNBQXdEO0lBQ3hELHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxtQ0FBd0Q7SUFDeEQsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1DQUF3RDtBQUM1RDtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90eXBlLWFkZC90eXBlLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG4jZ3JpZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDcwJTtcclxufVxyXG4udHlwZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4jdG9wLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjAzQTE3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVyaWVkLnBuZyk7XHJcbiAgICBtYXJnaW46IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtaW4td2lkdGg6IDEyMDBweDtcclxufVxyXG4jdG9wLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDE1JSAxNSU7XHJcbn1cclxuI3RvcC1idXR0b25zIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlXHJcbn1cclxuI2dyaWQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcclxufVxyXG4jZ3JpZC1jb250YWluZXIgLm1hdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjU3Nzc7XHJcbn1cclxuLmxlZnQtZm9ybSB7XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmluLXNob3AtbGVmdC1mb3JtIHtcclxuICAgIGhlaWdodDogMTh2aDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwJSAzMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI3Nob3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTAzLCAxMDMpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxufVxyXG4jcmlnaHQtZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9idXJpZWQucG5nKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG4jaW5pdC1zaXplLWFtb3VudCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCUgMjAlO1xyXG59XHJcbiNpbml0LXNpemUtYW1vdW50IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxufVxyXG4jYWRkLWxpbWl0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAyMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4jYWRkLWxpbWl0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcbiNsaW1pdC12aWV3cG9ydCB7XHJcbiAgICBoZWlnaHQ6IDQ1dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udHlwZS1zaXplLWFtb3VudC1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcbi50eXBlLXNpemUtYW1vdW50LWZvcm0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQlIDI0JSAyNCUgMTAlO1xyXG4gICAgZ3JpZC1nYXA6IDUlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udHlwZS1zaXplLWFtb3VudC1mb3JtIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMyU7XHJcbn1cclxuI3NwaW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59XHJcbiNhZGQtcHJvZHVjdC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NTc3NztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgaGVpZ2h0OiA0NXZoO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG59XHJcbiNhdmFpbGFibGUtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG4jYXZhaWxhYmxlLXByb2R1Y3RzLXZpZXdwb3J0IHtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmF2YWlsYWJsZS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTJmNGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuI2luLXR5cGUtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1cmllZC5wbmcpO1xyXG59XHJcbiNpbi10eXBlLXByb2R1Y3RzLXZpZXdwb3J0IHtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmluLXR5cGUtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEyZjRkO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-type-edit',
          templateUrl: '../type-edit/type-edit.component.html',
          styleUrls: ['../type-add/type-add.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_type_service__WEBPACK_IMPORTED_MODULE_8__["TypeService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/type-grid-buttons/type-grid-buttons.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/type-grid-buttons/type-grid-buttons.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: TypeGridButtonsComponent */

  /***/
  function srcAppComponentsTypeGridButtonsTypeGridButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeGridButtonsComponent", function () {
      return TypeGridButtonsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _type_delete_modal_type_delete_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../type-delete-modal/type-delete-modal.component */
    "./src/app/components/type-delete-modal/type-delete-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TypeGridButtonsComponent =
    /*#__PURE__*/
    function () {
      function TypeGridButtonsComponent(dialog, router) {
        _classCallCheck(this, TypeGridButtonsComponent);

        this.dialog = dialog;
        this.router = router;
      }

      _createClass(TypeGridButtonsComponent, [{
        key: "agInit",
        value: function agInit(params) {
          this.data = params.data;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onDeleteClick",
        value: function onDeleteClick() {
          this.dialog.open(_type_delete_modal_type_delete_modal_component__WEBPACK_IMPORTED_MODULE_1__["TypeDeleteModalComponent"], {
            data: this.data,
            disableClose: true,
            panelClass: ['delete-dialog-container'],
            width: '34rem'
          });
        }
      }, {
        key: "onEditClick",
        value: function onEditClick() {
          this.router.navigate(['/type', this.data._id]);
        }
      }]);

      return TypeGridButtonsComponent;
    }();

    TypeGridButtonsComponent.ɵfac = function TypeGridButtonsComponent_Factory(t) {
      return new (t || TypeGridButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    TypeGridButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TypeGridButtonsComponent,
      selectors: [["app-type-grid-buttons"]],
      decls: 4,
      vars: 0,
      consts: [["id", "edit-button", 3, "click"], ["id", "delete-button", 3, "click"]],
      template: function TypeGridButtonsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeGridButtonsComponent_Template_button_click_0_listener($event) {
            return ctx.onEditClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeGridButtonsComponent_Template_button_click_2_listener($event) {
            return ctx.onDeleteClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["button[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n}\r\n#edit-button[_ngcontent-%COMP%] {\r\n    background: yellow;\r\n}\r\n#delete-button[_ngcontent-%COMP%] {\r\n    background: orangered;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90eXBlLWdyaWQtYnV0dG9ucy90eXBlLWdyaWQtYnV0dG9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R5cGUtZ3JpZC1idXR0b25zL3R5cGUtZ3JpZC1idXR0b25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbiNlZGl0LWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbn1cclxuI2RlbGV0ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeGridButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-type-grid-buttons',
          templateUrl: './type-grid-buttons.component.html',
          styleUrls: ['./type-grid-buttons.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/types/types.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/types/types.component.ts ***!
    \*****************************************************/

  /*! exports provided: TypesComponent */

  /***/
  function srcAppComponentsTypesTypesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypesComponent", function () {
      return TypesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _type_grid_buttons_type_grid_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../type-grid-buttons/type-grid-buttons.component */
    "./src/app/components/type-grid-buttons/type-grid-buttons.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/main.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__);

    function TypesComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TypesComponent_mat_card_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Types");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypesComponent_mat_card_2_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184);

          var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r183.onSubTypesClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Set Sub-Types");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypesComponent_mat_card_2_Template_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184);

          var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r185.onCreateTypeClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ag-grid-angular", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function TypesComponent_mat_card_2_Template_ag_grid_angular_gridReady_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184);

          var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r186.onGridReady($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx_r182.columnDefs)("defaultColDef", ctx_r182.defaultColDef)("suppressCellSelection", true)("pagination", true)("paginationAutoPageSize", true)("rowData", ctx_r182.rowData);
      }
    }

    var TypesComponent =
    /*#__PURE__*/
    function () {
      function TypesComponent(dataService, router) {
        _classCallCheck(this, TypesComponent);

        this.dataService = dataService;
        this.router = router;
        this.columnDefs = [{
          headerName: 'Type Name',
          field: 'typeName'
        }, {
          headerName: 'Product Count',
          field: 'productCount'
        }, {
          headerName: 'Type Limit',
          field: 'typeLimit'
        }, {
          headerName: 'Super Type',
          field: 'superType'
        }, {
          headerName: 'In Shop',
          field: 'inShop'
        }, {
          headerName: '',
          field: 'action',
          filter: false,
          sortable: false,
          width: 150,
          cellRendererFramework: _type_grid_buttons_type_grid_buttons_component__WEBPACK_IMPORTED_MODULE_1__["TypeGridButtonsComponent"]
        }];
        this.defaultColDef = {
          filter: true,
          filterParams: {
            suppressAndOrCondition: true
          },
          resizable: true,
          sortable: true,
          width: 120
        };
        this.loading = true;
        this.rowData = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
      }

      _createClass(TypesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this44 = this;

          this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.dataService.getShop(), this.dataService.getTypes()]).subscribe(function (_ref15) {
            var _ref16 = _slicedToArray(_ref15, 2),
                shop = _ref16[0],
                types = _ref16[1];

            _this44.shop = shop;
            _this44.types = types;
            _this44.rowData = _this44.getFormattedFields();
            _this44.loading = false;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.gridApi.setRowData(this.rowData);
        }
      }, {
        key: "getInShopStatus",
        value: function getInShopStatus(typeToCheck) {
          var inShop = false;
          this.shop.shop.forEach(function (type) {
            if (type._id === typeToCheck._id) {
              inShop = true;
            }
          });
          return inShop;
        }
      }, {
        key: "getSuperTypeName",
        value: function getSuperTypeName(typeToCheck) {
          var superTypeName = 'None';
          this.types.forEach(function (type) {
            if (type._id === typeToCheck.superTypeId) {
              superTypeName = type.typeName;
            }
          });
          return superTypeName;
        }
      }, {
        key: "getFormattedFields",
        value: function getFormattedFields() {
          var _this45 = this;

          var rowData = [];
          this.types.forEach(function (type) {
            var rowEntry = {};
            Object.defineProperty(rowEntry, '_id', {
              value: type._id
            });
            Object.defineProperty(rowEntry, 'typeName', {
              value: type.typeName
            });
            type.products ? Object.defineProperty(rowEntry, 'productCount', {
              value: type.products.length
            }) : Object.defineProperty(rowEntry, 'productCount', {
              value: 0
            });
            type.typeSizeAmount ? Object.defineProperty(rowEntry, 'typeLimit', {
              value: 'Yes'
            }) : Object.defineProperty(rowEntry, 'typeLimit', {
              value: 'No'
            });
            Object.defineProperty(rowEntry, 'superType', {
              value: _this45.getSuperTypeName(type)
            });
            _this45.getInShopStatus(type) ? Object.defineProperty(rowEntry, 'inShop', {
              value: 'Yes'
            }) : Object.defineProperty(rowEntry, 'inShop', {
              value: 'No'
            });
            rowData.push(rowEntry);
          });
          return rowData;
        }
      }, {
        key: "onCreateTypeClick",
        value: function onCreateTypeClick() {
          this.router.navigate(['/type']);
        }
      }, {
        key: "onRowClicked",
        value: function onRowClicked() {
          this.router.navigate(['/product']);
        }
      }, {
        key: "onSubTypesClick",
        value: function onSubTypesClick() {
          this.router.navigate(['/sub-types']);
        }
      }]);

      return TypesComponent;
    }();

    TypesComponent.ɵfac = function TypesComponent_Factory(t) {
      return new (t || TypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    TypesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TypesComponent,
      selectors: [["app-types"]],
      decls: 3,
      vars: 2,
      consts: [["id", "spinner", 4, "ngIf"], ["id", "ag-grid-super-container"], ["id", "ag-grid-sub-container", 4, "ngIf"], ["id", "spinner"], ["id", "ag-grid-sub-container"], ["id", "button-grid-container"], ["id", "types-title"], ["mat-raised-button", "", 3, "click"], [1, "ag-theme-balham", 2, "width", "760px", "height", "500px", 3, "columnDefs", "defaultColDef", "suppressCellSelection", "pagination", "paginationAutoPageSize", "rowData", "gridReady"]],
      template: function TypesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TypesComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TypesComponent_mat_card_2_Template, 9, 6, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__["AgGridAngular"]],
      styles: ["#ag-grid-sub-container[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    background-image: url('black-paper.png');\r\n    border: solid black 1px;\r\n    display: grid;\r\n    grid-template-rows: 10% 90%;\r\n    max-width: 830px;\r\n}\r\n#ag-grid-super-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n#button-grid-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 50% 25% 25%;\r\n    margin-bottom: 3%;\r\n}\r\n#button-grid-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: 5%;\r\n}\r\n#types-title[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n#spinner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    background-color:#71a040;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90eXBlcy90eXBlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHdDQUE2RDtJQUM3RCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHlwZXMvdHlwZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZy1ncmlkLXN1Yi1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NTc3NztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JsYWNrLXBhcGVyLnBuZyk7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDgzMHB4O1xyXG59XHJcbiNhZy1ncmlkLXN1cGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG59XHJcbiNidXR0b24tZ3JpZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDI1JSAyNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG4jYnV0dG9uLWdyaWQtY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuI3R5cGVzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4jc3Bpbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNzFhMDQwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-types',
          templateUrl: './types.component.html',
          styleUrls: ['./types.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this46 = this;

          return this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (loggedIn) {
            if (!loggedIn) {
              _this46.authService.login(state.url);
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/order.model.ts":
  /*!***************************************!*\
    !*** ./src/app/models/order.model.ts ***!
    \***************************************/

  /*! exports provided: Order */

  /***/
  function srcAppModelsOrderModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Order", function () {
      return Order;
    });

    var Order = function Order() {
      _classCallCheck(this, Order);
    };
    /***/

  },

  /***/
  "./src/app/models/product.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/product.model.ts ***!
    \*****************************************/

  /*! exports provided: Product */

  /***/
  function srcAppModelsProductModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });

    var Product = function Product() {
      _classCallCheck(this, Product);
    };
    /***/

  },

  /***/
  "./src/app/models/type.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/type.model.ts ***!
    \**************************************/

  /*! exports provided: Type */

  /***/
  function srcAppModelsTypeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Type", function () {
      return Type;
    });

    var Type = function Type() {
      _classCallCheck(this, Type);
    };
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../auth.config */
    "./auth.config.ts");
    /* harmony import */


    var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @auth0/auth0-spa-js */
    "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js");
    /* harmony import */


    var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(router) {
        var _this47 = this;

        _classCallCheck(this, AuthService);

        this.router = router;
        this.loggedIn = null;
        this.logOutClick = false;
        this.logOutClickSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.logOutClick);
        this.currentLogOutClick = this.logOutClickSource.asObservable();
        this.auth0Client = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_4___default()(_auth_config__WEBPACK_IMPORTED_MODULE_3__["default"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
        this.isAuthenticated = this.auth0Client.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (client) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(client.isAuthenticated());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
          return _this47.loggedIn = res;
        }));
        this.handleRedirectCallback = this.auth0Client.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (client) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(client.handleRedirectCallback());
        }));
      }

      _createClass(AuthService, [{
        key: "getTokenSilently$",
        value: function getTokenSilently$(options) {
          return this.auth0Client.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (client) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(client.getTokenSilently(options));
          }));
        }
      }, {
        key: "localAuthSetup",
        value: function localAuthSetup() {
          var _this48 = this;

          var checkAuth = this.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (loggedIn) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(loggedIn);
          }));
          checkAuth.subscribe(function (response) {
            _this48.loggedIn = !!response;
          });
        }
      }, {
        key: "login",
        value: function login() {
          var redirectPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/orders";
          this.auth0Client.subscribe(function (client) {
            client.loginWithRedirect({
              redirect_uri: "".concat(window.location.origin, "/callback"),
              appState: {
                target: redirectPath
              }
            });
          });
        }
      }, {
        key: "handleAuthCallback",
        value: function handleAuthCallback() {
          var _this49 = this;

          var targetRoute;
          var authComplete = this.handleRedirectCallback.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (cbRes) {
            targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([_this49.isAuthenticated]);
          }));
          authComplete.subscribe(function (_ref17) {
            var _ref18 = _slicedToArray(_ref17, 1),
                loggedIn = _ref18[0];

            _this49.router.navigate([targetRoute]);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.auth0Client.subscribe(function (client) {
            client.logout({
              client_id: _auth_config__WEBPACK_IMPORTED_MODULE_3__["default"].client_id,
              returnTo: "".concat(window.location.origin)
            });
          });
        }
      }, {
        key: "getLogOutClicked",
        value: function getLogOutClicked() {
          return this.currentLogOutClick;
        }
      }, {
        key: "logOutClicked",
        value: function logOutClicked() {
          this.logOutClickSource.next(true);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/BehaviorSubject */
    "./node_modules/rxjs/internal/BehaviorSubject.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _shop_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shop.service */
    "./src/app/services/shop.service.ts");
    /* harmony import */


    var _type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./type.service */
    "./src/app/services/type.service.ts");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(snackBar, orderService, productService, shopService, typeService) {
        _classCallCheck(this, DataService);

        this.snackBar = snackBar;
        this.orderService = orderService;
        this.productService = productService;
        this.shopService = shopService;
        this.typeService = typeService;
        this.orders = [];
        this.products = [];
        this.shop = {
          _id: null,
          shop: []
        };
        this.types = [];
        this.ordersSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.orders);
        this.currentOrders = this.ordersSource.asObservable();
        this.productsSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.products);
        this.currentProducts = this.productsSource.asObservable();
        this.shopSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.shop);
        this.currentShop = this.shopSource.asObservable();
        this.typesSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.types);
        this.currentTypes = this.typesSource.asObservable();
        this.updateShop();
        this.updateTypes();
        this.updateProducts();
        this.updateOrders();
      }

      _createClass(DataService, [{
        key: "getOrders",
        value: function getOrders() {
          return this.currentOrders;
        }
      }, {
        key: "getOrderById",
        value: function getOrderById(orderId) {
          return this.currentOrders.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (orders) {
            return orders.find(function (order) {
              return order._id === orderId;
            });
          }));
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          return this.currentProducts;
        }
      }, {
        key: "getProductById",
        value: function getProductById(productId) {
          return this.currentProducts.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (products) {
            return products.find(function (product) {
              return product._id === productId;
            });
          }));
        }
      }, {
        key: "getShop",
        value: function getShop() {
          return this.currentShop;
        }
      }, {
        key: "getTypes",
        value: function getTypes() {
          return this.currentTypes;
        }
      }, {
        key: "getTypeById",
        value: function getTypeById(typeId) {
          return this.currentTypes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (types) {
            return types.find(function (type) {
              return type._id === typeId;
            });
          }));
        }
      }, {
        key: "updateOrders",
        value: function updateOrders() {
          var _this50 = this;

          this.orderService.getOrders().subscribe(function (orders) {
            _this50.ordersSource.next(orders);
          });
        }
      }, {
        key: "updateProducts",
        value: function updateProducts() {
          var _this51 = this;

          this.productService.getProducts().subscribe(function (products) {
            _this51.productsSource.next(products);
          });
        }
      }, {
        key: "updateShop",
        value: function updateShop() {
          var _this52 = this;

          this.shopService.getShop().subscribe(function (shop) {
            if (shop.shop.some(function (currentType) {
              return !currentType.products.length;
            })) {
              shop.shop.forEach(function (type) {
                if (!type.products.length) {
                  shop.shop = shop.shop.filter(function (emptyType) {
                    return emptyType._id !== type._id;
                  });
                }
              });

              _this52.shopService.updateShop(shop._id, shop).subscribe(function (response) {
                response.status === 200 ? _this52.shopSource.next(shop) : _this52.snackBar.open('Database error. Failed to update.', 'Dismiss', {
                  panelClass: ['red-snackbar']
                });
              });
            } else {
              _this52.shopSource.next(shop);
            }
          });
        }
      }, {
        key: "updateTypes",
        value: function updateTypes() {
          var _this53 = this;

          this.typeService.getTypes().subscribe(function (types) {
            _this53.typesSource.next(types);
          });
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shop_service__WEBPACK_IMPORTED_MODULE_6__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_type_service__WEBPACK_IMPORTED_MODULE_7__["TypeService"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }, {
          type: _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
        }, {
          type: _shop_service__WEBPACK_IMPORTED_MODULE_6__["ShopService"]
        }, {
          type: _type_service__WEBPACK_IMPORTED_MODULE_7__["TypeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/interceptor.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/interceptor.service.ts ***!
    \*************************************************/

  /*! exports provided: InterceptorService */

  /***/
  function srcAppServicesInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterceptorService", function () {
      return InterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var InterceptorService =
    /*#__PURE__*/
    function () {
      function InterceptorService(authService) {
        _classCallCheck(this, InterceptorService);

        this.authService = authService;
      }

      _createClass(InterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          return this.authService.getTokenSilently$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (token) {
            var tokenReq = req.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
            return next.handle(tokenReq);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
          }));
        }
      }]);

      return InterceptorService;
    }();

    InterceptorService.ɵfac = function InterceptorService_Factory(t) {
      return new (t || InterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    InterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InterceptorService,
      factory: InterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/order.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/order.service.ts ***!
    \*******************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var OrderService =
    /*#__PURE__*/
    function () {
      function OrderService(httpClient) {
        _classCallCheck(this, OrderService);

        this.httpClient = httpClient;
        this.uri = 'https://modern-volunteer-test.herokuapp.com/api';
      }

      _createClass(OrderService, [{
        key: "getOrderById",
        value: function getOrderById(orderId) {
          return this.httpClient.get("".concat(this.uri, "/orders/").concat(orderId));
        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          return this.httpClient.get("".concat(this.uri, "/orders/"));
        }
      }, {
        key: "updateOrderReceived",
        value: function updateOrderReceived(orderId, received) {
          return this.httpClient.put("".concat(this.uri, "/orders/update-received/").concat(orderId), received);
        }
      }, {
        key: "deleteOrder",
        value: function deleteOrder(orderId) {
          return this.httpClient["delete"]("".concat(this.uri, "/orders/delete/").concat(orderId));
        }
      }]);

      return OrderService;
    }();

    OrderService.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/pantry-panel.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/pantry-panel.service.ts ***!
    \**************************************************/

  /*! exports provided: PantryPanelService */

  /***/
  function srcAppServicesPantryPanelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PantryPanelService", function () {
      return PantryPanelService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PantryPanelService =
    /*#__PURE__*/
    function () {
      function PantryPanelService() {
        _classCallCheck(this, PantryPanelService);

        this.panelOpenStates = new Map([['product', false], ['type', false], ['shop', false]]);
        this.panelOpenSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.panelOpenStates);
        this.currentPanelOpen = this.panelOpenSource.asObservable();
      }

      _createClass(PantryPanelService, [{
        key: "getPanelOpenStates",
        value: function getPanelOpenStates() {
          return this.currentPanelOpen;
        }
      }, {
        key: "setPanelOpenStates",
        value: function setPanelOpenStates(panel, state) {
          this.panelOpenStates.set(panel, state);
          this.panelOpenSource.next(this.panelOpenStates);
        }
      }]);

      return PantryPanelService;
    }();

    PantryPanelService.ɵfac = function PantryPanelService_Factory(t) {
      return new (t || PantryPanelService)();
    };

    PantryPanelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PantryPanelService,
      factory: PantryPanelService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PantryPanelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductService =
    /*#__PURE__*/
    function () {
      function ProductService(httpClient) {
        _classCallCheck(this, ProductService);

        this.httpClient = httpClient;
        this.uri = 'https://modern-volunteer-test.herokuapp.com/api';
        this.products = [];
      }

      _createClass(ProductService, [{
        key: "getProductById",
        value: function getProductById(productId) {
          return this.httpClient.get("".concat(this.uri, "/products/").concat(productId));
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          return this.httpClient.get("".concat(this.uri, "/products"));
        }
      }, {
        key: "addProduct",
        value: function addProduct(product) {
          return this.httpClient.post("".concat(this.uri, "/products/add"), product);
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(productId, product) {
          return this.httpClient.put("".concat(this.uri, "/products/update/").concat(productId), product);
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(productId) {
          return this.httpClient["delete"]("".concat(this.uri, "/products/delete/").concat(productId));
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/shop.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/shop.service.ts ***!
    \******************************************/

  /*! exports provided: ShopService */

  /***/
  function srcAppServicesShopServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopService", function () {
      return ShopService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ShopService =
    /*#__PURE__*/
    function () {
      function ShopService(httpClient) {
        _classCallCheck(this, ShopService);

        this.httpClient = httpClient;
        this.uri = 'https://modern-volunteer-test.herokuapp.com/api';
      }

      _createClass(ShopService, [{
        key: "getShop",
        value: function getShop() {
          return this.httpClient.get("".concat(this.uri, "/shop")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result[0];
          }));
        }
      }, {
        key: "updateShop",
        value: function updateShop(shopId, shop) {
          return this.httpClient.put("".concat(this.uri, "/shop/update/").concat(shopId), shop);
        }
      }]);

      return ShopService;
    }();

    ShopService.ɵfac = function ShopService_Factory(t) {
      return new (t || ShopService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ShopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShopService,
      factory: ShopService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/type.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/type.service.ts ***!
    \******************************************/

  /*! exports provided: TypeService */

  /***/
  function srcAppServicesTypeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeService", function () {
      return TypeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TypeService =
    /*#__PURE__*/
    function () {
      function TypeService(httpClient) {
        _classCallCheck(this, TypeService);

        this.httpClient = httpClient;
        this.uri = 'https://modern-volunteer-test.herokuapp.com/api';
        this.types = [];
      }

      _createClass(TypeService, [{
        key: "addType",
        value: function addType(type) {
          return this.httpClient.post("".concat(this.uri, "/types/add"), type);
        }
      }, {
        key: "deleteType",
        value: function deleteType(typeId) {
          return this.httpClient["delete"]("".concat(this.uri, "/types/delete/").concat(typeId));
        }
      }, {
        key: "getTypeById",
        value: function getTypeById(typeId) {
          return this.httpClient.get("".concat(this.uri, "/types/").concat(typeId));
        }
      }, {
        key: "getTypes",
        value: function getTypes() {
          return this.httpClient.get("".concat(this.uri, "/types"));
        }
      }, {
        key: "removeSuperTypeIdMany",
        value: function removeSuperTypeIdMany(removeIds) {
          return this.httpClient.post("".concat(this.uri, "/types/remove-super-type-many"), removeIds);
        }
      }, {
        key: "updateSuperTypeIdMany",
        value: function updateSuperTypeIdMany(superTypeId, updateIds) {
          return this.httpClient.post("".concat(this.uri, "/types/update-super-type-many/").concat(superTypeId), updateIds);
        }
      }, {
        key: "updateType",
        value: function updateType(typeId, type) {
          return this.httpClient.put("".concat(this.uri, "/types/update/").concat(typeId), type);
        }
      }]);

      return TypeService;
    }();

    TypeService.ɵfac = function TypeService_Factory(t) {
      return new (t || TypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TypeService,
      factory: TypeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\AlienRobot\Desktop\Code\modern-volunteer-deploy\front-end\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map