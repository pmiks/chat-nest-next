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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./users.entity");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
        this.users = [
            {
                userId: 1,
                userName: 'Mikhail',
                password: 'secret',
            },
            {
                userId: 2,
                userName: 'Elena',
                password: 'secret',
            },
            {
                userId: 3,
                userName: 'Sophia',
                password: 'secret1',
            },
        ];
    }
    async findOne(userName) {
        return this.users.find((user) => user.userName === userName);
    }
    async getAllUsers() {
        return await this.usersRepository.find();
    }
    async getUser(id) {
        return await this.usersRepository.findOne({ id });
    }
    async createUser(newUser) {
        const user = await this.usersRepository.create(newUser);
        await this.usersRepository.save(user);
        return user;
    }
    async updateUser(id, updateUser) {
        await this.usersRepository.update({ id }, updateUser);
        return await this.usersRepository.findOne({ id });
    }
    async deleteUser(id) {
        await this.usersRepository.delete({ id });
        return { deleted: true };
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map