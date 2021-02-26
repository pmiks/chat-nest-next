import { ChatGroupEntity } from 'src/chatgroup/chatgroup.entity';
import { UsersEntity } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { MessageDTO, SendMessageDTO } from './messages.dto';
import { MessagesEntity } from './messages.entity';
export declare class MessagesService {
    private messageRepository;
    private usersRepository;
    private chatGroupRepository;
    constructor(messageRepository: Repository<MessagesEntity>, usersRepository: Repository<UsersEntity>, chatGroupRepository: Repository<ChatGroupEntity>);
    private toResponseObject;
    sendMessage(uId: string, message: SendMessageDTO): Promise<MessageDTO>;
    getAllMessage(): Promise<MessageDTO[]>;
    getAllMessageInGroup(idUser: string, idGroup: string): Promise<MessageDTO[]>;
}
