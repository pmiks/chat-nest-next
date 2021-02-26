import { RegisterUserDTO, UserAuthDTO } from './auth.dto';
import { AuthService } from './auth.service';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    Login(username: string, password: string): Promise<UserAuthDTO>;
    WhoAmI(user: any): Promise<UserAuthDTO>;
    Registration(userData: RegisterUserDTO): Promise<UserAuthDTO>;
}
