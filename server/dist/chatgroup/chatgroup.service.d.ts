import { Repository } from 'typeorm';
import { ChatGroupEntity } from './chatgroup.entity';
import { GroupDTO, NewGroupDTO } from './chatgroup.dto';
import { UsersEntity } from 'src/users/users.entity';
export declare class ChatGroupService {
    private chatGroup;
    private usersEntity;
    constructor(chatGroup: Repository<ChatGroupEntity>, usersEntity: Repository<UsersEntity>);
    addNewGroup(uId: string[], data: NewGroupDTO): Promise<GroupDTO>;
    getUserGroups(uId: string): Promise<GroupDTO[]>;
    getAllGroups(): Promise<GroupDTO[]>;
}
