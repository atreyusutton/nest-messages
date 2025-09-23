import { Document } from 'mongoose';
export type MessageTypeDocument = MessageType & Document;
export declare class MessageType {
    name: string;
    description: string;
    messages: string[];
    isActive: boolean;
}
export declare const MessageTypeSchema: import("mongoose").Schema<MessageType, import("mongoose").Model<MessageType, any, any, any, Document<unknown, any, MessageType> & MessageType & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MessageType, Document<unknown, {}, import("mongoose").FlatRecord<MessageType>> & import("mongoose").FlatRecord<MessageType> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
