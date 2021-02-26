import { UserDTO } from './users.dto';
import { UserAuthDTO } from 'src/auth/auth.dto';
import { MessagesEntity } from 'src/messages/messages.entity';
import { ChatGroupEntity } from 'src/chatgroup/chatgroup.entity';
export declare class UsersEntity {
    id: string;
    created: Date;
    update: Date;
    username: string;
    password: string;
    name: string;
    email: string;
    messages: MessagesEntity[];
    group: ChatGroupEntity[];
    hashPassword(): Promise<void>;
    toResponseObject(showToken?: boolean): UserAuthDTO;
    getUserName(): UserDTO;
    comparePassword(pass: string): Promise<boolean>;
    private get token();
}
