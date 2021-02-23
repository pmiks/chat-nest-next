"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const http_error_filter_1 = require("./shared/http-error.filter");
const core_1 = require("@nestjs/core");
const auth_controller_1 = require("./auth/auth.controller");
const chat_module_1 = require("./chat/chat.module");
const chatgroup_module_1 = require("./chatgroup/chatgroup.module");
const graphql_1 = require("@nestjs/graphql");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql']
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "admin",
                password: "secret",
                database: "chat",
                synchronize: true,
                logging: true,
                entities: ["./dist/**/*.entity.js"]
            }),
            chat_module_1.ChatModule,
            chatgroup_module_1.ChatGroupModule,
        ],
        controllers: [app_controller_1.AppController, auth_controller_1.AuthController],
        providers: [app_service_1.AppService, { provide: core_1.APP_FILTER, useClass: http_error_filter_1.HttpErrorFilter }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map