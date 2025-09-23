import { MessageService } from '../services/message.service';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    subscribe(data: {
        phoneNumber: string;
        message: string;
    }): Promise<import("../schemas/message-subscription.schema").MessageSubscription>;
    getAllSubscriptions(): Promise<import("../schemas/message-subscription.schema").MessageSubscription[]>;
    getSubscription(id: string): Promise<import("../schemas/message-subscription.schema").MessageSubscription | null>;
    updateSubscription(id: string, data: {
        message?: string;
        isActive?: boolean;
    }): Promise<import("../schemas/message-subscription.schema").MessageSubscription | null>;
    deleteSubscription(id: string): Promise<import("../schemas/message-subscription.schema").MessageSubscription | null>;
    sendMessageNow(id: string): Promise<{
        success: boolean;
        message: string;
        details?: any;
    }>;
    handleIncomingMessage(data: any): Promise<{
        success: boolean;
        message: string;
    }>;
}
