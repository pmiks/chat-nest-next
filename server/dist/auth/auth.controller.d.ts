import { LoginUserDTO } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    showAllUsers(): Promise<import("../users/users.entity").UsersEntity[]>;
    login(data: LoginUserDTO): Promise<import("../users/users.dto").UserAuthDTO>;
    register(data: LoginUserDTO): Promise<import("../users/users.dto").UserAuthDTO>;
}
