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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schedule_1 = require("@nestjs/schedule");
const twilio_1 = require("twilio");
const message_subscription_schema_1 = require("../schemas/message-subscription.schema");
let MessageService = class MessageService {
    messageSubscriptionModel;
    twilioClient;
    constructor(messageSubscriptionModel) {
        this.messageSubscriptionModel = messageSubscriptionModel;
        console.log('Initializing Twilio client with:');
        console.log('Account SID:', process.env.TWILIO_ACCOUNT_SID?.substring(0, 5) + '...');
        console.log('Auth Token:', process.env.TWILIO_AUTH_TOKEN?.substring(0, 5) + '...');
        console.log('Phone Number:', process.env.TWILIO_PHONE_NUMBER);
        this.twilioClient = new twilio_1.Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    }
    async createSubscription(phoneNumber, message) {
        const subscription = new this.messageSubscriptionModel({
            phoneNumber,
            message,
        });
        return subscription.save();
    }
    async getAllSubscriptions() {
        return this.messageSubscriptionModel.find().exec();
    }
    async getSubscription(id) {
        return this.messageSubscriptionModel.findById(id).exec();
    }
    async updateSubscription(id, data) {
        return this.messageSubscriptionModel
            .findByIdAndUpdate(id, data, { new: true })
            .exec();
    }
    async deleteSubscription(id) {
        return this.messageSubscriptionModel.findByIdAndDelete(id).exec();
    }
    async sendMessageNow(id) {
        const subscription = await this.messageSubscriptionModel.findById(id);
        if (!subscription) {
            console.error('Subscription not found:', id);
            return { success: false, message: 'Subscription not found' };
        }
        try {
            console.log('Attempting to send message with the following details:');
            console.log('To:', subscription.phoneNumber);
            console.log('From:', process.env.TWILIO_PHONE_NUMBER);
            console.log('Message:', subscription.message);
            console.log('Twilio Account SID:', process.env.TWILIO_ACCOUNT_SID?.substring(0, 5) + '...');
            if (!this.twilioClient) {
                console.error('Twilio client is not initialized');
                return { success: false, message: 'Twilio client not initialized' };
            }
            const message = await this.twilioClient.messages.create({
                body: subscription.message,
                to: subscription.phoneNumber,
                from: process.env.TWILIO_PHONE_NUMBER,
            });
            console.log('Message sent successfully. Twilio Message SID:', message.sid);
            console.log('Initial message status:', message.status);
            console.log('Initial message error code:', message.errorCode);
            console.log('Initial message error message:', message.errorMessage);
            await new Promise(resolve => setTimeout(resolve, 5000));
            const updatedMessage = await this.twilioClient.messages(message.sid).fetch();
            console.log('Final message status:', updatedMessage.status);
            console.log('Final message error code:', updatedMessage.errorCode);
            console.log('Final message error message:', updatedMessage.errorMessage);
            return {
                success: true,
                message: 'Message sent successfully',
                details: {
                    status: updatedMessage.status,
                    errorCode: updatedMessage.errorCode,
                    errorMessage: updatedMessage.errorMessage,
                }
            };
        }
        catch (error) {
            console.error('Failed to send message. Error details:', {
                error: error.message,
                code: error.code,
                status: error.status,
                phoneNumber: subscription.phoneNumber,
                stack: error.stack,
            });
            return {
                success: false,
                message: 'Failed to send message',
                details: {
                    error: error.message,
                    code: error.code,
                    status: error.status,
                }
            };
        }
    }
    async sendScheduledMessages() {
        const subscriptions = await this.messageSubscriptionModel.find({ isActive: true });
        for (const subscription of subscriptions) {
            try {
                await this.twilioClient.messages.create({
                    body: subscription.message,
                    to: subscription.phoneNumber,
                    from: process.env.TWILIO_PHONE_NUMBER,
                });
            }
            catch (error) {
                console.error(`Failed to send message to ${subscription.phoneNumber}:`, error);
            }
        }
    }
};
exports.MessageService = MessageService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_30_MINUTES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessageService.prototype, "sendScheduledMessages", null);
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(message_subscription_schema_1.MessageSubscription.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MessageService);
//# sourceMappingURL=message.service.js.map