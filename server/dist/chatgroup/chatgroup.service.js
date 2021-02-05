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
exports.ChatGroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const chatgroup_entity_1 = require("./chatgroup.entity");
const users_entity_1 = require("../users/users.entity");
let ChatGroupService = class ChatGroupService {
    constructor(chatGroup, usersEntity) {
        this.chatGroup = chatGroup;
        this.usersEntity = usersEntity;
    }
    async addNewGroup(uId, data) {
        const user = await this.usersEntity.find({
            where: uId.map((i) => ({ id: i })),
        });
        console.log;
        const newGroup = await this.chatGroup.create(Object.assign(Object.assign({}, data), { users: user }));
        await this.chatGroup.save(newGroup);
        return newGroup;
    }
};
ChatGroupService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(chatgroup_entity_1.ChatGroupEntity)),
    __param(1, typeorm_1.InjectRepository(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ChatGroupService);
exports.ChatGroupService = ChatGroupService;
//# sourceMappingURL=chatgroup.service.js.map