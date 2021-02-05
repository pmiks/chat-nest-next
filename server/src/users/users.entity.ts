import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinTable,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserAuthDTO } from './users.dto';
import { ChatEntity } from 'src/chat/chat.entity';
import { ChatGroupEntity } from 'src/chatgroup/chatgroup.entity';
@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @CreateDateColumn() created: Date;

  @UpdateDateColumn() update: Date;

  @Column({ type: 'text', unique: true }) username: string;

  @Column('text') password: string;

  @Column({ type: 'text', default: '' }) name: string;

  @OneToMany((type) => ChatEntity, (chat) => chat.userSend)
  chat: ChatEntity[];

  @ManyToMany((type) => ChatGroupEntity, (chatGroup) => chatGroup.users)
  @JoinTable()
  chatGroup: ChatGroupEntity[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toResponseObject(showToken: boolean = true) {
    const { id, created, username, token } = this;
    const responseObject: UserAuthDTO = { id, username, created };
    if (showToken) {
      responseObject.token = token;
    }
    return responseObject;
  }

  async comparePassword(pass: string) {
    return await bcrypt.compare(pass, this.password);
  }

  private get token() {
    const { id, username } = this;
    return jwt.sign(
      {
        id,
        username,
      },
      process.env.SECRET,
      { expiresIn: process.env.EXPIRES_IN },
    );
  }
}
