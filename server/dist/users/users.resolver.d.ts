import { UsersService } from './users.service';
export declare class UsersResolver {
    private usersService;
    constructor(usersService: UsersService);
    Users(): Promise<import("./users.dto").UserDTO[]>;
    User(id: string): Promise<import("./users.dto").UserDTO>;
}
