import { Model } from 'mongoose';
import { MessageSubscription, MessageSubscriptionDocument } from '../schemas/message-subscription.schema';
export declare class MessageService {
    private messageSubscriptionModel;
    private twilioClient;
    constructor(messageSubscriptionModel: Model<MessageSubscriptionDocument>);
    createSubscription(phoneNumber: string, message: string): Promise<MessageSubscription>;
    getAllSubscriptions(): Promise<MessageSubscription[]>;
    getSubscription(id: string): Promise<MessageSubscription | null>;
    updateSubscription(id: string, data: {
        message?: string;
        isActive?: boolean;
    }): Promise<MessageSubscription | null>;
    deleteSubscription(id: string): Promise<MessageSubscription | null>;
    sendMessageNow(id: string): Promise<{
        success: boolean;
        message: string;
        details?: any;
    }>;
    sendScheduledMessages(): Promise<void>;
}
