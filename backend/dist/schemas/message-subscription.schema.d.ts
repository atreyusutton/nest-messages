import { Document } from 'mongoose';
export type MessageSubscriptionDocument = MessageSubscription & Document;
export declare class MessageSubscription {
    phoneNumber: string;
    message: string;
    isActive: boolean;
    createdAt: Date;
}
export declare const MessageSubscriptionSchema: import("mongoose").Schema<MessageSubscription, import("mongoose").Model<MessageSubscription, any, any, any, Document<unknown, any, MessageSubscription> & MessageSubscription & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MessageSubscription, Document<unknown, {}, import("mongoose").FlatRecord<MessageSubscription>> & import("mongoose").FlatRecord<MessageSubscription> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
