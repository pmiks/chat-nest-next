import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { ChangeUserDTO } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // constructor(private usersService: UsersService) {}
  // @Get()
  // async getAllUsers() {
  //   return await this.usersService.getAllUsers();
  // }
  // @Get(':id')
  // async getUser(@Param('id') id: string) {
  //   return await this.usersService.getUser(id);
  // }
  // @Post()
  // async addUser(@Body() user: ChangeUserDTO) {
  //   return await this.usersService.createUser(user);
  // }
  // @Delete(':id')
  // async deleteUser(@Param('id') id: string) {
  //   return await this.usersService.deleteUser(id);
  // }
  // @Put(':id')
  // async updateUser(@Param('id') id: string, @Body() user: ChangeUserDTO) {
  //   return await this.usersService.updateUser(id, user);
  // }
}
