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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("../services/message.service");
let MessageController = class MessageController {
    messageService;
    constructor(messageService) {
        this.messageService = messageService;
    }
    async subscribe(data) {
        return this.messageService.createSubscription(data.phoneNumber, data.message);
    }
    async getAllSubscriptions() {
        return this.messageService.getAllSubscriptions();
    }
    async getSubscription(id) {
        return this.messageService.getSubscription(id);
    }
    async updateSubscription(id, data) {
        return this.messageService.updateSubscription(id, data);
    }
    async deleteSubscription(id) {
        return this.messageService.deleteSubscription(id);
    }
    async sendMessageNow(id) {
        const result = await this.messageService.sendMessageNow(id);
        if (!result.success) {
            throw new common_1.HttpException({
                message: result.message,
                details: result.details,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return result;
    }
    async handleIncomingMessage(data) {
        console.log('Received incoming message:', data);
        try {
            return { success: true, message: 'Message received' };
        }
        catch (error) {
            console.error('Error handling incoming message:', error);
            throw new common_1.HttpException('Failed to process incoming message', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.MessageController = MessageController;
__decorate([
    (0, common_1.Post)('subscribe'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "subscribe", null);
__decorate([
    (0, common_1.Get)('subscriptions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getAllSubscriptions", null);
__decorate([
    (0, common_1.Get)('subscriptions/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getSubscription", null);
__decorate([
    (0, common_1.Put)('subscriptions/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "updateSubscription", null);
__decorate([
    (0, common_1.Delete)('subscriptions/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "deleteSubscription", null);
__decorate([
    (0, common_1.Post)('subscriptions/:id/send-now'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "sendMessageNow", null);
__decorate([
    (0, common_1.Post)('webhook'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "handleIncomingMessage", null);
exports.MessageController = MessageController = __decorate([
    (0, common_1.Controller)('messages'),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageController);
//# sourceMappingURL=message.controller.js.map