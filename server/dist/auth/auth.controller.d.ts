import { LoginUserDTO, RegisterUserDTO, UserAuthDTO } from './auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(data: LoginUserDTO): Promise<UserAuthDTO>;
    register(data: RegisterUserDTO): Promise<UserAuthDTO>;
}
