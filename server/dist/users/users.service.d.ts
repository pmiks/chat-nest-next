import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
export declare type User = any;
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UsersEntity>);
    findOne(userName: string): Promise<User | undefined>;
    getAllUsers(): Promise<UsersEntity[]>;
    getUser(id: string): Promise<UsersEntity>;
}
