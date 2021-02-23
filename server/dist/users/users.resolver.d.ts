import { UsersService } from './users.service';
export declare class UsersResolver {
    private usersService;
    constructor(usersService: UsersService);
    Users(): Promise<import("./users.entity").UsersEntity[]>;
    User(id: string): Promise<import("./users.entity").UsersEntity>;
}
