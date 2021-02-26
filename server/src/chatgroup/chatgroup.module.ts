import { Module } from '@nestjs/common';
import { ChatGroupController } from './chatgroup.controller';
import { ChatGroupService } from './chatgroup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGroupEntity } from './chatgroup.entity';
import { UsersEntity } from 'src/users/users.entity';
import { ChatGroupResolver } from './chatgroup.resolver';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChatGroupEntity, UsersEntity])],
  controllers: [ChatGroupController],
  providers: [ChatGroupService, ChatGroupResolver, UsersService],
})
export class ChatGroupModule {}
