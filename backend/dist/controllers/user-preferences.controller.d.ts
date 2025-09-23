import { UserPreferencesService } from '../services/user-preferences.service';
import { UserPreferences } from '../schemas/user-preferences.schema';
export declare class UserPreferencesController {
    private readonly userPreferencesService;
    constructor(userPreferencesService: UserPreferencesService);
    create(userId: string, preferences: Partial<UserPreferences>): Promise<UserPreferences>;
    findOne(userId: string): Promise<UserPreferences>;
    update(userId: string, preferences: Partial<UserPreferences>): Promise<UserPreferences>;
    delete(userId: string): Promise<UserPreferences>;
}
