import { ChatGroupEntity } from 'src/chatgroup/chatgroup.entity';
import { UsersEntity } from 'src/users/users.entity';

export interface SendMessageDTO {
  userId?: string;
  message: string;
  idGroup?: string;
}

export interface MessageDTO {
  user: UsersEntity;
  message: string;
  createDate: string;
  updateDate: string;
  group?: ChatGroupEntity;
}
