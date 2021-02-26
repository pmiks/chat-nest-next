"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const jwt = require("jsonwebtoken");
let AuthGuard = class AuthGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (request) {
            if (!request.headers.authorization) {
                return false;
            }
            request.user = await this.validateToken(request.headers.authorization);
            return true;
        }
        else {
            const ctx = graphql_1.GqlExecutionContext.create(context).getContext();
            if (!ctx.headers.authorization) {
                return false;
            }
            ctx.user = await this.validateToken(ctx.headers.authorization);
            return true;
        }
    }
    async validateToken(auth) {
        const [bearer, token] = auth.split(' ');
        if (bearer !== 'Bearer') {
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.FORBIDDEN);
        }
        try {
            const decodedToken = await jwt.verify(token, process.env.SECRET);
            return decodedToken;
        }
        catch (err) {
            throw new common_1.HttpException('Token error ' + (err.message || err.name), common_1.HttpStatus.FORBIDDEN);
        }
    }
};
AuthGuard = __decorate([
    common_1.Injectable()
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map