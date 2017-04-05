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
var Subject_1 = require("rxjs/Subject");
// Operators rxjs
require("rxjs/add/operator/filter");
require("rxjs/add/operator/scan");
require("rxjs/add/operator/publishReplay");
var initialMessages = [];
var MessageService = (function () {
    function MessageService() {
        // flux affichant les nouveaux messages une fois seulement
        this.newMessages = new Subject_1.Subject();
        // reçoit les opérations qui peuvent s'appliquer aux messages
        // c'est un moyen de faire des changements sur les messages stockés dans "messages"
        this.updates = new Subject_1.Subject();
        this.create = new Subject_1.Subject();
        this.markThreadAsRead = new Subject_1.Subject();
        this.messages = this.updates
            .scan(function (messages, operation) {
            return operation(messages);
        }, initialMessages)
            .publishReplay(1)
            .refCount();
        this.create
            .map(function (message) {
            return function (messages) {
                return messages.concat(message);
            };
        })
            .subscribe(this.updates);
        this.newMessages
            .subscribe(this.create);
        this.markThreadAsRead
            .map(function (thread) {
            return function (messages) {
                return messages.map(function (message) {
                    if (message.thread.id === thread.id) {
                        message.isRead = true;
                    }
                    return message;
                });
            };
        })
            .subscribe(this.updates);
    }
    MessageService.prototype.addMessage = function (message) {
        this.newMessages.next(message);
    };
    MessageService.prototype.messagesForThreadUser = function (thread, user) {
        return this.newMessages
            .filter(function (message) {
            return (message.thread.id === thread.id) && (message.author.id !== user.id);
        });
    };
    return MessageService;
}());
MessageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map