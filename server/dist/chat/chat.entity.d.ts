import { ChatGroupEntity } from 'src/chatgroup/chatgroup.entity';
import { UsersEntity } from '../users/users.entity';
export declare class ChatEntity {
    id: string;
    message: string;
    createDate: Date;
    updateDate: Date;
    userSend: UsersEntity;
    group: ChatGroupEntity;
}
