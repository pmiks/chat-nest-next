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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const user_decorator_1 = require("../users/user.decorator");
const auth_guard_1 = require("../auth/auth.guard");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    async sendMessage(user, data) {
        return await this.chatService.sendMessage(user, data);
    }
    async sendMessageToGroup(user, groupId) { }
    async getAllMessage() {
        return await this.chatService.getAllMessage();
    }
    async getAllMessageFromGroup(groupId) { }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, user_decorator_1.User('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "sendMessage", null);
__decorate([
    common_1.Post(':id'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, user_decorator_1.User('id')), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "sendMessageToGroup", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getAllMessage", null);
__decorate([
    common_1.Get(':id'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getAllMessageFromGroup", null);
ChatController = __decorate([
    common_1.Controller('chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
exports.ChatController = ChatController;
//# sourceMappingURL=chat.controller.js.map