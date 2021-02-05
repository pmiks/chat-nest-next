import { Module } from '@nestjs/common';
import { ChatGroupController } from './chatgroup.controller';
import { ChatGroupService } from './chatgroup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGroupEntity } from './chatgroup.entity';
import { UsersEntity } from 'src/users/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatGroupEntity, UsersEntity])],
  controllers: [ChatGroupController],
  providers: [ChatGroupService],
})
export class ChatGroupModule {}
