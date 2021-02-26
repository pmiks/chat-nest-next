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
exports.MessagesResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const messages_service_1 = require("./messages.service");
let MessagesResolver = class MessagesResolver {
    constructor(messageService) {
        this.messageService = messageService;
    }
    SendMessage(user, message, idGroup) {
        const { id, username } = user;
        return this.messageService.sendMessage(id, { message, idGroup });
    }
    GetMessagesInGroup(user, idGroup) {
        const { id: idUser } = user;
        return this.messageService.getAllMessageInGroup(idUser, idGroup);
    }
};
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Context('user')),
    __param(1, graphql_1.Args('message')),
    __param(2, graphql_1.Args('idGroup')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], MessagesResolver.prototype, "SendMessage", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Context('user')), __param(1, graphql_1.Args('idGroup')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], MessagesResolver.prototype, "GetMessagesInGroup", null);
MessagesResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesResolver);
exports.MessagesResolver = MessagesResolver;
//# sourceMappingURL=messages.resolver.js.map