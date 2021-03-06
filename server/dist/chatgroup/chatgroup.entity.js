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
exports.ChatGroupEntity = void 0;
const messages_entity_1 = require("../messages/messages.entity");
const users_entity_1 = require("../users/users.entity");
const typeorm_1 = require("typeorm");
let ChatGroupEntity = class ChatGroupEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], ChatGroupEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], ChatGroupEntity.prototype, "groupName", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ChatGroupEntity.prototype, "createDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], ChatGroupEntity.prototype, "updateDate", void 0);
__decorate([
    typeorm_1.ManyToMany((type) => users_entity_1.UsersEntity, (users) => users.group),
    __metadata("design:type", Array)
], ChatGroupEntity.prototype, "users", void 0);
__decorate([
    typeorm_1.OneToMany((type) => messages_entity_1.MessagesEntity, (messages) => messages.group),
    __metadata("design:type", messages_entity_1.MessagesEntity)
], ChatGroupEntity.prototype, "messages", void 0);
ChatGroupEntity = __decorate([
    typeorm_1.Entity('chat_group')
], ChatGroupEntity);
exports.ChatGroupEntity = ChatGroupEntity;
//# sourceMappingURL=chatgroup.entity.js.map