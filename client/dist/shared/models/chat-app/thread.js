"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular2_uuid_1 = require("angular2-uuid");
var Thread = (function () {
    function Thread(id, name, avatarSrc) {
        this.id = id || angular2_uuid_1.UUID.UUID();
        this.name = name;
        this.avatarSrc = avatarSrc;
    }
    return Thread;
}());
exports.Thread = Thread;
//# sourceMappingURL=thread.js.map