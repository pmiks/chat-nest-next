import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginUserDTO } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}
  @Get('auth/users')
  showAllUsers() {
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
