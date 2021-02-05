import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/users/user.decorator';
import { LoginUserDTO } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}
  @Get('auth/users')
  @UseGuards(new AuthGuard())
  showAllUsers(@User('username') user) {
    console.log(user);
    return this.usersService.getAllUsers();
  }
  @Post('auth/login')
  login(@Body() data: LoginUserDTO) {
    return this.authService.loginUser(data);
  }

  @Post('auth/register')
  register(@Body() data: LoginUserDTO) {
    return this.authService.register(data);
  }
}
