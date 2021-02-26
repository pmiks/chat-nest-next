import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGroupEntity } from 'src/chatgroup/chatgroup.entity';
import { UsersEntity } from 'src/users/users.entity';
import { ChatController } from './messages.controller';
import { MessagesEntity } from './messages.entity';
import { MessagesResolver } from './messages.resolver';
import { MessagesService } from './messages.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MessagesEntity, UsersEntity, ChatGroupEntity]),
  ],
  controllers: [ChatController],
  providers: [MessagesService, MessagesResolver],
})
export class MessagesModule {}
