"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular2_uuid_1 = require("angular2-uuid");
var Message = (function () {
    function Message(obj) {
        this.id = obj && obj.id || angular2_uuid_1.UUID.UUID();
        this.isRead = obj && obj.isRead || false;
        this.sentAt = obj && obj.sentAt || new Date();
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || null;
        this.thread = obj && obj.thread || null;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map