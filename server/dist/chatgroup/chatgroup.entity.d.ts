import { MessagesEntity } from 'src/messages/messages.entity';
import { UsersEntity } from 'src/users/users.entity';
export declare class ChatGroupEntity {
    id: string;
    groupName: string;
    createDate: Date;
    updateDate: Date;
    users: UsersEntity[];
    messages: MessagesEntity;
}
