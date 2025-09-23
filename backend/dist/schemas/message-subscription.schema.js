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
exports.MessageSubscriptionSchema = exports.MessageSubscription = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let MessageSubscription = class MessageSubscription {
    phoneNumber;
    message;
    isActive;
    createdAt;
};
exports.MessageSubscription = MessageSubscription;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MessageSubscription.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MessageSubscription.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], MessageSubscription.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], MessageSubscription.prototype, "createdAt", void 0);
exports.MessageSubscription = MessageSubscription = __decorate([
    (0, mongoose_1.Schema)()
], MessageSubscription);
exports.MessageSubscriptionSchema = mongoose_1.SchemaFactory.createForClass(MessageSubscription);
//# sourceMappingURL=message-subscription.schema.js.map