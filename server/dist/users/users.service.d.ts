import { Repository } from 'typeorm';
import { ChangeUserDTO } from './users.dto';
import { UsersEntity } from './users.entity';
export declare type User = any;
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UsersEntity>);
    private readonly users;
    findOne(userName: string): Promise<User | undefined>;
    getAllUsers(): Promise<UsersEntity[]>;
    getUser(id: string): Promise<UsersEntity>;
    createUser(newUser: Partial<ChangeUserDTO>): Promise<UsersEntity>;
    updateUser(id: string, updateUser: Partial<ChangeUserDTO>): Promise<UsersEntity>;
    deleteUser(id: string): Promise<{
        deleted: boolean;
    }>;
}
