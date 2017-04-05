"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_component_1 = require("./components/users/user.component");
var user_search_component_1 = require("./components/searchs/user-search/user-search.component");
var place_search_component_1 = require("./components/searchs/place-search/place-search.component");
var account_manager_component_1 = require("./components/account/account-manager.component");
var routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: user_component_1.UserComponent
    },
    {
        path: 'searchUsers',
        component: user_search_component_1.UserSearchComponent,
    },
    {
        path: 'searchPlaces',
        component: place_search_component_1.PlaceSearchComponent
    },
    {
        path: 'authenticate',
        component: account_manager_component_1.AccountManagerComponent,
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map