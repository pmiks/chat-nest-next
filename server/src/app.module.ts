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

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot()],
  controllers: [AppController, AuthController],
  providers: [AppService, { provide: APP_FILTER, useClass: HttpErrorFilter }],
})
export class AppModule {}
