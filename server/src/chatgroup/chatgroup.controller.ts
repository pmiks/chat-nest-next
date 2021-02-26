import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ChatGroupService } from 'src/chatgroup/chatgroup.service';
import { User } from 'src/users/user.decorator';
import { GroupDTO, NewGroupDTO } from './chatgroup.dto';

@Controller('group')
export class ChatGroupController {
  constructor(private chatGroupService: ChatGroupService) {}
  @Post()
  @UseGuards(new AuthGuard())
  async createNewGroup(
    @User('id') uId: string,
    @Body() data: NewGroupDTO,
  ): Promise<GroupDTO> {
    return await this.chatGroupService.addNewGroup(
      [uId, ...data.users],
      data.groupName,
    );
  }
  @Get()
  @UseGuards(new AuthGuard())
  async getAllMyGroups(@User('id') uId: string): Promise<GroupDTO[]> {
    return await this.chatGroupService.getUserGroups(uId);
  }
}
