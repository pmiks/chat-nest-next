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
exports.UsersEntity = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const chat_entity_1 = require("../chat/chat.entity");
const chatgroup_entity_1 = require("../chatgroup/chatgroup.entity");
let UsersEntity = class UsersEntity {
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
    toResponseObject(showToken = true) {
        const { id, created, username, token } = this;
        const responseObject = { id, username, created };
        if (showToken) {
            responseObject.token = token;
        }
        return responseObject;
    }
    async comparePassword(pass) {
        return await bcrypt.compare(pass, this.password);
    }
    get token() {
        const { id, username } = this;
        return jwt.sign({
            id,
            username,
        }, process.env.SECRET, { expiresIn: process.env.EXPIRES_IN });
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], UsersEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UsersEntity.prototype, "created", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], UsersEntity.prototype, "update", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', unique: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', default: '' }),
    __metadata("design:type", String)
], UsersEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany((type) => chat_entity_1.ChatEntity, (chat) => chat.userSend),
    __metadata("design:type", Array)
], UsersEntity.prototype, "chat", void 0);
__decorate([
    typeorm_1.ManyToMany((type) => chatgroup_entity_1.ChatGroupEntity, (chatGroup) => chatGroup.users),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], UsersEntity.prototype, "chatGroup", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersEntity.prototype, "hashPassword", null);
UsersEntity = __decorate([
    typeorm_1.Entity('users')
], UsersEntity);
exports.UsersEntity = UsersEntity;
//# sourceMappingURL=users.entity.js.map