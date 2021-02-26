import { MessagesService } from './messages.service';
export declare class MessagesResolver {
    private messageService;
    constructor(messageService: MessagesService);
    SendMessage(user: any, message: string, idGroup: string): Promise<import("./messages.dto").MessageDTO>;
    GetMessagesInGroup(user: any, idGroup: string): Promise<import("./messages.dto").MessageDTO[]>;
}
