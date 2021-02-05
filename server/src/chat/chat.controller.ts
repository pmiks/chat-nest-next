import { Body, Controller, Get, Post, UseGuards, Param } from '@nestjs/common';
import { SendMessageDTO } from './chat.dto';
import { ChatService } from './chat.service';
import { User } from '../users/user.decorator';
import { AuthGuard } from '../auth/auth.guard';
@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}
  @Post()
  @UseGuards(new AuthGuard())
  async sendMessage(@User('id') user, @Body() data: SendMessageDTO) {
    return await this.chatService.sendMessage(user, data);
  }

  @Post(':id')
  @UseGuards(new AuthGuard())
  async sendMessageToGroup(@User('id') user, @Param('id') groupId: string) {}

  @Get()
  @UseGuards(new AuthGuard())
  async getAllMessage() {
    return await this.chatService.getAllMessage();
  }
  @Get(':id')
  @UseGuards(new AuthGuard())
  async getAllMessageFromGroup(@Param('id') groupId: string) {}
}
