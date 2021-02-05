import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChangeUserDTO, LoginUserDTO, UserDTO } from './users.dto';
import { UsersEntity } from './users.entity';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  async findOne(userName: string): Promise<User | undefined> {
    //    return this.users.find((user) => user.userName === userName);
  }

  async getAllUsers() {
    return await this.usersRepository.find();
  }

  // async getUser(id: string) {
  //   return await this.usersRepository.findOne({ id });
  // }

  // async createUser(newUser: Partial<ChangeUserDTO>) {
  //   const user = await this.usersRepository.create(newUser);
  //   await this.usersRepository.save(user);
  //   return user;
  // }

  // async updateUser(id: string, updateUser: Partial<ChangeUserDTO>) {
  //   await this.usersRepository.update({ id }, updateUser);
  //   return await this.usersRepository.findOne({ id });
  // }

  // async deleteUser(id: string) {
  //   await this.usersRepository.delete({ id });
  //   return { deleted: true };
  // }
}
