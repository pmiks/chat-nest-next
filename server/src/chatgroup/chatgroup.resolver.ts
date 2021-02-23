import { UseGuards } from '@nestjs/common';
import {Resolver,Query} from '@nestjs/graphql'
import { AuthGuard } from 'src/auth/auth.guard';
import { ChatGroupService } from './chatgroup.service';

@Resolver('ChatGroup')
export class ChatGroupResolver {
    constructor(private chatGroup:ChatGroupService){}
//@UseGuards(new AuthGuard())
@Query() 
ChatGroups(){
    return this.chatGroup.getAllGroups();
}
}