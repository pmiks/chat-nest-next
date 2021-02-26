import { Repository } from 'typeorm';
import { UserDTO } from './users.dto';
import { UsersEntity } from './users.entity';
export declare type User = any;
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UsersEntity>);
    findOne(userName: string): Promise<User | undefined>;
    getAllUsers(): Promise<UserDTO[]>;
    getUser(id: string): Promise<UserDTO | null>;
}
