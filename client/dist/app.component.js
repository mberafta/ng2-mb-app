"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./shared/models/user");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(route) {
        this.route = route;
        this.currentUser = new user_1.User();
    }
    AppComponent.prototype.ngOnInit = function () {
        var storedUser = JSON.parse(localStorage.getItem('currentUser'));
        if (storedUser) {
            if (storedUser.token) {
                this.currentUser = storedUser;
            }
        }
        else {
            this.route.navigateByUrl('/authenticate');
        }
    };
    AppComponent.prototype.getUser = function () {
        if (this.currentUser)
            return this.currentUser;
        else
            return null;
    };
    AppComponent.prototype.userLogged = function () {
        var result = false;
        var user = this.getUser();
        if (user != null) {
            if (user.token != "")
                result = true;
        }
        return result;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id.replace('/dist', '/app'),
        selector: 'my-app',
        templateUrl: './app.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        inputs: ['currentUser']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map