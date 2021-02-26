import { UsersService } from 'src/users/users.service';
import { ChatGroupService } from './chatgroup.service';
export declare class ChatGroupResolver {
    private chatGroup;
    private usersService;
    constructor(chatGroup: ChatGroupService, usersService: UsersService);
    ChatGroups(): Promise<import("./chatgroup.dto").GroupDTO[]>;
    users(group: any): Promise<import("../users/users.dto").UserDTO[]>;
    MyChatGroups(user: any): Promise<import("./chatgroup.dto").GroupDTO[]>;
    CreateNewGroup(user: any, groupName: string, users: string[]): void;
}
