import { ChangeUserDTO } from './users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<import("./users.entity").UsersEntity[]>;
    getUser(id: string): Promise<import("./users.entity").UsersEntity>;
    addUser(user: ChangeUserDTO): Promise<import("./users.entity").UsersEntity>;
    deleteUser(id: string): Promise<{
        deleted: boolean;
    }>;
    updateUser(id: string, user: ChangeUserDTO): Promise<import("./users.entity").UsersEntity>;
}
