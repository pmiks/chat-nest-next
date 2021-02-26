import { UseGuards } from '@nestjs/common';
import { Query, Resolver, Mutation, Context, Args } from '@nestjs/graphql';
import { userInfo } from 'os';
import { AuthGuard } from 'src/auth/auth.guard';
import { MessagesService } from './messages.service';

@Resolver()
export class MessagesResolver {
  constructor(private messageService: MessagesService) {}
  @Mutation()
  @UseGuards(new AuthGuard())
  SendMessage(
    @Context('user') user,
    @Args('message') message: string,
    @Args('idGroup') idGroup: string,
  ) {
    const { id, username } = user;
    return this.messageService.sendMessage(id, { message, idGroup });
  }

  @Query()
  @UseGuards(new AuthGuard())
  GetMessagesInGroup(@Context('user') user, @Args('idGroup') idGroup: string) {
    const { id: idUser } = user;
    return this.messageService.getAllMessageInGroup(idUser, idGroup);
  }
}
