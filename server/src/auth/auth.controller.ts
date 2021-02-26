import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/users/user.decorator';
import { LoginUserDTO, RegisterUserDTO, UserAuthDTO } from './auth.dto';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(
    //    private usersService: UsersService,
    private authService: AuthService,
  ) {}
  // @Get('auth/users')
  // @UseGuards(new AuthGuard())
  // showAllUsers(@User('username') user) {
  //   console.log(user);
  //   return this.usersService.getAllUsers();
  // }
  @Post('auth/login')
  async login(@Body() data: LoginUserDTO): Promise<UserAuthDTO> {
    return await this.authService.loginUser(data);
  }

  @Post('auth/register')
  async register(@Body() data: RegisterUserDTO): Promise<UserAuthDTO> {
    return await this.authService.registerUser(data);
  }
}
