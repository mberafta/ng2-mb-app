"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
// google maps
var core_2 = require("angular2-google-maps/core");
// Components
var app_component_1 = require("./app.component");
var user_component_1 = require("./components/users/user.component");
var user_search_component_1 = require("./components/searchs/user-search/user-search.component");
var place_search_component_1 = require("./components/searchs/place-search/place-search.component");
var account_manager_component_1 = require("./components/account/account-manager.component");
var current_user_component_1 = require("./components/current-user/current-user.component");
// Routes
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: "AIzaSyCVKSrUVHMRYiWk98zpsCrNlKJYR7yXnts",
                libraries: ['places']
            }),
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            user_component_1.UserComponent,
            user_search_component_1.UserSearchComponent,
            place_search_component_1.PlaceSearchComponent,
            account_manager_component_1.AccountManagerComponent,
            current_user_component_1.CurrentUserComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map