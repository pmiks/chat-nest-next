import { Module } from '@nestjs/common';
import { ChatGroupController } from './chatgroup.controller';
import { ChatGroupService } from './chatgroup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGroupEntity } from './chatgroup.entity';
import { UsersEntity } from 'src/users/users.entity';
import { ChatGroupResolver } from './chatgroup.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([ChatGroupEntity, UsersEntity])],
  controllers: [ChatGroupController],
  providers: [ChatGroupService,ChatGroupResolver],
})
export class ChatGroupModule {}
