import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/users.entity';
import { ChatController } from './chat.controller';
import { ChatEntity } from './chat.entity';
import { ChatService } from './chat.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity, UsersEntity])],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
