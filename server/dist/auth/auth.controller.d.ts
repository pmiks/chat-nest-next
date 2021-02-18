import { LoginUserDTO, UserAuthDTO } from 'src/users/users.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(data: LoginUserDTO): Promise<UserAuthDTO>;
    register(data: LoginUserDTO): Promise<UserAuthDTO>;
}
