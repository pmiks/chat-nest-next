import { ChatGroupService } from 'src/chatgroup/chatgroup.service';
import { ChatGroupDTO } from './chatgroup.dto';
export declare class ChatGroupController {
    private chatGroupService;
    constructor(chatGroupService: ChatGroupService);
    createNewGroup(uId: string, data: ChatGroupDTO): Promise<import("./chatgroup.entity").ChatGroupEntity>;
}
