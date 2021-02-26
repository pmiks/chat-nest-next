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

@Entity('messages')
export class MessagesEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column('text') message: string;
  @CreateDateColumn()
  createDate: Date;
  @UpdateDateColumn() updateDate: Date;
  @ManyToOne((type) => UsersEntity, (user) => user.messages)
  user: UsersEntity;

  @ManyToOne((type) => ChatGroupEntity, (group) => group.messages)
  group: ChatGroupEntity;
}
