import { UsersEntity } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { SendMessageDTO } from './chat.dto';
import { ChatEntity } from './chat.entity';
export declare class ChatService {
    private chatRepository;
    private usersRepository;
    constructor(chatRepository: Repository<ChatEntity>, usersRepository: Repository<UsersEntity>);
    private toResponseObject;
    sendMessage(uId: string, message: SendMessageDTO): Promise<{
        userSend: string;
        id: string;
        message: string;
        createDate: Date;
        updateDate: Date;
        group: import("../chatgroup/chatgroup.entity").ChatGroupEntity;
    }>;
    getAllMessage(): Promise<{
        userSend: string;
        id: string;
        message: string;
        createDate: Date;
        updateDate: Date;
        group: import("../chatgroup/chatgroup.entity").ChatGroupEntity;
    }[]>;
}
