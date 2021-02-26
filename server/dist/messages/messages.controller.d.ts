import { SendMessageDTO } from './messages.dto';
import { MessagesService } from './messages.service';
export declare class ChatController {
    private chatService;
    constructor(chatService: MessagesService);
    sendMessage(user: any, data: SendMessageDTO): Promise<import("./messages.dto").MessageDTO>;
    sendMessageToGroup(user: any, groupId: string): Promise<void>;
    getAllMessage(): Promise<import("./messages.dto").MessageDTO[]>;
    getAllMessageFromGroup(groupId: string): Promise<void>;
}
