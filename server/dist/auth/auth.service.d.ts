import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersEntity } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { LoginUserDTO } from 'src/users/users.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    private usersRepository;
    constructor(usersService: UsersService, jwtService: JwtService, usersRepository: Repository<UsersEntity>);
    validateUser(userName: string, pass: string): Promise<any>;
    loginUser(data: LoginUserDTO): Promise<import("../users/users.dto").UserAuthDTO>;
    register(data: LoginUserDTO): Promise<import("../users/users.dto").UserAuthDTO>;
}
