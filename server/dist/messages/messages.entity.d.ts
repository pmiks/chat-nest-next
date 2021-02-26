import { ChatGroupEntity } from 'src/chatgroup/chatgroup.entity';
import { UsersEntity } from '../users/users.entity';
export declare class MessagesEntity {
    id: string;
    message: string;
    createDate: Date;
    updateDate: Date;
    user: UsersEntity;
    group: ChatGroupEntity;
}
