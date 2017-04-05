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
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
// services
var user_search_service_1 = require("../../services/user-search.service");
// rxjs observable extension
require("rxjs/add/observable/of");
// operators
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/catch");
var UserSearchComponent = (function () {
    function UserSearchComponent(userSearchService) {
        this.userSearchService = userSearchService;
        this.searchTerms = new Subject_1.Subject();
    }
    UserSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    UserSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this.userSearchService.search(term) : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    return UserSearchComponent;
}());
UserSearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id.replace('/dist', '/app'),
        selector: 'user-search',
        templateUrl: './user-search.component.html',
        providers: [user_search_service_1.UserSearchService]
    }),
    __metadata("design:paramtypes", [user_search_service_1.UserSearchService])
], UserSearchComponent);
exports.UserSearchComponent = UserSearchComponent;
//# sourceMappingURL=user-search.component.js.map