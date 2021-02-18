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
import { UserAuthDTO, UserDTO } from './users.dto';
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

  toResponseObject(showToken: boolean = true): UserAuthDTO {
    const { id, created, username, token } = this;
    const responseObject: UserAuthDTO = { username, created };
    if (showToken) {
      responseObject.token = token;
    }
    return responseObject;
  }

  getUserName(): UserDTO {
    return { username: this.username, name: this.name };
  }

  async comparePassword(pass: string): Promise<boolean> {
    return await bcrypt.compare(pass, this.password);
  }

  private get token(): string {
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
