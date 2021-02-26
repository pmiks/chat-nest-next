import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation } from '@nestjs/graphql';
import { Resolver, Query } from '@nestjs/graphql';
import { RegisterUserDTO, UserAuthDTO } from './auth.dto';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Resolver('AuthUser')
export class AuthResolver {
  constructor(private authService: AuthService) {}
  @Query()
  Login(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<UserAuthDTO> {
    return this.authService.loginUser({ username, password });
  }

  @Query()
  @UseGuards(new AuthGuard())
  WhoAmI(@Context('user') user): Promise<UserAuthDTO> {
    const { username } = user;
    return this.authService.readUser(username);
  }

  @Mutation()
  Registration(@Args() userData: RegisterUserDTO): Promise<UserAuthDTO> {
    return this.authService.registerUser(userData);
  }
}
