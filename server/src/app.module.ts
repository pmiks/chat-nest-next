import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpErrorFilter } from './shared/http-error.filter';
import { APP_FILTER } from '@nestjs/core';
import { AuthController } from './auth/auth.controller';
import { ChatModule } from './chat/chat.module';
import { ChatGroupModule } from './chatgroup/chatgroup.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
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
    ChatModule,
    ChatGroupModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, { provide: APP_FILTER, useClass: HttpErrorFilter }],
})
export class AppModule {}
