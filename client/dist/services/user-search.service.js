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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/observable/of");
var UserSearchService = (function () {
    function UserSearchService(http) {
        this.http = http;
        this.params = new http_1.URLSearchParams();
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.url = '/api/users';
        console.log('Service searchUser opérationnel');
    }
    /** méthode perméttant de faire une requête avec un paramètre string */
    UserSearchService.prototype.search = function (term) {
        this.params.set('name', term);
        var requestOptions = new http_1.RequestOptions({
            search: this.params,
            headers: this.headers
        });
        return this.http.get(this.url, requestOptions)
            .map(function (response) { return response.json(); });
    };
    return UserSearchService;
}());
UserSearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserSearchService);
exports.UserSearchService = UserSearchService;
//# sourceMappingURL=user-search.service.js.map