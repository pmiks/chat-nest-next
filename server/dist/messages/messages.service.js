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
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chatgroup_entity_1 = require("../chatgroup/chatgroup.entity");
const users_entity_1 = require("../users/users.entity");
const typeorm_2 = require("typeorm");
const messages_entity_1 = require("./messages.entity");
let MessagesService = class MessagesService {
    constructor(messageRepository, usersRepository, chatGroupRepository) {
        this.messageRepository = messageRepository;
        this.usersRepository = usersRepository;
        this.chatGroupRepository = chatGroupRepository;
    }
    toResponseObject(message) {
        return {
            user: message.user,
            message: message.message,
            createDate: message.createDate.toString(),
            updateDate: message.updateDate.toString(),
            group: message.group,
        };
    }
    async sendMessage(uId, message) {
        const user = await this.usersRepository.findOne({ where: { id: uId } });
        const group = await this.chatGroupRepository.findOne({
            where: { id: message.idGroup },
        });
        const newMessage = await this.messageRepository.create(Object.assign(Object.assign({}, message), { user,
            group }));
        await this.messageRepository.save(newMessage);
        return this.toResponseObject(newMessage);
    }
    async getAllMessage() {
        const messages = await this.messageRepository.find({
            relations: ['user', 'group'],
        });
        return messages.map((m) => this.toResponseObject(m));
    }
    async getAllMessageInGroup(idUser, idGroup) {
        const messages = await this.messageRepository.find({
            where: { group: { id: idGroup } },
            relations: ['user', 'group'],
        });
        return messages.map((m) => this.toResponseObject(m));
    }
};
MessagesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(messages_entity_1.MessagesEntity)),
    __param(1, typeorm_1.InjectRepository(users_entity_1.UsersEntity)),
    __param(2, typeorm_1.InjectRepository(chatgroup_entity_1.ChatGroupEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map