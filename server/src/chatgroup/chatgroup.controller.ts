import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ChatGroupService } from 'src/chatgroup/chatgroup.service';
import { User } from 'src/users/user.decorator';
import { ChatGroupDTO } from './chatgroup.dto';

@Controller('group')
export class ChatGroupController {
  constructor(private chatGroupService: ChatGroupService) {}
  @Post()
  @UseGuards(new AuthGuard())
  async createNewGroup(@User('id') uId: string, @Body() data: ChatGroupDTO) {
    return await this.chatGroupService.addNewGroup([uId, ...data.users], data);
    //    return 'Hello ' + uId;
  }
}
