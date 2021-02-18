import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersEntity } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { LoginUserDTO, UserAuthDTO } from 'src/users/users.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    private usersRepository;
    constructor(usersService: UsersService, jwtService: JwtService, usersRepository: Repository<UsersEntity>);
    validateUser(userName: string, pass: string): Promise<UserAuthDTO | null>;
    loginUser(data: LoginUserDTO): Promise<UserAuthDTO>;
    register(data: LoginUserDTO): Promise<UserAuthDTO>;
}
