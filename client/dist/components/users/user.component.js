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
var user_service_1 = require("../../services/user.service");
var forms_1 = require("@angular/forms");
var UserComponent = (function () {
    function UserComponent(userService, formBuilder) {
        var _this = this;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.newUser = new user_1.User();
        this.userService.getUsers()
            .subscribe(function (data) {
            return _this.users = data;
        });
        this.form = formBuilder.group({
            'name': [null, forms_1.Validators.required],
            'password': [null, forms_1.Validators.required]
        });
    }
    UserComponent.prototype.addUser = function (value) {
        var _this = this;
        {
            if (value.name && value.password) {
                this.newUser.name = value.name;
                this.newUser.password = value.password;
                this.userService.addUser(this.newUser)
                    .then(function (user) {
                    _this.users.push(user);
                });
            }
            ;
        }
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id.replace('/dist', '/app'),
        selector: 'users',
        templateUrl: './user.component.html',
        styles: ["\n        .user-list{\n            cursor:pointer;\n        }\n        .user-list:hover{\n            background:rgba(31,31,31,0.2);\n            transition:0.8s;\n        }\n        "
        ],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, forms_1.FormBuilder])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map