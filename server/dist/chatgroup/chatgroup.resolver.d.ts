import { ChatGroupService } from './chatgroup.service';
export declare class ChatGroupResolver {
    private chatGroup;
    constructor(chatGroup: ChatGroupService);
    ChatGroups(): Promise<import("./chatgroup.dto").GroupDTO[]>;
}
