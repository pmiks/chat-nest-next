import { UseGuards } from '@nestjs/common';
import {Resolver,Query,Args} from '@nestjs/graphql'
import { AuthGuard } from 'src/auth/auth.guard';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
    constructor(private usersService:UsersService){}
//@UseGuards(new AuthGuard())
@Query() 
Users(){
    return this.usersService.getAllUsers();
}
User(@Args('id') id:string){
    return this.usersService.getUser(id);
}
}