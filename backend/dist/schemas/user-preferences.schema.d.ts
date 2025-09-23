import { Document } from 'mongoose';
export type UserPreferencesDocument = UserPreferences & Document;
export declare class UserPreferences {
    userId: string;
    notificationsEnabled: boolean;
    language: string;
    timezone: string;
    customSettings: Record<string, any>;
}
export declare const UserPreferencesSchema: import("mongoose").Schema<UserPreferences, import("mongoose").Model<UserPreferences, any, any, any, Document<unknown, any, UserPreferences> & UserPreferences & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserPreferences, Document<unknown, {}, import("mongoose").FlatRecord<UserPreferences>> & import("mongoose").FlatRecord<UserPreferences> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
