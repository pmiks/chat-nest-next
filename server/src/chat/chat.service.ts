import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { SendMessageDTO } from './chat.dto';
import { ChatEntity } from './chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity)
    private chatRepository: Repository<ChatEntity>,
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  private toResponseObject(chat: ChatEntity) {
    //return { ...chat, userSend: chat.userSend.toResponseObject(false) };
    return { ...chat, userSend: chat.userSend.username };
  }

  async sendMessage(uId: string, message: SendMessageDTO) {
    const user = await this.usersRepository.findOne({ where: { id: uId } });
    const newMessage = await this.chatRepository.create({
      ...message,
      userSend: user,
    });
    await this.chatRepository.save(newMessage);
    return this.toResponseObject(newMessage);
  }

  async getAllMessage() {
    const messages = await this.chatRepository.find({
      relations: ['userSend', 'group'],
    });
    return messages.map((m) => this.toResponseObject(m));
  }
}
