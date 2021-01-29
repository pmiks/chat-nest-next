import { UserAuthDTO } from './users.dto';
export declare class UsersEntity {
    id: string;
    created: Date;
    update: Date;
    username: string;
    password: string;
    name: string;
    hashPassword(): Promise<void>;
    toResponseObject(showToken?: boolean): UserAuthDTO;
    comparePassword(pass: string): Promise<boolean>;
    private get token();
}
