import { ChatGroupEntity } from 'src/chatgroup/chatgroup.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { UsersEntity } from '../users/users.entity';

@Entity('chat')
export class ChatEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column('text') message: string;
  @CreateDateColumn()
  createDate: Date;
  @UpdateDateColumn() updateDate: Date;
  @ManyToOne((type) => UsersEntity, (userSend) => userSend.chat)
  userSend: UsersEntity;

  @ManyToOne((type) => ChatGroupEntity, (group) => group.chat)
  group: ChatGroupEntity;
}
