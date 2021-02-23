import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersEntity } from './users.entity';
import { UsersResolver } from './users.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UsersService,UsersResolver],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
