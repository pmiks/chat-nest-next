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
exports.ChatGroupResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const users_service_1 = require("../users/users.service");
const chatgroup_service_1 = require("./chatgroup.service");
let ChatGroupResolver = class ChatGroupResolver {
    constructor(chatGroup, usersService) {
        this.chatGroup = chatGroup;
        this.usersService = usersService;
    }
    ChatGroups() {
        return this.chatGroup.getAllGroups();
    }
    users(group) {
        const { id } = group;
        return this.chatGroup.getUsersInGroup(id);
    }
    MyChatGroups(user) {
        const { id } = user;
        return this.chatGroup.getMyGroups(id);
    }
    CreateNewGroup(user, groupName, users) {
        const { id } = user;
        this.chatGroup.addNewGroup([...users, id], groupName);
    }
};
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatGroupResolver.prototype, "ChatGroups", null);
__decorate([
    graphql_1.ResolveProperty(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatGroupResolver.prototype, "users", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Context('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatGroupResolver.prototype, "MyChatGroups", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Context('user')),
    __param(1, graphql_1.Args('groupName')),
    __param(2, graphql_1.Args('users')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Array]),
    __metadata("design:returntype", void 0)
], ChatGroupResolver.prototype, "CreateNewGroup", null);
ChatGroupResolver = __decorate([
    graphql_1.Resolver('ChatGroup'),
    __metadata("design:paramtypes", [chatgroup_service_1.ChatGroupService,
        users_service_1.UsersService])
], ChatGroupResolver);
exports.ChatGroupResolver = ChatGroupResolver;
//# sourceMappingURL=chatgroup.resolver.js.map