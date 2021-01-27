import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      userName: 'Mikhail',
      password: 'secret',
    },
    {
      userId: 2,
      userName: 'Elena',
      password: 'secret',
    },
    {
      userId: 3,
      userName: 'Sophia',
      password: 'secret1',
    },
  ];

  async findOne(userName: string): Promise<User | undefined> {
    return this.users.find((user) => user.userName === userName);
  }
}
