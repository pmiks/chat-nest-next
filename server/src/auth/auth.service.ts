import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { LoginUserDTO } from 'src/users/users.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  async validateUser(userName: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(userName);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  // async login(user: any) {
  //   const payload = { username: user.userName, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  async loginUser(data: LoginUserDTO) {
    const { username, password } = data;
    const user = await this.usersRepository.findOne({ where: { username } });
    if (!user || !(await user.comparePassword(password))) {
      throw new HttpException(
        'Invalid username/password',
        HttpStatus.BAD_REQUEST,
      );
    }
    return user.toResponseObject();
  }

  async register(data: LoginUserDTO) {
    const { username } = data;
    let user = await this.usersRepository.findOne({ where: { username } });
    if (user) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }
    user = await this.usersRepository.create(data);
    await this.usersRepository.save(user);
    return user.toResponseObject();
  }
}
