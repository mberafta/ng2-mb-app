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
var user_1 = require("../../shared/models/user");
var CurrentUserComponent = (function () {
    function CurrentUserComponent() {
        this.currentUser = new user_1.User();
    }
    return CurrentUserComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], CurrentUserComponent.prototype, "currentUser", void 0);
CurrentUserComponent = __decorate([
    core_1.Component({
        selector: 'current-user',
        template: "\n    <p class=\"text-primary\">{{currentUser.name}}</p>\n    "
    })
], CurrentUserComponent);
exports.CurrentUserComponent = CurrentUserComponent;
//# sourceMappingURL=current-user.component.js.map