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
exports.UserPreferencesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_preferences_schema_1 = require("../schemas/user-preferences.schema");
let UserPreferencesService = class UserPreferencesService {
    userPreferencesModel;
    constructor(userPreferencesModel) {
        this.userPreferencesModel = userPreferencesModel;
    }
    async create(userId, preferences) {
        const createdPreferences = new this.userPreferencesModel({
            userId,
            ...preferences,
        });
        return createdPreferences.save();
    }
    async findOne(userId) {
        return this.userPreferencesModel.findOne({ userId }).exec();
    }
    async update(userId, preferences) {
        return this.userPreferencesModel
            .findOneAndUpdate({ userId }, preferences, { new: true })
            .exec();
    }
    async delete(userId) {
        return this.userPreferencesModel.findOneAndDelete({ userId }).exec();
    }
};
exports.UserPreferencesService = UserPreferencesService;
exports.UserPreferencesService = UserPreferencesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_preferences_schema_1.UserPreferences.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserPreferencesService);
//# sourceMappingURL=user-preferences.service.js.map