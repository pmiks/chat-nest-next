import { MessagesEntity } from 'src/messages/messages.entity';
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
  @Column('text') groupName: string;
  @CreateDateColumn() createDate: Date;
  @UpdateDateColumn() updateDate: Date;

  @ManyToMany((type) => UsersEntity, (users) => users.group)
  users: UsersEntity[];
  @OneToMany((type) => MessagesEntity, (messages) => messages.group)
  messages: MessagesEntity;
}
