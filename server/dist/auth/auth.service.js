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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/users.entity");
const typeorm_2 = require("typeorm");
const users_dto_1 = require("../users/users.dto");
let AuthService = class AuthService {
    constructor(usersService, jwtService, usersRepository) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.usersRepository = usersRepository;
    }
    async validateUser(userName, pass) {
        const user = await this.usersService.findOne(userName);
        if (user && user.password === pass) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async loginUser(data) {
        const { username, password } = data;
        const user = await this.usersRepository.findOne({ where: { username } });
        if (!user || !(await user.comparePassword(password))) {
            throw new common_1.HttpException('Invalid username/password', common_1.HttpStatus.BAD_REQUEST);
        }
        return user.toResponseObject();
    }
    async register(data) {
        const { username } = data;
        let user = await this.usersRepository.findOne({ where: { username } });
        if (user) {
            throw new common_1.HttpException('User already exist', common_1.HttpStatus.BAD_REQUEST);
        }
        user = await this.usersRepository.create(data);
        await this.usersRepository.save(user);
        return user.toResponseObject();
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(2, typeorm_1.InjectRepository(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map