"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular2_uuid_1 = require("angular2-uuid");
var User = (function () {
    function User(name, avatarSrc) {
        this.name = name;
        this.avatarSrc = avatarSrc;
        this.id = angular2_uuid_1.UUID.UUID();
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map