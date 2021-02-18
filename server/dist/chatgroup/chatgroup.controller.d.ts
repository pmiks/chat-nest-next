import { ChatGroupService } from 'src/chatgroup/chatgroup.service';
import { GroupDTO, NewGroupDTO } from './chatgroup.dto';
export declare class ChatGroupController {
    private chatGroupService;
    constructor(chatGroupService: ChatGroupService);
    createNewGroup(uId: string, data: NewGroupDTO): Promise<GroupDTO>;
    getAllMyGroups(uId: string): Promise<GroupDTO[]>;
}
