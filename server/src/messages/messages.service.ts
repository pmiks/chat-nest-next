import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatGroupEntity } from 'src/chatgroup/chatgroup.entity';
import { UsersEntity } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { MessageDTO, SendMessageDTO } from './messages.dto';
import { MessagesEntity } from './messages.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessagesEntity)
    private messageRepository: Repository<MessagesEntity>,
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
    @InjectRepository(ChatGroupEntity)
    private chatGroupRepository: Repository<ChatGroupEntity>,
  ) {}

  private toResponseObject(message: MessagesEntity): MessageDTO {
    //return { ...chat, userSend: chat.userSend.toResponseObject(false) };
    return {
      user: message.user,
      message: message.message,
      createDate: message.createDate.toString(),
      updateDate: message.updateDate.toString(),
      group: message.group,
    };
  }

  async sendMessage(uId: string, message: SendMessageDTO): Promise<MessageDTO> {
    const user = await this.usersRepository.findOne({ where: { id: uId } });
    const group = await this.chatGroupRepository.findOne({
      where: { id: message.idGroup },
    });
    const newMessage = await this.messageRepository.create({
      ...message,
      user,
      group,
    });
    await this.messageRepository.save(newMessage);
    return this.toResponseObject(newMessage);
  }

  async getAllMessage() {
    const messages = await this.messageRepository.find({
      relations: ['user', 'group'],
    });
    return messages.map((m) => this.toResponseObject(m));
  }

  async getAllMessageInGroup(idUser: string, idGroup: string) {
    const messages = await this.messageRepository.find({
      where: { group: { id: idGroup } },
      relations: ['user', 'group'],
    });

    return messages.map((m) => this.toResponseObject(m));
  }
}
