"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chatgroup_entity_1 = require("../chatgroup/chatgroup.entity");
const users_entity_1 = require("../users/users.entity");
const messages_controller_1 = require("./messages.controller");
const messages_entity_1 = require("./messages.entity");
const messages_resolver_1 = require("./messages.resolver");
const messages_service_1 = require("./messages.service");
let MessagesModule = class MessagesModule {
};
MessagesModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([messages_entity_1.MessagesEntity, users_entity_1.UsersEntity, chatgroup_entity_1.ChatGroupEntity]),
        ],
        controllers: [messages_controller_1.ChatController],
        providers: [messages_service_1.MessagesService, messages_resolver_1.MessagesResolver],
    })
], MessagesModule);
exports.MessagesModule = MessagesModule;
//# sourceMappingURL=messages.module.js.map