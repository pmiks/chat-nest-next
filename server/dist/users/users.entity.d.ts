import { UserAuthDTO, UserDTO } from './users.dto';
import { ChatEntity } from 'src/chat/chat.entity';
import { ChatGroupEntity } from 'src/chatgroup/chatgroup.entity';
export declare class UsersEntity {
    id: string;
    created: Date;
    update: Date;
    username: string;
    password: string;
    name: string;
    chat: ChatEntity[];
    chatGroup: ChatGroupEntity[];
    hashPassword(): Promise<void>;
    toResponseObject(showToken?: boolean): UserAuthDTO;
    getUserName(): UserDTO;
    comparePassword(pass: string): Promise<boolean>;
    private get token();
}
