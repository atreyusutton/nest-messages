import { Model } from 'mongoose';
import { UserPreferences } from '../schemas/user-preferences.schema';
export declare class UserPreferencesService {
    private userPreferencesModel;
    constructor(userPreferencesModel: Model<UserPreferences>);
    create(userId: string, preferences: Partial<UserPreferences>): Promise<UserPreferences>;
    findOne(userId: string): Promise<UserPreferences | null>;
    update(userId: string, preferences: Partial<UserPreferences>): Promise<UserPreferences | null>;
    delete(userId: string): Promise<UserPreferences | null>;
}
