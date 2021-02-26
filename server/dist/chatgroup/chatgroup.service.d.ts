import { Repository } from 'typeorm';
import { ChatGroupEntity } from './chatgroup.entity';
import { GroupDTO } from './chatgroup.dto';
import { UsersEntity } from 'src/users/users.entity';
import { UserDTO } from 'src/users/users.dto';
export declare class ChatGroupService {
    private chatGroup;
    private usersEntity;
    constructor(chatGroup: Repository<ChatGroupEntity>, usersEntity: Repository<UsersEntity>);
    addNewGroup(uId: string[], groupName: string): Promise<GroupDTO>;
    getUsersInGroup(idGroup: string): Promise<UserDTO[] | null>;
    getUserGroups(uId: string): Promise<GroupDTO[]>;
    getAllGroups(): Promise<GroupDTO[]>;
    getMyGroups(id: string): Promise<GroupDTO[]>;
}
