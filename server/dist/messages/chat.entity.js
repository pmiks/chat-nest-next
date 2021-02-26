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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatEntity = void 0;
const chatgroup_entity_1 = require("../chatgroup/chatgroup.entity");
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
let ChatEntity = class ChatEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], ChatEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], ChatEntity.prototype, "message", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ChatEntity.prototype, "createDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], ChatEntity.prototype, "updateDate", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => users_entity_1.UsersEntity, (userSend) => userSend.chat),
    __metadata("design:type", users_entity_1.UsersEntity)
], ChatEntity.prototype, "userSend", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => chatgroup_entity_1.ChatGroupEntity, (group) => group.chat),
    __metadata("design:type", chatgroup_entity_1.ChatGroupEntity)
], ChatEntity.prototype, "group", void 0);
ChatEntity = __decorate([
    typeorm_1.Entity('chat')
], ChatEntity);
exports.ChatEntity = ChatEntity;
//# sourceMappingURL=chat.entity.js.map