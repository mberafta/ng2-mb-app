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
var router_1 = require("@angular/router");
var user_1 = require("../../shared/models/user");
var forms_1 = require("@angular/forms");
var account_service_1 = require("../../services/account.service");
var AccountManagerComponent = (function () {
    function AccountManagerComponent(formBuilder, accountService, route, router) {
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.formUser = new user_1.User();
        this.visible = false;
        this.visibility = false;
        this.formGroup = formBuilder.group({
            'name': [null, forms_1.Validators.required],
            'password': [null, forms_1.Validators.required]
        });
    }
    AccountManagerComponent.prototype.ngOnInit = function () {
        localStorage.setItem('currentUser', null);
        // this.returnUrl = ('/');
    };
    AccountManagerComponent.prototype.ngOnChanges = function () {
        this.visibility = this.visible ? true : false;
        this.fadeOut(this.visible);
    };
    AccountManagerComponent.prototype.login = function (form) {
        var _this = this;
        if (form.name && form.password) {
            this.formUser.name = form.name;
            this.formUser.password = form.password;
            this.accountService.login(this.formUser)
                .subscribe(function (data) {
                if (data.token) {
                    localStorage.setItem('currentUser', JSON.stringify(data));
                    // this.router.navigateByUrl(this.returnUrl);
                    //influer sur l'animation
                    _this.visible = true;
                    location.reload();
                }
            });
            this.formGroup.reset();
        }
    };
    AccountManagerComponent.prototype.fadeOut = function (value) {
        setTimeout(function () {
            value = false;
        }, 1000);
    };
    AccountManagerComponent.prototype.isUserNull = function () {
        var result = localStorage.getItem('currentUser') ? false : true;
        return result;
    };
    return AccountManagerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AccountManagerComponent.prototype, "visible", void 0);
AccountManagerComponent = __decorate([
    core_1.Component({
        moduleId: module.id.replace('/dist', '/app'),
        selector: 'authenticate',
        templateUrl: './account-manager.component.html',
        providers: [account_service_1.AccountService],
        animations: [
            core_1.trigger('visibilityChanged', [
                core_1.state('true', core_1.style({ opacity: 1 })),
                core_1.state('false', core_1.style({ opacity: 0 })),
                core_1.transition('0 => 1', core_1.animate('500ms')),
                core_1.transition('1 => 0', core_1.animate('500ms'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, account_service_1.AccountService, router_1.ActivatedRoute, router_1.Router])
], AccountManagerComponent);
exports.AccountManagerComponent = AccountManagerComponent;
//# sourceMappingURL=account-manager.component.js.map