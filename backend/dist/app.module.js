"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const schedule_1 = require("@nestjs/schedule");
const message_controller_1 = require("./controllers/message.controller");
const message_service_1 = require("./services/message.service");
const message_subscription_schema_1 = require("./schemas/message-subscription.schema");
const user_preferences_controller_1 = require("./controllers/user-preferences.controller");
const user_preferences_service_1 = require("./services/user-preferences.service");
const user_preferences_schema_1 = require("./schemas/user-preferences.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/messages'),
            mongoose_1.MongooseModule.forFeature([
                { name: message_subscription_schema_1.MessageSubscription.name, schema: message_subscription_schema_1.MessageSubscriptionSchema },
                { name: user_preferences_schema_1.UserPreferences.name, schema: user_preferences_schema_1.UserPreferencesSchema },
            ]),
            schedule_1.ScheduleModule.forRoot(),
        ],
        controllers: [message_controller_1.MessageController, user_preferences_controller_1.UserPreferencesController],
        providers: [message_service_1.MessageService, user_preferences_service_1.UserPreferencesService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map