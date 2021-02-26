import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Query,
  ResolveProperty,
  Parent,
  Context,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { AuthGuard } from 'src/auth/auth.guard';
import { UsersService } from 'src/users/users.service';
import { ChatGroupService } from './chatgroup.service';

@Resolver('ChatGroup')
export class ChatGroupResolver {
  constructor(
    private chatGroup: ChatGroupService,
    private usersService: UsersService,
  ) {}

  @Query()
  @UseGuards(new AuthGuard())
  ChatGroups() {
    return this.chatGroup.getAllGroups();
  }

  @ResolveProperty()
  users(@Parent() group) {
    const { id } = group;
    return this.chatGroup.getUsersInGroup(id);
  }

  @Query()
  @UseGuards(new AuthGuard())
  MyChatGroups(@Context('user') user) {
    const { id } = user;
    return this.chatGroup.getMyGroups(id);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  CreateNewGroup(
    @Context('user') user,
    @Args('groupName') groupName: string,
    @Args('users') users: string[],
  ) {
    const { id } = user;
    this.chatGroup.addNewGroup([...users, id], groupName);
  }
}
