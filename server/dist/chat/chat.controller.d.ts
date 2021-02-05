import { SendMessageDTO } from './chat.dto';
import { ChatService } from './chat.service';
export declare class ChatController {
    private chatService;
    constructor(chatService: ChatService);
    sendMessage(user: any, data: SendMessageDTO): Promise<{
        userSend: string;
        id: string;
        message: string;
        createDate: Date;
        updateDate: Date;
        group: import("../chatgroup/chatgroup.entity").ChatGroupEntity;
    }>;
    sendMessageToGroup(user: any, groupId: string): Promise<void>;
    getAllMessage(): Promise<{
        userSend: string;
        id: string;
        message: string;
        createDate: Date;
        updateDate: Date;
        group: import("../chatgroup/chatgroup.entity").ChatGroupEntity;
    }[]>;
    getAllMessageFromGroup(groupId: string): Promise<void>;
}
