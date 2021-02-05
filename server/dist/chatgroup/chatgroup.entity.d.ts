import { ChatEntity } from 'src/chat/chat.entity';
import { UsersEntity } from 'src/users/users.entity';
export declare class ChatGroupEntity {
    id: string;
    chatGroupName: string;
    createDate: Date;
    updateDate: Date;
    users: UsersEntity[];
    chat: ChatEntity;
}
