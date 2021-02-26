"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGroupModule = void 0;
const common_1 = require("@nestjs/common");
const chatgroup_controller_1 = require("./chatgroup.controller");
const chatgroup_service_1 = require("./chatgroup.service");
const typeorm_1 = require("@nestjs/typeorm");
const chatgroup_entity_1 = require("./chatgroup.entity");
const users_entity_1 = require("../users/users.entity");
const chatgroup_resolver_1 = require("./chatgroup.resolver");
const users_service_1 = require("../users/users.service");
let ChatGroupModule = class ChatGroupModule {
};
ChatGroupModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([chatgroup_entity_1.ChatGroupEntity, users_entity_1.UsersEntity])],
        controllers: [chatgroup_controller_1.ChatGroupController],
        providers: [chatgroup_service_1.ChatGroupService, chatgroup_resolver_1.ChatGroupResolver, users_service_1.UsersService],
    })
], ChatGroupModule);
exports.ChatGroupModule = ChatGroupModule;
//# sourceMappingURL=chatgroup.module.js.map