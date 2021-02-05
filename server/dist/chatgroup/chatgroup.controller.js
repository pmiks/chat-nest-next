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
exports.ChatGroupController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const chatgroup_service_1 = require("./chatgroup.service");
const user_decorator_1 = require("../users/user.decorator");
let ChatGroupController = class ChatGroupController {
    constructor(chatGroupService) {
        this.chatGroupService = chatGroupService;
    }
    async createNewGroup(uId, data) {
        return await this.chatGroupService.addNewGroup([uId, ...data.users], data);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, user_decorator_1.User('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ChatGroupController.prototype, "createNewGroup", null);
ChatGroupController = __decorate([
    common_1.Controller('group'),
    __metadata("design:paramtypes", [chatgroup_service_1.ChatGroupService])
], ChatGroupController);
exports.ChatGroupController = ChatGroupController;
//# sourceMappingURL=chatgroup.controller.js.map