import { ChatEntity } from 'src/chat/chat.entity';
import { UsersEntity } from 'src/users/users.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';

@Entity('chat_group')
export class ChatGroupEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column('text') chatGroupName: string;
  @CreateDateColumn() createDate: Date;
  @UpdateDateColumn() updateDate: Date;
  @ManyToMany((type) => UsersEntity, (users) => users.chatGroup)
  users: UsersEntity[];
  @OneToMany((type) => ChatEntity, (chat) => chat.group) chat: ChatEntity;
}
